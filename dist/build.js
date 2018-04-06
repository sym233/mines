/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"id\":\"data-v-fde65dcc\",\"scoped\":true,\"sourceMap\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/components/MineBlock.vue":
/*!************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader?sourceMap!./node_modules/vue-loader/lib/style-compiler?{"optionsId":"0","vue":true,"id":"data-v-fde65dcc","scoped":true,"sourceMap":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/components/MineBlock.vue ***!
  \************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "\n.mine-block[data-v-fde65dcc] {\r\n  width: 20px;\r\n  height: 20px;\r\n  border: 1px solid black;\r\n  cursor: pointer;\n}\n.mine-block.unopened[data-v-fde65dcc], .mine-block.flagged[data-v-fde65dcc]{\r\n  background-color: #bbb;\n}\n.mine-block:hover.unopened[data-v-fde65dcc], .mine-block:hover.flagged[data-v-fde65dcc]{\r\n  background-color: #ccc;\n}\n.mine-block.opened[data-v-fde65dcc] {\r\n  background-color: #eee;\n}\r\n", "", {"version":3,"sources":["D:/Typescript/TypeScript-Vue-Starter/src/components/src/components/MineBlock.vue"],"names":[],"mappings":";AAsFA;EACA,YAAA;EACA,aAAA;EACA,wBAAA;EACA,gBAAA;CACA;AACA;EACA,uBAAA;CACA;AACA;EACA,uBAAA;CACA;AAEA;EACA,uBAAA;CACA","file":"MineBlock.vue","sourcesContent":["<template>\r\n  <div \r\n    @click.left.stop.prevent=\"leftClick\"  \r\n    @click.right.stop.prevent=\"rightClick\"\r\n    class=\"mine-block\" \r\n    :class=\"getClass\">\r\n      <span v-if=\"isOpened\">{{mineState? mineState === -1? '*': mineState: ''}}</span>\r\n      <span v-else-if=\"isFlagged\">F</span>\r\n  </div>\r\n</template>\r\n\r\n<script lang=\"ts\">\r\nimport Vue from 'vue';\r\n\r\nexport enum OpenState {\r\n  Unopened,\r\n  Opened,\r\n  Flagged,\r\n}\r\n\r\nexport default Vue.extend({\r\n  props: {\r\n    mineState: {\r\n      type: Number,\r\n    },\r\n    height: {\r\n      type: Number,\r\n    },\r\n    width: {\r\n      type: Number,\r\n    },\r\n    openState: {\r\n      type: Number,\r\n    },\r\n  },\r\n  computed: {\r\n    isOpened(): boolean {\r\n      return this.openState === OpenState.Opened;\r\n    },\r\n    isFlagged(): boolean {\r\n      return this.openState === OpenState.Flagged;\r\n    },\r\n    getClass(): {\r\n      unopened: boolean;\r\n      flagged: boolean;\r\n      opened: boolean;\r\n    } {\r\n      return {\r\n        unopened: this.openState === OpenState.Unopened,\r\n        flagged: this.isFlagged,\r\n        opened: this.isOpened,\r\n      };\r\n    },\r\n  },\r\n  methods: {\r\n    leftClick(): void {\r\n      switch (this.openState) {\r\n        case OpenState.Unopened:\r\n          this.$emit('openBlock', this.height, this.width);\r\n          break;\r\n        case OpenState.Flagged:\r\n          break;\r\n\r\n        case OpenState.Opened:\r\n          this.$emit('openBlock', this.height, this.width);\r\n          break;\r\n\r\n        default:\r\n        //\r\n      }\r\n    },\r\n    rightClick(): void {\r\n      switch (this.openState) {\r\n        case OpenState.Unopened:\r\n        case OpenState.Flagged:\r\n          this.$emit('setFlag', this.height, this.width);\r\n          break;\r\n        default:\r\n        //\r\n      }\r\n    },\r\n  },\r\n});\r\n</script>\r\n\r\n<style scoped>\r\n.mine-block {\r\n  width: 20px;\r\n  height: 20px;\r\n  border: 1px solid black;\r\n  cursor: pointer;\r\n}\r\n.mine-block.unopened, .mine-block.flagged{\r\n  background-color: #bbb;\r\n}\r\n.mine-block:hover.unopened, .mine-block:hover.flagged{\r\n  background-color: #ccc;\r\n}\r\n\r\n.mine-block.opened {\r\n  background-color: #eee;\r\n}\r\n</style>\r\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "./node_modules/ts-loader/index.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/MineBlock.vue":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/ts-loader!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/MineBlock.vue ***!
  \*****************************************************************************************************************************/
/*! exports provided: OpenState, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpenState", function() { return OpenState; });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);

var OpenState;
(function (OpenState) {
    OpenState[OpenState["Unopened"] = 0] = "Unopened";
    OpenState[OpenState["Opened"] = 1] = "Opened";
    OpenState[OpenState["Flagged"] = 2] = "Flagged";
})(OpenState || (OpenState = {}));
/* harmony default export */ __webpack_exports__["default"] = (vue__WEBPACK_IMPORTED_MODULE_0___default.a.extend({
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
        isOpened() {
            return this.openState === OpenState.Opened;
        },
        isFlagged() {
            return this.openState === OpenState.Flagged;
        },
        getClass() {
            return {
                unopened: this.openState === OpenState.Unopened,
                flagged: this.isFlagged,
                opened: this.isOpened,
            };
        },
    },
    methods: {
        leftClick() {
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
        rightClick() {
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
}));


/***/ }),

/***/ "./node_modules/ts-loader/index.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/MineField.vue":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/ts-loader!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/MineField.vue ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _MineBlock_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MineBlock.vue */ "./src/components/MineBlock.vue");
/* harmony import */ var _utl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utl */ "./src/utl.ts");



function around8(centerH, centerW, maxh, maxw) {
    Object(_utl__WEBPACK_IMPORTED_MODULE_2__["assert"])(Number.isInteger(centerH), Number.isInteger(centerW));
    const dir = [-1, 0, 1];
    const pointsAround = [];
    for (const dh of dir) {
        const aroundH = centerH + dh;
        if (0 <= aroundH && (!maxh || aroundH < maxh)) {
            for (const dw of dir) {
                const aroundW = centerW + dw;
                if (0 <= aroundW &&
                    (!maxw || aroundW < maxw) &&
                    !(aroundH === centerH && aroundW === centerW)) {
                    pointsAround.push([aroundH, aroundW]);
                }
            }
        }
    }
    return pointsAround;
}
function setMine(mineMap, mineH, mineW) {
    const maxh = mineMap.length;
    const maxw = mineMap[0].length;
    Object(_utl__WEBPACK_IMPORTED_MODULE_2__["assert"])(0 <= mineH, mineH < maxh, 'setMine H Error');
    Object(_utl__WEBPACK_IMPORTED_MODULE_2__["assert"])(0 <= mineW, mineW < maxw, 'setMine W Error');
    Object(_utl__WEBPACK_IMPORTED_MODULE_2__["assert"])(mineMap[mineH][mineW] !== -1);
    // mineMap[mineH][mineW] = -1;
    vue__WEBPACK_IMPORTED_MODULE_0___default.a.set(mineMap[mineH], mineW, -1);
    for (const [aroundH, aroundW] of around8(mineH, mineW, maxh, maxw)) {
        if (mineMap[aroundH][aroundW] !== -1) {
            // mineMap[aroundH][aroundW]++;
            vue__WEBPACK_IMPORTED_MODULE_0___default.a.set(mineMap[aroundH], aroundW, mineMap[aroundH][aroundW] + 1);
        }
    }
}
function createMineMap(height, width, mineNumber, seed) {
    if (mineNumber === 0) {
        return [[]];
    }
    Object(_utl__WEBPACK_IMPORTED_MODULE_2__["assert"])(Number.isInteger(height), Number.isInteger(width), Number.isInteger(mineNumber), 'createMineMap args Error');
    Object(_utl__WEBPACK_IMPORTED_MODULE_2__["assert"])(0 <= mineNumber, mineNumber <= width * height * 0.8, mineNumber <= width * height - 9, 'mines number Error');
    const mineMap = Array.from({ length: height }, () => Array.from({ length: width }).fill(0));
    for (let minesCount = 0; minesCount < mineNumber;) {
        const rh = Math.floor(Math.random() * height);
        const rw = Math.floor(Math.random() * width);
        if (mineMap[rh][rw] === -1) {
            continue;
        }
        else {
            setMine(mineMap, rh, rw);
            minesCount++;
        }
    }
    return mineMap;
}
function adjustMineField(mineMap, clickedH, clickedW) {
    const maxh = mineMap.length;
    const maxw = mineMap[0].length;
    Object(_utl__WEBPACK_IMPORTED_MODULE_2__["assert"])(0 <= clickedH, clickedH < maxh, 'adjustMineField H Error');
    Object(_utl__WEBPACK_IMPORTED_MODULE_2__["assert"])(0 <= clickedW, clickedW < maxw, 'adjustMineField W Error');
    let minesToAdd = 0;
    // remove mines at [clickedH, clickedW] and its around 8 blocks
    for (const [mineToRemoveH, mineToRemoveW] of around8(clickedH, clickedW, maxh, maxw).concat([[clickedH, clickedW]])) {
        // Caution: concat 接数组会把数组解构，所以套了两层数组
        if (mineMap[mineToRemoveH][mineToRemoveW] === -1) {
            minesToAdd++;
            let minesAround = 0;
            for (const [aroundH, aroundW] of around8(mineToRemoveH, mineToRemoveW, maxh, maxw)) {
                if (mineMap[aroundH][aroundW] === -1) {
                    minesAround++;
                }
                else if (mineMap[aroundH][aroundW] > 0) {
                    // mineMap[aroundH][aroundW]--;
                    // to be responsive
                    vue__WEBPACK_IMPORTED_MODULE_0___default.a.set(mineMap[aroundH], aroundW, mineMap[aroundH][aroundW] - 1);
                }
            }
            // mineMap[clickedH][clickedW] = minesAround;
            vue__WEBPACK_IMPORTED_MODULE_0___default.a.set(mineMap[mineToRemoveH], mineToRemoveW, minesAround);
            // console.log(`mine at ${mineToRemoveH} ${mineToRemoveW} removed`);
        }
    }
    for (let minesReadd = 0; minesReadd < minesToAdd;) {
        const randomH = Math.floor(Math.random() * maxh);
        const randomW = Math.floor(Math.random() * maxw);
        if (Math.abs(randomH - clickedH) <= 1 &&
            Math.abs(randomW - clickedW) <= 1) {
            continue;
        }
        else if (mineMap[randomH][randomW] === -1) {
            continue;
        }
        else {
            setMine(mineMap, randomH, randomW);
            minesReadd++;
        }
    }
}
function endGameShow(mineMap, openState) {
    const maxh = mineMap.length;
    const maxw = mineMap[0].length;
    for (let h = 0; h < maxh; h++) {
        for (let w = 0; w < maxw; w++) {
            if (mineMap[h][w] === -1 && openState[h][w] === _MineBlock_vue__WEBPACK_IMPORTED_MODULE_1__["OpenState"].Unopened) {
                openBlock(mineMap, openState, h, w);
            }
        }
    }
}
function openBlock(mineMap, openState, height, width) {
    const maxh = openState.length;
    const maxw = openState[0].length;
    Object(_utl__WEBPACK_IMPORTED_MODULE_2__["assert"])(0 <= height, height < maxh, 'openBlock H Error');
    Object(_utl__WEBPACK_IMPORTED_MODULE_2__["assert"])(0 <= width, width < maxw, 'openBlock W Error');
    let blocksOpened = 0;
    if (openState[height][width] === _MineBlock_vue__WEBPACK_IMPORTED_MODULE_1__["OpenState"].Unopened) {
        vue__WEBPACK_IMPORTED_MODULE_0___default.a.set(openState[height], width, _MineBlock_vue__WEBPACK_IMPORTED_MODULE_1__["OpenState"].Opened);
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
function openAround(mineMap, openState, height, width) {
    const maxh = mineMap.length;
    const maxw = mineMap[0].length;
    Object(_utl__WEBPACK_IMPORTED_MODULE_2__["assert"])(0 <= height, height < maxh, 'openAround H Error');
    Object(_utl__WEBPACK_IMPORTED_MODULE_2__["assert"])(0 <= width, width < maxw, 'openAround W Error');
    let blocksOpened = 0;
    if (mineMap[height][width] === 0) {
        for (const [aroundH, aroundW] of around8(height, width, maxh, maxw)) {
            if (openState[aroundH][aroundW] === _MineBlock_vue__WEBPACK_IMPORTED_MODULE_1__["OpenState"].Unopened) {
                blocksOpened += openBlock(mineMap, openState, aroundH, aroundW);
            }
        }
    }
    return blocksOpened;
}
function openByFlag(mineMap, openState, height, width) {
    const maxh = mineMap.length;
    const maxw = mineMap[0].length;
    Object(_utl__WEBPACK_IMPORTED_MODULE_2__["assert"])(0 <= height, height < maxh, 'openByFlag H Error');
    Object(_utl__WEBPACK_IMPORTED_MODULE_2__["assert"])(0 <= width, width < maxw, 'openByFlag W Error');
    let blocksOpened = 0;
    if (mineMap[height][width] > 0) {
        let flagsAround = 0;
        for (const [aroundH, aroundW] of around8(height, width, maxh, maxw)) {
            if (openState[aroundH][aroundW] === _MineBlock_vue__WEBPACK_IMPORTED_MODULE_1__["OpenState"].Flagged) {
                flagsAround++;
            }
        }
        if (flagsAround === mineMap[height][width]) {
            for (const [aroundH, aroundW] of around8(height, width, maxh, maxw)) {
                if (openState[aroundH][aroundW] === _MineBlock_vue__WEBPACK_IMPORTED_MODULE_1__["OpenState"].Unopened) {
                    blocksOpened += openBlock(mineMap, openState, aroundH, aroundW);
                }
            }
        }
    }
    return blocksOpened;
}
function createOpenState(maxh, maxw) {
    Object(_utl__WEBPACK_IMPORTED_MODULE_2__["assert"])(Number.isInteger(maxh), Number.isInteger(maxw), 'createOpenState Error');
    const openState = [];
    for (let h = 0; h < maxh; h++) {
        openState[h] = [];
        for (let w = 0; w < maxw; w++) {
            openState[h][w] = 0;
        }
    }
    return openState;
}
let miningTimer;
let miningBeginingTime;
/* harmony default export */ __webpack_exports__["default"] = (vue__WEBPACK_IMPORTED_MODULE_0___default.a.extend({
    data() {
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
            flagNumber: 0,
        };
    },
    methods: {
        setMineField() {
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
        refreshMineField() {
            this.showMineField = false;
            [
                this.mineFieldHeight,
                this.mineFieldWidth,
                this.mineNumber,
            ] = this.setMineField();
            this.mineMap = createMineMap(this.mineFieldHeight, this.mineFieldWidth, this.mineNumber);
            this.openState = createOpenState(this.mineFieldHeight, this.mineFieldWidth);
            this.firstOpenBlock = true;
            this.blocksOpened = 0;
            this.flagNumber = 0;
            window.clearInterval(miningTimer);
            this.miningTime = 0;
            this.$nextTick(() => {
                this.showMineField = true;
            });
        },
        adjustMineField(clickedH, clickedW) {
            adjustMineField(this.mineMap, clickedH, clickedW);
        },
        openBlockHandler(height, width) {
            // avoid first explosion
            Object(_utl__WEBPACK_IMPORTED_MODULE_2__["assert"])(Number.isInteger(height), Number.isInteger(width));
            if (this.playState !== 0) {
                return;
            }
            if (this.firstOpenBlock) {
                adjustMineField(this.mineMap, height, width);
                miningBeginingTime = Date.now();
                miningTimer = window.setInterval(() => {
                    this.miningTime = (Date.now() - miningBeginingTime) / 1000;
                }, 1000);
                this.firstOpenBlock = false;
            }
            if (this.openState[height][width] === _MineBlock_vue__WEBPACK_IMPORTED_MODULE_1__["OpenState"].Opened) {
                this.blocksOpened += openByFlag(this.mineMap, this.openState, height, width);
            }
            else if (this.openState[height][width] === _MineBlock_vue__WEBPACK_IMPORTED_MODULE_1__["OpenState"].Unopened) {
                this.blocksOpened += openBlock(this.mineMap, this.openState, height, width);
            }
        },
        setFlagHandler(height, width) {
            Object(_utl__WEBPACK_IMPORTED_MODULE_2__["assert"])(Number.isInteger(height), Number.isInteger(width));
            if (this.playState !== 0) {
                return;
            }
            if (this.openState[height][width] === _MineBlock_vue__WEBPACK_IMPORTED_MODULE_1__["OpenState"].Unopened) {
                vue__WEBPACK_IMPORTED_MODULE_0___default.a.set(this.openState[height], width, _MineBlock_vue__WEBPACK_IMPORTED_MODULE_1__["OpenState"].Flagged);
                this.flagNumber++;
            }
            else if (this.openState[height][width] === _MineBlock_vue__WEBPACK_IMPORTED_MODULE_1__["OpenState"].Flagged) {
                vue__WEBPACK_IMPORTED_MODULE_0___default.a.set(this.openState[height], width, _MineBlock_vue__WEBPACK_IMPORTED_MODULE_1__["OpenState"].Unopened);
                this.flagNumber--;
            }
        },
        formattedMiningTime() {
            return Math.round(this.miningTime);
        },
    },
    computed: {
        playState() {
            if (Number.isInteger(this.blocksOpened)) {
                if (this.blocksOpened + this.mineNumber ===
                    this.mineFieldHeight * this.mineFieldWidth) {
                    window.clearInterval(miningTimer);
                    return 1;
                }
                else {
                    return 0;
                }
            }
            else {
                window.clearInterval(miningTimer);
                endGameShow(this.mineMap, this.openState);
                return -1;
            }
        },
        minesRemaining() {
            return this.mineNumber - this.flagNumber;
        },
    },
    components: {
        MineBlock: _MineBlock_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    },
}));


/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/component-normalizer.js":
/*!*********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/component-normalizer.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  scriptExports = scriptExports || {}

  // ES6 modules interop
  var type = typeof scriptExports.default
  if (type === 'object' || type === 'function') {
    scriptExports = scriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-cf14a1f2\",\"hasScoped\":false,\"optionsId\":\"0\",\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/MineField.vue":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-cf14a1f2","hasScoped":false,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/MineField.vue ***!
  \*******************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("table", [
      _vm.showMineField
        ? _c(
            "tbody",
            _vm._l(_vm.mineFieldHeight, function(h) {
              return _c(
                "tr",
                { key: h },
                _vm._l(_vm.mineFieldWidth, function(w) {
                  return _c(
                    "td",
                    { key: w },
                    [
                      _c("MineBlock", {
                        attrs: {
                          openState: _vm.openState[h - 1][w - 1],
                          mineState: _vm.mineMap[h - 1][w - 1],
                          height: h - 1,
                          width: w - 1
                        },
                        on: {
                          openBlock: _vm.openBlockHandler,
                          setFlag: _vm.setFlagHandler
                        }
                      })
                    ],
                    1
                  )
                })
              )
            })
          )
        : _vm._e()
    ]),
    _vm._v(" "),
    _c("p", [
      _vm._v(
        _vm._s(
          _vm.playState === 0
            ? "用时：" + _vm.formattedMiningTime()
            : _vm.playState === 1
              ? "胜利：共计用时" + _vm.formattedMiningTime()
              : "失败"
        )
      )
    ]),
    _vm._v(" "),
    _c("p", [_vm._v("剩余雷数：" + _vm._s(_vm.minesRemaining))]),
    _vm._v(" "),
    _c(
      "select",
      {
        directives: [
          {
            name: "model",
            rawName: "v-model",
            value: _vm.selectLevel,
            expression: "selectLevel"
          }
        ],
        on: {
          change: function($event) {
            var $$selectedVal = Array.prototype.filter
              .call($event.target.options, function(o) {
                return o.selected
              })
              .map(function(o) {
                var val = "_value" in o ? o._value : o.value
                return val
              })
            _vm.selectLevel = $event.target.multiple
              ? $$selectedVal
              : $$selectedVal[0]
          }
        }
      },
      [
        _c("option", { attrs: { value: "0", disabled: "" } }, [
          _vm._v("请选择难度")
        ]),
        _vm._v(" "),
        _c("option", { attrs: { value: "1" } }, [
          _vm._v("简单：9*9的雷区，10个雷")
        ]),
        _vm._v(" "),
        _c("option", { attrs: { value: "2" } }, [
          _vm._v("简单：16*16的雷区，40个雷")
        ]),
        _vm._v(" "),
        _c("option", { attrs: { value: "3" } }, [
          _vm._v("困难：30*16的雷区，99个雷")
        ])
      ]
    ),
    _vm._v(" "),
    _c("button", { on: { click: _vm.refreshMineField } }, [_vm._v("开始游戏")])
  ])
}
var staticRenderFns = []
render._withStripped = true

if (false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-fde65dcc\",\"hasScoped\":true,\"optionsId\":\"0\",\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/MineBlock.vue":
/*!******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-fde65dcc","hasScoped":true,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/MineBlock.vue ***!
  \******************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "mine-block",
      class: _vm.getClass,
      on: {
        click: function($event) {
          if (
            !("button" in $event) &&
            _vm._k($event.keyCode, "left", 37, $event.key, [
              "Left",
              "ArrowLeft"
            ])
          ) {
            return null
          }
          if ("button" in $event && $event.button !== 0) {
            return null
          }
          $event.stopPropagation()
          $event.preventDefault()
          return _vm.leftClick($event)
        },
        contextmenu: function($event) {
          $event.stopPropagation()
          $event.preventDefault()
          return _vm.rightClick($event)
        }
      }
    },
    [
      _vm.isOpened
        ? _c("span", [
            _vm._v(
              _vm._s(
                _vm.mineState
                  ? _vm.mineState === -1 ? "*" : _vm.mineState
                  : ""
              )
            )
          ])
        : _vm.isFlagged ? _c("span", [_vm._v("F")]) : _vm._e()
    ]
  )
}
var staticRenderFns = []
render._withStripped = true

if (false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"id\":\"data-v-fde65dcc\",\"scoped\":true,\"sourceMap\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/components/MineBlock.vue":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader?sourceMap!./node_modules/vue-loader/lib/style-compiler?{"optionsId":"0","vue":true,"id":"data-v-fde65dcc","scoped":true,"sourceMap":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/components/MineBlock.vue ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../node_modules/css-loader?sourceMap!../../node_modules/vue-loader/lib/style-compiler?{"optionsId":"0","vue":true,"id":"data-v-fde65dcc","scoped":true,"sourceMap":true}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./MineBlock.vue */ "./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"id\":\"data-v-fde65dcc\",\"scoped\":true,\"sourceMap\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/components/MineBlock.vue");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("447a0052", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/lib/addStylesClient.js":
/*!**************************************************************!*\
  !*** ./node_modules/vue-style-loader/lib/addStylesClient.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return addStylesClient; });
/* harmony import */ var _listToStyles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./listToStyles */ "./node_modules/vue-style-loader/lib/listToStyles.js");
/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/



var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}
var options = null
var ssrIdKey = 'data-vue-ssr-id'

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

function addStylesClient (parentId, list, _isProduction, _options) {
  isProduction = _isProduction

  options = _options || {}

  var styles = Object(_listToStyles__WEBPACK_IMPORTED_MODULE_0__["default"])(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = Object(_listToStyles__WEBPACK_IMPORTED_MODULE_0__["default"])(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[' + ssrIdKey + '~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }
  if (options.ssrId) {
    styleElement.setAttribute(ssrIdKey, obj.id)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),

/***/ "./node_modules/vue-style-loader/lib/listToStyles.js":
/*!***********************************************************!*\
  !*** ./node_modules/vue-style-loader/lib/listToStyles.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return listToStyles; });
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}


/***/ }),

/***/ "./src/components/MineBlock.vue":
/*!**************************************!*\
  !*** ./src/components/MineBlock.vue ***!
  \**************************************/
/*! exports provided: default, OpenState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ts_loader_node_modules_vue_loader_lib_selector_type_script_index_0_MineBlock_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !ts-loader!../../node_modules/vue-loader/lib/selector?type=script&index=0!./MineBlock.vue */ "./node_modules/ts-loader/index.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/MineBlock.vue");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OpenState", function() { return _ts_loader_node_modules_vue_loader_lib_selector_type_script_index_0_MineBlock_vue__WEBPACK_IMPORTED_MODULE_0__["OpenState"]; });

/* harmony import */ var _node_modules_vue_loader_lib_template_compiler_index_id_data_v_fde65dcc_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_MineBlock_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/vue-loader/lib/template-compiler/index?{"id":"data-v-fde65dcc","hasScoped":true,"optionsId":"0","buble":{"transforms":{}}}!../../node_modules/vue-loader/lib/selector?type=template&index=0!./MineBlock.vue */ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-fde65dcc\",\"hasScoped\":true,\"optionsId\":\"0\",\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/MineBlock.vue");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_component_normalizer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/component-normalizer */ "./node_modules/vue-loader/lib/runtime/component-normalizer.js");
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__(/*! !vue-style-loader!css-loader?sourceMap!../../node_modules/vue-loader/lib/style-compiler/index?{"optionsId":"0","vue":true,"id":"data-v-fde65dcc","scoped":true,"sourceMap":true}!../../node_modules/vue-loader/lib/selector?type=styles&index=0!./MineBlock.vue */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"id\":\"data-v-fde65dcc\",\"scoped\":true,\"sourceMap\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/components/MineBlock.vue")
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-fde65dcc"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(_node_modules_vue_loader_lib_runtime_component_normalizer__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ts_loader_node_modules_vue_loader_lib_selector_type_script_index_0_MineBlock_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
  _node_modules_vue_loader_lib_template_compiler_index_id_data_v_fde65dcc_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_MineBlock_vue__WEBPACK_IMPORTED_MODULE_1__["render"],
  _node_modules_vue_loader_lib_template_compiler_index_id_data_v_fde65dcc_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_MineBlock_vue__WEBPACK_IMPORTED_MODULE_1__["staticRenderFns"],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\components\\MineBlock.vue"

/* hot reload */
if (false) {}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "./src/components/MineField.vue":
/*!**************************************!*\
  !*** ./src/components/MineField.vue ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ts_loader_node_modules_vue_loader_lib_selector_type_script_index_0_MineField_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !ts-loader!../../node_modules/vue-loader/lib/selector?type=script&index=0!./MineField.vue */ "./node_modules/ts-loader/index.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/MineField.vue");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_template_compiler_index_id_data_v_cf14a1f2_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_MineField_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/vue-loader/lib/template-compiler/index?{"id":"data-v-cf14a1f2","hasScoped":false,"optionsId":"0","buble":{"transforms":{}}}!../../node_modules/vue-loader/lib/selector?type=template&index=0!./MineField.vue */ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-cf14a1f2\",\"hasScoped\":false,\"optionsId\":\"0\",\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/MineField.vue");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_component_normalizer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/component-normalizer */ "./node_modules/vue-loader/lib/runtime/component-normalizer.js");
var disposed = false
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(_node_modules_vue_loader_lib_runtime_component_normalizer__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ts_loader_node_modules_vue_loader_lib_selector_type_script_index_0_MineField_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
  _node_modules_vue_loader_lib_template_compiler_index_id_data_v_cf14a1f2_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_MineField_vue__WEBPACK_IMPORTED_MODULE_1__["render"],
  _node_modules_vue_loader_lib_template_compiler_index_id_data_v_cf14a1f2_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_MineField_vue__WEBPACK_IMPORTED_MODULE_1__["staticRenderFns"],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\components\\MineField.vue"

/* hot reload */
if (false) {}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_MineField_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/MineField.vue */ "./src/components/MineField.vue");


const v = new vue__WEBPACK_IMPORTED_MODULE_0___default.a({
    el: '#app',
    template: `
    <div>
        <h2>A Mines with Typescript and Vue</h2>
        <MineField></MineField>
    </div>
    `,
    components: {
        MineField: _components_MineField_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    },
});


/***/ }),

/***/ "./src/utl.ts":
/*!********************!*\
  !*** ./src/utl.ts ***!
  \********************/
/*! exports provided: assert */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assert", function() { return assert; });
function assert(...args) {
    const l = args.length;
    const msg = typeof args[l - 1] === 'string' ? args[l - 1] : 'Assert Failed';
    for (let i = 0; i < l; i++) {
        if (!args[i]) {
            throw new Error(`${msg} at ${i}th argument`);
        }
    }
}



/***/ }),

/***/ "vue":
/*!**********************!*\
  !*** external "Vue" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = Vue;

/***/ })

/******/ });
//# sourceMappingURL=build.js.map