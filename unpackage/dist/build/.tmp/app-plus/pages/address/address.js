(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/address/address"],{"10d6":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement;t._self._c},s=[];a.d(e,"a",function(){return n}),a.d(e,"b",function(){return s})},"1c8d":function(t,e,a){"use strict";var n=a("b0d7"),s=a.n(n);s.a},6210:function(t,e,a){"use strict";a.r(e);var n=a("10d6"),s=a("6302");for(var r in s)"default"!==r&&function(t){a.d(e,t,function(){return s[t]})}(r);a("1c8d");var d=a("2877"),i=Object(d["a"])(s["default"],n["a"],n["b"],!1,null,null,null);e["default"]=i.exports},6302:function(t,e,a){"use strict";a.r(e);var n=a("efdf"),s=a.n(n);for(var r in n)"default"!==r&&function(t){a.d(e,t,function(){return n[t]})}(r);e["default"]=s.a},b0d7:function(t,e,a){},efdf:function(t,e,a){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=s(a("a34a"));function s(t){return t&&t.__esModule?t:{default:t}}function r(t,e,a,n,s,r,d){try{var i=t[r](d),u=i.value}catch(c){return void a(c)}i.done?e(u):Promise.resolve(u).then(n,s)}function d(t){return function(){var e=this,a=arguments;return new Promise(function(n,s){var d=t.apply(e,a);function i(t){r(d,n,s,i,u,"next",t)}function u(t){r(d,n,s,i,u,"throw",t)}i(void 0)})}}var i={data:function(){return{AddressID:0,addressList:[]}},onLoad:function(t){console.log(t.AddressID," at pages\\address\\address.vue:31"),this.AddressID=t.AddressID,this.loadData()},methods:{loadData:function(){var t=d(n.default.mark(function t(){var e,a,s,r;return n.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$api.callApix({param:"",action:"address/getAddressList"});case 2:if(e=t.sent,!e.IsSuccess){t.next=18;break}if(this.AddressID||0==this.AddressID){t.next=17;break}a=e.data[0],s=0;case 7:if(!(s<e.data.length)){t.next=16;break}if(r=e.data[s],r.AddressID!=this.AddressID){t.next=13;break}return a=r,e.data.splice(s,1),t.abrupt("break",16);case 13:s++,t.next=7;break;case 16:e.data.unshift(a);case 17:this.addressList=e.data;case 18:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),checkAddress:function(e){this.AddressID||0==this.addressID||(this.$api.prePage().addressData=e,t.navigateBack())},addAddress:function(e,a){t.navigateTo({url:"/pages/address/addressEdit?type=".concat(e,"&data=").concat(this.$api.putExtra(a))})},refreshList:function(){this.loadData()}}};e.default=i}).call(this,a("6e42")["default"])}},[["158f","common/runtime","common/vendor"]]]);