(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{158:function(t,e,n){var content=n(287);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(27).default)("80ec968c",content,!0,{sourceMap:!1})},286:function(t,e,n){"use strict";var o=n(158);n.n(o).a},287:function(t,e,n){(t.exports=n(26)(!1)).push([t.i,"canvas[data-v-350f9124]{background-color:hsla(0,0%,100%,.94);border-radius:12px}",""])},288:function(t,e,n){"use strict";var o={name:"BarChart",extends:n(292).a,props:["chartData"],data:function(){return{options:{scales:{yAxes:[{ticks:{beginAtZero:!0,max:100}}]},maintainAspectRatio:!0,layout:{padding:{left:20,right:22,top:20,bottom:20}}}}},mounted:function(){this.renderChart(this.chartData,this.options)},methods:{}},r=(n(286),n(12)),component=Object(r.a)(o,void 0,void 0,!1,null,"350f9124",null);e.a=component.exports},291:function(t,e,n){var map={"./af":159,"./af.js":159,"./ar":160,"./ar-dz":161,"./ar-dz.js":161,"./ar-kw":162,"./ar-kw.js":162,"./ar-ly":163,"./ar-ly.js":163,"./ar-ma":164,"./ar-ma.js":164,"./ar-sa":165,"./ar-sa.js":165,"./ar-tn":166,"./ar-tn.js":166,"./ar.js":160,"./az":167,"./az.js":167,"./be":168,"./be.js":168,"./bg":169,"./bg.js":169,"./bm":170,"./bm.js":170,"./bn":171,"./bn.js":171,"./bo":172,"./bo.js":172,"./br":173,"./br.js":173,"./bs":174,"./bs.js":174,"./ca":175,"./ca.js":175,"./cs":176,"./cs.js":176,"./cv":177,"./cv.js":177,"./cy":178,"./cy.js":178,"./da":179,"./da.js":179,"./de":180,"./de-at":181,"./de-at.js":181,"./de-ch":182,"./de-ch.js":182,"./de.js":180,"./dv":183,"./dv.js":183,"./el":184,"./el.js":184,"./en-SG":185,"./en-SG.js":185,"./en-au":186,"./en-au.js":186,"./en-ca":187,"./en-ca.js":187,"./en-gb":188,"./en-gb.js":188,"./en-ie":189,"./en-ie.js":189,"./en-il":190,"./en-il.js":190,"./en-nz":191,"./en-nz.js":191,"./eo":192,"./eo.js":192,"./es":193,"./es-do":194,"./es-do.js":194,"./es-us":195,"./es-us.js":195,"./es.js":193,"./et":196,"./et.js":196,"./eu":197,"./eu.js":197,"./fa":198,"./fa.js":198,"./fi":199,"./fi.js":199,"./fo":200,"./fo.js":200,"./fr":201,"./fr-ca":202,"./fr-ca.js":202,"./fr-ch":203,"./fr-ch.js":203,"./fr.js":201,"./fy":204,"./fy.js":204,"./ga":205,"./ga.js":205,"./gd":206,"./gd.js":206,"./gl":207,"./gl.js":207,"./gom-latn":208,"./gom-latn.js":208,"./gu":209,"./gu.js":209,"./he":210,"./he.js":210,"./hi":211,"./hi.js":211,"./hr":212,"./hr.js":212,"./hu":213,"./hu.js":213,"./hy-am":214,"./hy-am.js":214,"./id":215,"./id.js":215,"./is":216,"./is.js":216,"./it":217,"./it-ch":218,"./it-ch.js":218,"./it.js":217,"./ja":219,"./ja.js":219,"./jv":220,"./jv.js":220,"./ka":221,"./ka.js":221,"./kk":222,"./kk.js":222,"./km":223,"./km.js":223,"./kn":224,"./kn.js":224,"./ko":225,"./ko.js":225,"./ku":226,"./ku.js":226,"./ky":227,"./ky.js":227,"./lb":228,"./lb.js":228,"./lo":229,"./lo.js":229,"./lt":230,"./lt.js":230,"./lv":231,"./lv.js":231,"./me":232,"./me.js":232,"./mi":233,"./mi.js":233,"./mk":234,"./mk.js":234,"./ml":235,"./ml.js":235,"./mn":236,"./mn.js":236,"./mr":237,"./mr.js":237,"./ms":238,"./ms-my":239,"./ms-my.js":239,"./ms.js":238,"./mt":240,"./mt.js":240,"./my":241,"./my.js":241,"./nb":242,"./nb.js":242,"./ne":243,"./ne.js":243,"./nl":244,"./nl-be":245,"./nl-be.js":245,"./nl.js":244,"./nn":246,"./nn.js":246,"./pa-in":247,"./pa-in.js":247,"./pl":248,"./pl.js":248,"./pt":249,"./pt-br":250,"./pt-br.js":250,"./pt.js":249,"./ro":251,"./ro.js":251,"./ru":252,"./ru.js":252,"./sd":253,"./sd.js":253,"./se":254,"./se.js":254,"./si":255,"./si.js":255,"./sk":256,"./sk.js":256,"./sl":257,"./sl.js":257,"./sq":258,"./sq.js":258,"./sr":259,"./sr-cyrl":260,"./sr-cyrl.js":260,"./sr.js":259,"./ss":261,"./ss.js":261,"./sv":262,"./sv.js":262,"./sw":263,"./sw.js":263,"./ta":264,"./ta.js":264,"./te":265,"./te.js":265,"./tet":266,"./tet.js":266,"./tg":267,"./tg.js":267,"./th":268,"./th.js":268,"./tl-ph":269,"./tl-ph.js":269,"./tlh":270,"./tlh.js":270,"./tr":271,"./tr.js":271,"./tzl":272,"./tzl.js":272,"./tzm":273,"./tzm-latn":274,"./tzm-latn.js":274,"./tzm.js":273,"./ug-cn":275,"./ug-cn.js":275,"./uk":276,"./uk.js":276,"./ur":277,"./ur.js":277,"./uz":278,"./uz-latn":279,"./uz-latn.js":279,"./uz.js":278,"./vi":280,"./vi.js":280,"./x-pseudo":281,"./x-pseudo.js":281,"./yo":282,"./yo.js":282,"./zh-cn":283,"./zh-cn.js":283,"./zh-hk":284,"./zh-hk.js":284,"./zh-tw":285,"./zh-tw.js":285};function o(t){var e=r(t);return n(e)}function r(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}o.keys=function(){return Object.keys(map)},o.resolve=r,t.exports=o,o.id=291},419:function(t,e,n){"use strict";n.r(e);var o=n(290),r=n.n(o),j=n(288),c={name:"Test",layout:"indipage",components:{VuePureLightbox:r.a,BarChart:j.a},data:function(){return{chartData:{labels:["January","February"],datasets:[{label:"Data One",backgroundColor:"#f87979",data:[40,20]}]}}},mounted:function(){this.$emit("loaded")}},l=n(12),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container-small test-component"},[n("h1",{staticClass:"text-center"},[t._v("Awesome Content")]),t._v(" "),n("h3",{staticClass:"text-center"},[t._v("DATE - LOCATION")]),t._v(" "),n("div",{staticClass:"bar"}),t._v(" "),t._m(0),t._v(" "),n("VuePureLightbox",{attrs:{thumbnail:"https://via.placeholder.com/350x150",images:["https://placekitten.com/1080/910","https://placekitten.com/1000/910","https://placekitten.com/580/510"]}}),t._v(" "),n("h2",[t._v("This is a section")]),t._v(" "),n("p",[t._v("\n    Works like magic! By clicking on the buttons you will get access to more\n    in depth explanations about some of my projects.\n  ")]),t._v(" "),n("p",[t._v("\n    Works like magic! By clicking on the buttons you will get access to more\n    in depth explanations about some of my projects. Works like magic! By\n    clicking on the buttons you will get access to more in depth explanations\n    about some of my projects. Works like magic! By clicking on the buttons\n    you will get access to more in depth explanations about some of my\n    projects.\n  ")]),t._v(" "),n("h2",[t._v("This is a section")]),t._v(" "),n("p",[t._v("\n    Works like magic! By clicking on the buttons you will get access to more\n    in depth explanations about some of my projects. Works like magic! By\n    clicking on the buttons you will get access to more in depth explanations\n    about some of my projects. Works like magic! By clicking on the buttons\n    you will get access to more in depth explanations about some of my\n    projects.\n  ")]),t._v(" "),t._m(1),t._v(" "),n("BarChart",{attrs:{chartData:t.chartData}})],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"summary"},[e("ul",[e("li",[this._v("\n        Coffee Coffee CoffeeCoffeeCoffeeCoffee Coffee Coffee Coffee Coffee\n        Coffee Coffee Coffee Coffee Coffee Coffee Coffee Coffee Coffee Coffee\n        Coffee\n      ")]),this._v(" "),e("li",[this._v("Tea")]),this._v(" "),e("li",[this._v("Milk")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ol",[e("li",[this._v("Coffee")]),this._v(" "),e("li",[this._v("Tea")]),this._v(" "),e("li",[this._v("Milk")])])}],!1,null,"503c3ead",null);e.default=component.exports}}]);