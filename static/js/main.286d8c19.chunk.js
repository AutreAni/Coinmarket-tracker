(this.webpackJsonpcoindata=this.webpackJsonpcoindata||[]).push([[0],{26:function(e,t,c){},52:function(e,t,c){},53:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c(6),r=c.n(a),s=(c(26),c(4)),l=c(7),i=c.n(l),o=c(0),j=function(){var e=Object(s.b)(),t=Object(s.c)((function(e){return e.currency.current}));Object(n.useEffect)((function(){e((function(e){i.a.get("http://api.exchangeratesapi.io/v1/latest?access_key=".concat("c42a0bf6dee14c66ce9cb743fb004374","&symbols=THB,USD,AED,AUD,CAD,CHF,EUR,GBP,HDK,JPY")).then((function(t){return e({type:"GET_CURRENCY_RATES",payload:t.data.rates})})).catch((function(e){return console.log(e)}))}))}),[]);return Object(o.jsx)("div",{className:"header",children:Object(o.jsx)("div",{className:"container",children:Object(o.jsxs)("select",{value:t,onChange:function(t){return e({type:"SET_CURRENCY",payload:t.target.value})},children:[Object(o.jsx)("option",{value:"THB",children:"THB"}),Object(o.jsx)("option",{value:"USD",children:"USD"}),Object(o.jsx)("option",{value:"AED",children:"AED"}),Object(o.jsx)("option",{value:"AUD",children:"AUD"}),Object(o.jsx)("option",{value:"CAD",children:"CAD"}),Object(o.jsx)("option",{value:"CHF",children:"CHF"}),Object(o.jsx)("option",{value:"EUR",children:"EUR"}),Object(o.jsx)("option",{value:"GBP",children:"GBP"}),Object(o.jsx)("option",{value:"HDK",children:"HDK"}),Object(o.jsx)("option",{value:"JPY",children:"JPY"})]})})})},u=c(21),d=(c(52),function(){return Object(o.jsx)("div",{className:"container",children:Object(o.jsxs)("div",{className:"box",children:[Object(o.jsx)("span",{className:"s1"}),Object(o.jsx)("span",{className:"s2"}),Object(o.jsx)("span",{className:"s3"})]})})}),O=function(e){var t=e.message;return console.log(t),Object(o.jsxs)("div",{className:"container",style:{textAlign:"center"},children:[Object(o.jsx)("h1",{className:"error",children:"We are sorry. Something went wrong"}),Object(o.jsx)("p",{children:t})]})},b=function(){var e=Object(s.c)((function(e){return e.marketData})),t=e.loading,c=e.data,a=e.error,r=Object(n.useState)(!1),l=Object(u.a)(r,2),j=l[0],b=l[1],p=Object(s.b)(),h=Object(s.c)((function(e){return e.currency})),_=h.list.length?h.list.find((function(e){return e[0]===h.current}))[1]:1;Object(n.useEffect)((function(){p((function(e){e({type:"RESQUEST_START"}),i.a.get("".concat("https://api.coingecko.com/api/v3/coins/markets?vs_currency=EUR&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage='1h%2C24h%2C7d'")).then((function(t){return e({type:"GET_MARKET_DATA",payload:t.data})})).catch((function(t){return e({type:"REQUEST_FAILURE",payload:t.message})}))}))}),[]);var m=function(e){p({type:"SORT_FROM_".concat(j?"HIGH_TO_LOW":"LOW_TO_HIGH"),payload:e}),b(!j)},x=c.length?c.map((function(e){return Object(o.jsxs)("tr",{children:[Object(o.jsxs)("td",{className:"name-wrapper",children:[Object(o.jsx)("img",{src:e.image,alt:e.symbol}),Object(o.jsx)("span",{className:"coin-name",children:e.name})," "]}),Object(o.jsx)("td",{className:"coin-symbol",children:e.symbol}),Object(o.jsx)("td",{children:(e.current_price*_).toFixed(2)}),Object(o.jsxs)("td",{className:"".concat(e.price_change_percentage_24h>0?"above":"below"),children:[e.price_change_percentage_24h.toFixed(2),"%"]}),Object(o.jsx)("td",{children:e.total_volume*_}),Object(o.jsx)("td",{className:"market-cap",children:e.market_cap*_}),Object(o.jsx)("td",{className:"supply",children:e.total_supply?Math.trunc(e.total_supply):null})]},e.id)})):null;return Object(o.jsxs)("div",{className:"market-data",children:[c.length?Object(o.jsxs)("table",{children:[Object(o.jsx)("thead",{children:Object(o.jsxs)("tr",{children:[Object(o.jsx)("th",{onClick:function(){p({type:"SORT_FROM_".concat(j?"A_Z":"Z_A")}),b(!j)},children:"Coin"}),Object(o.jsx)("th",{className:"coin-symbol"}),Object(o.jsx)("th",{onClick:function(){return m("current_price")},children:"Price"}),Object(o.jsx)("th",{onClick:function(){return m("price_change_percentage_24h")},children:"24h"}),Object(o.jsx)("th",{onClick:function(){return m("total_volume")},children:"24h Volume"}),Object(o.jsx)("th",{className:"market-cap",onClick:function(){return m("market_cap")},children:"Mkt Cap"}),Object(o.jsx)("th",{className:"supply",onClick:function(){return m("total_supply")},children:"Total Supply"})]})}),Object(o.jsx)("tbody",{children:x})]}):null,t?Object(o.jsx)(d,{}):null,a?Object(o.jsx)(O,{message:a}):null]})};var p=function(){return Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)(j,{}),Object(o.jsx)(b,{})]})},h=c(5),_=c(19),m=c(2),x={list:[],current:"EUR"},f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_CURRENCY_RATES":return{list:Object.entries(t.payload),current:"EUR"};case"SET_CURRENCY":return Object(m.a)(Object(m.a)({},e),{},{current:t.payload});default:return e}},y={error:!1,loading:!1,data:[]},g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"RESQUEST_START":return{data:[],loading:!0,error:!1};case"GET_MARKET_DATA":return{data:t.payload,loading:!1,error:!1};case"REQUEST_FAILURE":return{data:[],loading:!1,error:t.payload};case"SORT_FROM_A_Z":return Object(m.a)(Object(m.a)({},e),{},{data:e.data.slice().sort((function(e,t){return e.name>t.name?1:t.name>e.name?-1:0}))});case"SORT_FROM_Z_A":return Object(m.a)(Object(m.a)({},e),{},{data:e.data.slice().sort((function(e,t){return t.name>e.name?1:e.name>t.name?-1:0}))});case"SORT_FROM_LOW_TO_HIGH":return Object(m.a)(Object(m.a)({},e),{},{data:e.data.slice().sort((function(e,c){return e[t.payload]-c[t.payload]}))});case"SORT_FROM_HIGH_TO_LOW":return Object(m.a)(Object(m.a)({},e),{},{data:e.data.slice().sort((function(e,c){return c[t.payload]-e[t.payload]}))});default:return e}},R=c(20),v=Object(R.composeWithDevTools)(Object(h.applyMiddleware)(_.a)),E=Object(h.createStore)(Object(h.combineReducers)({currency:f,marketData:g}),v);r.a.render(Object(o.jsx)(s.a,{store:E,children:Object(o.jsx)(p,{})}),document.getElementById("root"))}},[[53,1,2]]]);
//# sourceMappingURL=main.286d8c19.chunk.js.map