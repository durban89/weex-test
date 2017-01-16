/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var __weex_template__ = __webpack_require__(1)
	var __weex_style__ = __webpack_require__(2)
	var __weex_script__ = __webpack_require__(3)

	__weex_define__('@weex-component/7a8806c10d64e44a762c9167c97089ef', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }

	    __weex_module__.exports.template = __weex_template__

	    __weex_module__.exports.style = __weex_style__

	})

	__weex_bootstrap__('@weex-component/7a8806c10d64e44a762c9167c97089ef',undefined,undefined)

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "children": [
	    {
	      "type": "container",
	      "children": [
	        {
	          "type": "text",
	          "style": {
	            "fontSize": 64
	          },
	          "attr": {
	            "value": "Qeeniao"
	          }
	        },
	        {
	          "type": "text",
	          "classList": [
	            "large"
	          ],
	          "attr": {
	            "value": "Qeeniao Team"
	          }
	        }
	      ]
	    },
	    {
	      "type": "container",
	      "children": [
	        {
	          "type": "text",
	          "attr": {
	            "value": function () {return 'The time is ' + (this.datetime)}
	          }
	        },
	        {
	          "type": "text",
	          "attr": {
	            "value": function () {return this.title}
	          }
	        },
	        {
	          "type": "text",
	          "attr": {
	            "value": function () {return this.getTitle()}
	          }
	        },
	        {
	          "type": "container",
	          "children": [
	            {
	              "type": "scroller",
	              "classList": [
	                "scroller"
	              ],
	              "children": [
	                {
	                  "type": "div",
	                  "classList": [
	                    "ct"
	                  ],
	                  "style": {
	                    "height": function () {return this.ctHeight}
	                  },
	                  "children": [
	                    {
	                      "type": "image",
	                      "classList": [
	                        "img"
	                      ],
	                      "style": {
	                        "width": 100,
	                        "height": 100
	                      },
	                      "attr": {
	                        "src": function () {return this.img}
	                      }
	                    },
	                    {
	                      "type": "text",
	                      "style": {
	                        "fontSize": 42
	                      },
	                      "attr": {
	                        "value": "Hello Qeeniao Admin!"
	                      }
	                    }
	                  ]
	                },
	                {
	                  "type": "div",
	                  "style": {
	                    "flexDirection": "column"
	                  },
	                  "children": [
	                    {
	                      "type": "slider",
	                      "classList": [
	                        "slider"
	                      ],
	                      "attr": {
	                        "interval": function () {return this.intervalValue},
	                        "autoPlay": function () {return this.isAutoPlay}
	                      },
	                      "children": [
	                        {
	                          "type": "div",
	                          "classList": [
	                            "slider-pages"
	                          ],
	                          "repeat": function () {return this.itemList},
	                          "events": {
	                            "click": "goWeexSite"
	                          },
	                          "children": [
	                            {
	                              "type": "image",
	                              "classList": [
	                                "thumb"
	                              ],
	                              "style": {
	                                "width": 200,
	                                "height": 200
	                              },
	                              "attr": {
	                                "src": function () {return this.pictureUrl}
	                              }
	                            },
	                            {
	                              "type": "text",
	                              "classList": [
	                                "title"
	                              ],
	                              "attr": {
	                                "value": function () {return this.title}
	                              }
	                            }
	                          ]
	                        }
	                      ]
	                    }
	                  ]
	                },
	                {
	                  "type": "div",
	                  "classList": [
	                    "container"
	                  ],
	                  "events": {
	                    "click": "goWeexSite"
	                  },
	                  "children": [
	                    {
	                      "type": "div",
	                      "classList": [
	                        "cell"
	                      ],
	                      "children": [
	                        {
	                          "type": "image",
	                          "classList": [
	                            "thumb"
	                          ],
	                          "style": {
	                            "width": 200,
	                            "height": 100
	                          },
	                          "attr": {
	                            "src": "https://gtms04.alicdn.com/tps/i4/TB1rgraLVXXXXa_XpXXT97RNpXX-259-259.png"
	                          }
	                        },
	                        {
	                          "type": "text",
	                          "classList": [
	                            "title"
	                          ],
	                          "attr": {
	                            "value": "Javascript"
	                          }
	                        }
	                      ]
	                    },
	                    {
	                      "type": "div",
	                      "classList": [
	                        "cell"
	                      ],
	                      "children": [
	                        {
	                          "type": "image",
	                          "classList": [
	                            "thumb"
	                          ],
	                          "style": {
	                            "width": 200,
	                            "height": 100
	                          },
	                          "attr": {
	                            "src": "https://gtms01.alicdn.com/tps/i1/TB1wRLhLVXXXXapXXXXvUs8_FXX-344-390.png"
	                          }
	                        },
	                        {
	                          "type": "text",
	                          "classList": [
	                            "title"
	                          ],
	                          "attr": {
	                            "value": "Java"
	                          }
	                        }
	                      ]
	                    },
	                    {
	                      "type": "div",
	                      "classList": [
	                        "cell"
	                      ],
	                      "children": [
	                        {
	                          "type": "image",
	                          "classList": [
	                            "thumb"
	                          ],
	                          "style": {
	                            "width": 200,
	                            "height": 100
	                          },
	                          "attr": {
	                            "src": "https://gtms01.alicdn.com/tps/i1/TB1S.u_LVXXXXcWXpXXEBEd5pXX-225-225.png"
	                          }
	                        },
	                        {
	                          "type": "text",
	                          "classList": [
	                            "title"
	                          ],
	                          "attr": {
	                            "value": "Objective"
	                          }
	                        }
	                      ]
	                    }
	                  ]
	                }
	              ]
	            }
	          ]
	        }
	      ]
	    }
	  ]
	}

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = {
	  "scroller": {
	    "width": 700,
	    "height": 700,
	    "borderWidth": 3,
	    "borderStyle": "solid",
	    "borderColor": "rgb(162,217,192)",
	    "marginLeft": 25
	  },
	  "cell": {
	    "marginTop": 10,
	    "marginLeft": 10,
	    "flexDirection": "row"
	  },
	  "thumb": {
	    "width": 200,
	    "height": 200
	  },
	  "title": {
	    "textAlign": "center",
	    "flex": 1,
	    "color": "#808080",
	    "fontSize": 50
	  },
	  "slider": {
	    "margin": 18,
	    "width": 714,
	    "height": 230
	  },
	  "slider-pages": {
	    "flexDirection": "row",
	    "width": 714,
	    "height": 200
	  },
	  "ct": {
	    "width": 750,
	    "alignItems": "center",
	    "justifyContent": "center"
	  },
	  "img": {
	    "marginBottom": 20
	  }
	}

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = function(module, exports, __weex_require__){'use strict';

	module.exports = {
	  data: function () {return {
	    cWidth: 320,
	    ctHeight: 800,
	    img: 'https://gw.alicdn.com/tps/i2/TB1DpsmMpXXXXabaXXX20ySQVXX-512-512.png_400x400.jpg',
	    intervalValue: '1000',
	    isShowIndicators: 'true',
	    isAutoPlay: 'true',
	    itemList: [{ title: 'Java', pictureUrl: 'https://gtms04.alicdn.com/tps/i4/TB1rgraLVXXXXa_XpXXT97RNpXX-259-259.png' }, { title: 'Objective-c', pictureUrl: 'https://gtms01.alicdn.com/tps/i1/TB1S.u_LVXXXXcWXpXXEBEd5pXX-225-225.png' }, { title: 'Javascript', pictureUrl: 'https://gtms01.alicdn.com/tps/i1/TB1wRLhLVXXXXapXXXXvUs8_FXX-344-390.png' }],
	    title: "Qeeniao"
	  }},
	  methods: {
	    goWeexSite: function goWeexSite() {
	      this.$openUrl('http://alibaba.github.io/weex/');
	    },
	    getTitle: function getTitle() {
	      return "Qeeniao Team";
	    }
	  },
	  ready: function ready() {
	    this.ctHeight = this.$getConfig().env.deviceHeight;
	  },
	  created: function created() {
	    this.datetime = new Date().toLocaleString();
	  }
	};}
	/* generated by weex-loader */


/***/ }
/******/ ]);