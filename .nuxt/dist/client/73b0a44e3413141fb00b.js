(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{161:function(t,e,n){var content=n(191);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(27).default)("121395c4",content,!0,{sourceMap:!1})},190:function(t,e,n){"use strict";var o=n(161);n.n(o).a},191:function(t,e,n){(t.exports=n(26)(!1)).push([t.i,".me-cheering[data-v-37dc0408]{margin-top:45px}.bouncing[data-v-37dc0408]{text-align:center;-webkit-animation:bounce-data-v-37dc0408 .45s;animation:bounce-data-v-37dc0408 .45s;-webkit-animation-direction:alternate;animation-direction:alternate;-webkit-animation-timing-function:cubic-bezier(.5,.05,1,.5);animation-timing-function:cubic-bezier(.5,.05,1,.5);-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}@-webkit-keyframes bounce-data-v-37dc0408{0%{transform:translateZ(0)}to{transform:translate3d(0,17px,0)}}@keyframes bounce-data-v-37dc0408{0%{transform:translateZ(0)}to{transform:translate3d(0,17px,0)}}",""])},277:function(t,e,n){"use strict";n.r(e);var o={name:"ModalLarge",layout:"indipage",data:function(){return{nateCheering:"nate/cheering_right"}},mounted:function(){this.toggleCheer("left"),this.$emit("loaded")},methods:{toggleCheer:function(t){var e=this;setTimeout((function(){e.nateCheering="nate/cheering_"+t,"right"===t?e.toggleCheer("left"):e.toggleCheer("right")}),900)}}},r=(n(190),n(12)),component=Object(r.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container-small test-component"},[e("h1",{staticClass:"text-center"},[this._v("Awesome Content")]),this._v(" "),e("div",{staticClass:"bar"}),this._v(" "),e("p",[this._v("Works like magic! By clicking on the buttons you will get access to more in depth explanations about some of my projects.")]),this._v(" "),e("div",{staticClass:"me-cheering bouncing"},[e("svg-icon",{attrs:{name:this.nateCheering,width:"200px",height:"200px"}})],1)])}),[],!1,null,"37dc0408",null);e.default=component.exports}}]);