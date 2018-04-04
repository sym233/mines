<template>
  <div 
    @click.left.stop.prevent="leftClick"  
    @click.right.stop.prevent="rightClick"
    class="mine-block" 
    :class="getClass">
      <span v-if="isOpened">{{mineState? mineState === -1? '*': mineState: ''}}</span>
      <span v-else-if="isFlagged">F</span>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export enum OpenState {
  Unopened,
  Opened,
  Flagged,
}

export default Vue.extend({
  props: {
    mineState: {
      type: Number,
    },
    height: {
      type: Number,
    },
    width: {
      type: Number,
    },
    openState: {
      type: Number,
    },
  },
  computed: {
    isOpened(): boolean {
      return this.openState === OpenState.Opened;
    },
    isFlagged(): boolean {
      return this.openState === OpenState.Flagged;
    },
    getClass(): {
      unopened: boolean;
      flagged: boolean;
      opened: boolean;
    } {
      return {
        unopened: this.openState === OpenState.Unopened,
        flagged: this.isFlagged,
        opened: this.isOpened,
      };
    },
  },
  methods: {
    leftClick(): void {
      switch (this.openState) {
        case OpenState.Unopened:
          this.$emit('openBlock', this.height, this.width);
          break;
        case OpenState.Flagged:
          break;

        case OpenState.Opened:
          this.$emit('openBlock', this.height, this.width);
          break;

        default:
        //
      }
    },
    rightClick(): void {
      switch (this.openState) {
        case OpenState.Unopened:
        case OpenState.Flagged:
          this.$emit('setFlag', this.height, this.width);
          break;
        default:
        //
      }
    },
  },
});
</script>

<style scoped>
.mine-block {
  width: 20px;
  height: 20px;
  border: 1px solid black;
  cursor: pointer;
}
.mine-block.unopened, .mine-block.flagged{
  background-color: #bbb;
}
.mine-block:hover.unopened, .mine-block:hover.flagged{
  background-color: #ccc;
}

.mine-block.opened {
  background-color: #eee;
}
</style>
