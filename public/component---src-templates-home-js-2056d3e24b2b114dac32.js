(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{181:function(e,t,n){"use strict";n.r(t);var i=n(0),o=n.n(i),a=n(275),r=n.n(a),l=(n(197),n(191)),c=n(198),d=n(200),s=n(278),u=n(21),p=n.n(u),m=n(22);function f(){var e=p()(["\n  {\n    Testimonials_aggregate {\n      nodes {\n        Review\n        CreatedAt\n        User {\n          Given_Name\n          Family_Name\n          Picture\n        }\n      }\n    }\n  }\n"]);return f=function(){return e},e}var h=n.n(m)()(f()),g=(n(103),n(215),n(185)),y=n(209),x=n(183),w=x.c.div.withConfig({displayName:"styled__Testimonials",componentId:"m09p0a-0"})(["width:100%;position:relative;margin:0% 0;"]),v=x.c.h3.withConfig({displayName:"styled__Title",componentId:"m09p0a-1"})(["display:flex;flex:1;justify-content:center;text-transform:uppercase;margin:20px 0 0 0;@media (max-width:700px){margin:20px 0 20px 0;}"]),b=x.c.div.withConfig({displayName:"styled__Carousel",componentId:"m09p0a-2"})(["min-height:10vh;position:relative;margin:30px 0;"]),_=x.c.div.withConfig({displayName:"styled__TestimonialContainer",componentId:"m09p0a-3"})(["display:flex;flex-direction:column;"]),E=x.c.div.withConfig({displayName:"styled__Slide",componentId:"m09p0a-4"})(["width:",";opacity:",";transition:opacity 0.2s ease-in;display:grid;grid-template-columns:1fr 1fr 1fr;grid-template-rows:1fr;justify-content:space-around;align-items:center;align-content:center;width:100%;flex:space-between;flex-wrap:wrap;& > div{flex:1;}"],function(e){return e.visible?"100%":0},function(e){return e.visible?1:0}),C=x.c.div.withConfig({displayName:"styled__SlideSelection",componentId:"m09p0a-5"})(["display:flex;justify-content:center;margin:5px 0 60px 0;"]),N=x.c.div.withConfig({displayName:"styled__SlideSelector",componentId:"m09p0a-6"})(["width:30px;height:5px;margin:0 4px;background-color:",";cursor:",";z-index:1;transition:color 1s ease-in;"],function(e){return e.selected?"rgb(199, 0, 43, 1)":"grey"},function(e){return e.selected?"cursor":"pointer"}),I=x.c.div.withConfig({displayName:"styled__Testimonial",componentId:"m09p0a-7"})(["display:grid;flex:1;grid-template-columns:1fr 1fr 1fr 1fr 1fr;grid-template-rows:minmax(100px,1fr) auto;& > div{:first-child{grid-row:span 2;}:last-child{grid-row:span 2;}:nth-child(2){grid-column:span 3;}:nth-child(4){grid-column:span 3;display:flex;align-items:center;}}"]),k=x.c.div.withConfig({displayName:"styled__Content",componentId:"m09p0a-8"})(["display:flex;justify-content:center;width:100%;height:100%;flex:1;&:not(:last-child){border-right:1px solid #ccc;}"]),S=(x.c.img.withConfig({displayName:"styled__Image",componentId:"m09p0a-9"})(["border-radius:50%;height:40px;width:40px;"]),x.c.div.withConfig({displayName:"styled__Details",componentId:"m09p0a-10"})(["display:flex;align-items:center;width:100%;margin-top:10px;@media (max-width:700px){display:flex;margin-bottom:20px;flex-direction:column;}"])),T=x.c.div.withConfig({displayName:"styled__Profile",componentId:"m09p0a-11"})(["display:flex;grid-template-columns:1fr 1fr 1fr;grid-template-rows:1fr 1fr;border-right:1px solid #ccc;flex-direction:column;margin:10px;padding:10px;height:10px;justify-content:center;& > div{:first-child{grid-columnL span 2;}flex:1;}@media (max-width:700px){flex-direction:row;margin:10px 0 35px 0;border:none;}"]),j=x.c.div.withConfig({displayName:"styled__ProfileDetails",componentId:"m09p0a-12"})(["display:flex;white-space:nowrap;@media (max-width:700px){flex-direction:column;margin:0px 8px;}"]),O=x.c.div.withConfig({displayName:"styled__Review",componentId:"m09p0a-13"})(["@media (max-width:700px){text-align:center;}"]),A=x.c.div.withConfig({displayName:"styled__DesktopContainer",componentId:"m09p0a-14"})(["display:flex;flex-direction:column;@media (max-width:700px){display:none;flex-direction:none;}"]),q=x.c.div.withConfig({displayName:"styled__MobileContainer",componentId:"m09p0a-15"})(["display:none;flex-direction:column;@media (max-width:700px){display:flex;flex-direction:flex;}"]),P=function(e){for(var t=e.testimonials,n=e.formatDate,i=e.position,a=e.setPosition,r=[],l=0;l<t.length;l+=3)r.push(t.slice(l,l+3));return o.a.createElement(A,null,o.a.createElement(_,null,o.a.createElement(v,null,"Client Testimonials"),o.a.createElement(w,null,o.a.createElement(b,null,r&&r.length&&r.map(function(e,t){return o.a.createElement(E,{key:t,visible:t===i},e.map(function(e){return o.a.createElement(k,null,o.a.createElement(I,null,o.a.createElement("div",null),o.a.createElement("div",null,e.Review),o.a.createElement("div",null),o.a.createElement("div",null,o.a.createElement(S,null,o.a.createElement("div",null,o.a.createElement(y.a,null)),o.a.createElement(T,null,o.a.createElement("div",null,e.User.Given_Name," ",e.User.Family_Name),o.a.createElement("div",null,n(e.CreatedAt))),o.a.createElement("div",null,Array.from(Array(5)).map(function(e){return o.a.createElement(g.s,{color:"gold"})})),o.a.createElement("div",null)))))}))}))),o.a.createElement(C,null,r.map(function(e,t){return o.a.createElement(N,{onClick:function(){return a(t)},selected:t===i})}))))},z=n(201),D=n.n(z),F=function(e){var t,n=e.testimonials,i=e.formatDate,a=e.position,r=e.setPosition,l=n.slice(0,5);return o.a.createElement(q,null,o.a.createElement(_,null,o.a.createElement(v,null,"Client Testimonials"),o.a.createElement(D.a,{className:"carousel",swipeOptions:{startSlide:a,continuous:!0,callback:function(e){return r(e)}},ref:function(e){return t=e}},l.map(function(e){return o.a.createElement(I,null,o.a.createElement("div",null),o.a.createElement(O,null,e.Review),o.a.createElement("div",null),o.a.createElement("div",null,o.a.createElement(S,null,o.a.createElement(T,null,o.a.createElement("div",null,o.a.createElement(y.a,null)),o.a.createElement(j,null,o.a.createElement("div",null,e.User.Given_Name," ",e.User.Family_Name||null),o.a.createElement("div",null,i(e.CreatedAt)))),o.a.createElement("div",null,Array.from(Array(5)).map(function(e){return o.a.createElement(g.s,{color:"gold"})})),o.a.createElement("div",null))))})),o.a.createElement(C,null,l.map(function(e,n){return o.a.createElement(N,{onClick:function(){r(n),t.slide(n)},selected:n===a})}))))};function M(e){var t=new Date(""+e);return t.getDate()+"."+(t.getMonth()+1)+"."+t.getFullYear()}var R=function(){var e=Object(s.a)(h),t=e.loading,n=e.data,a=Object(i.useState)(0),r=a[0],l=a[1];return t?o.a.createElement("div",null,"Loading..."):o.a.createElement(o.a.Fragment,null,o.a.createElement(P,{formatDate:M,position:r,setPosition:l,testimonials:n.Testimonials_aggregate.nodes}),o.a.createElement(F,{formatDate:M,position:r,setPosition:l,testimonials:n.Testimonials_aggregate.nodes}))},B=r()({loader:function(){return Promise.resolve().then(n.bind(null,197))},loading:function(){return o.a.createElement("div",null,"loading...")}});t.default=function(e){var t=e.pageContext;return o.a.createElement(B,{page:t},o.a.createElement(l.a,{title:"Home",keywords:["gatsby","application","react"]}),o.a.createElement(o.a.Fragment,null,o.a.createElement(c.a,{items:t.prismicPage.data.body[0].items}),o.a.createElement(d.a,{items:t.prismicPage.data.body[1].items}),o.a.createElement(R,null)))}},194:function(e,t,n){"use strict";n(192);var i=n(0),o=n.n(i),a=n(184),r=n.n(a),l=n(183),c=l.c.div.withConfig({displayName:"styled__Banner",componentId:"p1vh0o-0"})(["position:relative;width:100%;height:100%;max-height:",";:hover{&:after{content:'';display:block;height:100%;position:absolute;top:0;left:0;width:100%;z-index:1;background-color:rgba(0,0,0,0.6);}}"],function(e){return e.maxHeight}),d=l.c.div.withConfig({displayName:"styled__ImageContainer",componentId:"p1vh0o-1"})(["width:100%;height:100%;"]),s=l.c.div.withConfig({displayName:"styled__Container",componentId:"p1vh0o-2"})(["display:flex;flex-direction:column;position:absolute;top:0;bottom:0;right:0;left:0;justify-content:",";align-items:",";padding:24px;background-color:rgba(0,0,0,0.2);color:white;z-index:9998;@media (max-width:700px){justify-content:center;align-items:center;}"],function(e){return e.yAlign||"center"},function(e){return e.xAlign||"flex-start"}),u=l.c.div.withConfig({displayName:"styled__Content",componentId:"p1vh0o-3"})(["text-align:",";width:60%;@media (max-width:700px){text-align:center;}"],function(e){return e.textalign||"flex-start"}),p=l.c.h1.withConfig({displayName:"styled__Title",componentId:"p1vh0o-4"})(["color:white;font-size:12px;:empty{display:none;}"]),m=l.c.h2.withConfig({displayName:"styled__SubContent",componentId:"p1vh0o-5"})(["color:white;font-size:28px;"]),f=l.c.button.withConfig({displayName:"styled__Button",componentId:"p1vh0o-6"})(["border:2px solid white;width:60%;height:3em;margin:18px 0;padding:0px;background-color:none;background-color:Transparent;text-align:center;color:white;@media (max-width:700px){background-color:rgb(199,0,43,1);color:white;border:1px solid rgb(199,0,43,1);cursor:pointer;}&:hover{background-color:rgb(199,0,43,1);color:white;border:1px solid rgb(199,0,43,1);cursor:pointer;}"]);t.a=function(e){var t=e.banner;return o.a.createElement(c,{maxHeight:t.maxHeight},o.a.createElement(d,null,t.image&&o.a.createElement(r.a,{style:{height:"100%",position:"unset"},fixed:t.image.localFile.childImageSharp.fixed,objectFit:"cover",objectPosition:"50% 50%"})),o.a.createElement(s,{yAlign:t.contentaligny,xAlign:t.contentalignx},o.a.createElement(u,{textalign:""+t.textalign},o.a.createElement(p,null,t.title.text),o.a.createElement(m,null,t.content.text),t.cta&&o.a.createElement(f,null,t.cta.text))))}},198:function(e,t,n){"use strict";var i=n(0),o=n.n(i),a=n(184),r=n.n(a),l=n(183),c=l.c.div.withConfig({displayName:"styled__CarouselContainer",componentId:"sc-1c41dqg-0"})(["position:relative;height:80vh;"]),d=l.c.div.withConfig({displayName:"styled__Slide",componentId:"sc-1c41dqg-1"})(["position:relative;overflow:hidden;height:",";opacity:",";transition:opacity 1s ease-in;&:after{content:'';display:block;height:100%;position:absolute;top:0;left:0;width:100%;z-index:1;background-color:rgba(0,0,0,0.2);}"],function(e){return e.visible?"100%":0},function(e){return e.visible?1:0}),s=l.c.div.withConfig({displayName:"styled__SlideSelection",componentId:"sc-1c41dqg-2"})(["display:flex;position:absolute;bottom:10%;width:100%;justify-content:center;"]),u=l.c.div.withConfig({displayName:"styled__SlideSelector",componentId:"sc-1c41dqg-3"})(["width:30px;height:5px;margin:0 4px;background-color:",";cursor:",";z-index:1;transition:color 1s ease-in;"],function(e){return e.selected?"rgb(199, 0, 43, 1)":"white"},function(e){return e.selected?"cursor":"pointer"}),p=l.c.div.withConfig({displayName:"styled__Content",componentId:"sc-1c41dqg-4"})(["display:flex;flex-direction:column;position:absolute;top:50%;left:20%;transform:translate(-25%,-50%);color:white;z-index:9998;width:50%;"]),m=l.c.h1.withConfig({displayName:"styled__Title",componentId:"sc-1c41dqg-5"})(["color:white;font-size:3em;width:70%;"]),f=l.c.h2.withConfig({displayName:"styled__SubContent",componentId:"sc-1c41dqg-6"})(["font-size:1em;color:white;"]),h=l.c.button.withConfig({displayName:"styled__Button",componentId:"sc-1c41dqg-7"})(["width:25%;height:40px;color:white;background-color:rgb(199,0,43,0.9);border:0;margin:30px 0;&:hover{cursor:pointer;background-color:rgb(199,0,43,1);}"]),g=function(e,t,n){t(e+1>n-1?0:e+1)},y=function(e){var t=e.slides,n=Object(i.useState)(0),a=n[0],l=n[1];return Object(i.useEffect)(function(e){var n=setTimeout(function(){return g(a,l,t.length)},1e4);return function(){clearTimeout(n)}}),o.a.createElement("div",null,o.a.createElement(c,null,t.map(function(e,t){return o.a.createElement(d,{key:t,visible:t===a},o.a.createElement(r.a,{style:{width:"100%",position:"unset"},fluid:e.gallery_image.localFile.childImageSharp.fluid}),o.a.createElement(p,null,o.a.createElement(m,null,e.title.text),o.a.createElement(f,null,e.description.text),o.a.createElement(h,null,"Click Here")))}),o.a.createElement(s,null,t.map(function(e,t){return o.a.createElement(u,{onClick:function(){return l(t)},selected:t===a})}))),o.a.createElement("button",{onClick:function(){return g(a,l,t.length)}}))},x=n(201),w=n.n(x),v=l.c.div.withConfig({displayName:"styled__Carousel",componentId:"it0x3f-0"})(["position:relative;display:block;height:100%;background-color:rgba(0,0,0,0.2);"]),b=l.c.div.withConfig({displayName:"styled__Slide",componentId:"it0x3f-1"})(["display:block;height:100%;"]),_=l.c.div.withConfig({displayName:"styled__SlideSelection",componentId:"it0x3f-2"})(["display:flex;position:absolute;bottom:10%;width:100%;justify-content:center;"]),E=l.c.div.withConfig({displayName:"styled__Content",componentId:"it0x3f-3"})(["display:flex;flex-direction:column;position:absolute;top:50%;left:30%;transform:translate(-25%,-50%);color:white;z-index:9998;width:60%;"]),C=l.c.h1.withConfig({displayName:"styled__Title",componentId:"it0x3f-4"})(["color:white;font-size:36px;width:80%;"]),N=l.c.h2.withConfig({displayName:"styled__SubContent",componentId:"it0x3f-5"})(["font-size:22px;color:white;"]),I=l.c.button.withConfig({displayName:"styled__Button",componentId:"it0x3f-6"})(["width:50%;height:40px;color:white;background-color:rgb(199,0,43,0.9);border:0;margin:30px 0;&:hover{cursor:pointer;background-color:rgb(199,0,43,1);}"]),k=l.c.div.withConfig({displayName:"styled__SlideSelector",componentId:"it0x3f-7"})(["width:30px;height:5px;margin:0 4px;background-color:",";cursor:",";z-index:1;transition:color 1s ease-in;"],function(e){return e.selected?"rgb(199, 0, 43, 1)":"white"},function(e){return e.selected?"cursor":"pointer"}),S=l.c.div.withConfig({displayName:"styled__Overlay",componentId:"it0x3f-8"})(["position:absolute;top:0;right:0;left:0;bottom:0;background-color:rgb(0,0,0,0.2);z-index:1;"]),T=function(e){var t,n=e.slides,a=Object(i.useState)(0),l=a[0],c=a[1];return o.a.createElement(v,null,o.a.createElement(w.a,{className:"carousel",swipeOptions:{startSlide:l,continuous:!0,callback:function(e){return c(e)}},ref:function(e){return t=e}},n.map(function(e){return o.a.createElement(b,null,o.a.createElement(S,null),o.a.createElement(r.a,{style:{width:"100%"},fluid:e.gallery_image._4_3.localFile.childImageSharp.fluid}),o.a.createElement(E,null,o.a.createElement(C,null,e.title.text),o.a.createElement(N,null,e.description.text),o.a.createElement(I,null,"Click Here")))})),o.a.createElement(_,null,n.map(function(e,n){return o.a.createElement(k,{onClick:function(){c(n),t.slide(n)},selected:n===l})})))},j=l.c.div.withConfig({displayName:"styled__DesktopContainer",componentId:"gq6wpt-0"})(["display:block;position:relative;height:80vh;@media (max-width:700px){display:none;}"]),O=l.c.div.withConfig({displayName:"styled__MobileContainer",componentId:"gq6wpt-1"})(["display:none;@media (max-width:700px){display:block;position:relative;height:100%;}"]),A=l.c.div.withConfig({displayName:"styled__Carousel",componentId:"gq6wpt-2"})(["display:block;"]);t.a=function(e){var t=e.items;return o.a.createElement(A,null,o.a.createElement(j,null,o.a.createElement(y,{slides:t})),o.a.createElement(O,null,o.a.createElement(T,{slides:t})))}},200:function(e,t,n){"use strict";var i=n(0),o=n.n(i),a=n(183),r=a.c.div.withConfig({displayName:"styled__Banners",componentId:"sc-1nheo91-0"})(["display:grid;width:100%;grid-row-gap:6px;grid-column-gap:6px;grid-template-columns:repeat(3,minmax(0,1fr));grid-template-rows:repeat(2,minmax(0,auto));justify-items:center;align-items:center;position:relative;& > div{:first-child{grid-row:span 2;}:nth-child(3){grid-row:span 2;}}@media (max-width:700px){display:grid;grid-template-columns:1fr;grid-template-rows:auto;& > div{:first-child{grid-row:span 1;}:nth-child(3){grid-row:span 1;}}}"]),l=a.c.div.withConfig({displayName:"styled__ContentfulBanners",componentId:"sc-1nheo91-1"})(["display:flex;position:relative;overflow:hidden;padding:12px;height:400px;@media (max-width:700px){height:1200px;}"]),c=n(194);t.a=function(e){var t=e.items;return o.a.createElement(l,null,o.a.createElement(r,null,t.map(function(e){return o.a.createElement(c.a,{banner:e})})))}},215:function(e,t,n){"use strict";var i=n(34),o=n(28),a=n(57),r=n(104),l=n(105),c=n(56),d=n(276),s=n(106);o(o.S+o.F*!n(107)(function(e){Array.from(e)}),"Array",{from:function(e){var t,n,o,u,p=a(e),m="function"==typeof this?this:Array,f=arguments.length,h=f>1?arguments[1]:void 0,g=void 0!==h,y=0,x=s(p);if(g&&(h=i(h,f>2?arguments[2]:void 0,2)),null==x||m==Array&&l(x))for(n=new m(t=c(p.length));t>y;y++)d(n,y,g?h(p[y],y):p[y]);else for(u=x.call(p),n=new m;!(o=u.next()).done;y++)d(n,y,g?r(u,h,[o.value,y],!0):o.value);return n.length=y,n}})},275:function(e,t,n){"use strict";var i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var l=n(0),c=n(11),d=[],s=[];function u(e){var t=e(),n={loading:!0,loaded:null,error:null};return n.promise=t.then(function(e){return n.loading=!1,n.loaded=e,e}).catch(function(e){throw n.loading=!1,n.error=e,e}),n}function p(e){var t={loading:!1,loaded:{},error:null},n=[];try{Object.keys(e).forEach(function(i){var o=u(e[i]);o.loading?t.loading=!0:(t.loaded[i]=o.loaded,t.error=o.error),n.push(o.promise),o.promise.then(function(e){t.loaded[i]=e}).catch(function(e){t.error=e})})}catch(i){t.error=i}return t.promise=Promise.all(n).then(function(e){return t.loading=!1,e}).catch(function(e){throw t.loading=!1,e}),t}function m(e,t){return l.createElement((n=e)&&n.__esModule?n.default:n,t);var n}function f(e,t){var u,p;if(!t.loading)throw new Error("react-loadable requires a `loading` component");var f=Object.assign({loader:null,loading:null,delay:200,timeout:null,render:m,webpack:null,modules:null},t),h=null;function g(){return h||(h=e(f.loader)),h.promise}return d.push(g),"function"==typeof f.webpack&&s.push(function(){if(e=f.webpack,"object"===i(n.m)&&e().every(function(e){return void 0!==e&&void 0!==n.m[e]}))return g();var e}),p=u=function(t){function n(i){o(this,n);var r=a(this,t.call(this,i));return r.retry=function(){r.setState({error:null,loading:!0,timedOut:!1}),h=e(f.loader),r._loadModule()},g(),r.state={error:h.error,pastDelay:!1,timedOut:!1,loading:h.loading,loaded:h.loaded},r}return r(n,t),n.preload=function(){return g()},n.prototype.componentWillMount=function(){this._mounted=!0,this._loadModule()},n.prototype._loadModule=function(){var e=this;if(this.context.loadable&&Array.isArray(f.modules)&&f.modules.forEach(function(t){e.context.loadable.report(t)}),h.loading){"number"==typeof f.delay&&(0===f.delay?this.setState({pastDelay:!0}):this._delay=setTimeout(function(){e.setState({pastDelay:!0})},f.delay)),"number"==typeof f.timeout&&(this._timeout=setTimeout(function(){e.setState({timedOut:!0})},f.timeout));var t=function(){e._mounted&&(e.setState({error:h.error,loaded:h.loaded,loading:h.loading}),e._clearTimeouts())};h.promise.then(function(){t()}).catch(function(e){t()})}},n.prototype.componentWillUnmount=function(){this._mounted=!1,this._clearTimeouts()},n.prototype._clearTimeouts=function(){clearTimeout(this._delay),clearTimeout(this._timeout)},n.prototype.render=function(){return this.state.loading||this.state.error?l.createElement(f.loading,{isLoading:this.state.loading,pastDelay:this.state.pastDelay,timedOut:this.state.timedOut,error:this.state.error,retry:this.retry}):this.state.loaded?f.render(this.state.loaded,this.props):null},n}(l.Component),u.contextTypes={loadable:c.shape({report:c.func.isRequired})},p}function h(e){return f(u,e)}h.Map=function(e){if("function"!=typeof e.render)throw new Error("LoadableMap requires a `render(loaded, props)` function");return f(p,e)};var g=function(e){function t(){return o(this,t),a(this,e.apply(this,arguments))}return r(t,e),t.prototype.getChildContext=function(){return{loadable:{report:this.props.report}}},t.prototype.render=function(){return l.Children.only(this.props.children)},t}(l.Component);function y(e){for(var t=[];e.length;){var n=e.pop();t.push(n())}return Promise.all(t).then(function(){if(e.length)return y(e)})}g.propTypes={report:c.func.isRequired},g.childContextTypes={loadable:c.shape({report:c.func.isRequired}).isRequired},h.Capture=g,h.preloadAll=function(){return new Promise(function(e,t){y(d).then(e,t)})},h.preloadReady=function(){return new Promise(function(e,t){y(s).then(e,e)})},e.exports=h},276:function(e,t,n){"use strict";var i=n(42),o=n(74);e.exports=function(e,t,n){t in e?i.f(e,t,o(0,n)):e[t]=n}}}]);
//# sourceMappingURL=component---src-templates-home-js-2056d3e24b2b114dac32.js.map