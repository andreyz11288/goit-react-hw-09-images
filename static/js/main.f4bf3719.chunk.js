(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],{10:function(e,t,a){e.exports={Overlay:"Modal_Overlay__2Ssuh",Modal:"Modal_Modal__34gOB"}},13:function(e,t,a){e.exports={App:"App_App__2VeMU"}},14:function(e,t,a){e.exports={ImageGallery:"ImageGallery_ImageGallery__WDQ9O"}},16:function(e,t,a){e.exports={loader:"Loader_loader__3oLO2"}},22:function(e,t,a){},4:function(e,t,a){e.exports={Searchbar:"Searchbar_Searchbar__qUuZE",SearchForm:"Searchbar_SearchForm__1pJg7",SearchFormButton:"Searchbar_SearchFormButton__29b_z",SearchFormButtonLabel:"Searchbar_SearchFormButtonLabel__1cceJ",SearchFormInput:"Searchbar_SearchFormInput__1bJNb"}},44:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a(0),r=a.n(c),o=a(12),i=a.n(o),s=(a(22),a(3)),l=a(13),u=a.n(l),b=a(4),j=a.n(b);function m(e){var t=e.onSubmit,a=Object(c.useState)(""),r=Object(s.a)(a,2),o=r[0],i=r[1];return Object(n.jsx)("header",{className:j.a.Searchbar,children:Object(n.jsxs)("form",{className:j.a.SearchForm,onSubmit:function(e){e.preventDefault(),t(o)},children:[Object(n.jsx)("button",{type:"submit",className:j.a.SearchFormButton,children:Object(n.jsx)("span",{className:j.a.SearchFormButtonLabel,children:"Search"})}),Object(n.jsx)("input",{className:j.a.SearchFormInput,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",onChange:function(e){i(e.target.value)}})]})})}var h=a(14),d=a.n(h),f=a(11),g=a(8),O=a.n(g),p=a(15),_=a.n(p),x=a(16),S=a.n(x);function v(){return Object(n.jsx)(_.a,{className:S.a.loader,type:"Watch",color:"#00BFFF",height:100,width:100})}function I(e,t){return fetch("https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=".concat(e,"&page=").concat(t,"&per_page=12&key=").concat("19060894-87e054058a337546d07970d77")).then((function(e){return e.json()}))}function y(e){var t=e.onFetch,a=e.visible,r=e.numberPage,o=e.resPage,i=e.largeImageURL,l=Object(c.useState)([]),u=Object(s.a)(l,2),b=u[0],j=u[1],m=Object(c.useState)(null),h=Object(s.a)(m,2),d=h[0],g=h[1],p=Object(c.useState)("idle"),_=Object(s.a)(p,2),x=_[0],S=_[1],y=Object(c.useState)(null),F=Object(s.a)(y,2),B=F[0],N=F[1];return Object(c.useEffect)((function(){""===t&&(S("idle"),a(!0))}),[t,a]),Object(c.useEffect)((function(){g(!0)}),[t]),Object(c.useEffect)((function(){""!==t&&d&&(j([]),S("pending"),a(!0),o(!0),I(t,1).then((function(e){if(console.log(e.hits),j(e.hits),a(!1),0===e.hits.length)return a(!0),S("rejected");S("resolve")})).catch((function(){return S("rejected")})).finally(g(!1),N(2)))}),[d,b,t,o,a]),Object(c.useEffect)((function(){B===r&&I(t,r).then((function(e){j([].concat(Object(f.a)(b),Object(f.a)(e.hits))),window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"}),a(!1),0===e.hits.length&&a(!0),S("resolve")})).catch((function(){return S("rejected")})).finally(N(B+1))}),[b,B,r,t,a]),"idle"===x?Object(n.jsx)("li",{children:Object(n.jsx)("h1",{children:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0437\u0430\u043f\u0440\u043e\u0441"})}):"rejected"===x?Object(n.jsx)("li",{children:Object(n.jsx)("h1",{children:"\u0417\u0430\u043f\u0440\u043e\u0441 \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d"})}):"pending"===x?Object(n.jsx)("li",{children:Object(n.jsx)(v,{})}):"resolve"===x?b.map((function(e){return Object(n.jsx)("li",{className:O.a.ImageGalleryItem,children:Object(n.jsx)("img",{src:e.webformatURL,"data-src":e.largeImageURL,alt:"img",className:O.a.ImageGalleryItemImage,onClick:function(){return i(e.largeImageURL)}})},e.id)})):void 0}var F=a(9),B=a.n(F);function N(e){var t=e.pageNumber;return Object(n.jsx)("div",{className:B.a.ButtonDiv,children:Object(n.jsx)("button",{className:B.a.Button,onClick:function(){t()},children:"Load more"})})}var w=function(e){var t=e.src,a=e.onFetch,r=Object(c.useState)(!1),o=Object(s.a)(r,2),i=o[0],l=o[1],u=Object(c.useState)(1),b=Object(s.a)(u,2),j=b[0],m=b[1];return Object(n.jsxs)("div",{children:[Object(n.jsx)("ul",{className:d.a.ImageGallery,children:Object(n.jsx)(y,{onFetch:a,largeImageURL:function(e){t(e)},visible:function(e){l(!e)},numberPage:j,resPage:function(e){e&&m(1)},qq:i})}),i&&Object(n.jsx)(N,{pageNumber:function(e){m(j+1)}})]})},L=a(10),E=a.n(L),G=a.p+"static/media/404_error.a378b0df.jpg";function k(e){var t=e.src,a=Object(c.useState)(!1),r=Object(s.a)(a,2),o=r[0],i=r[1];return Object(c.useEffect)((function(){return""!==t&&(i(!0),window.addEventListener("keydown",(function(e){"Escape"===e.code&&i(!1)})),window.addEventListener("click",(function(e){"img"!==e.target.alt&&i(!1)}))),function(){window.removeEventListener("click",(function(e){"img"!==e.target.alt&&i(!1),"img"===e.target.alt&&i(!0)}))}}),[t]),o&&Object(n.jsx)("div",{className:E.a.Overlay,children:Object(n.jsx)("div",{className:E.a.Modal,children:Object(n.jsx)("img",{src:t,alt:"img"})})})}k.defaultProps={src:G};var P=function(){var e=Object(c.useState)(""),t=Object(s.a)(e,2),a=t[0],r=t[1],o=Object(c.useState)(""),i=Object(s.a)(o,2),l=i[0],b=i[1];return Object(n.jsxs)("div",{className:u.a.App,children:[Object(n.jsx)(k,{src:l}),Object(n.jsx)(m,{onSubmit:function(e){r(e)}}),Object(n.jsx)(w,{onFetch:a,src:function(e){b(e)}})]})},C=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,45)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,o=t.getTTFB;a(e),n(e),c(e),r(e),o(e)}))};i.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(P,{})}),document.getElementById("root")),C()},8:function(e,t,a){e.exports={ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem__3_RJR",ImageGalleryItemImage:"ImageGalleryItem_ImageGalleryItemImage__2Q_b-"}},9:function(e,t,a){e.exports={Button:"Button_Button__2I1w2",ButtonDiv:"Button_ButtonDiv__2P3Yn"}}},[[44,1,2]]]);
//# sourceMappingURL=main.f4bf3719.chunk.js.map