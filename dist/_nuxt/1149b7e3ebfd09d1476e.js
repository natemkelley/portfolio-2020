(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{158:function(e,t,n){var content=n(288);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(27).default)("80ec968c",content,!0,{sourceMap:!1})},287:function(e,t,n){"use strict";var r=n(158);n.n(r).a},288:function(e,t,n){(e.exports=n(26)(!1)).push([e.i,"canvas[data-v-350f9124]{background-color:hsla(0,0%,100%,.94);border-radius:12px}",""])},289:function(e,t,n){"use strict";var r={name:"BarChart",extends:n(293).a,props:["chartData"],data:function(){return{options:{scales:{yAxes:[{ticks:{beginAtZero:!0,max:100}}]},maintainAspectRatio:!0,layout:{padding:{left:20,right:22,top:20,bottom:20}}}}},mounted:function(){this.renderChart(this.chartData,this.options)},methods:{}},o=(n(287),n(12)),component=Object(o.a)(r,void 0,void 0,!1,null,"350f9124",null);t.a=component.exports},292:function(e,t,n){var map={"./af":160,"./af.js":160,"./ar":161,"./ar-dz":162,"./ar-dz.js":162,"./ar-kw":163,"./ar-kw.js":163,"./ar-ly":164,"./ar-ly.js":164,"./ar-ma":165,"./ar-ma.js":165,"./ar-sa":166,"./ar-sa.js":166,"./ar-tn":167,"./ar-tn.js":167,"./ar.js":161,"./az":168,"./az.js":168,"./be":169,"./be.js":169,"./bg":170,"./bg.js":170,"./bm":171,"./bm.js":171,"./bn":172,"./bn.js":172,"./bo":173,"./bo.js":173,"./br":174,"./br.js":174,"./bs":175,"./bs.js":175,"./ca":176,"./ca.js":176,"./cs":177,"./cs.js":177,"./cv":178,"./cv.js":178,"./cy":179,"./cy.js":179,"./da":180,"./da.js":180,"./de":181,"./de-at":182,"./de-at.js":182,"./de-ch":183,"./de-ch.js":183,"./de.js":181,"./dv":184,"./dv.js":184,"./el":185,"./el.js":185,"./en-SG":186,"./en-SG.js":186,"./en-au":187,"./en-au.js":187,"./en-ca":188,"./en-ca.js":188,"./en-gb":189,"./en-gb.js":189,"./en-ie":190,"./en-ie.js":190,"./en-il":191,"./en-il.js":191,"./en-nz":192,"./en-nz.js":192,"./eo":193,"./eo.js":193,"./es":194,"./es-do":195,"./es-do.js":195,"./es-us":196,"./es-us.js":196,"./es.js":194,"./et":197,"./et.js":197,"./eu":198,"./eu.js":198,"./fa":199,"./fa.js":199,"./fi":200,"./fi.js":200,"./fo":201,"./fo.js":201,"./fr":202,"./fr-ca":203,"./fr-ca.js":203,"./fr-ch":204,"./fr-ch.js":204,"./fr.js":202,"./fy":205,"./fy.js":205,"./ga":206,"./ga.js":206,"./gd":207,"./gd.js":207,"./gl":208,"./gl.js":208,"./gom-latn":209,"./gom-latn.js":209,"./gu":210,"./gu.js":210,"./he":211,"./he.js":211,"./hi":212,"./hi.js":212,"./hr":213,"./hr.js":213,"./hu":214,"./hu.js":214,"./hy-am":215,"./hy-am.js":215,"./id":216,"./id.js":216,"./is":217,"./is.js":217,"./it":218,"./it-ch":219,"./it-ch.js":219,"./it.js":218,"./ja":220,"./ja.js":220,"./jv":221,"./jv.js":221,"./ka":222,"./ka.js":222,"./kk":223,"./kk.js":223,"./km":224,"./km.js":224,"./kn":225,"./kn.js":225,"./ko":226,"./ko.js":226,"./ku":227,"./ku.js":227,"./ky":228,"./ky.js":228,"./lb":229,"./lb.js":229,"./lo":230,"./lo.js":230,"./lt":231,"./lt.js":231,"./lv":232,"./lv.js":232,"./me":233,"./me.js":233,"./mi":234,"./mi.js":234,"./mk":235,"./mk.js":235,"./ml":236,"./ml.js":236,"./mn":237,"./mn.js":237,"./mr":238,"./mr.js":238,"./ms":239,"./ms-my":240,"./ms-my.js":240,"./ms.js":239,"./mt":241,"./mt.js":241,"./my":242,"./my.js":242,"./nb":243,"./nb.js":243,"./ne":244,"./ne.js":244,"./nl":245,"./nl-be":246,"./nl-be.js":246,"./nl.js":245,"./nn":247,"./nn.js":247,"./pa-in":248,"./pa-in.js":248,"./pl":249,"./pl.js":249,"./pt":250,"./pt-br":251,"./pt-br.js":251,"./pt.js":250,"./ro":252,"./ro.js":252,"./ru":253,"./ru.js":253,"./sd":254,"./sd.js":254,"./se":255,"./se.js":255,"./si":256,"./si.js":256,"./sk":257,"./sk.js":257,"./sl":258,"./sl.js":258,"./sq":259,"./sq.js":259,"./sr":260,"./sr-cyrl":261,"./sr-cyrl.js":261,"./sr.js":260,"./ss":262,"./ss.js":262,"./sv":263,"./sv.js":263,"./sw":264,"./sw.js":264,"./ta":265,"./ta.js":265,"./te":266,"./te.js":266,"./tet":267,"./tet.js":267,"./tg":268,"./tg.js":268,"./th":269,"./th.js":269,"./tl-ph":270,"./tl-ph.js":270,"./tlh":271,"./tlh.js":271,"./tr":272,"./tr.js":272,"./tzl":273,"./tzl.js":273,"./tzm":274,"./tzm-latn":275,"./tzm-latn.js":275,"./tzm.js":274,"./ug-cn":276,"./ug-cn.js":276,"./uk":277,"./uk.js":277,"./ur":278,"./ur.js":278,"./uz":279,"./uz-latn":280,"./uz-latn.js":280,"./uz.js":279,"./vi":281,"./vi.js":281,"./x-pseudo":282,"./x-pseudo.js":282,"./yo":283,"./yo.js":283,"./zh-cn":284,"./zh-cn.js":284,"./zh-hk":285,"./zh-hk.js":285,"./zh-tw":286,"./zh-tw.js":286};function r(e){var t=o(e);return n(t)}function o(e){if(!n.o(map,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return map[e]}r.keys=function(){return Object.keys(map)},r.resolve=o,e.exports=r,r.id=292},299:function(e,t,n){var content=n(363);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(27).default)("4a073482",content,!0,{sourceMap:!1})},356:function(e,t,n){e.exports=n.p+"img/7813f6c.png"},357:function(e,t,n){e.exports=n.p+"img/40dfc71.jpg"},358:function(e,t,n){e.exports=n.p+"img/4f3ec54.jpg"},359:function(e,t,n){e.exports=n.p+"img/8d53dbc.jpg"},360:function(e,t,n){e.exports=n.p+"img/18a4614.jpg"},361:function(e,t,n){e.exports=n.p+"img/f8fcd3f.jpg"},362:function(e,t,n){"use strict";var r=n(299);n.n(r).a},363:function(e,t,n){(e.exports=n(26)(!1)).push([e.i,"img[data-v-7a9e5774]{width:100%}",""])},466:function(e,t,n){"use strict";n.r(t);var r=n(290),o=n.n(r),h=n(289),l=n(357),c=n.n(l),d=n(358),j=n.n(d),m=n(359),f=n.n(m),v=n(360),k=n.n(v),w=n(361),y=n.n(w),_={name:"khione",layout:"indipage",components:{VuePureLightbox:o.a,BarChart:h.a},data:function(){return{khione1:c.a,khione2:j.a,khione3:f.a,khione4:k.a,khione5:y.a,chartData:{labels:["Warm","Bugs","Dry","Simple","Light-weight","Food","Bigger Tent","Lights"],datasets:[{label:"Backingpacking Pains by % of People",data:[75,65,50,50,97,35,15,10],backgroundColor:["rgba(255, 99, 132, 0.2)","rgba(54, 162, 235, 0.2)","rgba(255, 206, 86, 0.2)","rgba(75, 192, 192, 0.2)","rgba(153, 102, 255, 0.2)","rgba(255, 159, 64, 0.2)","rgba(71, 170, 48, 0.2)","rgba(88, 68, 80, 0.2)"],borderColor:["rgba(255, 99, 132, 1.2)","rgba(54, 162, 235, 1.2)","rgba(255, 206, 86, 1.2)","rgba(75, 192, 192, 1.2)","rgba(153, 102, 255, 1.2)","rgba(255, 159, 64, 1.2)","rgba(71, 170, 48, 1.2)","rgba(88, 68, 80, 1.2)"],borderWidth:1}]}}},mounted:function(){this.$emit("loaded")}},x=(n(362),n(12)),component=Object(x.a)(_,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container-small test-component"},[r("h1",{staticClass:"text-center"},[e._v("Khione Outdoor Gear")]),e._v(" "),r("h3",{staticClass:"text-center"},[e._v("UX Engineer - 2017 - 2018")]),e._v(" "),r("div",{staticClass:"bar"}),e._v(" "),r("VuePureLightbox",{attrs:{thumbnail:e.khione1,images:[e.khione1,e.khione2,e.khione3]}}),e._v(" "),e._m(0),e._v(" "),r("p",[e._v("In 2018 I worked in a team of five to kickstart a product which would eventually go on to compete in the Utah Entrepreneur of Year Competition. Although we all shared roles during the initial development of the product, I was primarily the UX designer and web developer.")]),e._v(" "),r("h2",[e._v("Problem")]),e._v(" "),r("p",[e._v("Khione was founded as a company to change the way people go camping. In order to to do that, we explored the pains that people experienced while backpacking. Although we were already familiar with this area, we spent approximately three weeks observing backpackers and interviewing them about their most recent backpacking trip. After summarizing our notes, we found that almost all interviewees experienced pains in these areas:")]),e._v(" "),r("BarChart",{attrs:{chartData:e.chartData}}),e._v(" "),r("h2",[e._v("Process")]),e._v(" "),r("p",[e._v('We then spent the next few months iterating through different concepts that would address this problem. Our ideas ranged from carbon fiber tents, smaller backpacks, and even "tent-coats". After every iteration we would present low to medium fidelity prototypes to potential customers to get their feedback. Unfortunately, our first 12 ideas failed to gain the interest of backpackers on the grounds that our solutions were either too complicated or not unique enough. However, one idea seemed to have potential: hammock tents.')]),e._v(" "),r("p",[e._v("Some preliminary market research led us to a variety of companies that were manufacturing hammock tents. However, none of their solutions seemed to address ALL the problems that we had initially identified during our backpacker interviews.")]),e._v(" "),r("img",{attrs:{src:n(356)}}),e._v(" "),r("h2",[e._v("Solution")]),e._v(" "),r("p",[e._v("Our solution was The Shel Hammock Tent. A simple setup hammock that would keep you warm down to 32 degrees, dry in light rain, bug-free, and weighed just 2.2 pounds. What made our potential customers especially interested was the fact that it would eliminate the need for a tent, rainfly, and sleeping bag while they were on the trail.")]),e._v(" "),r("VuePureLightbox",{attrs:{thumbnail:e.khione1,images:[e.khione1,e.khione2,e.khione3]}}),e._v(" "),r("h2",[e._v("Additional Duties")]),e._v(" "),r("p",[e._v("As the UX designer I lead out on conducting user interviews, testing prototypes, and suggesting changes for future iterations. I was also solely responsible for creating the look and feel of the brand through marketing materials. As the company began to grow and more people began designing marketing materials, it became necessary to create a style guide. This guide was also the primary style of the company website which I designed and coded to drive online sales.")]),e._v(" "),r("VuePureLightbox",{attrs:{thumbnail:e.khione4,images:[e.khione4,e.khione5]}}),e._v(" "),r("VuePureLightbox",{attrs:{thumbnail:e.khione5,images:[e.khione5,e.khione4]}})],1)}),[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"summary"},[t("ul",[t("li",[this._v("Played crucial role in launch of startup as UX designer and developer")]),this._v(" "),t("li",[this._v("Executed iterative user tests of web store, SEO channels, and gear to ensure quality and usability using surveys, interviews, and observations")]),this._v(" "),t("li",[this._v("Raised $120,000 from sales, competitions, and kick starter in 6 months")]),this._v(" "),t("li",[this._v("Competed as one of the top 20 teams in Utah Entrepreneur of the Year")])])])}],!1,null,"7a9e5774",null);t.default=component.exports}}]);