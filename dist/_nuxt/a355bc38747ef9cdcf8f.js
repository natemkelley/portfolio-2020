(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{164:function(t,e,n){var content=n(294);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(30).default)("80ec968c",content,!0,{sourceMap:!1})},293:function(t,e,n){"use strict";var o=n(164);n.n(o).a},294:function(t,e,n){(t.exports=n(29)(!1)).push([t.i,"canvas[data-v-350f9124]{background-color:hsla(0,0%,100%,.94);border-radius:12px}",""])},295:function(t,e,n){"use strict";var o={name:"BarChart",extends:n(299).a,props:["chartData"],data:function(){return{options:{scales:{yAxes:[{ticks:{beginAtZero:!0,max:100}}]},maintainAspectRatio:!0,layout:{padding:{left:20,right:22,top:20,bottom:20}}}}},mounted:function(){this.renderChart(this.chartData,this.options)},methods:{}},r=(n(293),n(14)),component=Object(r.a)(o,void 0,void 0,!1,null,"350f9124",null);e.a=component.exports},298:function(t,e,n){var map={"./af":166,"./af.js":166,"./ar":167,"./ar-dz":168,"./ar-dz.js":168,"./ar-kw":169,"./ar-kw.js":169,"./ar-ly":170,"./ar-ly.js":170,"./ar-ma":171,"./ar-ma.js":171,"./ar-sa":172,"./ar-sa.js":172,"./ar-tn":173,"./ar-tn.js":173,"./ar.js":167,"./az":174,"./az.js":174,"./be":175,"./be.js":175,"./bg":176,"./bg.js":176,"./bm":177,"./bm.js":177,"./bn":178,"./bn.js":178,"./bo":179,"./bo.js":179,"./br":180,"./br.js":180,"./bs":181,"./bs.js":181,"./ca":182,"./ca.js":182,"./cs":183,"./cs.js":183,"./cv":184,"./cv.js":184,"./cy":185,"./cy.js":185,"./da":186,"./da.js":186,"./de":187,"./de-at":188,"./de-at.js":188,"./de-ch":189,"./de-ch.js":189,"./de.js":187,"./dv":190,"./dv.js":190,"./el":191,"./el.js":191,"./en-SG":192,"./en-SG.js":192,"./en-au":193,"./en-au.js":193,"./en-ca":194,"./en-ca.js":194,"./en-gb":195,"./en-gb.js":195,"./en-ie":196,"./en-ie.js":196,"./en-il":197,"./en-il.js":197,"./en-nz":198,"./en-nz.js":198,"./eo":199,"./eo.js":199,"./es":200,"./es-do":201,"./es-do.js":201,"./es-us":202,"./es-us.js":202,"./es.js":200,"./et":203,"./et.js":203,"./eu":204,"./eu.js":204,"./fa":205,"./fa.js":205,"./fi":206,"./fi.js":206,"./fo":207,"./fo.js":207,"./fr":208,"./fr-ca":209,"./fr-ca.js":209,"./fr-ch":210,"./fr-ch.js":210,"./fr.js":208,"./fy":211,"./fy.js":211,"./ga":212,"./ga.js":212,"./gd":213,"./gd.js":213,"./gl":214,"./gl.js":214,"./gom-latn":215,"./gom-latn.js":215,"./gu":216,"./gu.js":216,"./he":217,"./he.js":217,"./hi":218,"./hi.js":218,"./hr":219,"./hr.js":219,"./hu":220,"./hu.js":220,"./hy-am":221,"./hy-am.js":221,"./id":222,"./id.js":222,"./is":223,"./is.js":223,"./it":224,"./it-ch":225,"./it-ch.js":225,"./it.js":224,"./ja":226,"./ja.js":226,"./jv":227,"./jv.js":227,"./ka":228,"./ka.js":228,"./kk":229,"./kk.js":229,"./km":230,"./km.js":230,"./kn":231,"./kn.js":231,"./ko":232,"./ko.js":232,"./ku":233,"./ku.js":233,"./ky":234,"./ky.js":234,"./lb":235,"./lb.js":235,"./lo":236,"./lo.js":236,"./lt":237,"./lt.js":237,"./lv":238,"./lv.js":238,"./me":239,"./me.js":239,"./mi":240,"./mi.js":240,"./mk":241,"./mk.js":241,"./ml":242,"./ml.js":242,"./mn":243,"./mn.js":243,"./mr":244,"./mr.js":244,"./ms":245,"./ms-my":246,"./ms-my.js":246,"./ms.js":245,"./mt":247,"./mt.js":247,"./my":248,"./my.js":248,"./nb":249,"./nb.js":249,"./ne":250,"./ne.js":250,"./nl":251,"./nl-be":252,"./nl-be.js":252,"./nl.js":251,"./nn":253,"./nn.js":253,"./pa-in":254,"./pa-in.js":254,"./pl":255,"./pl.js":255,"./pt":256,"./pt-br":257,"./pt-br.js":257,"./pt.js":256,"./ro":258,"./ro.js":258,"./ru":259,"./ru.js":259,"./sd":260,"./sd.js":260,"./se":261,"./se.js":261,"./si":262,"./si.js":262,"./sk":263,"./sk.js":263,"./sl":264,"./sl.js":264,"./sq":265,"./sq.js":265,"./sr":266,"./sr-cyrl":267,"./sr-cyrl.js":267,"./sr.js":266,"./ss":268,"./ss.js":268,"./sv":269,"./sv.js":269,"./sw":270,"./sw.js":270,"./ta":271,"./ta.js":271,"./te":272,"./te.js":272,"./tet":273,"./tet.js":273,"./tg":274,"./tg.js":274,"./th":275,"./th.js":275,"./tl-ph":276,"./tl-ph.js":276,"./tlh":277,"./tlh.js":277,"./tr":278,"./tr.js":278,"./tzl":279,"./tzl.js":279,"./tzm":280,"./tzm-latn":281,"./tzm-latn.js":281,"./tzm.js":280,"./ug-cn":282,"./ug-cn.js":282,"./uk":283,"./uk.js":283,"./ur":284,"./ur.js":284,"./uz":285,"./uz-latn":286,"./uz-latn.js":286,"./uz.js":285,"./vi":287,"./vi.js":287,"./x-pseudo":288,"./x-pseudo.js":288,"./yo":289,"./yo.js":289,"./zh-cn":290,"./zh-cn.js":290,"./zh-hk":291,"./zh-hk.js":291,"./zh-tw":292,"./zh-tw.js":292};function o(t){var e=r(t);return n(e)}function r(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}o.keys=function(){return Object.keys(map)},o.resolve=r,t.exports=o,o.id=298},473:function(t,e,n){"use strict";n.r(e);var o=n(296),r=n.n(o),j=n(295),c={name:"Test",layout:"indipage",components:{VuePureLightbox:r.a,BarChart:j.a},data:function(){return{chartData:{labels:["January","February"],datasets:[{label:"Data One",backgroundColor:"#f87979",data:[40,20]}]}}},mounted:function(){this.$emit("loaded")}},l=n(14),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container-small test-component"},[n("h1",{staticClass:"text-center"},[t._v("Template Content")]),t._v(" "),n("h3",{staticClass:"text-center"},[t._v("DATE - LOCATION")]),t._v(" "),n("div",{staticClass:"bar"}),t._v(" "),t._m(0),t._v(" "),n("VuePureLightbox",{attrs:{thumbnail:"https://via.placeholder.com/350x150",images:["https://placekitten.com/1080/910","https://placekitten.com/1000/910","https://placekitten.com/580/510"]}}),t._v(" "),n("h2",[t._v("This is a section")]),t._v(" "),n("p",[t._v("\n    Works like magic! By clicking on the buttons you will get access to more\n    in depth explanations about some of my projects.\n  ")]),t._v(" "),n("p",[t._v("\n    Works like magic! By clicking on the buttons you will get access to more\n    in depth explanations about some of my projects. Works like magic! By\n    clicking on the buttons you will get access to more in depth explanations\n    about some of my projects. Works like magic! By clicking on the buttons\n    you will get access to more in depth explanations about some of my\n    projects.\n  ")]),t._v(" "),n("h2",[t._v("This is a section")]),t._v(" "),n("p",[t._v("\n    Works like magic! By clicking on the buttons you will get access to more\n    in depth explanations about some of my projects. Works like magic! By\n    clicking on the buttons you will get access to more in depth explanations\n    about some of my projects. Works like magic! By clicking on the buttons\n    you will get access to more in depth explanations about some of my\n    projects.\n  ")]),t._v(" "),t._m(1),t._v(" "),n("BarChart",{attrs:{chartData:t.chartData}})],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"summary"},[e("ul",[e("li",[this._v("\n        Coffee Coffee CoffeeCoffeeCoffeeCoffee Coffee Coffee Coffee Coffee\n        Coffee Coffee Coffee Coffee Coffee Coffee Coffee Coffee Coffee Coffee\n        Coffee\n      ")]),this._v(" "),e("li",[this._v("Tea")]),this._v(" "),e("li",[this._v("Milk")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ol",[e("li",[this._v("Coffee")]),this._v(" "),e("li",[this._v("Tea")]),this._v(" "),e("li",[this._v("Milk")])])}],!1,null,"061e2fac",null);e.default=component.exports}}]);