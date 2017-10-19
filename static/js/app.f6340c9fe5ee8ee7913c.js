webpackJsonp([0],{

/***/ "+AzP":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__ = __webpack_require__("mvHQ");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__);

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
	name: 'login',
	data: function data() {
		return {
			email: '',
			password: '',
			error: '',
			access: false
		};
	},

	methods: {
		validForm: function validForm() {
			var _this = this;

			var self = this;
			this.$validator.validateAll().then(function (result) {
				if (result) {
					var config = {
						headers: {
							'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
						}
					};

					_this.axios.put(_this.$parent.AJAX_URL + '/book/client/api/auth', {
						email: _this.email,
						password: btoa(_this.password),
						is_admin: 1
					}, config).then(function (response) {

						if (response.status == 200) {
							if (!response.data.success) {
								self.error = response.data.message;
							} else {
								localStorage.setItem('admin', __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default()(response.data.data));
								location.href = '/admin';
							}
						} else {
							console.log(response.data.message);
						}
					});
				}
			});
		}
	},
	created: function created() {
		if (localStorage["admin"]) {
			location.href = "/admin";
		}
	}
});

/***/ }),

/***/ "+Qdm":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'category',
  data: function data() {
    return {
      books: '',
      category: ''
    };
  },
  created: function created() {
    var _this = this;

    this.axios.get(this.$parent.$parent.AJAX_URL + '/book/client/api/' + this.$route.params.category + '/' + this.$route.params.id).then(function (response) {

      if (response.status == 200) {
        if (response.data.status) {
          _this.category = response.data.data;
        } else {
          console.log(response.data.message);
        }
      } else {
        console.log(response.data.message);
      }
    });

    this.axios.get(this.$parent.$parent.AJAX_URL + '/book/client/api/books/all/' + this.$route.params.category.slice(0, -1) + '/' + this.$route.params.id).then(function (response) {

      if (response.status == 200) {
        if (response.data.status) {
          _this.books = response.data.data;
        } else {
          console.log(response.data.message);
        }
      } else {
        console.log(response.data.message);
      }
    });
  }
});

/***/ }),

/***/ "+u6R":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"author"},[_c('h3',{staticClass:"my-4"},[_vm._v("Edit Author")]),_vm._v(" "),_c('form',{on:{"submit":function($event){$event.preventDefault();_vm.edit($event)}}},[_c('div',{staticClass:"form-group"},[_c('label',{attrs:{"for":"text"}},[_vm._v("Name:")]),_vm._v(" "),_c('p',{class:{ 'control': true }},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.name),expression:"name"},{name:"validate",rawName:"v-validate",value:('required|alpha'),expression:"'required|alpha'"},{name:"default-value",rawName:"v-default-value",value:(_vm.author.name),expression:"author.name"}],class:{'input form-control': true, 'is-danger': _vm.errors.has('name') },attrs:{"type":"text","name":"name"},domProps:{"value":(_vm.name)},on:{"input":function($event){if($event.target.composing){ return; }_vm.name=$event.target.value}}})]),_vm._v(" "),_c('span',{directives:[{name:"show",rawName:"v-show",value:(_vm.errors.has('name')),expression:"errors.has('name')"}],staticClass:"help is-danger"},[_vm._v(_vm._s(_vm.errors.first('name')))])]),_vm._v(" "),_c('button',{staticClass:"btn btn-default",attrs:{"type":"submit"}},[_vm._v("Edit")])])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "/kCm":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_template_compiler_index_id_data_v_176027cb_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Bottom_vue__ = __webpack_require__("N8hv");
var normalizeComponent = __webpack_require__("VU/8")
/* script */
var __vue_script__ = null
/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_template_compiler_index_id_data_v_176027cb_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Bottom_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "/nOp":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"create"},[_c('h3',{staticClass:"my-4"},[_vm._v("Create Book")]),_vm._v(" "),_c('form',{on:{"submit":function($event){$event.preventDefault();_vm.create($event)}}},[_c('div',{staticClass:"form-group"},[_c('label',{attrs:{"for":"text"}},[_vm._v("Name:")]),_vm._v(" "),_c('p',{class:{ 'control': true }},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.name),expression:"name"},{name:"validate",rawName:"v-validate",value:('required'),expression:"'required'"}],class:{'input form-control': true, 'is-danger': _vm.errors.has('name') },attrs:{"type":"text","name":"name"},domProps:{"value":(_vm.name)},on:{"input":function($event){if($event.target.composing){ return; }_vm.name=$event.target.value}}})]),_vm._v(" "),_c('span',{directives:[{name:"show",rawName:"v-show",value:(_vm.errors.has('name')),expression:"errors.has('name')"}],staticClass:"help is-danger"},[_vm._v(_vm._s(_vm.errors.first('name')))])]),_vm._v(" "),_c('div',{staticClass:"form-group"},[_c('label',{attrs:{"for":"text"}},[_vm._v("Description:")]),_vm._v(" "),_c('textarea',{directives:[{name:"model",rawName:"v-model",value:(_vm.description),expression:"description"}],staticClass:"form-control",domProps:{"value":(_vm.description)},on:{"input":function($event){if($event.target.composing){ return; }_vm.description=$event.target.value}}})]),_vm._v(" "),_c('div',{staticClass:"form-group"},[_c('label',{attrs:{"for":"text"}},[_vm._v("Price:")]),_vm._v(" "),_c('p',{class:{ 'control': true }},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.price),expression:"price"},{name:"validate",rawName:"v-validate",value:('required|numeric'),expression:"'required|numeric'"}],class:{'input form-control': true, 'is-danger': _vm.errors.has('price') },attrs:{"type":"text","name":"price"},domProps:{"value":(_vm.price)},on:{"input":function($event){if($event.target.composing){ return; }_vm.price=$event.target.value}}})]),_vm._v(" "),_c('span',{directives:[{name:"show",rawName:"v-show",value:(_vm.errors.has('price')),expression:"errors.has('price')"}],staticClass:"help is-danger"},[_vm._v(_vm._s(_vm.errors.first('price')))])]),_vm._v(" "),_c('div',{staticClass:"form-group"},[_c('label',{attrs:{"for":"text"}},[_vm._v("Discaunt:")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.discaunt),expression:"discaunt"}],staticClass:"form-control",attrs:{"type":"text"},domProps:{"value":(_vm.discaunt)},on:{"input":function($event){if($event.target.composing){ return; }_vm.discaunt=$event.target.value}}})]),_vm._v(" "),_c('button',{staticClass:"btn btn-default",attrs:{"type":"submit"}},[_vm._v("Create")])])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "/pTz":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "/usH":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "0agQ":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "1Wg7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_multiselect__ = __webpack_require__("RUzx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_multiselect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue_multiselect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_tabs_component__ = __webpack_require__("2srq");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_tabs_component___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vue_tabs_component__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["a"] = ({

	name: 'edit',
	data: function data() {
		return {
			config: {
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
				}
			},
			book: '',
			name: '',
			description: '',
			price: 0,
			discaunt: 0,
			authors: [],
			genres: [],
			info_author: [],
			info_genre: [],
			success: ''
		};
	},

	methods: {

		saveAuthor: function saveAuthor() {
			var _this = this;

			this.axios.post(this.$parent.$parent.AJAX_URL + '/book/client/api/books/' + this.$route.params.id + '/author', {
				ids: this.info_author
			}, this.config).then(function (response) {

				if (response.status == 200) {
					if (!response.data.success) {
						console.log(response.data.message);
					} else {
						_this.success = '';
						_this.success = response.data.message;
					}
				} else {
					console.log(response.data.message);
				}
			});
		},

		saveGenre: function saveGenre() {
			var _this2 = this;

			this.axios.post(this.$parent.$parent.AJAX_URL + '/book/client/api/books/' + this.$route.params.id + '/genre', {
				ids: this.info_genre
			}, this.config).then(function (response) {

				if (response.status == 200) {
					if (!response.data.success) {
						console.log(response.data.message);
					} else {
						_this2.success = '';
						_this2.success = response.data.message;
					}
				} else {
					console.log(response.data.message);
				}
			});
		},

		customLabel: function customLabel(option) {
			return option.name;
		},

		edit: function edit() {

			this.axios.put(this.$parent.$parent.AJAX_URL + '/book/client/api/books/' + this.$route.params.id, {
				name: this.name ? this.name : this.book.name,
				description: this.description ? this.description : this.book.description,
				price: this.price ? +this.price : +this.book.price,
				discaunt: this.discaunt ? +this.discaunt : +this.book.discaunt
			}, this.config).then(function (response) {

				if (response.status == 200) {
					if (!response.data.success) {
						console.log(response.data.message);
					} else {
						location.href = '#/admin/books';
					}
				} else {
					console.log(response.data.message);
				}
			});
		}
	},
	created: function created() {
		var _this3 = this;

		this.axios.get(this.$parent.$parent.AJAX_URL + '/book/client/api/books/' + this.$route.params.id).then(function (response) {

			if (response.status == 200) {
				if (response.data.status) {
					/*get books*/
					_this3.book = response.data.data;

					/*get authors*/
					for (var key in response.data.data.authors) {
						var obj = {
							id: response.data.data.authors[key].id,
							name: response.data.data.authors[key].name
						};
						_this3.info_author.push(obj);
					}

					/*get genres*/
					for (var _key in response.data.data.genres) {
						var _obj = {
							id: response.data.data.genres[_key].id,
							name: response.data.data.genres[_key].name
						};
						_this3.info_genre.push(_obj);
					}
				} else {
					console.log(response.data.message);
				}
			} else {
				console.log(response.data.message);
			}
		});

		this.axios.get(this.$parent.$parent.AJAX_URL + '/book/client/api/authors').then(function (response) {

			if (response.status == 200) {
				if (response.data.status) {
					//this.authors = response.data.data

					for (var key in response.data.data) {
						var obj = {
							id: response.data.data[key].id,
							name: response.data.data[key].name
						};
						_this3.authors.push(obj);
					}
				} else {
					console.log(response.data.message);
				}
			} else {
				console.log(response.data.message);
			}
		});

		this.axios.get(this.$parent.$parent.AJAX_URL + '/book/client/api/genres').then(function (response) {

			if (response.status == 200) {
				if (response.data.status) {
					for (var key in response.data.data) {
						var obj = {
							id: response.data.data[key].id,
							name: response.data.data[key].name
						};
						_this3.genres.push(obj);
					}
				} else {
					console.log(response.data.message);
				}
			} else {
				console.log(response.data.message);
			}
		});
	},

	components: {
		Multiselect: __WEBPACK_IMPORTED_MODULE_0_vue_multiselect___default.a, Tabs: __WEBPACK_IMPORTED_MODULE_1_vue_tabs_component__["Tabs"], Tab: __WEBPACK_IMPORTED_MODULE_1_vue_tabs_component__["Tab"]
	}
});

/***/ }),

/***/ "1XcM":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'sidebar',
  data: function data() {
    return {
      authors: '',
      genres: ''
    };
  },
  created: function created() {
    var _this = this;

    this.axios.get(this.$parent.$parent.AJAX_URL + '/book/client/api/authors').then(function (response) {

      if (response.status == 200) {
        if (response.data.status) {
          _this.authors = response.data.data;
        } else {
          console.log(response.data.message);
        }
      } else {
        console.log(response.data.message);
      }
    });

    this.axios.get(this.$parent.$parent.AJAX_URL + '/book/client/api/genres').then(function (response) {

      if (response.status == 200) {
        if (response.data.status) {
          _this.genres = response.data.data;
        } else {
          console.log(response.data.message);
        }
      } else {
        console.log(response.data.message);
      }
    });
  }
});

/***/ }),

/***/ "1qYa":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'index',
    data: function data() {
        return {
            customers: ''
        };
    },
    created: function created() {
        var _this = this;

        this.axios.get(this.$parent.$parent.AJAX_URL + '/book/client/api/customers').then(function (response) {

            if (response.status == 200) {
                if (response.data.status) {
                    _this.customers = response.data.data;
                } else {
                    console.log(response.data.message);
                }
            } else {
                console.log(response.data.message);
            }
        });
    }
});

/***/ }),

/***/ "1w7g":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"home"},[_c('h3',{staticClass:"my-4"},[_vm._v("Authors")]),_vm._v(" "),_c('div',{staticClass:"list-group"},_vm._l((_vm.authors),function(author){return _c('a',{staticClass:"list-group-item",attrs:{"href":'/authors/' + author.id}},[_vm._v(_vm._s(author.name))])})),_vm._v(" "),_c('h3',{staticClass:"my-4"},[_vm._v("Genres")]),_vm._v(" "),_c('div',{staticClass:"list-group"},_vm._l((_vm.genres),function(genre){return _c('a',{staticClass:"list-group-item",attrs:{"href":'/genres/' + genre.id}},[_vm._v(_vm._s(genre.name))])}))])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "2L3f":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__("ewqj");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_27691e12_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__("WlPA");
function injectStyle (ssrContext) {
  __webpack_require__("dy9f")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_27691e12_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "2cWa":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'home'
});

/***/ }),

/***/ "32/r":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_edit_vue__ = __webpack_require__("1Wg7");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_2e5c5ace_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_edit_vue__ = __webpack_require__("CHrF");
function injectStyle (ssrContext) {
  __webpack_require__("48jF")
  __webpack_require__("p3wO")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_edit_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_2e5c5ace_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_edit_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "48jF":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "4QTS":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"book"},[_c('h3',{staticClass:"my-4"},[_vm._v(_vm._s(_vm.book.name))]),_vm._v(" "),_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-md-4"},[_c('img',{staticClass:"card-img-top",attrs:{"src":"http://placehold.it/700x400","alt":""}}),_vm._v(" "),(_vm.price)?_c('p',{staticClass:"discount"},[_vm._v(" - "),_c('i',{staticClass:"fa fa-eur",attrs:{"aria-hidden":"true"}}),_vm._v(" "+_vm._s(_vm.book.discaunt))]):_vm._e(),_vm._v(" "),(this.$parent.$parent.user)?_c('div',[_c('button',{staticClass:"btn btn-primary btn-cart mt-20",on:{"click":_vm.addCart}},[_vm._v("Add Cart")]),_vm._v(" "),_c('button',{staticClass:"btn btn-default btn-cart mt-20",on:{"click":function($event){_vm.changeCount(-1)}}},[_vm._v("-")]),_vm._v(" "),_c('span',{staticClass:"count",model:{value:(_vm.count),callback:function ($$v) {_vm.count=$$v},expression:"count"}},[_vm._v(_vm._s(_vm.count))]),_vm._v(" "),_c('button',{staticClass:"btn btn-default btn-cart mt-20",on:{"click":function($event){_vm.changeCount(+1)}}},[_vm._v("+")]),_vm._v(" "),_c('p',{staticClass:"success mt-20"},[_vm._v(_vm._s(_vm.success))])]):_vm._e()]),_vm._v(" "),_c('div',{staticClass:"col-md-8"},[_c('h5',[_vm._v("Description:")]),_vm._v("\n\t\t\t"+_vm._s(_vm.book.description)+"\n\t\t\t"),_c('h5',{staticClass:"mt-20"},[_vm._v("Price:")]),_vm._v(" "),(_vm.price)?_c('span',[_c('strike',[_c('i',{staticClass:"fa fa-eur",attrs:{"aria-hidden":"true"}}),_vm._v(" "+_vm._s(_vm.book.price))]),_vm._v(" "),_c('br'),_vm._v("New price: "),_c('i',{staticClass:"fa fa-eur",attrs:{"aria-hidden":"true"}}),_vm._v(" "+_vm._s(_vm.price)+"\n\t\t\t\t")],1):_c('span',[_c('i',{staticClass:"fa fa-eur",attrs:{"aria-hidden":"true"}}),_vm._v(" "+_vm._s(_vm.book.price)+"\n\t\t\t")]),_vm._v(" "),_c('h5',{staticClass:"mt-20"},[_vm._v("Authors:")]),_vm._v(" "),_c('ul',_vm._l((_vm.book.authors),function(author){return _c('li',[_vm._v(_vm._s(author.name))])})),_vm._v(" "),_c('h5',{staticClass:"mt-20"},[_vm._v("Genres:")]),_vm._v(" "),_c('ul',_vm._l((_vm.book.genres),function(genre){return _c('li',[_vm._v(_vm._s(genre.name))])}))])])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "5Nbq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Layout_vue__ = __webpack_require__("vaCD");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_2b1261c9_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Layout_vue__ = __webpack_require__("Iykh");
function injectStyle (ssrContext) {
  __webpack_require__("81jA")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Layout_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_2b1261c9_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Layout_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "5qHl":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _vm._m(0)}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-lg-12"},[_c('h3',{staticClass:"my-4"},[_vm._v("Dashboard")])])]),_vm._v(" "),_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-lg-4 col-md-6"},[_c('div',{staticClass:"panel panel-primary"},[_c('div',{staticClass:"panel-heading"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-xs-3"},[_c('i',{staticClass:"fa fa-pencil fa-5x"})]),_vm._v(" "),_c('div',{staticClass:"col-xs-9 text-right"},[_c('div',[_vm._v("Authors")])])])]),_vm._v(" "),_c('a',{attrs:{"href":"/admin/authors"}},[_c('div',{staticClass:"panel-footer"},[_c('span',{staticClass:"pull-left"},[_vm._v("View Details")]),_vm._v(" "),_c('span',{staticClass:"pull-right"},[_c('i',{staticClass:"fa fa-arrow-circle-right"})]),_vm._v(" "),_c('div',{staticClass:"clearfix"})])])])]),_vm._v(" "),_c('div',{staticClass:"col-lg-4 col-md-6"},[_c('div',{staticClass:"panel panel-green"},[_c('div',{staticClass:"panel-heading"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-xs-3"},[_c('i',{staticClass:"fa fa-leaf fa-5x"})]),_vm._v(" "),_c('div',{staticClass:"col-xs-9 text-right"},[_c('div',[_vm._v("Genres")])])])]),_vm._v(" "),_c('a',{attrs:{"href":"/admin/genres"}},[_c('div',{staticClass:"panel-footer"},[_c('span',{staticClass:"pull-left"},[_vm._v("View Details")]),_vm._v(" "),_c('span',{staticClass:"pull-right"},[_c('i',{staticClass:"fa fa-arrow-circle-right"})]),_vm._v(" "),_c('div',{staticClass:"clearfix"})])])])]),_vm._v(" "),_c('div',{staticClass:"col-lg-4 col-md-6"},[_c('div',{staticClass:"panel panel-yellow"},[_c('div',{staticClass:"panel-heading"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-xs-3"},[_c('i',{staticClass:"fa fa-book fa-5x"})]),_vm._v(" "),_c('div',{staticClass:"col-xs-9 text-right"},[_c('div',[_vm._v("Books")])])])]),_vm._v(" "),_c('a',{attrs:{"href":"/admin/books"}},[_c('div',{staticClass:"panel-footer"},[_c('span',{staticClass:"pull-left"},[_vm._v("View Details")]),_vm._v(" "),_c('span',{staticClass:"pull-right"},[_c('i',{staticClass:"fa fa-arrow-circle-right"})]),_vm._v(" "),_c('div',{staticClass:"clearfix"})])])])]),_vm._v(" "),_c('div',{staticClass:"col-lg-4 col-md-6"},[_c('div',{staticClass:"panel panel-red"},[_c('div',{staticClass:"panel-heading"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-xs-3"},[_c('i',{staticClass:"fa fa-users fa-5x"})]),_vm._v(" "),_c('div',{staticClass:"col-xs-9 text-right"},[_c('div',[_vm._v("Customers")])])])]),_vm._v(" "),_c('a',{attrs:{"href":"/admin/customers"}},[_c('div',{staticClass:"panel-footer"},[_c('span',{staticClass:"pull-left"},[_vm._v("View Details")]),_vm._v(" "),_c('span',{staticClass:"pull-right"},[_c('i',{staticClass:"fa fa-arrow-circle-right"})]),_vm._v(" "),_c('div',{staticClass:"clearfix"})])])])]),_vm._v(" "),_c('div',{staticClass:"col-lg-4 col-md-6"},[_c('div',{staticClass:"panel panel-grey"},[_c('div',{staticClass:"panel-heading"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-xs-3"},[_c('i',{staticClass:"fa fa-shopping-cart fa-5x"})]),_vm._v(" "),_c('div',{staticClass:"col-xs-9 text-right"},[_c('div',[_vm._v("Orders")])])])]),_vm._v(" "),_c('a',{attrs:{"href":"/admin/orders"}},[_c('div',{staticClass:"panel-footer"},[_c('span',{staticClass:"pull-left"},[_vm._v("View Details")]),_vm._v(" "),_c('span',{staticClass:"pull-right"},[_c('i',{staticClass:"fa fa-arrow-circle-right"})]),_vm._v(" "),_c('div',{staticClass:"clearfix"})])])])])])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "7KOV":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_create_vue__ = __webpack_require__("KGHR");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_a51340bc_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_create_vue__ = __webpack_require__("gr+q");
function injectStyle (ssrContext) {
  __webpack_require__("cfXA")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_create_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_a51340bc_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_create_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "81jA":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "9N0o":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_TopMenu_vue__ = __webpack_require__("UP6V");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_1cd82964_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_TopMenu_vue__ = __webpack_require__("jCRb");
function injectStyle (ssrContext) {
  __webpack_require__("EbOk")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_TopMenu_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_1cd82964_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_TopMenu_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "9piT":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Success_vue__ = __webpack_require__("zYlX");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_a00f3cda_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Success_vue__ = __webpack_require__("Fcu/");
function injectStyle (ssrContext) {
  __webpack_require__("CdDe")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Success_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_a00f3cda_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Success_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "ABco":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.books.length > 0)?_c('div',{staticClass:"cart"},[_c('h3',{staticClass:"my-4"},[_vm._v("Cart")]),_vm._v(" "),_c('div',{staticClass:"row"},[_c('table',{staticClass:"table table-hover"},[_vm._m(0),_vm._v(" "),_c('tbody',[_vm._l((_vm.books),function(book,key){return _c('tr',[_c('td',[_vm._v(_vm._s(key+1))]),_vm._v(" "),_c('td',[_c('a',{attrs:{"href":'/book/' + book.id}},[_vm._v(_vm._s(book.name))])]),_vm._v(" "),_c('td',[_c('button',{staticClass:"btn btn-default btn-cart mt-20",on:{"click":function($event){_vm.changeCount(key, 0)}}},[_vm._v("-")]),_vm._v(" "),_c('span',{staticClass:"count"},[_vm._v(_vm._s(book.count))]),_vm._v(" "),_c('button',{staticClass:"btn btn-default btn-cart mt-20",on:{"click":function($event){_vm.changeCount(key, 1)}}},[_vm._v("+")])]),_vm._v(" "),_c('td',[_vm._v(_vm._s(book.price))]),_vm._v(" "),_c('td',[(book.discaunt > 0)?_c('span',[_vm._v(" - "+_vm._s(book.discaunt))]):_vm._e(),_vm._v(" "),_c('div',{staticClass:"link_remove"},[_c('a',{attrs:{"href":"#"},on:{"click":function($event){_vm.remove(book.id)}}},[_c('i',{staticClass:"fa fa-times",attrs:{"aria-hidden":"true"}})])])]),_vm._v(" "),_c('td',[_vm._v(_vm._s((book.price - book.discaunt) * book.count))])])}),_vm._v(" "),_c('tr',[_c('td',{attrs:{"colspan":"4"}}),_vm._v(" "),_vm._m(1),_vm._v(" "),_c('td',[_vm._v(_vm._s(_vm.Total))])]),_vm._v(" "),_c('tr',[_c('td',{attrs:{"colspan":"4"}}),_vm._v(" "),_vm._m(2),_vm._v(" "),_c('td',[_vm._v(_vm._s(_vm.discaunt))])]),_vm._v(" "),_c('tr',[_c('td',{attrs:{"colspan":"4"}}),_vm._v(" "),_vm._m(3),_vm._v(" "),_c('td',[_vm._v(_vm._s(_vm.Total - _vm.discaunt))])])],2)]),_vm._v(" "),_c('h5',{staticClass:"col-md-12"},[_vm._v("Choose payment system")]),_vm._v(" "),_c('ol',_vm._l((_vm.payment_systems),function(item){return _c('li',[_c('input',{directives:[{name:"validate",rawName:"v-validate",value:('required'),expression:"'required'"}],attrs:{"type":"radio","name":"payment"},domProps:{"value":item.id},on:{"click":function($event){_vm.isPayment($event)}}}),_vm._v(" "),_c('label',[_vm._v(_vm._s(item.name))])])})),_vm._v(" "),_c('span',{directives:[{name:"show",rawName:"v-show",value:(_vm.errors.has('payment')),expression:"errors.has('payment')"}],staticClass:"help is-danger"},[_vm._v(_vm._s(_vm.errors.first('payment')))]),_vm._v(" "),_c('div',{staticClass:"col-md-12"},[_c('button',{staticClass:"btn btn-primary",attrs:{"type":"button"},on:{"click":_vm.confirm}},[_vm._v("Confirm")])])])]):_c('div',[_c('h3',{staticClass:"my-4"},[_vm._v("Cart is empty")])])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('thead',[_c('tr',[_c('th',[_vm._v("№")]),_vm._v(" "),_c('th',[_vm._v("Name")]),_vm._v(" "),_c('th',[_vm._v("Count")]),_vm._v(" "),_c('th',[_vm._v("Price "),_c('i',{staticClass:"fa fa-eur",attrs:{"aria-hidden":"true"}})]),_vm._v(" "),_c('th',[_vm._v("Discount "),_c('i',{staticClass:"fa fa-eur",attrs:{"aria-hidden":"true"}})]),_vm._v(" "),_c('th',[_vm._v("Sum")])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('td',[_c('b',[_vm._v("Sum")]),_vm._v(" "),_c('i',{staticClass:"fa fa-eur",attrs:{"aria-hidden":"true"}})])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('td',[_c('b',[_vm._v("Customer discount ")]),_vm._v(" "),_c('i',{staticClass:"fa fa-eur",attrs:{"aria-hidden":"true"}})])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('td',[_c('b',[_vm._v("Total")]),_vm._v(" "),_c('i',{staticClass:"fa fa-eur",attrs:{"aria-hidden":"true"}})])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "BBq2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[(_vm.error)?_c('p',{staticClass:"auth-danger"},[_vm._v(_vm._s(_vm.error))]):_vm._e(),_vm._v(" "),(!_vm.access)?_c('div',{staticClass:"auth_form"},[_c('form',{staticClass:"navbar-form navbar-left",on:{"submit":function($event){$event.preventDefault();_vm.validForm($event)}}},[_c('div',{staticClass:"form-group"},[_c('p',{class:{ 'control': true }},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.email),expression:"email"},{name:"validate",rawName:"v-validate",value:('required|email'),expression:"'required|email'"}],class:{'input form-control': true, 'is-danger': _vm.errors.has('email') },attrs:{"type":"text","name":"email","placeholder":"Email"},domProps:{"value":(_vm.email)},on:{"input":function($event){if($event.target.composing){ return; }_vm.email=$event.target.value}}})])]),_vm._v(" "),_c('div',{staticClass:"form-group"},[_c('p',{class:{ 'control': true }},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.password),expression:"password"},{name:"validate",rawName:"v-validate",value:('required'),expression:"'required'"}],class:{'input form-control': true, 'is-danger': _vm.errors.has('password') },attrs:{"type":"password","name":"password","placeholder":"Password"},domProps:{"value":(_vm.password)},on:{"input":function($event){if($event.target.composing){ return; }_vm.password=$event.target.value}}})])]),_vm._v(" "),_c('button',{staticClass:"btn btn-primary",attrs:{"type":"submit"}},[_vm._v("Submit")]),_vm._v(" "),_c('a',{staticClass:"register_link",attrs:{"href":"/register"}},[_vm._v("Register")])])]):_c('div',{staticClass:"user_block"},[_c('i',{staticClass:"fa fa-user-times",attrs:{"aria-hidden":"true"}}),_vm._v(" "),_c('router-link',{attrs:{"to":{ name: 'layout.User'}}},[_vm._v(_vm._s(this.$parent.$parent.$parent.user.name))]),_vm._v(" "),_c('p',{staticClass:"logout"},[_c('a',{attrs:{"href":"#"},on:{"click":_vm.logout}},[_vm._v("Logout")])])],1)])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "BKtV":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "CA4J":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'edit',
  data: function data() {
    return {
      genre: '',
      name: ''
    };
  },

  methods: {
    edit: function edit() {

      var config = {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
        }
      };

      this.axios.put(this.$parent.$parent.AJAX_URL + '/book/client/api/genres/' + this.$route.params.id, {
        name: this.name ? this.name : this.genre.name
      }, config).then(function (response) {

        if (response.status == 200) {
          if (!response.data.success) {
            console.log(response.data.message);
          } else {
            location.href = '#/admin/genres';
          }
        } else {
          console.log(response.data.message);
        }
      });
    }
  },
  created: function created() {
    var _this = this;

    this.axios.get(this.$parent.$parent.AJAX_URL + '/book/client/api/genres/' + this.$route.params.id).then(function (response) {

      if (response.status == 200) {
        if (response.data.status) {
          _this.genre = response.data.data;
        } else {
          console.log(response.data.message);
        }
      } else {
        console.log(response.data.message);
      }
    });
  }
});

/***/ }),

/***/ "CHrF":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"edit"},[_c('h3',{staticClass:"my-4"},[_vm._v("Edit Book")]),_vm._v(" "),_c('tabs',{attrs:{"options":{ useUrlFragment: false }}},[_c('tab',{attrs:{"name":"Book info"}},[_c('form',{on:{"submit":function($event){$event.preventDefault();_vm.edit($event)}}},[_c('div',{staticClass:"form-group"},[_c('label',{attrs:{"for":"text"}},[_vm._v("Name:")]),_vm._v(" "),_c('p',{class:{ 'control': true }},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.name),expression:"name"},{name:"validate",rawName:"v-validate",value:('required|alpha'),expression:"'required|alpha'"},{name:"default-value",rawName:"v-default-value",value:(_vm.book.name),expression:"book.name"}],class:{'input form-control': true, 'is-danger': _vm.errors.has('name') },attrs:{"type":"text","name":"name"},domProps:{"value":(_vm.name)},on:{"input":function($event){if($event.target.composing){ return; }_vm.name=$event.target.value}}})]),_vm._v(" "),_c('span',{directives:[{name:"show",rawName:"v-show",value:(_vm.errors.has('name')),expression:"errors.has('name')"}],staticClass:"help is-danger"},[_vm._v(_vm._s(_vm.errors.first('name')))])]),_vm._v(" "),_c('div',{staticClass:"form-group"},[_c('label',{attrs:{"for":"text"}},[_vm._v("Description:")]),_vm._v(" "),_c('textarea',{directives:[{name:"default-value",rawName:"v-default-value",value:(_vm.book.description),expression:"book.description"},{name:"model",rawName:"v-model",value:(_vm.description),expression:"description"}],staticClass:"form-control",domProps:{"value":(_vm.description)},on:{"input":function($event){if($event.target.composing){ return; }_vm.description=$event.target.value}}})]),_vm._v(" "),_c('div',{staticClass:"form-group"},[_c('label',{attrs:{"for":"text"}},[_vm._v("Price:")]),_vm._v(" "),_c('p',{class:{ 'control': true }},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.price),expression:"price"},{name:"validate",rawName:"v-validate",value:('required|alpha'),expression:"'required|alpha'"},{name:"default-value",rawName:"v-default-value",value:(_vm.book.price),expression:"book.price"}],class:{'input form-control': true, 'is-danger': _vm.errors.has('price') },attrs:{"type":"text","name":"price"},domProps:{"value":(_vm.price)},on:{"input":function($event){if($event.target.composing){ return; }_vm.price=$event.target.value}}})])]),_vm._v(" "),_c('div',{staticClass:"form-group"},[_c('label',{attrs:{"for":"text"}},[_vm._v("Discaunt:")]),_vm._v(" "),_c('input',{directives:[{name:"default-value",rawName:"v-default-value",value:(_vm.book.discaunt),expression:"book.discaunt"},{name:"model",rawName:"v-model",value:(_vm.discaunt),expression:"discaunt"}],staticClass:"form-control",attrs:{"type":"text"},domProps:{"value":(_vm.discaunt)},on:{"input":function($event){if($event.target.composing){ return; }_vm.discaunt=$event.target.value}}})]),_vm._v(" "),_c('button',{staticClass:"btn btn-default",attrs:{"type":"submit"}},[_vm._v("Edit")])])]),_vm._v(" "),_c('tab',{attrs:{"name":"Choose author"}},[_c('div',{staticClass:"book_author"},[_c('p',{staticClass:"success"},[_vm._v(_vm._s(_vm.success))]),_vm._v(" "),_c('multiselect',{attrs:{"options":_vm.authors,"multiple":true,"track-by":"name","custom-label":_vm.customLabel},model:{value:(_vm.info_author),callback:function ($$v) {_vm.info_author=$$v},expression:"info_author"}}),_vm._v(" "),_c('button',{staticClass:"btn btn-default mt20",on:{"click":_vm.saveAuthor}},[_vm._v("Save")])],1)]),_vm._v(" "),_c('tab',{attrs:{"name":"Choose genre"}},[_c('div',{staticClass:"book_genre"},[_c('p',{staticClass:"success"},[_vm._v(_vm._s(_vm.success))]),_vm._v(" "),_c('multiselect',{attrs:{"options":_vm.genres,"multiple":true,"track-by":"name","custom-label":_vm.customLabel},model:{value:(_vm.info_genre),callback:function ($$v) {_vm.info_genre=$$v},expression:"info_genre"}}),_vm._v(" "),_c('button',{staticClass:"btn btn-default mt20",on:{"click":_vm.saveGenre}},[_vm._v("Save")])],1)])],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "CdDe":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "CdnM":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "Cl3J":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Layout_vue__ = __webpack_require__("wLEQ");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7cb2576e_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Layout_vue__ = __webpack_require__("KTgd");
function injectStyle (ssrContext) {
  __webpack_require__("i4P1")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Layout_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7cb2576e_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Layout_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "DJ6L":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["a"] = ({
	name: 'cart',
	data: function data() {
		return {
			books: '',
			payment_systems: '',
			payment: '',
			discaunt: 0,
			total: ''
		};
	},
	created: function created() {
		var _this = this;

		if (this.$parent.$parent.user) {
			var instance = this.axios.create({
				baseURL: this.$parent.$parent.AJAX_URL
			});

			instance.defaults.headers.common['Authorization'] = this.$parent.$parent.user.access_token;

			this.axios.get(this.$parent.$parent.AJAX_URL + '/book/client/api/cart').then(function (response) {

				if (response.status == 200) {
					if (response.data.status) {
						_this.books = response.data.data.books;
						_this.payment_systems = response.data.data.payment_systems;
						_this.discaunt = response.data.data.customer.discaunt;
					} else {
						console.log(response.data.message);
					}
				} else {
					console.log(response.data.message);
				}
			});
		}
	},

	methods: {
		isPayment: function isPayment(event) {
			this.payment = event.target.value;
		},
		changeCount: function changeCount(key, operation) {

			if (operation > 0) {
				this.books[key].count++;
			} else {
				this.books[key].count--;
				if (this.books[key].count <= 1) {
					this.books[key].count = 1;
				}
			}
		},

		remove: function remove(id, key) {
			var answer = confirm('Are you sure?');
			if (answer) {
				this.axios.delete(this.$parent.$parent.AJAX_URL + '/book/client/api/cart/' + id).then(function (response) {

					if (response.status == 200) {
						if (response.data.status) {
							location.reload();
						} else {
							console.log(response.data.message);
						}
					} else {
						console.log(response.data.message);
					}
				});
			}
		},
		confirm: function confirm() {
			var _this2 = this;

			this.$validator.validateAll().then(function (result) {
				if (result) {
					var self = _this2;
					var config = {
						headers: {
							'Content-Type': 'application/x-www-form-urlencoded'
						}
					};

					_this2.axios.post(_this2.$parent.$parent.AJAX_URL + '/book/client/api/orders', {
						books: _this2.books,
						sum: +_this2.total,
						payment_id: +_this2.payment
					}, config).then(function (response) {
						if (response.data.success) {

							self.axios.delete(self.$parent.$parent.AJAX_URL + '/book/client/api/cart').then(function (response) {

								if (response.status == 200) {
									if (response.data.status) {
										location.href = '/success';
									} else {
										console.log(response.data.message);
									}
								} else {
									console.log(response.data.message);
								}
							});
						}
					}).catch(function (error) {
						console.log(error);
					});
				}
			});
		}
	},
	computed: {
		Total: function Total() {
			var total = 0;
			var sum = 0;

			for (var key in this.books) {
				if (this.books[key].discaunt) {
					sum = this.books[key].price - this.books[key].discaunt;
				} else {
					sum = this.books[key].price;
				}
				sum *= this.books[key].count;
				total += sum;
			}
			this.total = total - this.discaunt;
			return total;
		}
	}
});

/***/ }),

/***/ "EUtp":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
	name: 'page_not_found'
});

/***/ }),

/***/ "EbOk":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "FIY1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _vm._m(0)}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"center"},[_c('img',{staticClass:"error",attrs:{"src":__webpack_require__("zAji")}})])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "Fcu/":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"success"},[_c('h3',{staticClass:"my-4"},[_vm._v(_vm._s(_vm.msg))])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "GhPP":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"edit"},[_c('h3',{staticClass:"my-4"},[_vm._v("Edit Genre")]),_vm._v(" "),_c('form',{on:{"submit":function($event){$event.preventDefault();_vm.edit($event)}}},[_c('div',{staticClass:"form-group"},[_c('label',{attrs:{"for":"text"}},[_vm._v("Name:")]),_vm._v(" "),_c('p',{class:{ 'control': true }},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.name),expression:"name"},{name:"validate",rawName:"v-validate",value:('required|alpha'),expression:"'required|alpha'"},{name:"default-value",rawName:"v-default-value",value:(_vm.genre.name),expression:"genre.name"}],class:{'input form-control': true, 'is-danger': _vm.errors.has('name') },attrs:{"type":"text","name":"name"},domProps:{"value":(_vm.name)},on:{"input":function($event){if($event.target.composing){ return; }_vm.name=$event.target.value}}})]),_vm._v(" "),_c('span',{directives:[{name:"show",rawName:"v-show",value:(_vm.errors.has('name')),expression:"errors.has('name')"}],staticClass:"help is-danger"},[_vm._v(_vm._s(_vm.errors.first('name')))])]),_vm._v(" "),_c('button',{staticClass:"btn btn-default",attrs:{"type":"submit"}},[_vm._v("Edit")])])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "GkDJ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"auth"},[_c('h2',[_vm._v("Login")]),_vm._v(" "),_c('form',{staticClass:"login_form",on:{"submit":function($event){$event.preventDefault();_vm.validForm($event)}}},[(_vm.error)?_c('p',{staticClass:"is-danger"},[_vm._v(_vm._s(_vm.error))]):_vm._e(),_vm._v(" "),_c('p',{class:{ 'control': true }},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.email),expression:"email"},{name:"validate",rawName:"v-validate",value:('required|email'),expression:"'required|email'"}],class:{'input form-control': true, 'is-danger': _vm.errors.has('email') },attrs:{"type":"text","name":"email","placeholder":"Email"},domProps:{"value":(_vm.email)},on:{"input":function($event){if($event.target.composing){ return; }_vm.email=$event.target.value}}})]),_vm._v(" "),_c('span',{directives:[{name:"show",rawName:"v-show",value:(_vm.errors.has('email')),expression:"errors.has('email')"}],staticClass:"help is-danger"},[_vm._v(_vm._s(_vm.errors.first('email')))]),_vm._v(" "),_c('p',{class:{ 'control': true }},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.password),expression:"password"},{name:"validate",rawName:"v-validate",value:('required'),expression:"'required'"}],class:{'input form-control': true, 'is-danger': _vm.errors.has('password') },attrs:{"type":"password","name":"password","placeholder":"Password"},domProps:{"value":(_vm.password)},on:{"input":function($event){if($event.target.composing){ return; }_vm.password=$event.target.value}}})]),_vm._v(" "),_c('span',{directives:[{name:"show",rawName:"v-show",value:(_vm.errors.has('password')),expression:"errors.has('password')"}],staticClass:"help is-danger"},[_vm._v(_vm._s(_vm.errors.first('password')))]),_vm._v(" "),_vm._m(0)])])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('p',[_c('button',{staticClass:"btn btn-primary",attrs:{"type":"submit"}},[_vm._v("Login")])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "HJeI":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__("aERG");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_ce1482c8_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__("pNhs");
function injectStyle (ssrContext) {
  __webpack_require__("VJVQ")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_ce1482c8_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "Ijob":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"category"},[_c('h3',{staticClass:"my-4"},[_vm._v(_vm._s(_vm.category.name))]),_vm._v(" "),_c('div',{staticClass:"row"},_vm._l((_vm.books),function(book){return _c('div',{staticClass:"col-lg-4 col-md-6 mb-4"},[_c('div',{staticClass:"card h-100"},[_c('a',{attrs:{"href":'/book/' + book.id}},[_c('img',{staticClass:"card-img-top",attrs:{"src":"http://placehold.it/700x400","alt":""}})]),_vm._v(" "),(book.discaunt != 0)?_c('p',{staticClass:"discount"},[_vm._v(" - "),_c('i',{staticClass:"fa fa-eur",attrs:{"aria-hidden":"true"}}),_vm._v(" "+_vm._s(book.discaunt))]):_vm._e(),_vm._v(" "),_c('div',{staticClass:"card-body"},[_c('h4',{staticClass:"card-title"},[_c('a',{attrs:{"href":'/book/' + book.id}},[_vm._v(_vm._s(book.name))])]),_vm._v(" "),_c('h5',[_c('i',{staticClass:"fa fa-eur",attrs:{"aria-hidden":"true"}}),_vm._v(_vm._s(book.price))]),_vm._v(" "),_c('p',{staticClass:"card-text"},[_vm._v(_vm._s(book.description))])]),_vm._v(" "),_vm._m(0,true)])])}))])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"card-footer"},[_c('small',{staticClass:"text-muted"},[_vm._v("★ ★ ★ ★ ☆")])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "IkWQ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_template_compiler_index_id_data_v_76d1a3c6_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_About_vue__ = __webpack_require__("Wzf/");
var normalizeComponent = __webpack_require__("VU/8")
/* script */
var __vue_script__ = null
/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_template_compiler_index_id_data_v_76d1a3c6_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_About_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "Iykh":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"layout"},[_c('nav',{staticClass:"navbar navbar-expand-lg navbar-dark bg-dark fixed-top"},[_c('div',{staticClass:"container"},[_c('a',{staticClass:"navbar-brand",attrs:{"href":"/admin"}},[_vm._v("Admin panel")]),_vm._v(" "),_c('a',{staticClass:"navbar-brand",attrs:{"href":"#"},on:{"click":_vm.logout}},[_vm._v("Logout")])])]),_vm._v(" "),_c('div',{staticClass:"container"},[_c('div',{staticClass:"row"},[_vm._m(0),_vm._v(" "),_c('div',{staticClass:"col-lg-9"},[_c('router-view')],1)])])])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"col-lg-3"},[_c('h3',{staticClass:"my-4"},[_vm._v("Menu")]),_vm._v(" "),_c('div',{staticClass:"list-group"},[_c('div',{staticClass:"list-group-item"},[_c('a',{attrs:{"href":"/admin"}},[_c('i',{staticClass:"fa fa-dashboard fa-fw",attrs:{"aria-hidden":"true"}}),_vm._v(" Dashboard\n\t\t\t\t        \t")])]),_vm._v(" "),_c('div',{staticClass:"list-group-item"},[_c('a',{attrs:{"href":"/admin/authors"}},[_c('i',{staticClass:"fa fa-pencil",attrs:{"aria-hidden":"true"}}),_vm._v(" Authors\n\t\t\t\t        \t")]),_vm._v(" "),_c('a',{staticClass:"btn btn-primary btn_add",attrs:{"href":"/admin/author/create"}},[_c('i',{staticClass:"fa fa-plus",attrs:{"aria-hidden":"true"}})])]),_vm._v(" "),_c('div',{staticClass:"list-group-item"},[_c('a',{attrs:{"href":"/admin/genres"}},[_c('i',{staticClass:"fa fa-leaf",attrs:{"aria-hidden":"true"}}),_vm._v(" Genres\n\t\t\t\t        \t")]),_vm._v(" "),_c('a',{staticClass:"btn btn-primary btn_add",attrs:{"href":"/admin/genre/create"}},[_c('i',{staticClass:"fa fa-plus",attrs:{"aria-hidden":"true"}})])]),_vm._v(" "),_c('div',{staticClass:"list-group-item"},[_c('a',{attrs:{"href":"/admin/books"}},[_c('i',{staticClass:"fa fa-book",attrs:{"aria-hidden":"true"}}),_vm._v(" Books\n\t\t\t\t        \t")]),_vm._v(" "),_c('a',{staticClass:"btn btn-primary btn_add",attrs:{"href":"/admin/book/create"}},[_c('i',{staticClass:"fa fa-plus",attrs:{"aria-hidden":"true"}})])]),_vm._v(" "),_c('div',{staticClass:"list-group-item"},[_c('a',{attrs:{"href":"/admin/customers"}},[_c('i',{staticClass:"fa fa-users",attrs:{"aria-hidden":"true"}}),_vm._v(" Customers\n\t\t\t\t        \t")]),_vm._v(" "),_c('a',{staticClass:"btn btn-primary btn_add",attrs:{"href":"/admin/customer/create"}},[_c('i',{staticClass:"fa fa-plus",attrs:{"aria-hidden":"true"}})])]),_vm._v(" "),_c('div',{staticClass:"list-group-item"},[_c('a',{attrs:{"href":"/admin/orders"}},[_c('i',{staticClass:"fa fa-shopping-cart",attrs:{"aria-hidden":"true"}}),_vm._v(" Orders\n\t\t\t\t        \t")])])])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "JXsb":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__ = __webpack_require__("mvHQ");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__);

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
	name: 'AuthForm',
	data: function data() {
		return {
			email: '',
			password: '',
			error: '',
			access: false
		};
	},

	methods: {
		validForm: function validForm() {
			var _this = this;

			var self = this;
			this.$validator.validateAll().then(function (result) {

				if (result) {
					var config = {
						headers: {
							'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
						}
					};

					_this.axios.put(_this.$parent.$parent.$parent.AJAX_URL + '/book/client/api/auth', {
						email: _this.email,
						password: btoa(_this.password)
					}, config).then(function (response) {

						if (response.status == 200) {
							if (!response.data.success) {
								self.error = response.data.message;
							} else {
								localStorage.setItem('profile', __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default()(response.data.data));
								self.access = true;
								_this.$emit('login');
							}
						} else {
							console.log(response.data.message);
						}
					});
				}
			});
		},
		logout: function logout() {
			this.email = '';
			this.password = '';
			this.access = false;
			this.$emit('logout');
		}
	},
	created: function created() {
		if (this.$parent.$parent.$parent.user) {
			this.access = true;
		}
	}
});

/***/ }),

/***/ "KGHR":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["a"] = ({
	name: 'author',
	data: function data() {
		return {
			name: ''
		};
	},

	methods: {
		create: function create() {
			var _this = this;

			this.$validator.validateAll().then(function (result) {
				if (result) {
					var config = {
						headers: {
							'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
						}
					};

					_this.axios.post(_this.$parent.$parent.AJAX_URL + '/book/client/api/authors', {
						name: _this.name
					}, config).then(function (response) {

						if (response.status == 200) {
							if (!response.data.success) {
								console.log(response.data.message);
							} else {
								location.href = '/admin/authors';
							}
						} else {
							console.log(response.data.message);
						}
					});
				}
			});
		}
	}
});

/***/ }),

/***/ "KTgd":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"main"},[_c('top-menu',{on:{"login":_vm.login,"logout":_vm.logout}}),_vm._v(" "),_c('div',{staticClass:"container"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-lg-3 mt-40"},[_c('sidebar')],1),_vm._v(" "),_c('div',{staticClass:"col-lg-9 mt-40"},[_c('router-view')],1)])]),_vm._v(" "),_c('bottom')],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "L1UD":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'index',
    data: function data() {
        return {
            books: ''
        };
    },

    methods: {
        remove: function remove(id) {
            var answer = confirm('Are you sure?');
            if (answer) {
                this.axios.delete(this.$parent.$parent.AJAX_URL + '/book/client/api/books/' + id).then(function (response) {

                    if (response.status == 200) {
                        if (response.data.status) {
                            location.reload();
                        } else {
                            console.log(response.data.message);
                        }
                    } else {
                        console.log(response.data.message);
                    }
                });
            }
        }
    },
    created: function created() {
        var _this = this;

        this.axios.get(this.$parent.$parent.AJAX_URL + '/book/client/api/books').then(function (response) {

            if (response.status == 200) {
                if (response.data.status) {
                    _this.books = response.data.data;
                } else {
                    console.log(response.data.message);
                }
            } else {
                console.log(response.data.message);
            }
        });
    }
});

/***/ }),

/***/ "LNO4":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["a"] = ({
	name: 'create',
	data: function data() {
		return {
			name: '',
			email: '',
			password: '',
			repeat_password: '',
			discaunt: '',
			status: '',
			error: ''
		};
	},

	methods: {
		create: function create() {
			var _this = this;

			var self = this;
			this.$validator.validateAll().then(function (result) {
				if (result) {
					var config = {
						headers: {
							'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
						}
					};

					_this.axios.post(_this.$parent.$parent.AJAX_URL + '/book/client/api/customers', {
						name: _this.name,
						email: _this.email,
						password: btoa(_this.password),
						discaunt: _this.discaunt ? +_this.discaunt : 0,
						status: 1
					}, config).then(function (response) {

						if (response.status == 200) {
							if (!response.data.success) {
								self.error = response.data.message;
							} else {
								location.href = '#/admin/customers';
							}
						} else {
							console.log(response.data.message);
						}
					});
				}
			});
		}
	}
});

/***/ }),

/***/ "Lt96":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_edit_vue__ = __webpack_require__("b6Dy");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_4cf3bda0_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_edit_vue__ = __webpack_require__("+u6R");
function injectStyle (ssrContext) {
  __webpack_require__("o8I/")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_edit_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_4cf3bda0_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_edit_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "M93x":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_App_vue__ = __webpack_require__("xJD8");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_25441132_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_App_vue__ = __webpack_require__("Vq/C");
function injectStyle (ssrContext) {
  __webpack_require__("WpCr")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_App_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_25441132_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_App_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "MV82":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
	name: 'PreOrderForm',
	data: function data() {
		return {
			name: '',
			email: '',
			password: '',
			repeat_password: '',
			error: '',
			success: ''
		};
	},

	methods: {
		validForm: function validForm() {
			var _this = this;

			var self = this;
			this.$validator.validateAll().then(function (result) {
				if (result) {
					var config = {
						headers: {
							'Content-Type': 'application/x-www-form-urlencoded'
						}
					};

					_this.axios.post(_this.$parent.$parent.AJAX_URL + '/book/client/api/auth', {
						name: _this.name,
						email: _this.email,
						password: btoa(_this.password)
					}, config).then(function (response) {
						if (!response.data.success) {
							self.error = response.data.message;
						} else {
							self.success = response.data.message;
						}
					}).catch(function (error) {
						console.log(error);
					});
				}
			});
		}
	}
	/*created() {
 	if (localStorage.getItem("profile")) {
 		location.href = '/';
 	}
 }*/
});

/***/ }),

/***/ "Mxux":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Login_vue__ = __webpack_require__("+AzP");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_058baf9a_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Login_vue__ = __webpack_require__("GkDJ");
function injectStyle (ssrContext) {
  __webpack_require__("aiLR")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Login_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_058baf9a_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Login_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "N8hv":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _vm._m(0)}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('footer',{staticClass:"py-5 bg-dark"},[_c('div',{staticClass:"container"},[_c('p',{staticClass:"m-0 text-center text-white"},[_vm._v("Copyright © Your Website 2017")])])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "NHnr":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__("7+uW");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App__ = __webpack_require__("M93x");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__router__ = __webpack_require__("YaEn");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_axios__ = __webpack_require__("mtWM");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_vue_axios__ = __webpack_require__("Rf8U");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_vue_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_vue_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_vee_validate__ = __webpack_require__("sUu7");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_vue_default_value__ = __webpack_require__("paTi");
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.










__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].use(__WEBPACK_IMPORTED_MODULE_5_vee_validate__["a" /* default */]);
__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].use(__WEBPACK_IMPORTED_MODULE_4_vue_axios___default.a, __WEBPACK_IMPORTED_MODULE_3_axios___default.a);
__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].use(__WEBPACK_IMPORTED_MODULE_6_vue_default_value__["a" /* default */]);

__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].config.productionTip = false;

/* eslint-disable no-new */
new __WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */]({
  el: '#app',
  router: __WEBPACK_IMPORTED_MODULE_2__router__["a" /* default */],
  template: '<App/>',
  components: { App: __WEBPACK_IMPORTED_MODULE_1__App__["a" /* default */] }
});

/***/ }),

/***/ "ODas":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["a"] = ({
	name: 'edit',
	data: function data() {
		return {
			customer: '',
			name: '',
			email: '',
			discaunt: '',
			status: '',
			orders: '',
			showInfo: { id: 0 },
			orderInfo: {}
		};
	},

	methods: {
		moreInfo: function moreInfo(id) {
			var _this = this;

			this.axios.get(this.$parent.$parent.AJAX_URL + '/book/client/api/orders/' + id).then(function (response) {

				if (response.status == 200) {
					if (response.data.status) {
						_this.orderInfo[id] = response.data.data;
						_this.showInfo.id = id;
					} else {
						console.log(response.data.message);
					}
				} else {
					console.log(response.data.message);
				}
			});
		},

		hideInfo: function hideInfo() {
			this.showInfo.id = 0;
		},

		isStatus: function isStatus(event) {
			this.status = event.target.value;
		},
		edit: function edit() {

			var config = {
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
				}
			};

			this.axios.put(this.$parent.$parent.AJAX_URL + '/book/client/api/customers/' + this.$route.params.id, {
				name: this.name ? this.name : this.customer.name,
				email: this.email ? this.email : this.customer.email,
				discaunt: this.discaunt ? +this.discaunt : +this.customer.discaunt,
				status: this.status ? +this.status : +this.customer.status
			}, config).then(function (response) {

				if (response.status == 200) {
					if (!response.data.success) {
						console.log(response.data.message);
					} else {
						location.href = '/admin/customers';
					}
				} else {
					console.log(response.data.message);
				}
			});
		}
	},
	created: function created() {
		var _this2 = this;

		this.axios.get(this.$parent.$parent.AJAX_URL + '/book/client/api/customers/' + this.$route.params.id).then(function (response) {

			if (response.status == 200) {
				if (response.data.status) {
					_this2.customer = response.data.data;
					var self = _this2;

					var instance = _this2.axios.create({
						baseURL: _this2.$parent.$parent.AJAX_URL
					});

					instance.defaults.headers.common['Authorization'] = _this2.customer.token;

					_this2.axios.get(_this2.$parent.$parent.AJAX_URL + '/book/client/api/orders/all/customer').then(function (response) {
						if (response.status == 200) {
							if (response.data.success) {
								self.orders = response.data.data;
							} else {
								console.log(response.data.message);
							}
						} else {
							console.log(response.data.message);
						}
					});
				} else {
					console.log(response.data.message);
				}
			} else {
				console.log(response.data.message);
			}
		});
	}
});

/***/ }),

/***/ "P52q":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["a"] = ({
	name: 'index',
	data: function data() {
		return {
			orders: '',
			status: '',
			orderInfo: {},
			showStatus: { id: 0 },
			showInfo: { id: 0 },
			sortOrder: true
		};
	},

	methods: {
		sort: function sort() {
			this.sortOrder = !this.sortOrder;
			if (this.sortOrder) {
				this.orders.sort(function (a, b) {
					return b.create_at.toString().localeCompare(a.create_at);
				});
			} else {
				this.orders.sort(function (a, b) {
					return a.create_at.toString().localeCompare(b.create_at);
				});
			}
		},
		moreInfo: function moreInfo(id) {
			var _this = this;

			this.axios.get(this.$parent.$parent.AJAX_URL + '/book/client/api/orders/' + id).then(function (response) {

				if (response.status == 200) {
					if (response.data.status) {
						_this.orderInfo[id] = response.data.data;
						_this.showStatus.id = id;
						_this.showInfo.id = id;
					} else {
						console.log(response.data.message);
					}
				} else {
					console.log(response.data.message);
				}
			});
		},
		hideInfo: function hideInfo(order) {
			this.showInfo.id = 0;
			this.showStatus.id = 0;
		},
		changeStatus: function changeStatus(order) {
			var _this2 = this;

			var self = this;
			var config = {
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
				}
			};

			this.axios.put(this.$parent.$parent.AJAX_URL + '/book/client/api/orders/' + order.id, {
				id_status: +this.status
			}, config).then(function (response) {

				if (response.status == 200) {
					if (!response.data.success) {
						console.log(response.data.message);
					} else {

						_this2.orderInfo[order.id].status_orders.forEach(function (item, i, arr) {
							if (item.id == self.status) {
								order.STATUS_NAME = item.name;
							}
						});
					}
				} else {
					console.log(response.data.message);
				}
			});
		}

	},
	created: function created() {
		var _this3 = this;

		this.axios.get(this.$parent.$parent.AJAX_URL + '/book/client/api/orders').then(function (response) {

			if (response.status == 200) {
				if (response.data.status) {
					_this3.orders = response.data.data;
				} else {
					console.log(response.data.message);
				}
			} else {
				console.log(response.data.message);
			}
		});
	}
});

/***/ }),

/***/ "Rc7V":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_create_vue__ = __webpack_require__("yLcD");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_25222228_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_create_vue__ = __webpack_require__("cty8");
function injectStyle (ssrContext) {
  __webpack_require__("zEIY")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_create_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_25222228_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_create_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "RcB+":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Category_vue__ = __webpack_require__("+Qdm");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_dc0cb1c4_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Category_vue__ = __webpack_require__("Ijob");
function injectStyle (ssrContext) {
  __webpack_require__("CdnM")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Category_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_dc0cb1c4_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Category_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "Rxqw":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__("P52q");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_38d0a367_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__("kHlm");
function injectStyle (ssrContext) {
  __webpack_require__("0agQ")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_38d0a367_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "TKcw":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "TRdL":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "U4dq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["a"] = ({
		name: 'book',
		data: function data() {
				return {
						book: '',
						price: 0,
						success: '',
						count: 1
				};
		},
		created: function created() {
				var _this = this;

				this.axios.get(this.$parent.$parent.AJAX_URL + '/book/client/api/books/' + this.$route.params.id).then(function (response) {

						if (response.status == 200) {
								if (response.data.status) {
										_this.book = response.data.data;

										if (_this.book.discaunt != 0) {
												_this.price = _this.book.price - _this.book.discaunt;
										}
								} else {
										console.log(response.data.message);
								}
						} else {
								console.log(response.data.message);
						}
				});
		},

		methods: {
				addCart: function addCart() {
						var self = this;
						var config = {
								headers: {
										'Content-Type': 'application/x-www-form-urlencoded'
								}
						};

						var instance = this.axios.create({
								baseURL: this.$parent.$parent.AJAX_URL
						});

						instance.defaults.headers.common['Authorization'] = this.$parent.$parent.user.access_token;

						this.axios.post(this.$parent.$parent.AJAX_URL + '/book/client/api/cart', {
								id_book: +this.$route.params.id,
								count: +this.count
						}, config).then(function (response) {
								if (!response.data.success) {
										console.log(response.data.message);
								} else {
										self.success = response.data.message;
								}
						}).catch(function (error) {
								console.log(error);
						});
				},
				changeCount: function changeCount(operation) {
						this.count += operation;
						if (this.count <= 1) {
								this.count = 1;
						}
				}
		}
});

/***/ }),

/***/ "UP6V":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__AuthForm_vue__ = __webpack_require__("jAu/");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'TopMenu',
  components: {
    AuthForm: __WEBPACK_IMPORTED_MODULE_0__AuthForm_vue__["a" /* default */]
  },
  methods: {
    login: function login() {
      this.$emit('login');
    },
    logout: function logout() {
      this.$emit('logout');
    }
  }
});

/***/ }),

/***/ "VC2V":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Book_vue__ = __webpack_require__("U4dq");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_ff5288ee_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Book_vue__ = __webpack_require__("4QTS");
function injectStyle (ssrContext) {
  __webpack_require__("TKcw")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Book_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_ff5288ee_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Book_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "VJVQ":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "VoIC":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Cart_vue__ = __webpack_require__("DJ6L");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_093e0840_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Cart_vue__ = __webpack_require__("ABco");
function injectStyle (ssrContext) {
  __webpack_require__("/pTz")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Cart_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_093e0840_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Cart_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "Vq/C":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"app"}},[_c('router-view',{on:{"login":_vm.login,"logout":_vm.logout}})],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "WjK6":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "WlPA":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"genre"},[_c('h3',{staticClass:"my-4"},[_vm._v("Genres")]),_vm._v(" "),_c('div',{staticClass:"list-group"},[_c('p',{staticClass:"is-danger"},[_vm._v(_vm._s(_vm.error))]),_vm._v(" "),_c('table',{staticClass:"table table-hover"},[_vm._m(0),_vm._v(" "),_c('tbody',_vm._l((_vm.genres),function(genre,key){return _c('tr',[_c('td',[_vm._v(_vm._s(key+1))]),_vm._v(" "),_c('td',[_vm._v(_vm._s(genre.name))]),_vm._v(" "),_c('td',[_vm._v(_vm._s(genre.create_at))]),_vm._v(" "),_c('td',[_c('a',{staticClass:"btn btn-warning",attrs:{"href":'/admin/genre/edit/' + genre.id}},[_c('i',{staticClass:"fa fa-pencil-square-o",attrs:{"aria-hidden":"true"}})]),_vm._v(" "),_c('button',{staticClass:"btn btn-danger",attrs:{"type":"button"},on:{"click":function($event){_vm.remove(genre.id)}}},[_c('i',{staticClass:"fa fa-trash-o",attrs:{"aria-hidden":"true"}})])])])}))])])])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('thead',[_c('tr',[_c('th',[_vm._v("№")]),_vm._v(" "),_c('th',[_vm._v("Name")]),_vm._v(" "),_c('th',[_vm._v("Create")]),_vm._v(" "),_c('th')])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "WpCr":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "Wzf/":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('h3',{staticClass:"my-4"},[_vm._v("About")])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "X9zF":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "Y9CH":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_create_vue__ = __webpack_require__("LNO4");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_4cb6fbb5_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_create_vue__ = __webpack_require__("y+GZ");
function injectStyle (ssrContext) {
  __webpack_require__("TRdL")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_create_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_4cb6fbb5_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_create_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "YRlB":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["a"] = ({
	name: 'create',
	data: function data() {
		return {
			name: '',
			description: '',
			price: '',
			discaunt: ''
		};
	},

	methods: {
		create: function create() {
			var _this = this;

			this.$validator.validateAll().then(function (result) {
				if (result) {
					var config = {
						headers: {
							'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
						}
					};

					_this.axios.post(_this.$parent.$parent.AJAX_URL + '/book/client/api/books', {
						name: _this.name,
						description: _this.description,
						price: +_this.price,
						discaunt: +_this.discaunt
					}, config).then(function (response) {

						if (response.status == 200) {
							if (!response.data.success) {
								console.log(response.data.message);
							} else {
								location.href = '/admin/books';
							}
						} else {
							console.log(response.data.message);
						}
					});
				}
			});
		}
	}
});

/***/ }),

/***/ "YaEn":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__("7+uW");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_router__ = __webpack_require__("/ocq");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_PageNotFound__ = __webpack_require__("lM8h");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_admin_Layout__ = __webpack_require__("5Nbq");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_admin_Login__ = __webpack_require__("Mxux");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_admin_dashboard_index__ = __webpack_require__("q/M2");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_admin_authors_index__ = __webpack_require__("HJeI");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_admin_authors_create__ = __webpack_require__("7KOV");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_admin_authors_edit__ = __webpack_require__("Lt96");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_admin_genres_index__ = __webpack_require__("2L3f");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_admin_genres_create__ = __webpack_require__("Rc7V");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_admin_genres_edit__ = __webpack_require__("czTF");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_admin_books_index__ = __webpack_require__("jbcE");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_admin_books_create__ = __webpack_require__("d1nH");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_admin_books_edit__ = __webpack_require__("32/r");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_admin_customers_index__ = __webpack_require__("lx6M");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_admin_customers_create__ = __webpack_require__("Y9CH");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_admin_customers_edit__ = __webpack_require__("xhmQ");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_admin_orders_index__ = __webpack_require__("Rxqw");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_views_Category__ = __webpack_require__("RcB+");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_views_Book__ = __webpack_require__("VC2V");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_views_RegisterForm__ = __webpack_require__("kr4X");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_views_User__ = __webpack_require__("nnbN");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_views_About__ = __webpack_require__("IkWQ");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_Layout__ = __webpack_require__("Cl3J");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__components_views_Home__ = __webpack_require__("bvEa");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__components_views_Cart__ = __webpack_require__("VoIC");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__components_views_Success__ = __webpack_require__("9piT");





/*admin*/




/*admin authors*/




/*admin genres*/




/*admin books*/




/*admin customers*/




/*admin orders*/


/*end admin*/

/*frontend*/










/*end frontend*/

__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].use(__WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]({
  mode: 'history',
  routes: [{
    path: '/admin/login',
    name: 'Login',
    component: __WEBPACK_IMPORTED_MODULE_4__components_admin_Login__["a" /* default */]
  }, {
    path: '/admin',
    name: 'Layout',
    component: __WEBPACK_IMPORTED_MODULE_3__components_admin_Layout__["a" /* default */],
    children: [{
      path: '',
      name: 'Dashboard',
      component: __WEBPACK_IMPORTED_MODULE_5__components_admin_dashboard_index__["a" /* default */]
    }, {
      path: '/admin/authors',
      name: 'AdminAuthors',
      component: __WEBPACK_IMPORTED_MODULE_6__components_admin_authors_index__["a" /* default */]
    }, {
      path: '/admin/author/create',
      name: 'AuthorCreate',
      component: __WEBPACK_IMPORTED_MODULE_7__components_admin_authors_create__["a" /* default */]
    }, {
      path: '/admin/author/edit/:id',
      name: 'AuthorEdit',
      component: __WEBPACK_IMPORTED_MODULE_8__components_admin_authors_edit__["a" /* default */]
    }, {
      path: '/admin/genres',
      name: 'AdminGenres',
      component: __WEBPACK_IMPORTED_MODULE_9__components_admin_genres_index__["a" /* default */]
    }, {
      path: '/admin/genre/create',
      name: 'GenreCreate',
      component: __WEBPACK_IMPORTED_MODULE_10__components_admin_genres_create__["a" /* default */]
    }, {
      path: '/admin/genre/edit/:id',
      name: 'GenreEdit',
      component: __WEBPACK_IMPORTED_MODULE_11__components_admin_genres_edit__["a" /* default */]
    }, {
      path: '/admin/books',
      name: 'AdminBooks',
      component: __WEBPACK_IMPORTED_MODULE_12__components_admin_books_index__["a" /* default */]
    }, {
      path: '/admin/book/create',
      name: 'BookCreate',
      component: __WEBPACK_IMPORTED_MODULE_13__components_admin_books_create__["a" /* default */]
    }, {
      path: '/admin/book/edit/:id',
      name: 'BookEdit',
      component: __WEBPACK_IMPORTED_MODULE_14__components_admin_books_edit__["a" /* default */]
    }, {
      path: '/admin/customers',
      name: 'AdminCustomers',
      component: __WEBPACK_IMPORTED_MODULE_15__components_admin_customers_index__["a" /* default */]
    }, {
      path: '/admin/customer/create',
      name: 'CustomerCreate',
      component: __WEBPACK_IMPORTED_MODULE_16__components_admin_customers_create__["a" /* default */]
    }, {
      path: '/admin/customer/edit/:id',
      name: 'CustomerEdit',
      component: __WEBPACK_IMPORTED_MODULE_17__components_admin_customers_edit__["a" /* default */]
    }, {
      path: '/admin/orders',
      name: 'AdminOrders',
      component: __WEBPACK_IMPORTED_MODULE_18__components_admin_orders_index__["a" /* default */]
    }]
  }, {
    path: '/',
    name: 'layout',
    component: __WEBPACK_IMPORTED_MODULE_24__components_Layout__["a" /* default */],
    children: [{
      path: '',
      name: 'layout.Home',
      component: __WEBPACK_IMPORTED_MODULE_25__components_views_Home__["a" /* default */]
    }, {
      path: '/about',
      name: 'layout.About',
      component: __WEBPACK_IMPORTED_MODULE_23__components_views_About__["a" /* default */]
    }, {
      path: '/book/:id',
      name: 'layout.Book',
      component: __WEBPACK_IMPORTED_MODULE_20__components_views_Book__["a" /* default */]
    }, {
      path: '/:category/:id',
      name: 'layout.Category',
      component: __WEBPACK_IMPORTED_MODULE_19__components_views_Category__["a" /* default */]
    }, {
      path: '/register',
      name: 'layout.RegisterForm',
      component: __WEBPACK_IMPORTED_MODULE_21__components_views_RegisterForm__["a" /* default */]
    }, {
      path: '/user',
      name: 'layout.User',
      component: __WEBPACK_IMPORTED_MODULE_22__components_views_User__["a" /* default */]
    }, {
      path: '/cart',
      name: 'layout.Cart',
      component: __WEBPACK_IMPORTED_MODULE_26__components_views_Cart__["a" /* default */]
    }, {
      path: '/success',
      name: 'layout.Success',
      component: __WEBPACK_IMPORTED_MODULE_27__components_views_Success__["a" /* default */]
    }]
  }, {
    path: '/user',
    name: 'User',
    component: __WEBPACK_IMPORTED_MODULE_22__components_views_User__["a" /* default */]
  }, {
    path: '*',
    name: 'PageNotFound ',
    component: __WEBPACK_IMPORTED_MODULE_2__components_PageNotFound__["a" /* default */]
  }]
}));

/***/ }),

/***/ "YdM5":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty__ = __webpack_require__("bOdI");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty__);

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()({
	name: 'User',
	data: function data() {
		return {
			orders: '',
			showInfo: { id: 0 },
			orderInfo: {}
		};
	},

	methods: {},
	created: function created() {

		if (!this.$parent.$parent.user) {
			location.href = '/';
		}
		var self = this;

		this.axios.get(this.$parent.$parent.AJAX_URL + '/book/client/api/orders/all/customer').then(function (response) {
			if (response.status == 200) {
				if (response.data.success) {
					self.orders = response.data.data;
				} else {
					console.log(response.data.message);
				}
			} else {
				console.log(response.data.message);
			}
		});
	}
}, 'methods', {
	moreInfo: function moreInfo(id) {
		var _this = this;

		this.axios.get(this.$parent.$parent.AJAX_URL + '/book/client/api/orders/' + id).then(function (response) {

			if (response.status == 200) {
				if (response.data.status) {
					_this.orderInfo[id] = response.data.data;
					_this.showInfo.id = id;
				} else {
					console.log(response.data.message);
				}
			} else {
				console.log(response.data.message);
			}
		});
	},
	hideInfo: function hideInfo() {
		this.showInfo.id = 0;
	}
}));

/***/ }),

/***/ "aERG":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'author',
    data: function data() {
        return {
            authors: ''
        };
    },

    methods: {
        remove: function remove(id) {
            var answer = confirm('Are you sure?');
            if (answer) {
                this.axios.delete(this.$parent.$parent.AJAX_URL + '/book/client/api/authors/' + id).then(function (response) {

                    if (response.status == 200) {
                        if (response.data.status) {
                            location.reload();
                        } else {
                            console.log(response.data.message);
                        }
                    } else {
                        console.log(response.data.message);
                    }
                });
            }
        }
    },
    created: function created() {
        var _this = this;

        this.axios.get(this.$parent.$parent.AJAX_URL + '/book/client/api/authors').then(function (response) {

            if (response.status == 200) {
                if (response.data.status) {
                    _this.authors = response.data.data;
                } else {
                    console.log(response.data.message);
                }
            } else {
                console.log(response.data.message);
            }
        });
    }
});

/***/ }),

/***/ "aiLR":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "b6Dy":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["a"] = ({
	name: 'author',
	data: function data() {
		return {
			author: '',
			name: ''
		};
	},

	methods: {
		edit: function edit() {

			var config = {
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
				}
			};

			this.axios.put(this.$parent.$parent.AJAX_URL + '/book/client/api/authors/' + this.$route.params.id, {
				name: this.name ? this.name : this.author.name
			}, config).then(function (response) {

				if (response.status == 200) {
					if (!response.data.success) {
						console.log(response.data.message);
					} else {
						location.href = '#/admin/authors';
					}
				} else {
					console.log(response.data.message);
				}
			});
		}
	},
	created: function created() {
		var _this = this;

		this.axios.get(this.$parent.$parent.AJAX_URL + '/book/client/api/authors/' + this.$route.params.id).then(function (response) {

			if (response.status == 200) {
				if (response.data.status) {
					_this.author = response.data.data;
				} else {
					console.log(response.data.message);
				}
			} else {
				console.log(response.data.message);
			}
		});
	}
});

/***/ }),

/***/ "bvEa":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Home_vue__ = __webpack_require__("2cWa");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_2840eb02_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Home_vue__ = __webpack_require__("iAGW");
function injectStyle (ssrContext) {
  __webpack_require__("d2ZJ")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Home_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_2840eb02_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Home_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "cfXA":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "cty8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"create"},[_c('h3',{staticClass:"my-4"},[_vm._v("Create Genre")]),_vm._v(" "),_c('form',{on:{"submit":function($event){$event.preventDefault();_vm.create($event)}}},[_c('div',{staticClass:"form-group"},[_c('label',{attrs:{"for":"text"}},[_vm._v("Name:")]),_vm._v(" "),_c('p',{class:{ 'control': true }},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.name),expression:"name"},{name:"validate",rawName:"v-validate",value:('required'),expression:"'required'"}],class:{'input form-control': true, 'is-danger': _vm.errors.has('name') },attrs:{"type":"text","name":"name"},domProps:{"value":(_vm.name)},on:{"input":function($event){if($event.target.composing){ return; }_vm.name=$event.target.value}}})]),_vm._v(" "),_c('span',{directives:[{name:"show",rawName:"v-show",value:(_vm.errors.has('name')),expression:"errors.has('name')"}],staticClass:"help is-danger"},[_vm._v(_vm._s(_vm.errors.first('name')))])]),_vm._v(" "),_c('button',{staticClass:"btn btn-default",attrs:{"type":"submit"}},[_vm._v("Create")])])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "czTF":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_edit_vue__ = __webpack_require__("CA4J");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_c7e40a0c_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_edit_vue__ = __webpack_require__("GhPP");
function injectStyle (ssrContext) {
  __webpack_require__("dm/x")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_edit_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_c7e40a0c_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_edit_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "d1nH":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_create_vue__ = __webpack_require__("YRlB");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_25a4a9c0_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_create_vue__ = __webpack_require__("/nOp");
function injectStyle (ssrContext) {
  __webpack_require__("ozHj")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_create_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_25a4a9c0_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_create_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "d2ZJ":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "dm/x":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "dy9f":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "ewqj":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'index',
    data: function data() {
        return {
            genres: '',
            error: ''
        };
    },

    methods: {
        remove: function remove(id) {
            var _this = this;

            var answer = confirm('Are you sure?');
            if (answer) {
                this.axios.delete(this.$parent.$parent.AJAX_URL + '/book/client/api/genres/' + id).then(function (response) {

                    if (response.status == 200) {
                        if (response.data.success) {
                            location.reload();
                        } else {
                            _this.error = response.data.message;
                        }
                    } else {
                        _this.error = response.data.message;
                    }
                });
            }
        }
    },
    created: function created() {
        var _this2 = this;

        this.axios.get(this.$parent.$parent.AJAX_URL + '/book/client/api/genres').then(function (response) {

            if (response.status == 200) {
                if (response.data.success) {
                    _this2.genres = response.data.data;
                } else {
                    console.log(response.data.message);
                }
            } else {
                console.log(response.data.message);
            }
        });
    }
});

/***/ }),

/***/ "gr+q":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"author"},[_c('h3',{staticClass:"my-4"},[_vm._v("Create Author")]),_vm._v(" "),_c('form',{on:{"submit":function($event){$event.preventDefault();_vm.create($event)}}},[_c('div',{staticClass:"form-group"},[_c('label',{attrs:{"for":"text"}},[_vm._v("Name:")]),_vm._v(" "),_c('p',{class:{ 'control': true }},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.name),expression:"name"},{name:"validate",rawName:"v-validate",value:('required'),expression:"'required'"}],class:{'input form-control': true, 'is-danger': _vm.errors.has('name') },attrs:{"type":"text","name":"name"},domProps:{"value":(_vm.name)},on:{"input":function($event){if($event.target.composing){ return; }_vm.name=$event.target.value}}})]),_vm._v(" "),_c('span',{directives:[{name:"show",rawName:"v-show",value:(_vm.errors.has('name')),expression:"errors.has('name')"}],staticClass:"help is-danger"},[_vm._v(_vm._s(_vm.errors.first('name')))])]),_vm._v(" "),_c('button',{staticClass:"btn btn-default",attrs:{"type":"submit"}},[_vm._v("Create")])])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "hU1m":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"customer"},[_c('h3',{staticClass:"my-4"},[_vm._v("Customers")]),_vm._v(" "),_c('div',{staticClass:"list-group"},[_c('table',{staticClass:"table table-hover"},[_vm._m(0),_vm._v(" "),_c('tbody',_vm._l((_vm.customers),function(customer,key){return _c('tr',[_c('td',[_vm._v(_vm._s(key+1))]),_vm._v(" "),_c('td',[_vm._v(_vm._s(customer.name))]),_vm._v(" "),_c('td',[_vm._v(_vm._s(customer.create_at))]),_vm._v(" "),_c('td',[_c('a',{staticClass:"btn btn-warning",attrs:{"href":'/admin/customer/edit/' + customer.id}},[_c('i',{staticClass:"fa fa-pencil-square-o",attrs:{"aria-hidden":"true"}})])])])}))])])])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('thead',[_c('tr',[_c('th',[_vm._v("№")]),_vm._v(" "),_c('th',[_vm._v("Name")]),_vm._v(" "),_c('th',[_vm._v("Create")]),_vm._v(" "),_c('th')])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "i4P1":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "iAGW":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _vm._m(0)}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"home"},[_c('div',{staticClass:"carousel slide my-4",attrs:{"id":"carouselExampleIndicators","data-ride":"carousel"}},[_c('ol',{staticClass:"carousel-indicators"},[_c('li',{staticClass:"active",attrs:{"data-target":"#carouselExampleIndicators","data-slide-to":"0"}}),_vm._v(" "),_c('li',{attrs:{"data-target":"#carouselExampleIndicators","data-slide-to":"1"}}),_vm._v(" "),_c('li',{attrs:{"data-target":"#carouselExampleIndicators","data-slide-to":"2"}})]),_vm._v(" "),_c('div',{staticClass:"carousel-inner",attrs:{"role":"listbox"}},[_c('div',{staticClass:"carousel-item active"},[_c('img',{staticClass:"d-block img-fluid",attrs:{"src":"static/images/slide1.jpeg","alt":"First slide"}})]),_vm._v(" "),_c('div',{staticClass:"carousel-item"},[_c('img',{staticClass:"d-block img-fluid",attrs:{"src":"static/images/slide2.jpg","alt":"Second slide"}})]),_vm._v(" "),_c('div',{staticClass:"carousel-item"},[_c('img',{staticClass:"d-block img-fluid",attrs:{"src":"static/images/slide3.png","alt":"Third slide"}})])]),_vm._v(" "),_c('a',{staticClass:"carousel-control-prev",attrs:{"href":"#carouselExampleIndicators","role":"button","data-slide":"prev"}},[_c('span',{staticClass:"carousel-control-prev-icon",attrs:{"aria-hidden":"true"}}),_vm._v(" "),_c('span',{staticClass:"sr-only"},[_vm._v("Previous")])]),_vm._v(" "),_c('a',{staticClass:"carousel-control-next",attrs:{"href":"#carouselExampleIndicators","role":"button","data-slide":"next"}},[_c('span',{staticClass:"carousel-control-next-icon",attrs:{"aria-hidden":"true"}}),_vm._v(" "),_c('span',{staticClass:"sr-only"},[_vm._v("Next")])])]),_vm._v(" "),_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-lg-4 col-md-6 mb-4"},[_c('div',{staticClass:"card h-100"},[_c('a',{attrs:{"href":"#"}},[_c('img',{staticClass:"card-img-top",attrs:{"src":"http://placehold.it/700x400","alt":""}})]),_vm._v(" "),_c('div',{staticClass:"card-body"},[_c('h4',{staticClass:"card-title"},[_c('a',{attrs:{"href":"#"}},[_vm._v("Item One")])]),_vm._v(" "),_c('h5',[_vm._v("$24.99")]),_vm._v(" "),_c('p',{staticClass:"card-text"},[_vm._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!")])]),_vm._v(" "),_c('div',{staticClass:"card-footer"},[_c('small',{staticClass:"text-muted"},[_vm._v("★ ★ ★ ★ ☆")])])])]),_vm._v(" "),_c('div',{staticClass:"col-lg-4 col-md-6 mb-4"},[_c('div',{staticClass:"card h-100"},[_c('a',{attrs:{"href":"#"}},[_c('img',{staticClass:"card-img-top",attrs:{"src":"http://placehold.it/700x400","alt":""}})]),_vm._v(" "),_c('div',{staticClass:"card-body"},[_c('h4',{staticClass:"card-title"},[_c('a',{attrs:{"href":"#"}},[_vm._v("Item Two")])]),_vm._v(" "),_c('h5',[_vm._v("$24.99")]),_vm._v(" "),_c('p',{staticClass:"card-text"},[_vm._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur! Lorem ipsum dolor sit amet.")])]),_vm._v(" "),_c('div',{staticClass:"card-footer"},[_c('small',{staticClass:"text-muted"},[_vm._v("★ ★ ★ ★ ☆")])])])]),_vm._v(" "),_c('div',{staticClass:"col-lg-4 col-md-6 mb-4"},[_c('div',{staticClass:"card h-100"},[_c('a',{attrs:{"href":"#"}},[_c('img',{staticClass:"card-img-top",attrs:{"src":"http://placehold.it/700x400","alt":""}})]),_vm._v(" "),_c('div',{staticClass:"card-body"},[_c('h4',{staticClass:"card-title"},[_c('a',{attrs:{"href":"#"}},[_vm._v("Item Three")])]),_vm._v(" "),_c('h5',[_vm._v("$24.99")]),_vm._v(" "),_c('p',{staticClass:"card-text"},[_vm._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!")])]),_vm._v(" "),_c('div',{staticClass:"card-footer"},[_c('small',{staticClass:"text-muted"},[_vm._v("★ ★ ★ ★ ☆")])])])]),_vm._v(" "),_c('div',{staticClass:"col-lg-4 col-md-6 mb-4"},[_c('div',{staticClass:"card h-100"},[_c('a',{attrs:{"href":"#"}},[_c('img',{staticClass:"card-img-top",attrs:{"src":"http://placehold.it/700x400","alt":""}})]),_vm._v(" "),_c('div',{staticClass:"card-body"},[_c('h4',{staticClass:"card-title"},[_c('a',{attrs:{"href":"#"}},[_vm._v("Item Four")])]),_vm._v(" "),_c('h5',[_vm._v("$24.99")]),_vm._v(" "),_c('p',{staticClass:"card-text"},[_vm._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!")])]),_vm._v(" "),_c('div',{staticClass:"card-footer"},[_c('small',{staticClass:"text-muted"},[_vm._v("★ ★ ★ ★ ☆")])])])]),_vm._v(" "),_c('div',{staticClass:"col-lg-4 col-md-6 mb-4"},[_c('div',{staticClass:"card h-100"},[_c('a',{attrs:{"href":"#"}},[_c('img',{staticClass:"card-img-top",attrs:{"src":"http://placehold.it/700x400","alt":""}})]),_vm._v(" "),_c('div',{staticClass:"card-body"},[_c('h4',{staticClass:"card-title"},[_c('a',{attrs:{"href":"#"}},[_vm._v("Item Five")])]),_vm._v(" "),_c('h5',[_vm._v("$24.99")]),_vm._v(" "),_c('p',{staticClass:"card-text"},[_vm._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur! Lorem ipsum dolor sit amet.")])]),_vm._v(" "),_c('div',{staticClass:"card-footer"},[_c('small',{staticClass:"text-muted"},[_vm._v("★ ★ ★ ★ ☆")])])])]),_vm._v(" "),_c('div',{staticClass:"col-lg-4 col-md-6 mb-4"},[_c('div',{staticClass:"card h-100"},[_c('a',{attrs:{"href":"#"}},[_c('img',{staticClass:"card-img-top",attrs:{"src":"http://placehold.it/700x400","alt":""}})]),_vm._v(" "),_c('div',{staticClass:"card-body"},[_c('h4',{staticClass:"card-title"},[_c('a',{attrs:{"href":"#"}},[_vm._v("Item Six")])]),_vm._v(" "),_c('h5',[_vm._v("$24.99")]),_vm._v(" "),_c('p',{staticClass:"card-text"},[_vm._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!")])]),_vm._v(" "),_c('div',{staticClass:"card-footer"},[_c('small',{staticClass:"text-muted"},[_vm._v("★ ★ ★ ★ ☆")])])])])])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "iOkK":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"book"},[_c('h3',{staticClass:"my-4"},[_vm._v("Books")]),_vm._v(" "),_c('div',{staticClass:"list-group"},[_c('table',{staticClass:"table table-hover"},[_vm._m(0),_vm._v(" "),_c('tbody',_vm._l((_vm.books),function(book,key){return _c('tr',[_c('td',[_vm._v(_vm._s(key+1))]),_vm._v(" "),_c('td',[_vm._v(_vm._s(book.name))]),_vm._v(" "),_c('td',[_vm._v(_vm._s(book.create_at))]),_vm._v(" "),_c('td',[_c('a',{staticClass:"btn btn-warning",attrs:{"href":'/admin/book/edit/' + book.id}},[_c('i',{staticClass:"fa fa-pencil-square-o",attrs:{"aria-hidden":"true"}})]),_vm._v(" "),_c('button',{staticClass:"btn btn-danger",attrs:{"type":"button"},on:{"click":function($event){_vm.remove(book.id)}}},[_c('i',{staticClass:"fa fa-trash-o",attrs:{"aria-hidden":"true"}})])])])}))])])])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('thead',[_c('tr',[_c('th',[_vm._v("№")]),_vm._v(" "),_c('th',[_vm._v("Name")]),_vm._v(" "),_c('th',[_vm._v("Create")]),_vm._v(" "),_c('th')])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "ic9j":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('div',{staticClass:"user_info col-md-6"},[_c('h3',{staticClass:"my-4"},[_vm._v("Hello "+_vm._s(this.$parent.$parent.user.name))]),_vm._v(" "),_c('p',[_c('i',{staticClass:"fa fa-envelope",attrs:{"aria-hidden":"true"}}),_vm._v(" "),_c('a',{attrs:{"href":'mailto:'+ this.$parent.$parent.user.email}},[_vm._v(_vm._s(this.$parent.$parent.user.email))])])]),_vm._v(" "),_c('div',{staticClass:"col-md-12"},[_c('h4',[_vm._v("Orders")]),_vm._v(" "),_c('div',{staticClass:"table"},[_vm._m(0),_vm._v(" "),_vm._l((_vm.orders),function(order,key){return _c('div',{staticClass:"row"},[_c('div',{staticClass:"cell"},[_vm._v(_vm._s(key+1))]),_vm._v(" "),_c('div',{staticClass:"cell"},[_vm._v("\n                \t"+_vm._s(order.create_at)+"\n                ")]),_vm._v(" "),_c('div',{staticClass:"cell"},[_vm._v("\n                \t"+_vm._s(order.STATUS_NAME)+"\n                ")]),_vm._v(" "),_c('div',{staticClass:"cell"},[_c('button',{staticClass:"btn btn-warning",on:{"click":function($event){_vm.moreInfo(order.id)}}},[_c('i',{staticClass:"fa fa-info-circle",attrs:{"aria-hidden":"true"}})])]),_vm._v(" "),_c('transition',{attrs:{"name":"fade"}},[(_vm.showInfo.id == order.id)?_c('div',{staticClass:"col-md-12 more"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-lg-6"},[_c('h4',[_vm._v("Order info")]),_vm._v(" "),_c('span',[_vm._v("Sum: "),_c('i',{staticClass:"fa fa-eur",attrs:{"aria-hidden":"true"}}),_vm._v(_vm._s(_vm.orderInfo[order.id].sum))]),_c('br'),_vm._v(" "),_c('span',[_vm._v("Payment system: "),_c('b',[_vm._v(_vm._s(_vm.orderInfo[order.id].NAME_PAYMENT))])])]),_vm._v(" "),_c('div',{staticClass:"col-lg-6"},[_c('h4',[_vm._v("Books")]),_vm._v(" "),_c('ol',_vm._l((_vm.orderInfo[order.id].books),function(book){return _c('li',[_c('a',{attrs:{"href":'/book/' + book.id}},[_vm._v(_vm._s(book.name))]),_vm._v(" "),_c('i',{staticClass:"fa fa-eur",attrs:{"aria-hidden":"true"}}),_vm._v(_vm._s(book.price)+" \n\t\t\t\t\t\t\t\t")])}))])]),_vm._v(" "),_c('button',{staticClass:"btn btn-warning btn-hide",on:{"click":function($event){_vm.hideInfo()}}},[_c('i',{staticClass:"fa fa-arrow-up",attrs:{"aria-hidden":"true"}})])]):_vm._e()])],1)})],2)])])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"row"},[_c('div',{staticClass:"cell th"},[_vm._v("№")]),_vm._v(" "),_c('div',{staticClass:"cell th"},[_vm._v("Create")]),_vm._v(" "),_c('div',{staticClass:"cell th"},[_vm._v("Status")]),_vm._v(" "),_c('div',{staticClass:"cell th"},[_vm._v("Show info")])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "jAu/":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_AuthForm_vue__ = __webpack_require__("JXsb");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7c91bdac_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_AuthForm_vue__ = __webpack_require__("BBq2");
function injectStyle (ssrContext) {
  __webpack_require__("BKtV")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_AuthForm_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7c91bdac_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_AuthForm_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "jCRb":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('nav',{staticClass:"navbar navbar-expand-lg navbar-dark bg-dark fixed-top"},[_c('div',{staticClass:"container"},[_c('a',{staticClass:"navbar-brand",attrs:{"href":"#"}},[_vm._v("Book shop")]),_vm._v(" "),_vm._m(0),_vm._v(" "),_c('div',{staticClass:"collapse navbar-collapse",attrs:{"id":"navbarResponsive"}},[_vm._m(1),_vm._v(" "),_c('auth-form',{on:{"login":_vm.login,"logout":_vm.logout}})],1)])])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('button',{staticClass:"navbar-toggler",attrs:{"type":"button","data-toggle":"collapse","data-target":"#navbarResponsive","aria-controls":"navbarResponsive","aria-expanded":"false","aria-label":"Toggle navigation"}},[_c('span',{staticClass:"navbar-toggler-icon"})])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('ul',{staticClass:"navbar-nav ml-auto"},[_c('li',{staticClass:"nav-item active"},[_c('a',{staticClass:"nav-link",attrs:{"href":"/"}},[_vm._v("Home\n                "),_c('span',{staticClass:"sr-only"},[_vm._v("(current)")])])]),_vm._v(" "),_c('li',{staticClass:"nav-item"},[_c('a',{staticClass:"nav-link",attrs:{"href":"/about"}},[_vm._v("About")])]),_vm._v(" "),_c('li',{staticClass:"nav-item"},[_c('a',{staticClass:"nav-link",attrs:{"href":"/cart"}},[_vm._v("Cart")])])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "jbcE":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__("L1UD");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_42328e84_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__("iOkK");
function injectStyle (ssrContext) {
  __webpack_require__("WjK6")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_42328e84_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "jxxG":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "kHlm":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"order"},[_c('h3',{staticClass:"my-4"},[_vm._v("Orders")]),_vm._v(" "),_c('div',{staticClass:"list-group"},[_c('div',{staticClass:"table"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"cell th"},[_vm._v("№")]),_vm._v(" "),_c('div',{staticClass:"cell th"},[_vm._v("Name")]),_vm._v(" "),_c('div',{staticClass:"cell th"},[_c('a',{attrs:{"href":"#"},on:{"click":_vm.sort}},[_vm._v("Create")]),_vm._v(" "),_c('i',{staticClass:"fa fa-long-arrow-down",attrs:{"aria-hidden":"true"}}),_vm._v(" "),_c('i',{staticClass:"fa fa-long-arrow-up",attrs:{"aria-hidden":"true"}})]),_vm._v(" "),_c('div',{staticClass:"cell th"},[_vm._v("Status")]),_vm._v(" "),_c('div',{staticClass:"cell th"},[_vm._v("Show info")])]),_vm._v(" "),_vm._l((_vm.orders),function(order,key){return _c('div',{staticClass:"row"},[_c('div',{staticClass:"cell"},[_vm._v(_vm._s(key+1))]),_vm._v(" "),_c('div',{staticClass:"cell"},[_c('a',{attrs:{"href":'/admin/customer/edit/' + order.id_customer}},[_vm._v(_vm._s(order.CUSTOMER_NAME))])]),_vm._v(" "),_c('div',{staticClass:"cell"},[_vm._v("\n\t                \t"+_vm._s(order.create_at)+"\n\t                ")]),_vm._v(" "),_c('div',{staticClass:"cell"},[(_vm.showStatus.id == order.id)?_c('div',[_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.status),expression:"status"}],staticClass:"form-control",on:{"change":[function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.status=$event.target.multiple ? $$selectedVal : $$selectedVal[0]},function($event){_vm.changeStatus(order)}]}},_vm._l((_vm.orderInfo[order.id].status_orders),function(status){return _c('option',{domProps:{"value":status.id}},[_vm._v(_vm._s(status.name))])}))]):_c('div',[_vm._v(_vm._s(order.STATUS_NAME))])]),_vm._v(" "),_c('div',{staticClass:"cell"},[_c('button',{staticClass:"btn btn-warning",on:{"click":function($event){_vm.moreInfo(order.id)}}},[_c('i',{staticClass:"fa fa-info-circle",attrs:{"aria-hidden":"true"}})])]),_vm._v(" "),_c('transition',{attrs:{"name":"fade"}},[(_vm.showInfo.id == order.id)?_c('div',{staticClass:"col-md-12 more"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-lg-6"},[_c('h4',[_vm._v("Order info")]),_vm._v(" "),_c('span',[_vm._v("Sum: "),_c('i',{staticClass:"fa fa-eur",attrs:{"aria-hidden":"true"}}),_vm._v(_vm._s(_vm.orderInfo[order.id].sum))]),_c('br'),_vm._v(" "),_c('span',[_vm._v("Payment system: "),_c('b',[_vm._v(_vm._s(_vm.orderInfo[order.id].NAME_PAYMENT))])])]),_vm._v(" "),_c('div',{staticClass:"col-lg-6"},[_c('h4',[_vm._v("Books")]),_vm._v(" "),_c('ol',_vm._l((_vm.orderInfo[order.id].books),function(book){return _c('li',[_c('a',{attrs:{"href":'/admin/book/edit/' + book.id}},[_vm._v(_vm._s(book.name))]),_vm._v(" "),_c('i',{staticClass:"fa fa-eur",attrs:{"aria-hidden":"true"}}),_vm._v(_vm._s(book.price)+" \n\t\t\t\t\t\t\t\t\t")])}))])]),_vm._v(" "),_c('button',{staticClass:"btn btn-warning btn-hide",on:{"click":function($event){_vm.hideInfo(order)}}},[_c('i',{staticClass:"fa fa-arrow-up",attrs:{"aria-hidden":"true"}})])]):_vm._e()])],1)})],2)])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "kr4X":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_RegisterForm_vue__ = __webpack_require__("MV82");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_16a25fa7_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_RegisterForm_vue__ = __webpack_require__("sA/n");
function injectStyle (ssrContext) {
  __webpack_require__("jxxG")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_RegisterForm_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_16a25fa7_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_RegisterForm_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "kvzF":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Sidebar_vue__ = __webpack_require__("1XcM");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_39d44f28_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Sidebar_vue__ = __webpack_require__("1w7g");
function injectStyle (ssrContext) {
  __webpack_require__("qRlq")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Sidebar_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_39d44f28_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Sidebar_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "lM8h":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PageNotFound_vue__ = __webpack_require__("EUtp");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_0a91cdfd_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_PageNotFound_vue__ = __webpack_require__("FIY1");
function injectStyle (ssrContext) {
  __webpack_require__("/usH")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PageNotFound_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_0a91cdfd_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_PageNotFound_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "lgQG":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"edit"},[_c('h3',{staticClass:"my-4"},[_vm._v("Edit customer")]),_vm._v(" "),_c('form',{on:{"submit":function($event){$event.preventDefault();_vm.edit($event)}}},[_c('div',{staticClass:"form-group"},[_c('label',{attrs:{"for":"text"}},[_vm._v("Name:")]),_vm._v(" "),_c('p',{class:{ 'control': true }},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.name),expression:"name"},{name:"validate",rawName:"v-validate",value:('required'),expression:"'required'"},{name:"default-value",rawName:"v-default-value",value:(_vm.customer.name),expression:"customer.name"}],class:{'input form-control': true, 'is-danger': _vm.errors.has('name') },attrs:{"type":"text","name":"name"},domProps:{"value":(_vm.name)},on:{"input":function($event){if($event.target.composing){ return; }_vm.name=$event.target.value}}})]),_vm._v(" "),_c('span',{directives:[{name:"show",rawName:"v-show",value:(_vm.errors.has('name')),expression:"errors.has('name')"}],staticClass:"help is-danger"},[_vm._v(_vm._s(_vm.errors.first('name')))])]),_vm._v(" "),_c('div',{staticClass:"form-group"},[_c('label',{attrs:{"for":"text"}},[_vm._v("Email:")]),_vm._v(" "),_c('p',{class:{ 'control': true }},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.email),expression:"email"},{name:"validate",rawName:"v-validate",value:('required|alpha'),expression:"'required|alpha'"},{name:"default-value",rawName:"v-default-value",value:(_vm.customer.email),expression:"customer.email"}],class:{'input form-control': true, 'is-danger': _vm.errors.has('email') },attrs:{"type":"text","name":"email"},domProps:{"value":(_vm.email)},on:{"input":function($event){if($event.target.composing){ return; }_vm.email=$event.target.value}}})]),_vm._v(" "),_c('span',{directives:[{name:"show",rawName:"v-show",value:(_vm.errors.has('email')),expression:"errors.has('email')"}],staticClass:"help is-danger"},[_vm._v(_vm._s(_vm.errors.first('email')))])]),_vm._v(" "),_c('div',{staticClass:"form-group"},[_c('label',{attrs:{"for":"text"}},[_vm._v("Discaunt:")]),_vm._v(" "),_c('input',{directives:[{name:"default-value",rawName:"v-default-value",value:(_vm.customer.discaunt),expression:"customer.discaunt"},{name:"model",rawName:"v-model",value:(_vm.discaunt),expression:"discaunt"}],staticClass:"form-control",attrs:{"type":"text"},domProps:{"value":(_vm.discaunt)},on:{"input":function($event){if($event.target.composing){ return; }_vm.discaunt=$event.target.value}}})]),_vm._v(" "),_c('div',{staticClass:"form-group"},[_c('label',{attrs:{"for":"text"}},[_vm._v("Status:")]),_c('br'),_vm._v(" "),_c('label',{attrs:{"for":"text"}},[_vm._v("Active:")]),_vm._v(" "),_c('input',{attrs:{"name":"status","type":"radio"},domProps:{"value":1,"checked":_vm.customer.status == 1},on:{"click":function($event){_vm.isStatus($event)}}}),_vm._v(" "),_c('label',{attrs:{"for":"text"}},[_vm._v("Inactive:")]),_vm._v(" "),_c('input',{attrs:{"name":"status","type":"radio"},domProps:{"value":0,"checked":_vm.customer.status == 0},on:{"click":function($event){_vm.isStatus($event)}}})]),_vm._v(" "),_c('button',{staticClass:"btn btn-default",attrs:{"type":"submit"}},[_vm._v("Edit")])]),_vm._v(" "),(_vm.orders)?_c('div',[_c('h4',{staticClass:"my-4"},[_vm._v("Orders")]),_vm._v(" "),_c('div',{staticClass:"table"},[_vm._m(0),_vm._v(" "),_vm._l((_vm.orders),function(order,key){return _c('div',{staticClass:"row"},[_c('div',{staticClass:"cell"},[_vm._v(_vm._s(key+1))]),_vm._v(" "),_c('div',{staticClass:"cell"},[_vm._v("\n\t                \t"+_vm._s(order.create_at)+"\n\t                ")]),_vm._v(" "),_c('div',{staticClass:"cell"},[_vm._v("\n\t                \t"+_vm._s(order.STATUS_NAME)+"\n\t                ")]),_vm._v(" "),_c('div',{staticClass:"cell"},[_c('button',{staticClass:"btn btn-warning",on:{"click":function($event){_vm.moreInfo(order.id)}}},[_c('i',{staticClass:"fa fa-info-circle",attrs:{"aria-hidden":"true"}})])]),_vm._v(" "),_c('transition',{attrs:{"name":"fade"}},[(_vm.showInfo.id == order.id)?_c('div',{staticClass:"col-md-12 more"},[_c('div',{staticClass:"row"},[_c('div',{staticClass:"col-lg-6"},[_c('h4',[_vm._v("Order info")]),_vm._v(" "),_c('span',[_vm._v("Sum: "),_c('i',{staticClass:"fa fa-eur",attrs:{"aria-hidden":"true"}}),_vm._v(_vm._s(_vm.orderInfo[order.id].sum))]),_c('br'),_vm._v(" "),_c('span',[_vm._v("Payment system: "),_c('b',[_vm._v(_vm._s(_vm.orderInfo[order.id].NAME_PAYMENT))])])]),_vm._v(" "),_c('div',{staticClass:"col-lg-6"},[_c('h4',[_vm._v("Books")]),_vm._v(" "),_c('ol',_vm._l((_vm.orderInfo[order.id].books),function(book){return _c('li',[_c('a',{attrs:{"href":'/admin/book/edit/' + book.id}},[_vm._v(_vm._s(book.name))]),_vm._v(" "),_c('i',{staticClass:"fa fa-eur",attrs:{"aria-hidden":"true"}}),_vm._v(_vm._s(book.price)+" \n\t\t\t\t\t\t\t\t\t")])}))])]),_vm._v(" "),_c('button',{staticClass:"btn btn-warning btn-hide",on:{"click":function($event){_vm.hideInfo()}}},[_c('i',{staticClass:"fa fa-arrow-up",attrs:{"aria-hidden":"true"}})])]):_vm._e()])],1)})],2)]):_vm._e()])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"row"},[_c('div',{staticClass:"cell th"},[_vm._v("№")]),_vm._v(" "),_c('div',{staticClass:"cell th"},[_vm._v("Create")]),_vm._v(" "),_c('div',{staticClass:"cell th"},[_vm._v("Status")]),_vm._v(" "),_c('div',{staticClass:"cell th"},[_vm._v("Show info")])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "lx6M":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__("1qYa");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_19f7d429_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__("hU1m");
function injectStyle (ssrContext) {
  __webpack_require__("soqm")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_19f7d429_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "nnbN":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_User_vue__ = __webpack_require__("YdM5");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_0e0fa92a_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_User_vue__ = __webpack_require__("ic9j");
function injectStyle (ssrContext) {
  __webpack_require__("uf2V")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_User_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_0e0fa92a_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_User_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "o8I/":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "ozHj":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "p3wO":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "pNhs":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"author"},[_c('h3',{staticClass:"my-4"},[_vm._v("Authors")]),_vm._v(" "),_c('div',{staticClass:"list-group"},[_c('table',{staticClass:"table table-hover"},[_vm._m(0),_vm._v(" "),_c('tbody',_vm._l((_vm.authors),function(author,key){return _c('tr',[_c('td',[_vm._v(_vm._s(key+1))]),_vm._v(" "),_c('td',[_vm._v(_vm._s(author.name))]),_vm._v(" "),_c('td',[_vm._v(_vm._s(author.create_at))]),_vm._v(" "),_c('td',[_c('a',{staticClass:"btn btn-warning",attrs:{"href":'/admin/author/edit/' + author.id}},[_c('i',{staticClass:"fa fa-pencil-square-o",attrs:{"aria-hidden":"true"}})]),_vm._v(" "),_c('button',{staticClass:"btn btn-danger",attrs:{"type":"button"},on:{"click":function($event){_vm.remove(author.id)}}},[_c('i',{staticClass:"fa fa-trash-o",attrs:{"aria-hidden":"true"}})])])])}))])])])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('thead',[_c('tr',[_c('th',[_vm._v("№")]),_vm._v(" "),_c('th',[_vm._v("Name")]),_vm._v(" "),_c('th',[_vm._v("Create")]),_vm._v(" "),_c('th')])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "q/M2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_template_compiler_index_id_data_v_8cea80b0_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__("5qHl");
var normalizeComponent = __webpack_require__("VU/8")
/* script */
var __vue_script__ = null
/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_template_compiler_index_id_data_v_8cea80b0_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "qRlq":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "sA/n":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"register_form col-md-6"},[_c('h3',{staticClass:"my-4"},[_vm._v("Registration")]),_vm._v(" "),(_vm.success)?_c('p',{staticClass:"success_m"},[_vm._v(_vm._s(_vm.success))]):_c('form',{on:{"submit":function($event){$event.preventDefault();_vm.validForm($event)}}},[(_vm.error)?_c('p',{staticClass:"is-danger"},[_vm._v(_vm._s(_vm.error))]):_vm._e(),_vm._v(" "),_c('p',{class:{ 'control': true }},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.name),expression:"name"},{name:"validate",rawName:"v-validate",value:('required|alpha'),expression:"'required|alpha'"}],class:{'input form-control': true, 'is-danger': _vm.errors.has('name') },attrs:{"type":"text","name":"name","placeholder":"Name"},domProps:{"value":(_vm.name)},on:{"input":function($event){if($event.target.composing){ return; }_vm.name=$event.target.value}}})]),_vm._v(" "),_c('span',{directives:[{name:"show",rawName:"v-show",value:(_vm.errors.has('name')),expression:"errors.has('name')"}],staticClass:"help is-danger"},[_vm._v(_vm._s(_vm.errors.first('name')))]),_vm._v(" "),_c('p',{class:{ 'control': true }},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.email),expression:"email"},{name:"validate",rawName:"v-validate",value:('required|email'),expression:"'required|email'"}],class:{'input form-control': true, 'is-danger': _vm.errors.has('email') },attrs:{"type":"text","name":"email","placeholder":"Email"},domProps:{"value":(_vm.email)},on:{"input":function($event){if($event.target.composing){ return; }_vm.email=$event.target.value}}})]),_vm._v(" "),_c('span',{directives:[{name:"show",rawName:"v-show",value:(_vm.errors.has('email')),expression:"errors.has('email')"}],staticClass:"help is-danger"},[_vm._v(_vm._s(_vm.errors.first('email')))]),_vm._v(" "),_c('p',{class:{ 'control': true }},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.password),expression:"password"},{name:"validate",rawName:"v-validate",value:('required'),expression:"'required'"}],class:{'input form-control': true, 'is-danger': _vm.errors.has('password') },attrs:{"type":"password","name":"password","placeholder":"Password"},domProps:{"value":(_vm.password)},on:{"input":function($event){if($event.target.composing){ return; }_vm.password=$event.target.value}}})]),_vm._v(" "),_c('span',{directives:[{name:"show",rawName:"v-show",value:(_vm.errors.has('password')),expression:"errors.has('password')"}],staticClass:"help is-danger"},[_vm._v(_vm._s(_vm.errors.first('password')))]),_vm._v(" "),_c('p',{class:{ 'control': true }},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.repeat_password),expression:"repeat_password"},{name:"validate",rawName:"v-validate",value:('required|confirmed:password'),expression:"'required|confirmed:password'"}],class:{'input form-control': true, 'is-danger': _vm.errors.has('repeat_password') },attrs:{"type":"password","name":"repeat_password","placeholder":"Repeat password","data-vv-as":"password"},domProps:{"value":(_vm.repeat_password)},on:{"input":function($event){if($event.target.composing){ return; }_vm.repeat_password=$event.target.value}}})]),_vm._v(" "),_c('span',{directives:[{name:"show",rawName:"v-show",value:(_vm.errors.has('repeat_password')),expression:"errors.has('repeat_password')"}],staticClass:"help is-danger"},[_vm._v(_vm._s(_vm.errors.first('repeat_password')))]),_vm._v(" "),_vm._m(0)])])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('p',[_c('button',{staticClass:"btn btn-primary",attrs:{"type":"submit"}},[_vm._v("Submit")])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "soqm":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "uf2V":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "vaCD":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'layout',
  created: function created() {
    if (!localStorage['admin']) {
      location.href = '/admin/login';
    }
  },

  methods: {
    logout: function logout() {
      localStorage.clear();
      location.href = '/admin/login';
    }
  }
});

/***/ }),

/***/ "wLEQ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__views_Sidebar_vue__ = __webpack_require__("kvzF");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__views_TopMenu_vue__ = __webpack_require__("9N0o");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__views_Bottom_vue__ = __webpack_require__("/kCm");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'layout',
  data: function data() {
    return {};
  },

  methods: {
    login: function login() {
      this.$emit('login');
    },
    logout: function logout() {
      this.$emit('logout');
    }
  },
  components: {
    Sidebar: __WEBPACK_IMPORTED_MODULE_0__views_Sidebar_vue__["a" /* default */], TopMenu: __WEBPACK_IMPORTED_MODULE_1__views_TopMenu_vue__["a" /* default */], Bottom: __WEBPACK_IMPORTED_MODULE_2__views_Bottom_vue__["a" /* default */]
  }
});

/***/ }),

/***/ "xJD8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'app',
  data: function data() {
    return {
      //AJAX_URL: 'http://192.168.0.15/~user11',
      //assetUrl: 'http://192.168.0.15/~user11/book/server/api/shop/assets/',
      //assetAutoUrl: 'http://192.168.0.15/~user11/book/server/api/shop/assets/auto/',
      AJAX_URL: 'http://courses.site',
      assetUrl: 'http://courses.site/book/server/api/shop/assets/',
      assetAutoUrl: 'http://courses.site/book/server/api/shop/assets/auto/',
      user: null
    };
  },

  methods: {
    login: function login() {
      this.user = JSON.parse(localStorage.getItem("profile"));
    },
    logout: function logout() {
      delete localStorage["profile"];
      location.href = '/';
    }
  },
  created: function created() {
    var self = this;
    this.user = JSON.parse(localStorage.getItem("profile"));

    if (this.user) {
      var instance = this.axios.create({
        baseURL: this.AJAX_URL
      });
      instance.defaults.headers.common['Authorization'] = this.user.access_token;

      this.axios.get(this.AJAX_URL + '/book/client/api/auth').then(function (response) {
        if (response.status == 200) {
          if (!response.data.success) {
            self.logout();
          }
        } else {
          console.log(response.data.message);
        }
      });
    }
  },

  components: {}
});

/***/ }),

/***/ "xhmQ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_edit_vue__ = __webpack_require__("ODas");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7254a603_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_edit_vue__ = __webpack_require__("lgQG");
function injectStyle (ssrContext) {
  __webpack_require__("X9zF")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_edit_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7254a603_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_edit_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "y+GZ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"create"},[_c('h3',{staticClass:"my-4"},[_vm._v("Create Customer")]),_vm._v(" "),_c('form',{on:{"submit":function($event){$event.preventDefault();_vm.create($event)}}},[(_vm.error)?_c('p',{staticClass:"is-danger"},[_vm._v(_vm._s(_vm.error))]):_vm._e(),_vm._v(" "),_c('div',{staticClass:"form-group"},[_c('label',{attrs:{"for":"text"}},[_vm._v("Name:")]),_vm._v(" "),_c('p',{class:{ 'control': true }},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.name),expression:"name"},{name:"validate",rawName:"v-validate",value:('required|alpha'),expression:"'required|alpha'"}],class:{'input form-control': true, 'is-danger': _vm.errors.has('name') },attrs:{"type":"text","name":"name"},domProps:{"value":(_vm.name)},on:{"input":function($event){if($event.target.composing){ return; }_vm.name=$event.target.value}}})]),_vm._v(" "),_c('span',{directives:[{name:"show",rawName:"v-show",value:(_vm.errors.has('name')),expression:"errors.has('name')"}],staticClass:"help is-danger"},[_vm._v(_vm._s(_vm.errors.first('name')))])]),_vm._v(" "),_c('div',{staticClass:"form-group"},[_c('label',{attrs:{"for":"text"}},[_vm._v("Email:")]),_vm._v(" "),_c('p',{class:{ 'control': true }},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.email),expression:"email"},{name:"validate",rawName:"v-validate",value:('required|email'),expression:"'required|email'"}],class:{'input form-control': true, 'is-danger': _vm.errors.has('email') },attrs:{"type":"text","name":"email"},domProps:{"value":(_vm.email)},on:{"input":function($event){if($event.target.composing){ return; }_vm.email=$event.target.value}}})]),_vm._v(" "),_c('span',{directives:[{name:"show",rawName:"v-show",value:(_vm.errors.has('email')),expression:"errors.has('email')"}],staticClass:"help is-danger"},[_vm._v(_vm._s(_vm.errors.first('email')))])]),_vm._v(" "),_c('div',{staticClass:"form-group"},[_c('label',{attrs:{"for":"text"}},[_vm._v("Password:")]),_vm._v(" "),_c('p',{class:{ 'control': true }},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.password),expression:"password"},{name:"validate",rawName:"v-validate",value:('required'),expression:"'required'"}],class:{'input form-control': true, 'is-danger': _vm.errors.has('password') },attrs:{"type":"password","name":"password"},domProps:{"value":(_vm.password)},on:{"input":function($event){if($event.target.composing){ return; }_vm.password=$event.target.value}}})]),_vm._v(" "),_c('span',{directives:[{name:"show",rawName:"v-show",value:(_vm.errors.has('password')),expression:"errors.has('password')"}],staticClass:"help is-danger"},[_vm._v(_vm._s(_vm.errors.first('password')))])]),_vm._v(" "),_c('div',{staticClass:"form-group"},[_c('label',{attrs:{"for":"text"}},[_vm._v("Repeat password:")]),_vm._v(" "),_c('p',{class:{ 'control': true }},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.repeat_password),expression:"repeat_password"},{name:"validate",rawName:"v-validate",value:('required|confirmed:password'),expression:"'required|confirmed:password'"}],class:{'input form-control': true, 'is-danger': _vm.errors.has('repeat_password') },attrs:{"type":"password","name":"repeat_password","data-vv-as":"password"},domProps:{"value":(_vm.repeat_password)},on:{"input":function($event){if($event.target.composing){ return; }_vm.repeat_password=$event.target.value}}})]),_vm._v(" "),_c('span',{directives:[{name:"show",rawName:"v-show",value:(_vm.errors.has('repeat_password')),expression:"errors.has('repeat_password')"}],staticClass:"help is-danger"},[_vm._v(_vm._s(_vm.errors.first('repeat_password')))])]),_vm._v(" "),_c('div',{staticClass:"form-group"},[_c('label',{attrs:{"for":"text"}},[_vm._v("Discaunt:")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.discaunt),expression:"discaunt"}],staticClass:"form-control",attrs:{"type":"text"},domProps:{"value":(_vm.discaunt)},on:{"input":function($event){if($event.target.composing){ return; }_vm.discaunt=$event.target.value}}})]),_vm._v(" "),_c('button',{staticClass:"btn btn-default",attrs:{"type":"submit"}},[_vm._v("Create")])])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "yLcD":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["a"] = ({
	name: 'create',
	data: function data() {
		return {
			name: ''
		};
	},

	methods: {
		create: function create() {
			var _this = this;

			this.$validator.validateAll().then(function (result) {
				if (result) {
					var config = {
						headers: {
							'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
						}
					};

					_this.axios.post(_this.$parent.$parent.AJAX_URL + '/book/client/api/genres', {
						name: _this.name
					}, config).then(function (response) {

						if (response.status == 200) {
							if (!response.data.success) {
								console.log(response.data.message);
							} else {
								location.href = '/admin/genres';
							}
						} else {
							console.log(response.data.message);
						}
					});
				}
			});
		}
	}
});

/***/ }),

/***/ "zAji":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/404.d7165a7.png";

/***/ }),

/***/ "zEIY":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "zYlX":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//


/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'cart',
    data: function data() {
        return {
            msg: 'order is sent successfully'
        };
    }
});

/***/ })

},["NHnr"]);
//# sourceMappingURL=app.f6340c9fe5ee8ee7913c.js.map