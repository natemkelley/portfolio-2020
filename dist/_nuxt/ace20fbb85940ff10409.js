(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{159:function(e,t,n){var content=n(168);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(27).default)("30862336",content,!0,{sourceMap:!1})},167:function(e,t,n){"use strict";var l=n(159);n.n(l).a},168:function(e,t,n){(e.exports=n(26)(!1)).push([e.i,".dat-btn[data-v-2b99880e]{position:fixed;margin:25px}.menuimg[data-v-2b99880e]{margin:5% 35% -5%;border:none!important}.transition[data-v-2b99880e]{transition:.1s;-webkit-transition:.1s}.menu-item[data-v-2b99880e]{color:grey}.hidden[data-v-2b99880e]{opacity:.05}.collapsible[data-v-2b99880e]{box-shadow:none!important;border:none!important}.underlay[data-v-2b99880e]{transition:.1s;background-color:#000;opacity:0;height:100vh;width:100vw;position:fixed;top:0;display:none}.sit-on-top[data-v-2b99880e]{z-index:9999;position:absolute;top:0}",""])},170:function(e,t,n){"use strict";n.r(t);var l=n(164),o=n(165),r=n(166),c=n.n(r),h={name:"Menu",components:{MenuLogo:{functional:!0,render(e,t){const{_c:n,_v:l,data:data,children:o=[]}=t,{class:r,staticClass:c,style:style,staticStyle:h,attrs:d={},...v}=data;return n("svg",{class:[r,c],style:[style,h],attrs:Object.assign({viewBox:"0 0 144 114",xmlns:"http://www.w3.org/2000/svg"},d),...v},o.concat([n("g",{attrs:{fill:"#43A047"}},[n("path",{attrs:{d:"M77.82 108.25L27.74 60.59v37.17H5.33V5.22l50.08 47.53V11.16h22.41zM84.31 42.91L118.52 8.7l19.39 19.57L109 58.16l29.33 28.67-19.82 20.93-34.2-34.21z"}})])]))}}},data:function(){return{clicked:!1,menuAnime:null,width:310,height:"69vh",boxColor:o.a.white,buttonColor:o.a.green[600],duration:275,durationOffset:50}},mounted:function(){var e=this;this.$refs.button.style.backgroundColor=this.buttonColor,this.menuAnime=l.a.timeline({duration:this.duration,autoplay:!1}),this.menuAnime.add({targets:this.$refs.underlay,opacity:.35,begin:function(t){t.reversePlayback?setTimeout((function(){e.$refs.underlay.style.display="none"}),2.5*e.duration):e.$refs.underlay.style.display="block"}},this.durationOffset),this.menuAnime.add({targets:this.$refs.button,width:{value:this.width},height:this.height,borderRadius:{value:"20px"},backgroundColor:{value:this.boxColor},translateX:20,translateY:20,easing:"easeOutExpo",begin:function(t){e.$refs.button.style.overflowY=t.reversePlayback?"hidden":"scroll"}},this.durationOffset),this.menuAnime.add({targets:this.$refs.menuItems,translateY:-71,opacity:1,easing:"linear"},this.durationOffset),this.menuAnime.add({targets:this.$refs.icon,opacity:0,easing:"linear"},this.durationOffset),this.menuAnime.add({targets:this.$el.querySelectorAll("g"),fill:["#fff",this.buttonColor],easing:"linear"},this.durationOffset),c.a.Collapsible.init(this.$el.querySelectorAll(".collapsible"),{accordion:!1})},methods:{click:function(){var e=this;this.clicked=!this.clicked,this.menuAnime.play(),this.menuAnime.finished.then((function(){e.menuAnime.reverse()}))}}},d=(n(167),n(18)),v={components:{Menu:Object(d.a)(h,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"sit-on-top"},[n("a",{ref:"button",staticClass:"dat-btn btn-floating btn-large z-depth-3"},[n("i",{ref:"icon",staticClass:"material-icons",on:{click:e.click}},[e._v("menu")]),e._v(" "),n("div",{ref:"menuItems",staticClass:"menu-item"},[n("ul",{staticClass:"collapsible expandable"},[n("li",[n("div",{staticClass:"topcell"},[n("MenuLogo",{ref:"menuImg",staticClass:"menuimg"})],1)]),e._v(" "),e._l(5,(function(t){return n("li",{key:t},[n("div",{staticClass:"collapsible-header"},[e._v("First")]),e._v(" "),e._m(0,!0)])}))],2)])]),e._v(" "),n("div",{ref:"underlay",staticClass:"underlay",on:{click:e.click}})])}),[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"collapsible-body"},[t("span",[this._v("Lorem ipsum dolor sit amet.")])])}],!1,null,"2b99880e",null).exports}},m=Object(d.a)(v,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("Menu"),e._v(" "),n("h1",[e._v("This is an exmaple page")]),e._v(" "),n("h1",[e._v("This is an exmaple page")]),e._v(" "),n("h1",[e._v("This is an exmaple page")]),e._v(" "),n("h1",[e._v("This is an exmaple page")]),e._v(" "),n("h1",[e._v("This is an exmaple page")]),e._v(" "),n("h1",[e._v("This is an exmaple page")]),e._v(" "),n("h1",[e._v("This is an exmaple page")]),e._v(" "),n("h1",[e._v("This is an exmaple page")]),e._v(" "),n("h1",[e._v("This is an exmaple page")]),e._v(" "),n("h1",[e._v("This is an exmaple page")]),e._v(" "),n("h1",[e._v("This is an exmaple page")]),e._v(" "),n("h1",[e._v("This is an exmaple page")]),e._v(" "),n("h1",[e._v("This is an exmaple page")])],1)}),[],!1,null,null,null);t.default=m.exports}}]);