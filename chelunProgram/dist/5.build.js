webpackJsonp([5],{34:function(r,e,t){"use strict";function a(r){t(83)}Object.defineProperty(e,"__esModule",{value:!0});var o=t(45),i=t(85),n=t(6),l=a,c=n(o.a,i.a,!1,l,"data-v-f72099c0",null);e.default=c.exports},45:function(r,e,t){"use strict";var a=t(7),o=Object.assign||function(r){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(r[a]=t[a])}return r};e.a={data:function(){return{year:0}},computed:o({},Object(a.d)({colorList:function(r){return r.color.colorList},colorName:function(r){return r.color.colorName}})),methods:o({},Object(a.b)({getColorData:"color/getColorData",getColorName:"color/getColorName"}),{tabYear:function(r){this.year=r},tabColor:function(r,e){this.getColorName(e),this.$route.query.CarID?this.$router.push({path:"/img",query:{SerialID:this.$route.query.SerialID,ColorID:r,CarID:this.$route.query.CarID}}):this.$router.push({path:"/img",query:{SerialID:this.$route.query.SerialID,ColorID:r}})}}),mounted:function(){this.getColorData(this.$route.query.SerialID)}}},83:function(r,e,t){var a=t(84);"string"==typeof a&&(a=[[r.i,a,""]]),a.locals&&(r.exports=a.locals);t(5)("09ef2822",a,!0,{})},84:function(r,e,t){e=r.exports=t(3)(!1),e.push([r.i,".wrap[data-v-f72099c0]{width:100%;height:100%}.wrap>p[data-v-f72099c0]{height:.8rem;line-height:.8rem;text-align:center;color:#00afff}.year>p[data-v-f72099c0]{width:100%;display:flex;overflow-x:auto}.year>p span[data-v-f72099c0]{padding:0 .5rem}.year ul[data-v-f72099c0]{margin-top:.15rem;padding:0 .2rem;overflow:hidden;background:#fff}.year ul li[data-v-f72099c0]{float:left;width:3.45rem;font-size:.32rem;line-height:.68rem;border:1px solid #3aacff;box-sizing:border-box;margin:.2rem 0;border-radius:.05rem;text-align:center}.year ul li span[data-v-f72099c0]{display:inline-block;width:.4rem;height:.4rem;margin-left:.2rem;vertical-align:-12%;background:#fe9210;box-sizing:border-box;border:1px solid #818181}.active[data-v-f72099c0]{color:#00afff}",""])},85:function(r,e,t){"use strict";var a=function(){var r=this,e=r.$createElement,t=r._self._c||e;return t("div",{staticClass:"wrap"},[t("p",[r._v("全部颜色")]),r._v(" "),t("div",{staticClass:"year"},[t("p",r._l(r.colorList,function(e,a){return t("span",{key:a,class:r.year==a?"active":"",on:{click:function(e){r.tabYear(a)}}},[r._v(r._s(a))])})),r._v(" "),t("ul",r._l(r.colorList[r.year],function(e,a){return t("li",{key:a,on:{click:function(t){r.tabColor(e.ColorId,e.Name)}}},[t("span",{style:"background:"+e.Value}),r._v(" "+r._s(e.Name)+"\n            ")])}))])])},o=[],i={render:a,staticRenderFns:o};e.a=i}});
//# sourceMappingURL=5.build.js.map