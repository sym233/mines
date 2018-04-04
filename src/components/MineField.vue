<template>
  <div>
    <table>
      <tbody v-if="showMineField">
        <tr v-for="h in mineFieldHeight" :key="h">
          <td v-for="w in mineFieldWidth" :key="w">
            <MineBlock
              :openState="openState[h-1][w-1]"
              :mineState="mineMap[h-1][w-1]"
              :height="h-1"
              :width="w-1"
              @openBlock="openBlockHandler"
              @setFlag="setFlagHandler"
            ></MineBlock>
          </td>
        </tr>
      </tbody>
    </table>
    <!-- <p>blocks opened: {{blocksOpened}}</p> -->
    <p>{{playState === 0?
      `用时：${miningTime.toFixed(1)}`:
      playState === 1?
        `胜利：共计用时${miningTime.toFixed(1)}`:
        '失败'
    }}</p>
    <select v-model="selectLevel">
      <option value="0" disabled>请选择难度</option>
      <option value="1">简单：9*9的雷区，10个雷</option>
      <option value="2">简单：16*16的雷区，40个雷</option>
      <option value="3">困难：30*16的雷区，99个雷</option>
    </select>
    <button @click="refreshMineField">开始游戏</button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import MineBlock, { OpenState } from './MineBlock.vue';

import { select } from '../../../express/node_modules/@types/async';
import { assert } from '../utl';

type MineMap = number[][];

function around8(
  centerH: number,
  centerW: number,
  maxh?: number,
  maxw?: number,
): number[][] {
  assert(Number.isInteger(centerH), Number.isInteger(centerW));

  const dir = [-1, 0, 1];
  const pointsAround: number[][] = [];
  for (const dh of dir) {
    const aroundH = centerH + dh;
    if (0 <= aroundH && (!maxh || aroundH < maxh)) {
      for (const dw of dir) {
        const aroundW = centerW + dw;
        if (
          0 <= aroundW &&
          (!maxw || aroundW < maxw) &&
          !(aroundH === centerH && aroundW === centerW)
        ) {
          pointsAround.push([aroundH, aroundW]);
        }
      }
    }
  }
  return pointsAround;
}

function setMine(mineMap: MineMap, mineH: number, mineW: number): void {
  const maxh = mineMap.length;
  const maxw = mineMap[0].length;

  assert(0 <= mineH, mineH < maxh, 'setMine H Error');
  assert(0 <= mineW, mineW < maxw, 'setMine W Error');
  assert(mineMap[mineH][mineW] !== -1);

  // mineMap[mineH][mineW] = -1;
  Vue.set(mineMap[mineH], mineW, -1);
  for (const [aroundH, aroundW] of around8(mineH, mineW, maxh, maxw)) {
    if (mineMap[aroundH][aroundW] !== -1) {
      // mineMap[aroundH][aroundW]++;
      Vue.set(mineMap[aroundH], aroundW, mineMap[aroundH][aroundW] + 1);
    }
  }
}

function createMineMap(
  height: number,
  width: number,
  mineNumber: number,
  seed?: string,
): MineMap {
  if (mineNumber === 0) {
    return [[]];
  }
  assert(
    Number.isInteger(height),
    Number.isInteger(width),
    Number.isInteger(mineNumber),
    'createMineMap args Error',
  );
  assert(
    0 <= mineNumber,
    mineNumber <= width * height * 0.8,
    mineNumber <= width * height - 9,
    'mines number Error',
  );

  const mineMap: MineMap = Array.from(
    { length: height },
    () => Array.from({ length: width }).fill(0) as number[],
  );
  for (let minesCount = 0; minesCount < mineNumber; ) {
    const rh = Math.floor(Math.random() * height);
    const rw = Math.floor(Math.random() * width);
    if (mineMap[rh][rw] === -1) {
      continue;
    } else {
      setMine(mineMap, rh, rw);
      minesCount++;
    }
  }
  return mineMap;
}

function adjustMineField(
  mineMap: MineMap,
  clickedH: number,
  clickedW: number,
): void {
  const maxh = mineMap.length;
  const maxw = mineMap[0].length;

  assert(0 <= clickedH, clickedH < maxh, 'adjustMineField H Error');
  assert(0 <= clickedW, clickedW < maxw, 'adjustMineField W Error');

  let minesToAdd = 0;

  // remove mines at [clickedH, clickedW] and its around 8 blocks
  for (const [mineToRemoveH, mineToRemoveW] of around8(
    clickedH,
    clickedW,
    maxh,
    maxw,
  ).concat([[clickedH, clickedW]])) {
    // Caution: concat 接数组会把数组解构，所以套了两层数组

    if (mineMap[mineToRemoveH][mineToRemoveW] === -1) {
      minesToAdd++;
      let minesAround = 0;
      for (const [aroundH, aroundW] of around8(
        mineToRemoveH,
        mineToRemoveW,
        maxh,
        maxw,
      )) {
        if (mineMap[aroundH][aroundW] === -1) {
          minesAround++;
        } else if (mineMap[aroundH][aroundW] > 0) {
          // mineMap[aroundH][aroundW]--;
          // to be responsive
          Vue.set(mineMap[aroundH], aroundW, mineMap[aroundH][aroundW] - 1);
        }
      }
      // mineMap[clickedH][clickedW] = minesAround;
      Vue.set(mineMap[mineToRemoveH], mineToRemoveW, minesAround);
      // console.log(`mine at ${mineToRemoveH} ${mineToRemoveW} removed`);
    }
  }

  for (let minesReadd = 0; minesReadd < minesToAdd; ) {
    const randomH = Math.floor(Math.random() * maxh);
    const randomW = Math.floor(Math.random() * maxw);
    if (
      Math.abs(randomH - clickedH) <= 1 &&
      Math.abs(randomW - clickedW) <= 1
    ) {
      continue;
    } else if (mineMap[randomH][randomW] === -1) {
      continue;
    } else {
      setMine(mineMap, randomH, randomW);
      minesReadd++;
    }
  }
}

function endGameShow(mineMap: MineMap, openState: OpenState[][]) {
  const maxh = mineMap.length;
  const maxw = mineMap[0].length;

  for (let h = 0; h < maxh; h++) {
    for (let w = 0; w < maxw; w++) {
      if (mineMap[h][w] === -1 && openState[h][w] === OpenState.Unopened) {
        openBlock(mineMap, openState, h, w);
      }
    }
  }
}

function openBlock(
  mineMap: MineMap,
  openState: OpenState[][],
  height: number,
  width: number,
): number {
  const maxh = openState.length;
  const maxw = openState[0].length;

  assert(0 <= height, height < maxh, 'openBlock H Error');
  assert(0 <= width, width < maxw, 'openBlock W Error');

  let blocksOpened = 0;

  if (openState[height][width] === OpenState.Unopened) {
    Vue.set(openState[height], width, OpenState.Opened);
    blocksOpened++;
    if (mineMap[height][width] === -1) {
      // set off mine
      blocksOpened += 0.1;
    }
  }

  if (mineMap[height][width] === 0) {
    blocksOpened += openAround(mineMap, openState, height, width);
  }

  return blocksOpened;
}

function openAround(
  mineMap: MineMap,
  openState: OpenState[][],
  height: number,
  width: number,
): number {
  const maxh = mineMap.length;
  const maxw = mineMap[0].length;

  assert(0 <= height, height < maxh, 'openAround H Error');
  assert(0 <= width, width < maxw, 'openAround W Error');

  let blocksOpened = 0;
  if (mineMap[height][width] === 0) {
    for (const [aroundH, aroundW] of around8(height, width, maxh, maxw)) {
      if (openState[aroundH][aroundW] === OpenState.Unopened) {
        blocksOpened += openBlock(mineMap, openState, aroundH, aroundW);
      }
    }
  }
  return blocksOpened;
}

function openByFlag(
  mineMap: MineMap,
  openState: OpenState[][],
  height: number,
  width: number,
): number {
  const maxh = mineMap.length;
  const maxw = mineMap[0].length;

  assert(0 <= height, height < maxh, 'openByFlag H Error');
  assert(0 <= width, width < maxw, 'openByFlag W Error');

  let blocksOpened = 0;

  if (mineMap[height][width] > 0) {
    let flagsAround = 0;
    for (const [aroundH, aroundW] of around8(height, width, maxh, maxw)) {
      if (openState[aroundH][aroundW] === OpenState.Flagged) {
        flagsAround++;
      }
    }

    if (flagsAround === mineMap[height][width]) {
      for (const [aroundH, aroundW] of around8(height, width, maxh, maxw)) {
        if (openState[aroundH][aroundW] === OpenState.Unopened) {
          blocksOpened += openBlock(mineMap, openState, aroundH, aroundW);
        }
      }
    }
  }
  return blocksOpened;
}

function createOpenState(maxh: number, maxw: number): OpenState[][] {
  assert(
    Number.isInteger(maxh),
    Number.isInteger(maxw),
    'createOpenState Error',
  );
  const openState: OpenState[][] = [];
  for (let h = 0; h < maxh; h++) {
    openState[h] = [];
    for (let w = 0; w < maxw; w++) {
      openState[h][w] = 0;
    }
  }
  return openState;
}

let miningTimer: number;
let miningBeginingTime: number;

interface Data {
  mineFieldHeight: number;
  mineFieldWidth: number;
  mineNumber: number;
  showMineField: boolean;
  mineMap: MineMap;
  openState: MineMap;
  firstOpenBlock: boolean;
  blocksOpened: number;
  selectLevel: string;
  miningTime: number;
}

export default Vue.extend({
  data(): Data {
    return {
      mineFieldHeight: 9,
      mineFieldWidth: 9,
      mineNumber: 10,
      showMineField: true,
      mineMap: createMineMap(9, 9, 10),
      openState: createOpenState(9, 9),
      firstOpenBlock: true,
      blocksOpened: 0,
      selectLevel: '1',
      miningTime: 0,
    };
  },
  methods: {
    setMineField(): number[] {
      switch (this.selectLevel) {
        case '0':
          return [0, 0, 0];
        case '1':
          return [9, 9, 10];
        case '2':
          return [16, 16, 40];
        case '3':
          return [16, 30, 99];
        default:
          throw new Error('could not be there');
      }
    },
    refreshMineField(): void {
      this.showMineField = false;
      [
        this.mineFieldHeight,
        this.mineFieldWidth,
        this.mineNumber,
      ] = this.setMineField();

      this.mineMap = createMineMap(
        this.mineFieldHeight,
        this.mineFieldWidth,
        this.mineNumber,
      );
      this.openState = createOpenState(
        this.mineFieldHeight,
        this.mineFieldWidth,
      );
      this.firstOpenBlock = true;
      this.blocksOpened = 0;
      this.$nextTick(() => {
        this.showMineField = true;
      });
    },
    adjustMineField(clickedH: number, clickedW: number): void {
      adjustMineField(this.mineMap, clickedH, clickedW);
    },

    openBlockHandler(height: number, width: number): void {
      // avoid first explosion
      assert(Number.isInteger(height), Number.isInteger(width));

      if (this.playState !== 0) {
        return;
      }

      if (this.firstOpenBlock) {
        adjustMineField(this.mineMap, height, width);
        miningBeginingTime = Date.now();
        miningTimer = window.setInterval(
          () => (this.miningTime = (Date.now() - miningBeginingTime) / 1000),
          100,
        );
        this.firstOpenBlock = false;
      }

      if (this.openState[height][width] === OpenState.Opened) {
        this.blocksOpened += openByFlag(
          this.mineMap,
          this.openState,
          height,
          width,
        );
      } else if (this.openState[height][width] === OpenState.Unopened) {
        this.blocksOpened += openBlock(
          this.mineMap,
          this.openState,
          height,
          width,
        );
      }
    },

    setFlagHandler(height: number, width: number): void {
      assert(Number.isInteger(height), Number.isInteger(width));
      if (this.playState !== 0) {
        return;
      }

      if (this.openState[height][width] === OpenState.Unopened) {
        Vue.set(this.openState[height], width, OpenState.Flagged);
      } else if (this.openState[height][width] === OpenState.Flagged) {
        Vue.set(this.openState[height], width, OpenState.Unopened);
      }
    },
  },
  computed: {
    playState(): number {
      if (Number.isInteger(this.blocksOpened)) {
        if (
          this.blocksOpened + this.mineNumber ===
          this.mineFieldHeight * this.mineFieldWidth
        ) {
          window.clearInterval(miningTimer);
          return 1;
        } else {
          return 0;
        }
      } else {
        window.clearInterval(miningTimer);
        endGameShow(this.mineMap, this.openState);
        return -1;
      }
    },
  },
  components: {
    MineBlock,
  },
});
</script>
