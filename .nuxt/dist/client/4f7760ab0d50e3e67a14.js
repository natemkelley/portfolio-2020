(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{164:function(e,t,o){var content=o(294);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(30).default)("80ec968c",content,!0,{sourceMap:!1})},293:function(e,t,o){"use strict";var n=o(164);o.n(n).a},294:function(e,t,o){(e.exports=o(29)(!1)).push([e.i,"canvas[data-v-350f9124]{background-color:hsla(0,0%,100%,.94);border-radius:12px}",""])},295:function(e,t,o){"use strict";var n={name:"BarChart",extends:o(299).a,props:["chartData"],data:function(){return{options:{scales:{yAxes:[{ticks:{beginAtZero:!0,max:100}}]},maintainAspectRatio:!0,layout:{padding:{left:20,right:22,top:20,bottom:20}}}}},mounted:function(){this.renderChart(this.chartData,this.options)},methods:{}},r=(o(293),o(14)),component=Object(r.a)(n,void 0,void 0,!1,null,"350f9124",null);t.a=component.exports},298:function(e,t,o){var map={"./af":166,"./af.js":166,"./ar":167,"./ar-dz":168,"./ar-dz.js":168,"./ar-kw":169,"./ar-kw.js":169,"./ar-ly":170,"./ar-ly.js":170,"./ar-ma":171,"./ar-ma.js":171,"./ar-sa":172,"./ar-sa.js":172,"./ar-tn":173,"./ar-tn.js":173,"./ar.js":167,"./az":174,"./az.js":174,"./be":175,"./be.js":175,"./bg":176,"./bg.js":176,"./bm":177,"./bm.js":177,"./bn":178,"./bn.js":178,"./bo":179,"./bo.js":179,"./br":180,"./br.js":180,"./bs":181,"./bs.js":181,"./ca":182,"./ca.js":182,"./cs":183,"./cs.js":183,"./cv":184,"./cv.js":184,"./cy":185,"./cy.js":185,"./da":186,"./da.js":186,"./de":187,"./de-at":188,"./de-at.js":188,"./de-ch":189,"./de-ch.js":189,"./de.js":187,"./dv":190,"./dv.js":190,"./el":191,"./el.js":191,"./en-SG":192,"./en-SG.js":192,"./en-au":193,"./en-au.js":193,"./en-ca":194,"./en-ca.js":194,"./en-gb":195,"./en-gb.js":195,"./en-ie":196,"./en-ie.js":196,"./en-il":197,"./en-il.js":197,"./en-nz":198,"./en-nz.js":198,"./eo":199,"./eo.js":199,"./es":200,"./es-do":201,"./es-do.js":201,"./es-us":202,"./es-us.js":202,"./es.js":200,"./et":203,"./et.js":203,"./eu":204,"./eu.js":204,"./fa":205,"./fa.js":205,"./fi":206,"./fi.js":206,"./fo":207,"./fo.js":207,"./fr":208,"./fr-ca":209,"./fr-ca.js":209,"./fr-ch":210,"./fr-ch.js":210,"./fr.js":208,"./fy":211,"./fy.js":211,"./ga":212,"./ga.js":212,"./gd":213,"./gd.js":213,"./gl":214,"./gl.js":214,"./gom-latn":215,"./gom-latn.js":215,"./gu":216,"./gu.js":216,"./he":217,"./he.js":217,"./hi":218,"./hi.js":218,"./hr":219,"./hr.js":219,"./hu":220,"./hu.js":220,"./hy-am":221,"./hy-am.js":221,"./id":222,"./id.js":222,"./is":223,"./is.js":223,"./it":224,"./it-ch":225,"./it-ch.js":225,"./it.js":224,"./ja":226,"./ja.js":226,"./jv":227,"./jv.js":227,"./ka":228,"./ka.js":228,"./kk":229,"./kk.js":229,"./km":230,"./km.js":230,"./kn":231,"./kn.js":231,"./ko":232,"./ko.js":232,"./ku":233,"./ku.js":233,"./ky":234,"./ky.js":234,"./lb":235,"./lb.js":235,"./lo":236,"./lo.js":236,"./lt":237,"./lt.js":237,"./lv":238,"./lv.js":238,"./me":239,"./me.js":239,"./mi":240,"./mi.js":240,"./mk":241,"./mk.js":241,"./ml":242,"./ml.js":242,"./mn":243,"./mn.js":243,"./mr":244,"./mr.js":244,"./ms":245,"./ms-my":246,"./ms-my.js":246,"./ms.js":245,"./mt":247,"./mt.js":247,"./my":248,"./my.js":248,"./nb":249,"./nb.js":249,"./ne":250,"./ne.js":250,"./nl":251,"./nl-be":252,"./nl-be.js":252,"./nl.js":251,"./nn":253,"./nn.js":253,"./pa-in":254,"./pa-in.js":254,"./pl":255,"./pl.js":255,"./pt":256,"./pt-br":257,"./pt-br.js":257,"./pt.js":256,"./ro":258,"./ro.js":258,"./ru":259,"./ru.js":259,"./sd":260,"./sd.js":260,"./se":261,"./se.js":261,"./si":262,"./si.js":262,"./sk":263,"./sk.js":263,"./sl":264,"./sl.js":264,"./sq":265,"./sq.js":265,"./sr":266,"./sr-cyrl":267,"./sr-cyrl.js":267,"./sr.js":266,"./ss":268,"./ss.js":268,"./sv":269,"./sv.js":269,"./sw":270,"./sw.js":270,"./ta":271,"./ta.js":271,"./te":272,"./te.js":272,"./tet":273,"./tet.js":273,"./tg":274,"./tg.js":274,"./th":275,"./th.js":275,"./tl-ph":276,"./tl-ph.js":276,"./tlh":277,"./tlh.js":277,"./tr":278,"./tr.js":278,"./tzl":279,"./tzl.js":279,"./tzm":280,"./tzm-latn":281,"./tzm-latn.js":281,"./tzm.js":280,"./ug-cn":282,"./ug-cn.js":282,"./uk":283,"./uk.js":283,"./ur":284,"./ur.js":284,"./uz":285,"./uz-latn":286,"./uz-latn.js":286,"./uz.js":285,"./vi":287,"./vi.js":287,"./x-pseudo":288,"./x-pseudo.js":288,"./yo":289,"./yo.js":289,"./zh-cn":290,"./zh-cn.js":290,"./zh-hk":291,"./zh-hk.js":291,"./zh-tw":292,"./zh-tw.js":292};function n(e){var t=r(e);return o(t)}function r(e){if(!o.o(map,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return map[e]}n.keys=function(){return Object.keys(map)},n.resolve=r,e.exports=n,n.id=298},309:function(e,t,o){var content=o(388);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(30).default)("b9a865da",content,!0,{sourceMap:!1})},384:function(e,t,o){e.exports=o.p+"img/7e74a33.png"},385:function(e,t,o){e.exports=o.p+"img/692eee4.jpg"},386:function(e,t,o){e.exports=o.p+"img/09a6f1f.png"},387:function(e,t,o){"use strict";var n=o(309);o.n(n).a},388:function(e,t,o){(e.exports=o(29)(!1)).push([e.i,"img[data-v-0c88c3fe]{width:100%}h3[data-v-0c88c3fe]{font-size:24px;margin-left:5%;margin-top:12.5px}",""])},474:function(e,t,o){"use strict";o.r(t);var n=o(296),r=o.n(n),l=o(295),d=o(386),c=o.n(d),h={name:"studioux",layout:"indipage",components:{VuePureLightbox:r.a,BarChart:l.a},data:function(){return{logo:c.a}},mounted:function(){this.$emit("loaded")}},j=(o(387),o(14)),component=Object(j.a)(h,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container-small test-component"},[n("h1",{staticClass:"text-center"},[e._v("Studio UX")]),e._v(" "),n("h3",{staticClass:"text-center"},[e._v("UX Designer - 2018 - 2019")]),e._v(" "),n("div",{staticClass:"bar"}),e._v(" "),n("VuePureLightbox",{attrs:{thumbnail:e.logo,images:[e.logo]}}),e._v(" "),n("div",{staticClass:"summary"}),e._v(" "),n("h2",[e._v("Introduction")]),e._v(" "),n("p",[e._v("In 2018 I joined a community involvement team called “Studio UX”. Here we acted as a student consulting firm that entities approached with user experience problems that needed solutions. Roughly every four weeks we worked with a different organization tackling a myriad of different issues from UI design, feature validation, and user testing.")]),e._v(" "),e._m(0),e._v(" "),n("img",{attrs:{src:o(384)}}),e._v(" "),n("h2",[e._v("PluralSight's Problem")]),e._v(" "),n("p",[e._v('PluralSight is a multimillion dollar startup that has seen rapid growth in the past few years. However, this rapid growth has created a problem in that many of the new hires and teams do not know PluralSight’s design thinking process called "directed discovery". Additionally, rapid growth has lead to a lack of leadership and duplicate features being developed by different teams.')]),e._v(" "),n("p",[e._v("This is the problem statement provided to us by PluralSight’s CXO (Chief Experience Officer):")]),e._v(" "),n("blockquote",[e._v("Our current design thinking process that supports our ability to deliver user-centered experiences, called Directed Discovery, is manual and siloed. We need a proposed prototype for a web-based tool to centralize, automate and support cross-functional collaboration of experience design and validation testing.")]),e._v(" "),n("h2",[e._v("Modified GV Sprint")]),e._v(" "),e._m(1),e._v(" "),e._m(2),e._v(" "),n("p",[e._v("(*) signifies a meeting with PluralSight")]),e._v(" "),n("img",{attrs:{src:o(385)}}),e._v(" "),n("h2",[e._v("Solution")]),e._v(" "),n("p",[e._v("This project turned out to be a much bigger problem than could be solved in the 3 weeks we had to work on it. PluralSight recognized this and created a team of UX researchers at their own organization to take our prototype and expand on it. Although we created a product with many features, I will address the features that we implemented that directly relate to the pains expressed by the CXO.")]),e._v(" "),n("h3",[e._v("Inconsistent Application of Directed Discovery")]),e._v(" "),e._m(3),e._v(" "),n("h3",[e._v("Siloed Data and Repeated Research")]),e._v(" "),n("p",[e._v("To eliminate siloed data and repeated research, we concluded that findings would need to be made available to the whole organization. Therefore a research tool was integrated into our prototype. Teams will conclude their findings at the end of each each section of the design thinking process and the project. These findings would then be cataloged into a database and made searchable across the whole organization.")]),e._v(" "),n("h3",[e._v("Lack of Experience")]),e._v(" "),n("p",[e._v('To help teams stay aligned with the design thinking process, we implemented the idea of ‘templates’. Templates can be created by team leaders for any part of the process and can be edited at any time. Like the product "Notion", the user can pick a template to use and follow the instruction provided. This would guide the user into following the directed discovery process which could easily be adapated to different projects depending on the template used.')])],1)}),[function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Although I have worked with many different organizations that year, I would like to showcase one project that I found particularly interesting."),t("br"),t("br")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("In order to produce a reliable product that would solve Pluralsight's problem, we followed a modified version of the "),t("strong",[this._v("Google Venture (GV) Sprint")]),this._v(' methodology which we adapted to this specific project. This "modified version", which is bulleted below, was used solely because we lacked the time to do a full sprint.')])},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ol",[o("li",[e._v("Identify the pain points described by the CXO.")]),e._v(" "),o("li",[e._v("Explore UX best practices (validate Directed Discovery) and explore existing solutions (notion.so, leankit, milanote)")]),e._v(" "),o("li",[e._v("Map out PluralSight’s directed discovery process and compare it with best design thinkings practices *")]),e._v(" "),o("li",[e._v("Create individual paper prototypes")]),e._v(" "),o("li",[e._v("Cluster analysis: Vote which features would be useful from individual prototypes*")]),e._v(" "),o("li",[e._v("Iterate on group low-fidelity mockup (based on group discussions)")]),e._v(" "),o("li",[e._v("Create high fidelity iterations: based on feedback from actual users")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("The CXO was insistent that teams should follow the design thinking (directed discover) process for all new features. Although we initially thought to have trainings on the process would solve the problem, it turned out that team leads were trained, but lacked the motivation or understanding to follow the process. Our solution to this problem, which was later confirmed by the CEO and various team leads, was a web application which would guide teams through the process and would provided searchable data from past and ongoing projects. This included templated design thinking strategies and tutorials on how to conduct research built into the application. "),t("em",[this._v("The irony behind this solution was that this company makes its money by creating online tutorials for IT professionals.")])])}],!1,null,"0c88c3fe",null);t.default=component.exports}}]);