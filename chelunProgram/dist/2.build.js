webpackJsonp([2],{30:function(t,e,i){"use strict";function r(t){i(64)}Object.defineProperty(e,"__esModule",{value:!0});var a=i(40),n=i(70),o=i(6),s=r,d=o(a.a,n.a,!1,s,"data-v-6e284f87",null);e.default=d.exports},40:function(t,e,i){"use strict";var r=i(7),a=i(66),n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r])}return t};e.a={data:function(){return{isShowCity:!1,cityname:"北京",CityIds:201}},computed:n({},Object(r.d)({inquiry:function(t){return t.detail.inquiry}})),methods:n({},Object(r.b)({getInquiryData:"detail/getInquiryData"}),{city:function(){this.isShowCity=!0},changeshowList:function(t,e,i){this.cityname=e,this.CityIds=i,this.isShowCity=t;var r=this.$route.query.carId,a=this.CityIds;this.getInquiryData({carId:r,cityId:a})},alert:function(t){function e(){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}(function(){alert("请填入相应个人信息")})}),components:{City:a.a},mounted:function(){var t=this.$route.query.carId,e=this.$route.query.cityId;this.getInquiryData({carId:t,cityId:e})}}},41:function(t,e,i){"use strict";var r=i(7),a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r])}return t};e.a={props:["showCityList"],computed:a({},Object(r.d)({cityList:function(t){return t.city.cityList}})),methods:a({},Object(r.b)({getCityList:"city/getCityList"}),{clickCity:function(t,e){this.$emit("changeshowList",!1,t,e)}}),mounted:function(){this.getCityList()}}},64:function(t,e,i){var r=i(65);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);i(5)("4a03ac41",r,!0,{})},65:function(t,e,i){e=t.exports=i(4)(!1),e.push([t.i,'.inquiry[data-v-6e284f87]{width:100%;height:100%;overflow:hidden;position:relative}.inquiry-main[data-v-6e284f87]{width:100%;height:100%;overflow-y:auto;display:flex;flex-direction:column}.inquiry-main>p[data-v-6e284f87]{height:.3rem;line-height:.3rem;background:#79cd92;color:#fff;text-align:center}.main[data-v-6e284f87]{flex:1;width:100%;height:100%;overflow:auto}.info[data-v-6e284f87]{width:100%;display:flex;align-items:center}.info dt[data-v-6e284f87]{flex:3;width:100%;padding:.1rem;box-sizing:border-box}.info dd[data-v-6e284f87]{flex:7;width:100%;line-height:1.5}.info dt img[data-v-6e284f87]{width:3rem}.person>p[data-v-6e284f87]{height:.5rem;line-height:.5rem;background:#eee;color:#666}.person ul li[data-v-6e284f87]{height:.88rem;line-height:.88rem;display:flex;border-bottom:1px solid #eee;padding:0 .2rem;justify-content:space-between}.person ul li input[data-v-6e284f87]{border:none;font-size:.32rem;padding-right:.2rem;width:88%;text-align:right;box-sizing:border-box;color:#555}.person ul li span[data-v-6e284f87]{padding-right:.2rem}.city[data-v-6e284f87]{color:#555}.city[data-v-6e284f87]:after{content:"";display:inline-block;padding-top:.16rem;padding-right:.16rem;border-top:1px solid silver;border-right:1px solid silver;-webkit-transform:rotate(45deg);transform:rotate(45deg)}.but[data-v-6e284f87]{padding:.3rem 0}.but button[data-v-6e284f87]{width:80%;height:.7rem;background:#3aacff;border-radius:.1rem;color:#fff;text-align:center;margin-left:10%;border:none}.shoper[data-v-6e284f87]{width:100%;overflow:hidden;box-sizing:border-box}.shoper>p[data-v-6e284f87]{height:.5rem;line-height:.5rem;background:#eee;color:#666}.shoper ul[data-v-6e284f87]{width:100%}.shoper ul li[data-v-6e284f87]{width:100%;height:1.65rem;vertical-align:middle;border-bottom:1px solid #eee;padding:.26rem .2rem;line-height:2;display:flex;align-items:center;box-sizing:border-box}.shoper ul li>input[data-v-6e284f87]{margin-right:.2rem}.shoper ul li>div[data-v-6e284f87]{flex:1;width:100%;overflow:hidden}.shoper ul li p[data-v-6e284f87]{width:100%;display:flex;justify-content:space-between;font-size:.3rem}.shoper ul li p span[data-v-6e284f87] :first-child{flex:8;width:100%;overflow:hidden}.shoper ul li p[data-v-6e284f87]:nth-child(2){width:100%;font-size:.24rem;color:#a2a2a2}.shoper ul li p:nth-child(2) span[data-v-6e284f87]:first-child{flex:8;height:25.6px;width:100%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.shoper ul li p:first-child span[data-v-6e284f87]:nth-child(1){flex:8}.shoper ul li p:first-child span[data-v-6e284f87]:nth-child(2){color:red}footer[data-v-6e284f87]{width:100%}footer button[data-v-6e284f87]{width:100%;height:.7rem;background:#3aacff;color:#fff;text-align:center;border:none}',""])},66:function(t,e,i){"use strict";function r(t){i(67)}var a=i(41),n=i(69),o=i(6),s=r,d=o(a.a,n.a,!1,s,"data-v-772fce18",null);e.a=d.exports},67:function(t,e,i){var r=i(68);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);i(5)("a4bdbfa0",r,!0,{})},68:function(t,e,i){e=t.exports=i(4)(!1),e.push([t.i,'.ALLcity[data-v-772fce18]{width:100%;height:100%;background:#fff;overflow-y:auto;transform:translateZ(0);transition:1s}.active[data-v-772fce18]{transform:translate3d(0,-100%,0);transition:1s;transition:all 1s}.location p[data-v-772fce18]:first-child{height:.4rem;line-height:.4rem;font-size:.24rem;padding-left:.2rem;background:#f4f4f4}.location p[data-v-772fce18]:nth-child(2){padding-left:.4rem;font-size:.28rem;height:.8rem;line-height:.8rem;background:#fff}.list p[data-v-772fce18]:first-child{height:.4rem;line-height:.4rem;font-size:.24rem;padding-left:.2rem;background:#f4f4f4}.list ul li[data-v-772fce18]{padding-left:.3rem;font-size:.28rem;height:.8rem;line-height:.8rem;border-bottom:1px solid #eee;box-sizing:border-box;margin-left:.1rem;position:relative}.list ul li[data-v-772fce18]:after{content:"";display:inline-block;padding-top:.16rem;padding-right:.16rem;border-top:1px solid #999;border-right:1px solid #999;-webkit-transform:rotate(45deg);transform:rotate(45deg);position:absolute;right:.35rem;top:.3rem}',""])},69:function(t,e,i){"use strict";var r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{class:t.showCityList?"ALLcity active":"ALLcity"},[t._m(0),t._v(" "),i("div",{staticClass:"list"},[i("p",[t._v("省市")]),t._v(" "),i("ul",t._l(t.cityList,function(e,r){return i("li",{key:r,on:{click:function(i){t.clickCity(e.CityName,e.CityID)}}},[t._v(t._s(e.CityName))])}))])])},a=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"location"},[i("p",[t._v("自动定位")]),t._v(" "),i("p",[t._v("北京")])])}],n={render:r,staticRenderFns:a};e.a=n},70:function(t,e,i){"use strict";var r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"inquiry"},[i("div",{staticClass:"inquiry-main"},[i("P",[t._v("可向多个商家咨询最低价，商家及时回复")]),t._v(" "),i("div",{staticClass:"main"},[i("dl",{staticClass:"info"},[i("dt",[i("img",{attrs:{src:t.inquiry.details.serial.Picture}})]),t._v(" "),i("dd",[i("p",[t._v(t._s(t.inquiry.details.serial.AliasName))]),t._v(" "),i("P",[t._v(t._s(t.inquiry.details.market_attribute.year)+"款")])],1)]),t._v(" "),i("div",{staticClass:"person"},[i("p",[t._v("个人信息")]),t._v(" "),i("ul",[t._m(0),t._v(" "),t._m(1),t._v(" "),i("li",[i("span",[t._v("城市")]),t._v(" "),i("span",{staticClass:"city",on:{click:t.city}},[t._v(t._s(t.cityname))])])]),t._v(" "),i("div",{staticClass:"but"},[i("button",{on:{click:t.alert}},[t._v("询最低价")])])]),t._v(" "),i("div",{staticClass:"shoper"},[i("p",[t._v("选择报价经销商")]),t._v(" "),i("ul",t._l(t.inquiry.list,function(e,r){return i("li",{key:r},[i("input",{attrs:{type:"checkbox"}}),t._v(" "),i("div",[i("p",[i("span",[t._v(t._s(e.dealerShortName))]),t._v(" "),i("span",[t._v(t._s(e.promotePrice)+"万")])]),t._v(" "),i("p",[i("span",[t._v(t._s(e.address))]),t._v(" "),i("span",[t._v("售"+t._s(e.saleRange))])])])])}))])]),t._v(" "),t._m(2)],1),t._v(" "),i("city",{attrs:{showCityList:t.isShowCity},on:{changeshowList:t.changeshowList}})],1)},a=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("li",[i("span",[t._v("姓名")]),t._v(" "),i("input",{attrs:{type:"text",placeholder:"请输入您的真实姓名"}})])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("li",[i("span",[t._v("手机")]),t._v(" "),i("input",{attrs:{type:"text",placeholder:"请输入您的真实手机号"}})])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("footer",[i("button",[t._v("询最低价")])])}],n={render:r,staticRenderFns:a};e.a=n}});
//# sourceMappingURL=2.build.js.map