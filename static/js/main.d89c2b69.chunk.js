(this["webpackJsonpfriends-list"]=this["webpackJsonpfriends-list"]||[]).push([[0],{16:function(e,t,n){},17:function(e,t,n){},23:function(e,t,n){},25:function(e,t,n){},27:function(e,t,n){"use strict";n.r(t);var a=n(1),s=n.n(a),c=n(10),i=n.n(c),r=(n(16),n(3)),l=n(2),d=(n(17),n(11)),o=n.n(d),j=(n(23),n(0));function f(e){return Object(j.jsxs)("div",{className:"delete-confirm-modal",children:[Object(j.jsx)("div",{className:"title",children:"Delete Confirmation"}),Object(j.jsxs)("div",{className:"message",children:['Are you sure you want to delete "',e.friendName,'" as your friend?']}),Object(j.jsxs)("div",{className:"form-actions",children:[Object(j.jsx)("button",{className:"cancel-button",onClick:function(){return e.cancelDeleteFriend()},children:"No"}),Object(j.jsx)("button",{className:"submit-button",onClick:function(){return e.deleteFriend(e.friendName)},children:"Yes"})]})]})}n(25);function u(e){var t=e.activePage*e.eventsPerPage,n=t-e.eventsPerPage,a=e.displayFriendsList&&e.displayFriendsList.slice(n,t);return a.length>0?a&&a.map((function(t){return Object(j.jsxs)("div",{className:"friend-row",children:[Object(j.jsxs)("div",{className:"friend-name",children:[t.name,Object(j.jsx)("div",{className:"text",children:"is your friend"})]},t),Object(j.jsxs)("div",{className:"actions",children:[Object(j.jsx)("div",{className:"star-icon",onClick:function(){return e.handleFavorite(t.name)},children:t.favorite?Object(j.jsx)("span",{className:"fa fa-star"}):Object(j.jsx)("span",{className:"fa fa-star-o"})}),Object(j.jsx)("div",{className:"delete-icon",onClick:function(){return e.handleDisplayDeleteModal(t.name)},children:Object(j.jsx)("span",{className:"fa fa-trash"})})]})]},t)})):""!==e.friendName&&Object(j.jsx)("div",{className:"friend-row",children:"Yay!! New friend. Hit enter to add as friend"})}var b=function(){var e=Object(a.useState)([]),t=Object(l.a)(e,2),n=t[0],s=t[1],c=Object(a.useState)(""),i=Object(l.a)(c,2),d=i[0],b=i[1],m=Object(a.useState)([]),O=Object(l.a)(m,2),v=O[0],h=O[1],N=Object(a.useState)(1),x=Object(l.a)(N,2),p=x[0],g=x[1],y=Object(a.useState)(!1),C=Object(l.a)(y,2),F=C[0],P=C[1],w=Object(a.useState)(""),k=Object(l.a)(w,2),D=k[0],S=k[1];return Object(a.useEffect)((function(){""===d&&h(Object(r.a)(n))}),[d]),Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)("h2",{className:"page-title",children:"Welcome to Haptik!!"}),Object(j.jsx)("div",{className:"body-wrapper",children:Object(j.jsxs)("div",{className:"friends-list-table",children:[Object(j.jsxs)("div",{className:"header-row",children:[Object(j.jsx)("div",{className:"header",children:"Friends List"}),Object(j.jsxs)("div",{onClick:function(){return h(Object(r.a)(v).sort((function(e,t){return e.favorite===t.favorite?0:e.favorite?-1:1}))),void g(1)},className:"sort-header",children:["Sort By",Object(j.jsx)("span",{className:"sort-star-icon",children:Object(j.jsx)("span",{className:"fa fa-star"})})]})]}),Object(j.jsx)("div",{className:"add-new-friend",children:Object(j.jsx)("input",{type:"text",value:d,placeholder:"Enter your friends name",onChange:function(e){return function(e){var t=Object(r.a)(n);t=t.filter((function(t){return t.name.toLowerCase().includes(e.toLowerCase())})),h(t),b(e)}(e.target.value)},onKeyPress:function(e){if("Enter"===e.key&&""!==d){if(0===n.filter((function(e){return e.name===d.trimEnd()})).length){var t={name:d,favorite:!1};s((function(e){return[].concat(Object(r.a)(e),[t])}))}b("")}}})}),Object(j.jsx)("div",{className:"list-of-friends",children:Object(j.jsx)(u,{activePage:p,eventsPerPage:4,displayFriendsList:v,handleFavorite:function(e){var t=Object(r.a)(n);t=n.map((function(t){return t.name===e&&(t.favorite=!t.favorite),t})),s(t)},handleDisplayDeleteModal:function(e){P(!0),S(e)},friendName:d})}),Object(j.jsx)(o.a,{className:"pagination-component",activePage:p,itemsCountPerPage:4,totalItemsCount:v.length,onChange:g,hideDisabled:!0,hideNavigation:!0})]})}),F&&Object(j.jsx)("div",{className:"delete-modal",children:Object(j.jsx)(f,{friendName:D,cancelDeleteFriend:function(){P(!1)},deleteFriend:function(e){var t=n.filter((function(t){return t.name!==e})),a=v.filter((function(t){return t.name!==e}));s(t),h(a),P(!1)}})})]})},m=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,28)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),a(e),s(e),c(e),i(e)}))};n(26);i.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(b,{})}),document.getElementById("root")),m()}},[[27,1,2]]]);
//# sourceMappingURL=main.d89c2b69.chunk.js.map