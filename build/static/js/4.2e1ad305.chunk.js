(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[4],{48:function(e,t,c){e.exports={card:"Card_card__1m44e"}},49:function(e,t,c){e.exports={form:"QuoteForm_form__3Ndw9",loading:"QuoteForm_loading__iDpS0",control:"QuoteForm_control__2lCiE",actions:"QuoteForm_actions__354La"}},53:function(e,t,c){"use strict";c.r(t);var n=c(4),r=c(6),a=c(0),o=c(3),s=c(48),i=c.n(s),u=c(2),d=function(e){return Object(u.jsx)("div",{className:i.a.card,children:e.children})},l=c(13),j=c(49),b=c.n(j),f=function(e){var t=Object(a.useRef)(),c=Object(a.useRef)();return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)(d,{children:Object(u.jsxs)("form",{className:b.a.form,onSubmit:function(n){n.preventDefault();var r=t.current.value,a=c.current.value;e.onAddQuote({author:r,text:a})},children:[e.isLoading&&Object(u.jsx)("div",{className:b.a.loading,children:Object(u.jsx)(l.a,{})}),Object(u.jsxs)("div",{className:b.a.control,children:[Object(u.jsx)("label",{htmlFor:"author",children:"Author"}),Object(u.jsx)("input",{type:"text",id:"author",ref:t})]}),Object(u.jsxs)("div",{className:b.a.control,children:[Object(u.jsx)("label",{htmlFor:"text",children:"Text"}),Object(u.jsx)("textarea",{id:"text",rows:"5",ref:c})]}),Object(u.jsx)("div",{className:b.a.actions,children:Object(u.jsx)("button",{className:"btn",children:"Add Quote"})})]})})})},x=c(22),h=c(23);t.default=function(){var e=Object(x.a)(h.b),t=e.sendRequest,c=e.status,s=Object(o.o)();Object(a.useEffect)((function(){"completed"===c&&s("/quotes")}),[c,s]);var i=function(){var e=Object(r.a)(Object(n.a)().mark((function e(c){return Object(n.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t(c);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(u.jsx)("div",{children:Object(u.jsx)(f,{isLoading:"pending"===c,onAddQuote:i})})}}}]);
//# sourceMappingURL=4.2e1ad305.chunk.js.map