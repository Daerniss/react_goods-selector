(this["webpackJsonpreact_goods-selector"]=this["webpackJsonpreact_goods-selector"]||[]).push([[0],{14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var c=n(4),s=n.n(c),r=n(3),o=n(5),a=n(6),l=n(9),i=n(8),d=n(1),u=n.n(d),h=n(7),b=n.n(h),j=(n(14),n(0)),g=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],f=function(e){Object(l.a)(n,e);var t=Object(i.a)(n);function n(){var e;Object(o.a)(this,n);for(var c=arguments.length,s=new Array(c),a=0;a<c;a++)s[a]=arguments[a];return(e=t.call.apply(t,[this].concat(s))).state={selectedGood:["Jam"]},e.renderList=function(t){return Object(j.jsx)("ul",{className:"list",children:t.map((function(t){var n=e.state.selectedGood.includes(t),c=n?"Remove":"Add";return Object(j.jsxs)("li",{className:b()("list__item",{"list__item--selected":n}),children:[t,Object(j.jsx)("button",{className:"list__btn",type:"button",onClick:function(){return e.toggleListItem(n,t)},children:c})]},t)}))})},e.renderTitle=function(){var t=e.state.selectedGood,n="";return 1===t.length&&(n="".concat(t[0]," is selected.")),t.length>1&&(n=t.reduce((function(e,t,n,c){return 0===n?t+e:n===c.length-1?"".concat(e," and ").concat(t," are selected"):"".concat(e,", ").concat(t)}),"")),t.length||(n="No goods selected"),n},e.toggleListItem=function(t,n){t?e.setState((function(e){var t=e.selectedGood;return{selectedGood:Object(r.a)(t).filter((function(e){return e!==n}))}})):e.setState((function(e){var t=e.selectedGood;return{selectedGood:[].concat(Object(r.a)(t),[n])}}))},e.clearList=function(){e.setState({selectedGood:[]})},e}return Object(a.a)(n,[{key:"render",value:function(){var e=this.state.selectedGood;return Object(j.jsxs)("div",{className:"App",children:[e.length?Object(j.jsx)("button",{type:"button",onClick:this.clearList,children:"X"}):"",Object(j.jsx)("h1",{children:this.renderTitle()}),g.length&&this.renderList(g)]})}}]),n}(u.a.Component),m=f;s.a.render(Object(j.jsx)(m,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.895e0e13.chunk.js.map