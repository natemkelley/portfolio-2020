(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{164:function(e,t,n){var content=n(294);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(30).default)("80ec968c",content,!0,{sourceMap:!1})},293:function(e,t,n){"use strict";var r=n(164);n.n(r).a},294:function(e,t,n){(e.exports=n(29)(!1)).push([e.i,"canvas[data-v-350f9124]{background-color:hsla(0,0%,100%,.94);border-radius:12px}",""])},295:function(e,t,n){"use strict";var r={name:"BarChart",extends:n(299).a,props:["chartData"],data:function(){return{options:{scales:{yAxes:[{ticks:{beginAtZero:!0,max:100}}]},maintainAspectRatio:!0,layout:{padding:{left:20,right:22,top:20,bottom:20}}}}},mounted:function(){this.renderChart(this.chartData,this.options)},methods:{}},o=(n(293),n(14)),component=Object(o.a)(r,void 0,void 0,!1,null,"350f9124",null);t.a=component.exports},298:function(e,t,n){var map={"./af":166,"./af.js":166,"./ar":167,"./ar-dz":168,"./ar-dz.js":168,"./ar-kw":169,"./ar-kw.js":169,"./ar-ly":170,"./ar-ly.js":170,"./ar-ma":171,"./ar-ma.js":171,"./ar-sa":172,"./ar-sa.js":172,"./ar-tn":173,"./ar-tn.js":173,"./ar.js":167,"./az":174,"./az.js":174,"./be":175,"./be.js":175,"./bg":176,"./bg.js":176,"./bm":177,"./bm.js":177,"./bn":178,"./bn.js":178,"./bo":179,"./bo.js":179,"./br":180,"./br.js":180,"./bs":181,"./bs.js":181,"./ca":182,"./ca.js":182,"./cs":183,"./cs.js":183,"./cv":184,"./cv.js":184,"./cy":185,"./cy.js":185,"./da":186,"./da.js":186,"./de":187,"./de-at":188,"./de-at.js":188,"./de-ch":189,"./de-ch.js":189,"./de.js":187,"./dv":190,"./dv.js":190,"./el":191,"./el.js":191,"./en-SG":192,"./en-SG.js":192,"./en-au":193,"./en-au.js":193,"./en-ca":194,"./en-ca.js":194,"./en-gb":195,"./en-gb.js":195,"./en-ie":196,"./en-ie.js":196,"./en-il":197,"./en-il.js":197,"./en-nz":198,"./en-nz.js":198,"./eo":199,"./eo.js":199,"./es":200,"./es-do":201,"./es-do.js":201,"./es-us":202,"./es-us.js":202,"./es.js":200,"./et":203,"./et.js":203,"./eu":204,"./eu.js":204,"./fa":205,"./fa.js":205,"./fi":206,"./fi.js":206,"./fo":207,"./fo.js":207,"./fr":208,"./fr-ca":209,"./fr-ca.js":209,"./fr-ch":210,"./fr-ch.js":210,"./fr.js":208,"./fy":211,"./fy.js":211,"./ga":212,"./ga.js":212,"./gd":213,"./gd.js":213,"./gl":214,"./gl.js":214,"./gom-latn":215,"./gom-latn.js":215,"./gu":216,"./gu.js":216,"./he":217,"./he.js":217,"./hi":218,"./hi.js":218,"./hr":219,"./hr.js":219,"./hu":220,"./hu.js":220,"./hy-am":221,"./hy-am.js":221,"./id":222,"./id.js":222,"./is":223,"./is.js":223,"./it":224,"./it-ch":225,"./it-ch.js":225,"./it.js":224,"./ja":226,"./ja.js":226,"./jv":227,"./jv.js":227,"./ka":228,"./ka.js":228,"./kk":229,"./kk.js":229,"./km":230,"./km.js":230,"./kn":231,"./kn.js":231,"./ko":232,"./ko.js":232,"./ku":233,"./ku.js":233,"./ky":234,"./ky.js":234,"./lb":235,"./lb.js":235,"./lo":236,"./lo.js":236,"./lt":237,"./lt.js":237,"./lv":238,"./lv.js":238,"./me":239,"./me.js":239,"./mi":240,"./mi.js":240,"./mk":241,"./mk.js":241,"./ml":242,"./ml.js":242,"./mn":243,"./mn.js":243,"./mr":244,"./mr.js":244,"./ms":245,"./ms-my":246,"./ms-my.js":246,"./ms.js":245,"./mt":247,"./mt.js":247,"./my":248,"./my.js":248,"./nb":249,"./nb.js":249,"./ne":250,"./ne.js":250,"./nl":251,"./nl-be":252,"./nl-be.js":252,"./nl.js":251,"./nn":253,"./nn.js":253,"./pa-in":254,"./pa-in.js":254,"./pl":255,"./pl.js":255,"./pt":256,"./pt-br":257,"./pt-br.js":257,"./pt.js":256,"./ro":258,"./ro.js":258,"./ru":259,"./ru.js":259,"./sd":260,"./sd.js":260,"./se":261,"./se.js":261,"./si":262,"./si.js":262,"./sk":263,"./sk.js":263,"./sl":264,"./sl.js":264,"./sq":265,"./sq.js":265,"./sr":266,"./sr-cyrl":267,"./sr-cyrl.js":267,"./sr.js":266,"./ss":268,"./ss.js":268,"./sv":269,"./sv.js":269,"./sw":270,"./sw.js":270,"./ta":271,"./ta.js":271,"./te":272,"./te.js":272,"./tet":273,"./tet.js":273,"./tg":274,"./tg.js":274,"./th":275,"./th.js":275,"./tl-ph":276,"./tl-ph.js":276,"./tlh":277,"./tlh.js":277,"./tr":278,"./tr.js":278,"./tzl":279,"./tzl.js":279,"./tzm":280,"./tzm-latn":281,"./tzm-latn.js":281,"./tzm.js":280,"./ug-cn":282,"./ug-cn.js":282,"./uk":283,"./uk.js":283,"./ur":284,"./ur.js":284,"./uz":285,"./uz-latn":286,"./uz-latn.js":286,"./uz.js":285,"./vi":287,"./vi.js":287,"./x-pseudo":288,"./x-pseudo.js":288,"./yo":289,"./yo.js":289,"./zh-cn":290,"./zh-cn.js":290,"./zh-hk":291,"./zh-hk.js":291,"./zh-tw":292,"./zh-tw.js":292};function r(e){var t=o(e);return n(t)}function o(e){if(!n.o(map,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return map[e]}r.keys=function(){return Object.keys(map)},r.resolve=o,e.exports=r,r.id=298},306:function(e,t,n){var content=n(377);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(30).default)("4a073482",content,!0,{sourceMap:!1})},370:function(e,t,n){e.exports=n.p+"img/7813f6c.png"},371:function(e,t,n){e.exports=n.p+"img/40dfc71.jpg"},372:function(e,t,n){e.exports=n.p+"img/4f3ec54.jpg"},373:function(e,t,n){e.exports=n.p+"img/8d53dbc.jpg"},374:function(e,t,n){e.exports=n.p+"img/18a4614.jpg"},375:function(e,t,n){e.exports=n.p+"img/f8fcd3f.jpg"},376:function(e,t,n){"use strict";var r=n(306);n.n(r).a},377:function(e,t,n){(e.exports=n(29)(!1)).push([e.i,"img[data-v-7a9e5774]{width:100%}",""])},477:function(e,t,n){"use strict";n.r(t);var r=n(296),o=n.n(r),h=n(295),l=n(371),c=n.n(l),d=n(372),j=n.n(d),m=n(373),f=n.n(m),v=n(374),k=n.n(v),w=n(375),y=n.n(w),_={name:"khione",layout:"indipage",components:{VuePureLightbox:o.a,BarChart:h.a},data:function(){return{khione1:c.a,khione2:j.a,khione3:f.a,khione4:k.a,khione5:y.a,chartData:{labels:["Warm","Bugs","Dry","Simple","Light-weight","Food","Bigger Tent","Lights"],datasets:[{label:"Backingpacking Pains by % of People",data:[75,65,50,50,97,35,15,10],backgroundColor:["rgba(255, 99, 132, 0.2)","rgba(54, 162, 235, 0.2)","rgba(255, 206, 86, 0.2)","rgba(75, 192, 192, 0.2)","rgba(153, 102, 255, 0.2)","rgba(255, 159, 64, 0.2)","rgba(71, 170, 48, 0.2)","rgba(88, 68, 80, 0.2)"],borderColor:["rgba(255, 99, 132, 1.2)","rgba(54, 162, 235, 1.2)","rgba(255, 206, 86, 1.2)","rgba(75, 192, 192, 1.2)","rgba(153, 102, 255, 1.2)","rgba(255, 159, 64, 1.2)","rgba(71, 170, 48, 1.2)","rgba(88, 68, 80, 1.2)"],borderWidth:1}]}}},mounted:function(){this.$emit("loaded")}},x=(n(376),n(14)),component=Object(x.a)(_,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container-small test-component"},[r("h1",{staticClass:"text-center"},[e._v("Khione Outdoor Gear")]),e._v(" "),r("h3",{staticClass:"text-center"},[e._v("UX Engineer - 2017 - 2018")]),e._v(" "),r("div",{staticClass:"bar"}),e._v(" "),r("VuePureLightbox",{attrs:{thumbnail:e.khione1,images:[e.khione1,e.khione2,e.khione3]}}),e._v(" "),e._m(0),e._v(" "),r("p",[e._v("In 2018 I worked in a team of five to kickstart a product which would eventually go on to compete in the Utah Entrepreneur of Year Competition. Although we all shared roles during the initial development of the product, I was primarily the UX designer and web developer.")]),e._v(" "),r("h2",[e._v("Problem")]),e._v(" "),r("p",[e._v("Khione was founded as a company to change the way people go camping. In order to to do that, we explored the pains that people experienced while backpacking. Although we were already familiar with this area, we spent approximately three weeks observing backpackers and interviewing them about their most recent backpacking trip. After summarizing our notes, we found that almost all interviewees experienced pains in these areas:")]),e._v(" "),r("BarChart",{attrs:{chartData:e.chartData}}),e._v(" "),r("h2",[e._v("Process")]),e._v(" "),r("p",[e._v('We then spent the next few months iterating through different concepts that would address this problem. Our ideas ranged from carbon fiber tents, smaller backpacks, and even "tent-coats". After every iteration we would present low to medium fidelity prototypes to potential customers to get their feedback. Unfortunately, our first 12 ideas failed to gain the interest of backpackers on the grounds that our solutions were either too complicated or not unique enough. However, one idea seemed to have potential: hammock tents.')]),e._v(" "),r("p",[e._v("Some preliminary market research led us to a variety of companies that were manufacturing hammock tents. However, none of their solutions seemed to address ALL the problems that we had initially identified during our backpacker interviews.")]),e._v(" "),r("img",{attrs:{src:n(370)}}),e._v(" "),r("h2",[e._v("Solution")]),e._v(" "),r("p",[e._v("Our solution was The Shel Hammock Tent. A simple setup hammock that would keep you warm down to 32 degrees, dry in light rain, bug-free, and weighed just 2.2 pounds. What made our potential customers especially interested was the fact that it would eliminate the need for a tent, rainfly, and sleeping bag while they were on the trail.")]),e._v(" "),r("VuePureLightbox",{attrs:{thumbnail:e.khione1,images:[e.khione1,e.khione2,e.khione3]}}),e._v(" "),r("h2",[e._v("Additional Duties")]),e._v(" "),r("p",[e._v("As the UX designer I lead out on conducting user interviews, testing prototypes, and suggesting changes for future iterations. I was also solely responsible for creating the look and feel of the brand through marketing materials. As the company began to grow and more people began designing marketing materials, it became necessary to create a style guide. This guide was also the primary style of the company website which I designed and coded to drive online sales.")]),e._v(" "),r("VuePureLightbox",{attrs:{thumbnail:e.khione4,images:[e.khione4,e.khione5]}}),e._v(" "),r("VuePureLightbox",{attrs:{thumbnail:e.khione5,images:[e.khione5,e.khione4]}})],1)}),[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"summary"},[t("ul",[t("li",[this._v("Played crucial role in launch of startup as UX designer and developer")]),this._v(" "),t("li",[this._v("Executed iterative user tests of web store, SEO channels, and gear to ensure quality and usability using surveys, interviews, and observations")]),this._v(" "),t("li",[this._v("Raised $120,000 from sales, competitions, and kick starter in 6 months")]),this._v(" "),t("li",[this._v("Competed as one of the top 20 teams in Utah Entrepreneur of the Year")])])])}],!1,null,"7a9e5774",null);t.default=component.exports}}]);