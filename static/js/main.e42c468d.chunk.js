(this.webpackJsonpmarga=this.webpackJsonpmarga||[]).push([[0],[,,,,,,,,,,,,function(e,t,c){},function(e,t,c){},,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){"use strict";c.r(t);var a=c(1),i=c.n(a),n=c(7),s=c.n(n),r=(c(12),c(2)),l=c.p+"static/media/margarita.43c5c287.svg",o=c(3),d=(c(13),c.p+"static/media/quit.ba087d61.svg"),u=c.p+"static/media/basket.178724fd.svg",j=c.p+"static/media/miniQuit.26b83c67.svg",m=c.p+"static/media/minus.ab0c1c86.svg",b=c.p+"static/media/plus.e8253e89.svg",O=c(0);function f(e){var t=e.id,c=e.name,a=e.amount,i=e.price,n=e.add,s=e.remove,r=e.erase;return Object(O.jsxs)("div",{id:t,className:"line-cart",children:[Object(O.jsxs)("div",{className:"counter",children:[Object(O.jsx)("img",{onClick:s,className:"mini-icon",src:m,alt:j}),Object(O.jsx)("p",{children:"".concat(a," ")}),Object(O.jsx)("img",{onClick:n,className:"mini-icon",src:b,alt:j})]}),Object(O.jsx)("p",{children:c}),Object(O.jsx)("p",{className:"price",children:i}),Object(O.jsx)("img",{onClick:r,className:"mini-icon",src:j,alt:j})]})}function p(e){var t=e.total;return Object(O.jsxs)("div",{className:"line-total",children:[Object(O.jsx)("p",{children:"Total"}),Object(O.jsx)("p",{className:"price",children:t})]})}var h=function(e){var t=e.cart,c=e.setCart,i=e.isAdded,n=e.setIsAdded,s=t.reduce((function(e,t){return e+t.amount}),0),l=t.reduce((function(e,t){return e+t.amount*t.price}),0),j=Object(a.useState)(!1),m=Object(r.a)(j,2),b=m[0],h=m[1],x=Object(a.useState)(0),g=Object(r.a)(x,2),v=g[0],y=g[1];return Object(a.useEffect)((function(){b?setTimeout((function(){y(1)}),300):setTimeout((function(){y(0)}),0)}),[b]),Object(a.useEffect)((function(){i&&h(!0)}),[i]),Object(a.useEffect)((function(){!b&&n(!1)})),Object(a.useEffect)((function(){l>0&&(document.title="Margarita - ".concat(l.toFixed(2)," \u20ac"))}),[l]),b?Object(O.jsx)("div",{className:"cart",children:Object(O.jsx)("div",{className:"cart-container",onMouseLeave:function(){return h(!1)},style:{padding:b?"24px, 32px":"0"},children:Object(O.jsxs)("div",{className:"cart-content",style:{opacity:v},children:[Object(O.jsxs)("div",{className:"title",children:[Object(O.jsxs)("h2",{children:["Cart (",s,")"]}),Object(O.jsx)("img",{onClick:function(){return h(!1)},className:"icon",src:d,alt:"quit"})]}),Object(O.jsxs)("div",{className:"cart-content",children:[t.map((function(e,a){var i=e.id,n=e.name,s=e.amount,r=e.price;return Object(O.jsx)(f,{id:i,name:n,amount:s,remove:function(){return function(e){var a=t.filter((function(t){return t.id===e}));a[0].amount>1&&(a[0].amount-=1,c(Object(o.a)(t)))}(i)},add:function(){return function(e){t.filter((function(t){return t.id===e}))[0].amount+=1,c(Object(o.a)(t))}(i)},erase:function(){return function(e){var a=t.filter((function(t){return t.id!==e}));c(a)}(i)},price:"".concat((s*r).toFixed(2)," \u20ac")},a)})),Object(O.jsx)(p,{total:"".concat(l.toFixed(2)," \u20ac")})]})]})})}):Object(O.jsxs)("div",{className:"cart-icon",children:[t.length>0&&Object(O.jsx)("div",{className:"cart-number",children:s}),Object(O.jsx)("img",{className:"icon",onClick:function(){return h(!0)},onMouseEnter:function(){return h(!0)},src:u,alt:"basket"})]})};c(15);var x=function(e){var t=e.cart,c=e.setCart,a=e.isAdded,i=e.setIsAdded,n=e.setIsPlp,s="margarita";return Object(O.jsxs)("div",{className:"Header",children:[Object(O.jsxs)("div",{className:"logo",onClick:function(){return n(!0)},children:[Object(O.jsx)("img",{className:"App-logo",src:l,alt:"margarita-logo"}),Object(O.jsx)("h1",{children:s.slice(0,1).toUpperCase()+s.slice(1).toLocaleLowerCase()})]}),Object(O.jsx)(h,{cart:t,setCart:c,isAdded:a,setIsAdded:i})]})},g=(c(16),c(17),[{id:"plt121",name:"Kentia Gustave",image:"https://bergamotte.imgix.net/bgz86xynsaqmhbv61ehxge066s9a",category:"easycare",isBestSale:!0,isSpecialOffer:!1,water:2,light:3,price:16},{id:"plt122",name:"Calathea Theo",image:"https://bergamotte.imgix.net/opv8fjbg1o6uwhbjif7k7pxbv8je",category:"shadow",isBestSale:!0,isSpecialOffer:!0,water:2,light:3,price:18},{id:"plt123",name:"Cactus Pablo",image:"https://bergamotte.imgix.net/q0xsmh072qvimkv2c2n051z9a1vj",category:"petfriendly",isBestSale:!0,isSpecialOffer:!1,water:2,light:3,price:12},{id:"plt124",name:"Kentia Eug\xe8ne",image:"https://bergamotte.imgix.net/udzz77dow7p71almzl4oztx8ylbg",category:"easycare",isBestSale:!0,isSpecialOffer:!1,water:2,light:3,price:15},{id:"plt125",name:"Calathea Karl",image:"https://bergamotte.imgix.net/qb64we4q6ciw2co7s81oum4oubzu",category:"easycare",isBestSale:!0,isSpecialOffer:!1,water:2,light:3,price:18},{id:"plt126",name:"Zamioculcas Thomas",image:"https://bergamotte.imgix.net/1XmWybUcynqj6paRu6ZJH8JK",category:"shadow",isBestSale:!0,isSpecialOffer:!1,water:2,light:3,price:23},{id:"plt127",name:"Ficus Jane",image:"https://bergamotte.imgix.net/1y0fjjaybmtio488g99ptp9v9k0q",category:"petfriendly",isBestSale:!0,isSpecialOffer:!1,water:2,light:3,price:19},{id:"plt128",name:"Ficus Hebert",image:"https://bergamotte.imgix.net/8nsd2oj4h30m5tf8xlfgqam47yim",category:"easycare",isBestSale:!0,isSpecialOffer:!1,water:2,light:3,price:24},{id:"plt129",name:"Calathea Hector",image:"https://bergamotte.imgix.net/i9c867ttr22tznxvimepwp83x1cy",category:"shadow",isBestSale:!0,isSpecialOffer:!1,water:2,light:3,price:17}]);var v=function(e){var t=e.setShoppingList,c=e.hide;return Object(O.jsxs)("form",{style:{display:c},onChange:function(e){"all"!==e.target.value?t(g.filter((function(t){return t.category===e.target.value}))):t(g)},children:[Object(O.jsxs)("div",{className:"radio",children:[Object(O.jsx)("input",{type:"radio",name:"sort",defaultChecked:!0,value:"all",id:"all"}),Object(O.jsx)("label",{htmlFor:"all",children:"All"})]}),Object(O.jsxs)("div",{className:"radio",children:[Object(O.jsx)("input",{type:"radio",name:"sort",value:"easycare",id:"easycare"}),Object(O.jsx)("label",{htmlFor:"easycare",children:"Easy Care"})]}),Object(O.jsxs)("div",{className:"radio",children:[Object(O.jsx)("input",{type:"radio",name:"sort",value:"shadow",id:"shadow"}),Object(O.jsx)("label",{htmlFor:"shadow",children:"Shadow"})]}),Object(O.jsxs)("div",{className:"radio",children:[Object(O.jsx)("input",{type:"radio",name:"sort",value:"petfriendly",id:"petfriendly"}),Object(O.jsx)("label",{htmlFor:"petfriendly",children:"Pet Friendly"})]})]})};c(18);var y=function(e){var t=e.cover,c=e.name,a=e.price,i=e.offer,n=e.openPanel,s=e.onClick;return Object(O.jsxs)("li",{className:"ProductTile",onClick:n,children:[Object(O.jsx)("img",{className:"cover",src:t,alt:c}),Object(O.jsxs)("div",{className:"InformationContainer",children:[Object(O.jsxs)("div",{className:"TextContainer",children:[i&&Object(O.jsx)("div",{className:"tag",children:"On sale"}),Object(O.jsx)("h2",{children:c}),Object(O.jsx)("h3",{children:"".concat(a.toFixed(2)," \u20ac")})]}),Object(O.jsx)("button",{className:"Button",onClick:s,children:"See more"})]})]})};c(19),c(20);var N=function(e){var t,c=e.scaleValue,a=e.careType;switch(c){case 1:t="sparsely";break;case 2:t="moderate";break;case 3:t="a lot of"}return Object(O.jsx)("div",{className:"care",children:Object(O.jsx)("p",{children:"This plant needs ".concat(t," ").concat(a)})})};c(21);var C=function(e){e.onClick,e.message,e.name;var t=e.cover,c=e.miniCartOpen,i=e.setMiniCartOpen,n=Object(a.useState)("-100%"),s=Object(r.a)(n,2),l=s[0],o=s[1],d=Object(a.useState)("0"),u=Object(r.a)(d,2),m=u[0],b=u[1];return Object(a.useEffect)((function(){c&&setTimeout((function(){b("0.5"),o("0%")}),0)}),[c]),c?Object(O.jsx)("div",{style:{background:"rgba(0,0,0,".concat(m,")")},className:"mini-cart",children:Object(O.jsxs)("div",{className:"mini-cart-container",style:{bottom:l},children:[Object(O.jsxs)("div",{className:"title",children:[Object(O.jsx)("p",{children:"Added to cart"}),Object(O.jsx)("img",{className:"icon",onClick:function(){b("0"),o("-100%"),setTimeout((function(){i(!1)}),300)},src:j,alt:"quit"})]}),Object(O.jsx)("img",{src:t,alt:t})]})}):null};var S=function(e){var t=e.cover,c=e.name,a=e.price,i=e.offer,n=e.light,s=e.water,r=e.isOpen,l=e.closePanel,o=e.onClick,d=e.setMiniCartOpen,u=e.miniCartOpen;return r?Object(O.jsxs)("div",{className:"Panel",children:[Object(O.jsxs)("div",{className:"PanelContainer",children:[Object(O.jsx)("img",{className:"cover",src:t,alt:c,onClick:l}),Object(O.jsxs)("div",{className:"InformationContainer",children:[Object(O.jsxs)("div",{className:"TextContainer",children:[i&&Object(O.jsx)("div",{className:"tag",children:"On sale"}),Object(O.jsx)("h1",{children:c}),Object(O.jsx)("h3",{children:"Care instuctions:"}),Object(O.jsx)(N,{scaleValue:n,careType:"light"}),Object(O.jsx)(N,{scaleValue:s,careType:"water"}),Object(O.jsx)("h4",{children:"".concat(a.toFixed(2)," \u20ac")})]}),Object(O.jsx)("button",{className:"Button",onClick:o,children:"Add to cart"})]})]}),Object(O.jsx)(C,{setMiniCartOpen:d,miniCartOpen:u,name:c,cover:t,message:"You have successfully added to your basket"})]}):null};var w=function(e){var t=e.cart,c=e.setCart,i=e.isPlp,n=e.setIsPlp,s=Object(a.useState)(!0),l=Object(r.a)(s,1)[0],d=Object(a.useState)([]),u=Object(r.a)(d,2),j=u[0],m=u[1],b=Object(a.useState)(g),f=Object(r.a)(b,2),p=f[0],h=f[1],x=Object(a.useState)(!1),N=Object(r.a)(x,2),C=N[0],w=N[1],k=Object(a.useState)("scroll"),P=Object(r.a)(k,2),T=P[0],F=P[1];return Object(a.useEffect)((function(){F(C?"hidden":"scroll")}),[C]),document.body.style.overflowY=T,Object(O.jsxs)("div",{className:"ShoppingContainer",children:[Object(O.jsx)(v,{hide:i?"flex":"none",shoppingList:p,setShoppingList:h})," ",i?Object(O.jsx)("ul",{className:"ShoppingList",children:p.map((function(e){var t=e.id,c=e.name,a=e.image,i=e.isSpecialOffer,s=e.light,r=e.water,o=e.price;return Object(O.jsx)(y,{cover:a,name:c,price:o,offer:i,light:s,water:r,isOpen:l,openPanel:function(){return function(e,t,c,a,i,s,r){window.scrollTo(0,0),p.filter((function(t){return t.id===e}))&&(m([{id:e,image:t,name:c,price:a,offer:i,light:s,water:r}]),n(!1))}(t,a,c,o,i,s,r)}},t)}))}):j.map((function(e){var a=e.id,i=e.image,s=e.name,r=e.price,d=e.isSpecialOffer,u=e.light,j=e.water;return Object(O.jsx)(S,{cover:i,name:s,price:r,isSpecialOffer:d,light:u,water:j,isOpen:l,onClick:function(){return function(e,a,i){var n=t.find((function(e){return e.name===a}));if(n){var s=t.filter((function(e){return e.name!==a}));c([{id:e,name:a,price:i,amount:n.amount+1}].concat(Object(o.a)(s))),w(!0),console.log(window.pageYOffset)}else c([{id:e,name:a,price:i,amount:1}].concat(Object(o.a)(t))),w(!0),console.log(window.pageYOffset)}(a,s,r)},miniCartOpen:C,setMiniCartOpen:w,setPosition:function(){return w(!1)},closePanel:function(){return n(!0)}},a)}))]})};c(22);var k=function(e){var t=e.position,c=e.onClick,a=e.message;return Object(O.jsxs)("div",{style:{right:t},className:"recomandation",children:[Object(O.jsx)("p",{children:a}),Object(O.jsx)("img",{className:"icon",onClick:c,src:j,alt:"quit"})]})};c(23);var P=function(){var e=Object(a.useState)(""),t=Object(r.a)(e,2),c=t[0],i=t[1],n=Object(a.useState)("-376px"),s=Object(r.a)(n,2),l=s[0],o=s[1],d=Object(a.useState)(),u=Object(r.a)(d,2),j=u[0],m=u[1],b=c.includes("@");return Object(a.useEffect)((function(){"16px"===l&&setTimeout((function(){return o("-376px")}),3e3)}),[l]),Object(O.jsx)("div",{className:"footer",children:Object(O.jsxs)("div",{className:"form-container",children:[Object(O.jsx)("p",{className:"footer-title",children:"Subscribe to our newsletter"}),Object(O.jsxs)("form",{onSubmit:function(e){e.preventDefault(),(b=c.includes("@"))?o("16px"):m(Object(O.jsx)("p",{className:"error",children:"Your email address must contains an @"}))},children:[Object(O.jsx)("input",{type:"email",placeholder:"Your email address",value:c,onChange:function(e){i(e.target.value)},onBlur:function(){return m(b?null:Object(O.jsx)("p",{className:"error",children:"Your email address must contains an @"}))}}),Object(O.jsx)("button",{type:"submit",children:"Submit"})]}),Object(O.jsx)(k,{position:l,onClick:function(){return o("-376px")},message:"You have successfully subscribe to our newsletter"})," ",j]})})};c(24);var T=function(){var e=localStorage.getItem("cart"),t=Object(a.useState)(e?JSON.parse(e):[]),c=Object(r.a)(t,2),i=c[0],n=c[1],s=Object(a.useState)(!1),l=Object(r.a)(s,2),o=l[0],d=l[1],u=Object(a.useState)(!0),j=Object(r.a)(u,2),m=j[0],b=j[1];return Object(a.useEffect)((function(){localStorage.setItem("cart",JSON.stringify(i))}),[i]),Object(O.jsxs)("div",{className:"main",children:[Object(O.jsx)(x,{cart:i,setCart:n,isAdded:o,setIsAdded:d,setIsPlp:b}),Object(O.jsx)(w,{cart:i,setCart:n,isAdded:o,setIsAdded:d,isPlp:m,setIsPlp:b}),Object(O.jsx)(P,{})]})},F=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,26)).then((function(t){var c=t.getCLS,a=t.getFID,i=t.getFCP,n=t.getLCP,s=t.getTTFB;c(e),a(e),i(e),n(e),s(e)}))};s.a.render(Object(O.jsx)(i.a.StrictMode,{children:Object(O.jsx)(T,{})}),document.getElementById("root")),F()}],[[25,1,2]]]);
//# sourceMappingURL=main.e42c468d.chunk.js.map