(this.webpackJsonpcoindata=this.webpackJsonpcoindata||[]).push([[0],{26:function(e,t,c){},52:function(e,t,c){},53:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c(6),r=c.n(a),s=(c(26),c(4)),o=c(7),i=c.n(o),l=c(0),u=function(){var e=Object(s.b)(),t=Object(s.c)((function(e){return e.currency.current})),c=Object(s.c)((function(e){return e.currency}));console.log(c);return Object(l.jsx)("div",{className:"header",children:Object(l.jsx)("div",{className:"container",children:Object(l.jsxs)("select",{value:t,onChange:function(t){return e(function(e){return function(t){"USD"!==e?i.a.get("".concat("https://api-adapter.backend.currency.com/api/v1/ticker/24hr?symbol=USD/").concat(e)).then((function(c){return t({type:"SET_CURRENCY",payload:{currency:e,rate:c.data.weightedAvgPrice}})})).catch((function(e){return console.log(e)})):t({type:"RESET"})}}(t.target.value))},children:[Object(l.jsx)("option",{value:"USD",children:"USD"}),Object(l.jsx)("option",{value:"CAD",children:"CAD"}),Object(l.jsx)("option",{value:"CHF",children:"CHF"}),Object(l.jsx)("option",{value:"JPY",children:"JPY"})]})})})},d=c(21),j=(c(52),function(){return Object(l.jsx)("div",{className:"container",children:Object(l.jsxs)("div",{className:"box",children:[Object(l.jsx)("span",{className:"s1"}),Object(l.jsx)("span",{className:"s2"}),Object(l.jsx)("span",{className:"s3"})]})})}),p=function(e){var t=e.message;return console.log(t),Object(l.jsxs)("div",{className:"container",style:{textAlign:"center"},children:[Object(l.jsx)("h1",{className:"error",children:"We are sorry. Something went wrong"}),Object(l.jsx)("p",{children:t})]})},O=function(){var e=Object(s.c)((function(e){return e.marketData})),t=e.loading,c=e.data,a=e.error,r=Object(n.useState)(!1),o=Object(d.a)(r,2),u=o[0],O=o[1],b=Object(s.b)(),h=Object(s.c)((function(e){return e.currency})).rate;Object(n.useEffect)((function(){b((function(e){e({type:"RESQUEST_START"}),i.a.get("".concat("https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage='1h%2C24h%2C7d'")).then((function(t){return e({type:"GET_MARKET_DATA",payload:t.data})})).catch((function(t){return e({type:"REQUEST_FAILURE",payload:t.message})}))}))}),[]);var _=function(e){b({type:"SORT_FROM_".concat(u?"HIGH_TO_LOW":"LOW_TO_HIGH"),payload:e}),O(!u)},m=c.length?c.map((function(e){return Object(l.jsxs)("tr",{children:[Object(l.jsxs)("td",{className:"name-wrapper",children:[Object(l.jsx)("img",{src:e.image,alt:e.symbol}),Object(l.jsx)("span",{className:"coin-name",children:e.name})," "]}),Object(l.jsx)("td",{className:"coin-symbol",children:e.symbol.toUpperCase()}),Object(l.jsx)("td",{children:e.current_price*h<100?e.current_price*h<1?e.current_price*h<1e-4?(e.current_price*h).toFixed(8):(e.current_price*h).toFixed(4):(e.current_price*h).toFixed(3):(e.current_price*h).toFixed(2)}),Object(l.jsxs)("td",{className:"".concat(e.price_change_percentage_24h>0?"above":"below"),children:[e.price_change_percentage_24h.toFixed(2),"%"]}),Object(l.jsx)("td",{children:e.total_volume*h}),Object(l.jsx)("td",{className:"market-cap",children:e.market_cap*h}),Object(l.jsx)("td",{className:"supply",children:e.total_supply?Math.trunc(e.total_supply):null})]},e.id)})):null;return Object(l.jsxs)("div",{className:"market-data",children:[c.length?Object(l.jsxs)("table",{children:[Object(l.jsx)("thead",{children:Object(l.jsxs)("tr",{children:[Object(l.jsx)("th",{onClick:function(){b({type:"SORT_FROM_".concat(u?"A_Z":"Z_A")}),O(!u)},children:"Coin"}),Object(l.jsx)("th",{className:"coin-symbol"}),Object(l.jsx)("th",{onClick:function(){return _("current_price")},children:"Price"}),Object(l.jsx)("th",{onClick:function(){return _("price_change_percentage_24h")},children:"24h"}),Object(l.jsx)("th",{onClick:function(){return _("total_volume")},children:"24h Volume"}),Object(l.jsx)("th",{className:"market-cap",onClick:function(){return _("market_cap")},children:"Mkt Cap"}),Object(l.jsx)("th",{className:"supply",onClick:function(){return _("total_supply")},children:"Total Supply"})]})}),Object(l.jsx)("tbody",{children:m})]}):null,t?Object(l.jsx)(j,{}):null,a?Object(l.jsx)(p,{message:a}):null]})};var b=function(){return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)(u,{}),Object(l.jsx)(O,{})]})},h=c(5),_=c(19),m=c(2),x={current:"USD",rate:1},y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"RESET":return Object(m.a)({},x);case"SET_CURRENCY":return{current:t.payload.currency,rate:t.payload.rate};default:return e}},f={error:!1,loading:!1,data:[]},g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"RESQUEST_START":return{data:[],loading:!0,error:!1};case"GET_MARKET_DATA":return{data:t.payload,loading:!1,error:!1};case"REQUEST_FAILURE":return{data:[],loading:!1,error:t.payload};case"SORT_FROM_A_Z":return Object(m.a)(Object(m.a)({},e),{},{data:e.data.slice().sort((function(e,t){return e.name>t.name?1:t.name>e.name?-1:0}))});case"SORT_FROM_Z_A":return Object(m.a)(Object(m.a)({},e),{},{data:e.data.slice().sort((function(e,t){return t.name>e.name?1:e.name>t.name?-1:0}))});case"SORT_FROM_LOW_TO_HIGH":return Object(m.a)(Object(m.a)({},e),{},{data:e.data.slice().sort((function(e,c){return e[t.payload]-c[t.payload]}))});case"SORT_FROM_HIGH_TO_LOW":return Object(m.a)(Object(m.a)({},e),{},{data:e.data.slice().sort((function(e,c){return c[t.payload]-e[t.payload]}))});default:return e}},v=c(20),T=Object(v.composeWithDevTools)(Object(h.applyMiddleware)(_.a)),R=Object(h.createStore)(Object(h.combineReducers)({currency:y,marketData:g}),T);r.a.render(Object(l.jsx)(s.a,{store:R,children:Object(l.jsx)(b,{})}),document.getElementById("root"))}},[[53,1,2]]]);
//# sourceMappingURL=main.b6bf0308.chunk.js.map