(this["webpackJsonpreact-amazon-demo"]=this["webpackJsonpreact-amazon-demo"]||[]).push([[0],{34:function(e,t,c){},35:function(e,t,c){},36:function(e,t,c){},44:function(e,t,c){},45:function(e,t,c){},46:function(e,t,c){},49:function(e,t,c){"use strict";c.r(t);var a=c(1),s=c.n(a),i=c(15),n=c.n(i),r=(c(34),c(35),c(12)),l=c(3),o=c(10),j=(c(36),c(26)),d=c.n(j),h=c(27),m=c.n(h),b=c(0),O=Object(a.createContext)(),u=function(e){var t=e.reducer,c=e.initialState,s=e.children;return Object(b.jsx)(O.Provider,{value:Object(a.useReducer)(t,c),children:s})},p=function(){return Object(a.useContext)(O)};var g=function(){var e=p(),t=Object(o.a)(e,1)[0].basket;return console.log(t),Object(b.jsxs)("nav",{className:"header",children:[Object(b.jsx)(r.b,{to:"/",children:Object(b.jsx)("img",{className:"header_logo",src:"http://pngimg.com/uploads/amazon/amazon_PNG11.png",alt:""})}),Object(b.jsxs)("div",{className:"header_search",children:[Object(b.jsx)("input",{type:"text",className:"header_searchInput"}),Object(b.jsx)(d.a,{className:"header_searchIcon"})]}),Object(b.jsxs)("div",{className:"header_nav",children:[Object(b.jsx)(r.b,{className:"header_link",to:"/login",children:Object(b.jsxs)("div",{className:"header_option",children:[Object(b.jsx)("span",{className:"header_option_line_1",children:"Hello,"}),Object(b.jsx)("span",{className:"header_option_line_2",children:"Sign-in"})]})}),Object(b.jsx)(r.b,{className:"header_link",to:"/login",children:Object(b.jsxs)("div",{className:"header_option",children:[Object(b.jsx)("span",{className:"header_option_line_1",children:"Return "}),Object(b.jsx)("span",{className:"header_option_line_2",children:"& Orders"})]})}),Object(b.jsx)(r.b,{className:"header_link",to:"/login",children:Object(b.jsxs)("div",{className:"header_option",children:[Object(b.jsx)("span",{className:"header_option_line_1",children:"Your"}),Object(b.jsx)("span",{className:"header_option_line_2",children:"Prime"})]})})]}),Object(b.jsx)(r.b,{to:"/Checkout",children:Object(b.jsxs)("div",{className:"header_optionBasket",children:[Object(b.jsx)(m.a,{className:"header_basket"}),Object(b.jsx)("span",{className:"header_option_line_2",children:null===t||void 0===t?void 0:t.length})]})})]})};c(44);var x=function(e){var t=e.id,c=e.title,a=e.price,s=e.rating,i=e.image,n=p(),r=Object(o.a)(n,2),l=(r[0].basket,r[1]);return Object(b.jsxs)("div",{className:"product",children:[Object(b.jsxs)("div",{className:"product_info",children:[Object(b.jsx)("p",{children:c}),Object(b.jsxs)("p",{className:"product_price",children:[Object(b.jsx)("small",{children:"\xa3"}),Object(b.jsx)("strong",{children:a})]}),Object(b.jsx)("div",{className:"product_rating",children:Array(s).fill().map((function(e){return Object(b.jsx)("p",{children:"\u2605"})}))})]}),Object(b.jsx)("img",{src:i,alt:""}),Object(b.jsx)("button",{onClick:function(){l({type:"ADD_TO_BASKET",item:{id:t,title:c,image:i,price:a,rating:s}})},children:"Add to Basket"})]},t)};c(45);var _=function(){return Object(b.jsxs)("div",{className:"home",children:[Object(b.jsx)("img",{className:"home_image",src:"https://images-eu.ssl-images-amazon.com/images/G/30/digital/video/magellan/country/spain/EvergreenRefresh/fromDec19/ES_Evergreen_Refresh_FT_XSite_HeroTALL_1500x600._CB410675382_.jpg",alt:"Amazon"}),Object(b.jsxs)("div",{className:"home_row",children:[Object(b.jsx)(x,{id:"1",title:"\r\nNew Apple iPhone 12 Pro (512GB) - Pacific Blue",price:895,rating:5,image:"https://m.media-amazon.com/images/I/71DVgBTdyLL._AC_SL1500_.jpg"},"7"),Object(b.jsx)(x,{id:"8",title:"IMREX X300C Mini Drone with Camera WIFI HD FPV Foldable RC ",price:50,rating:5,image:"https://images-na.ssl-images-amazon.com/images/I/71dgm12sX4L._AC_SL1500_.jpg"},"6")]}),Object(b.jsxs)("div",{className:"home_row",children:[Object(b.jsx)(x,{id:"2",title:"Apple Macbook AIR MQD42 Intel Core i5 1800 MHz",price:52.25,rating:5,image:"https://images-na.ssl-images-amazon.com/images/I/81qzMiyU28L._AC_SL1500_.jpg"},"2"),Object(b.jsx)(x,{id:"3",title:"Apple Macbook AIR MQD42 Intel Core i5 1800 MHz 256GB SSD 8GB RAM",price:935.52,rating:4,image:"https://images-na.ssl-images-amazon.com/images/I/51K8mRLCTdL._AC_SL1200_.jpg"},"3"),Object(b.jsx)(x,{id:"4",title:"IMREX X300C Mini Drone with Camera WIFI HD FPV Foldable RC ",price:954.24,rating:5,image:"https://images-na.ssl-images-amazon.com/images/I/815a%2BXjrgvL._AC_SL1500_.jpg"},"4")]}),Object(b.jsx)("div",{className:"home_row",children:Object(b.jsx)(x,{id:"5",title:"\r\nKabelDirekt \u2013 2m \u2013 4K HDMI cable",price:5.24,rating:5,image:"https://images-na.ssl-images-amazon.com/images/I/81Tt3%2BNBcSL._AC_SL1500_.jpg"},"5")})]})};c(46);var v=function(e){var t=e.id,c=e.title,a=e.image,s=e.price,i=e.rating;console.log(t);var n=p(),r=Object(o.a)(n,2),l=(r[0].basket,r[1]);return Object(b.jsxs)("div",{className:"checkout_product",children:[Object(b.jsx)("div",{className:"checkout_image",children:Object(b.jsx)("img",{src:a,alt:""})}),Object(b.jsxs)("div",{className:"checkout_info",children:[Object(b.jsx)("p",{className:"checkout_title",children:c}),Object(b.jsxs)("p",{className:"checkout_price",children:[Object(b.jsx)("small",{children:"\xa3"}),Object(b.jsx)("strong",{children:s})]}),Object(b.jsx)("div",{className:"checkout_rating",children:Array(i).fill().map((function(e){return Object(b.jsx)("p",{children:"\u2605"})}))}),Object(b.jsx)("button",{onClick:function(){l({type:"REMOVE_FROM_BASKET",id:t})},children:"Remove From Basket"})]})]})},N=c(28),f=c.n(N);var k=function(){var e=p(),t=Object(o.a)(e,2),c=t[0].basket;return t[1],Object(b.jsxs)("div",{className:"subtotal",children:[Object(b.jsx)(f.a,{renderText:function(e){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("p",{children:["Subtotal ("," ",null!==c&&(null===c||void 0===c?void 0:c.length)>0?c.length:0," ","items): ",Object(b.jsx)("strong",{children:" ".concat(e," ")})]}),Object(b.jsxs)("small",{className:"subtotal_gift",children:[Object(b.jsx)("input",{type:"checkbox"})," This order contains a gift"]})]})},decimalScale:2,value:null!==c&&(null===c||void 0===c?void 0:c.length)>0?null===c||void 0===c?void 0:c.reduce((function(e,t){return t.price+e}),0):0,displayType:"text",thousandSeperator:!0,prefix:"\xa3"}),Object(b.jsx)("button",{children:" Proceed to checkout"})]})};var C=function(){var e=p(),t=Object(o.a)(e,1)[0].basket;return Object(b.jsxs)("div",{className:"checkout",children:[Object(b.jsxs)("div",{className:"checkout_left",children:[Object(b.jsx)("img",{className:"checkout_add",src:"https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg",alt:""}),t&&0===(null===t||void 0===t?void 0:t.length)?Object(b.jsxs)("div",{children:[Object(b.jsx)("h2",{children:"Your shopping basked is Empty"}),Object(b.jsx)("p",{children:"you have no items in the shopping basket."})]}):Object(b.jsxs)("div",{className:"checkout_title",children:[Object(b.jsx)("h2",{children:"your shopping Basket"}),t.map((function(e){return Object(b.jsx)(v,{id:e.id,title:e.title,image:e.image,price:e.price,rating:e.rating})}))]})]}),(null===t||void 0===t?void 0:t.length)>0&&Object(b.jsx)("div",{className:"checkout_right",children:Object(b.jsx)(k,{})})]})};var A=function(){return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)(r.a,{basename:"/react-amazon-demo",children:[Object(b.jsx)(g,{}),Object(b.jsx)(l.a,{render:function(e){var t=e.location;return Object(b.jsxs)(l.c,{location:t,children:[Object(b.jsx)(l.a,{path:"/Checkout",component:C}),Object(b.jsx)(l.a,{path:"/login",children:Object(b.jsx)("h1",{children:"Login page"})}),Object(b.jsx)(l.a,{path:"/",component:_})]})}})]})})},S=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,61)).then((function(t){var c=t.getCLS,a=t.getFID,s=t.getFCP,i=t.getLCP,n=t.getTTFB;c(e),a(e),s(e),i(e),n(e)}))},I=c(21),B=c(14);n.a.render(Object(b.jsx)(s.a.StrictMode,{children:Object(b.jsx)(u,{initialState:{basket:[]},reducer:function(e,t){switch(t.type){case"ADD_TO_BASKET":return Object(B.a)(Object(B.a)({},e),{},{basket:[].concat(Object(I.a)(e.basket),[t.item])});case"REMOVE_FROM_BASKET":var c=Object(I.a)(e.basket),a=e.basket.findIndex((function(e){return e.id===t.id}));return c.splice(a,1),Object(B.a)(Object(B.a)({},e),{},{basket:c});default:return e}},children:Object(b.jsx)(A,{})})}),document.getElementById("root")),S()}},[[49,1,2]]]);
//# sourceMappingURL=main.edaa13c8.chunk.js.map