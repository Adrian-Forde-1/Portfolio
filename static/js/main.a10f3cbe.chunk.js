(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{24:function(e,t,i){},25:function(e,t,i){},32:function(e,t,i){"use strict";i.r(t);var r,n,a,c=i(1),s=i.n(c),o=i(18),l=i.n(o),d=(i(24),i(3)),u=(i(25),i(8)),p=i.p+"static/media/FrontendSVG.ec0712ab.svg",g=i.p+"static/media/BackendSVG.c389b8fc.svg",m=i.p+"static/media/DatabaseSVG.6c64e70d.svg",j=i.p+"static/media/OtherSkillsSVG.07960f0a.svg",h=i.p+"static/media/BootstrapLogoSVG.a53366e4.svg",b=i.p+"static/media/ReactLogoSVG.572ba693.svg",f=i.p+"static/media/CSS3LogoSVG.f892ae81.svg",v=i.p+"static/media/HTML5LogoSVG.01809336.svg",x=i.p+"static/media/JavascriptLogoSVG.7d48915a.svg",y=i.p+"static/media/ReduxLogoSVG.88b30fbf.svg",O=i.p+"static/media/SassLogoSVG.a67a8963.svg",_=[{name:"Frontend",btnText:"Inspect",img:p,skillImages:[{img:b,status:""},{img:y,status:""},{img:v,status:""},{img:x,status:""},{img:i.p+"static/media/TypescriptSVG.12f0e40b.svg",status:""},{img:f,status:""},{img:O,status:""},{img:h,status:""}]},{name:"Backend",btnText:"Deploy",img:g,skillImages:[{img:i.p+"static/media/NodeJsLogoSVG.12381cf3.svg",status:""},{img:i.p+"static/media/ExpressJsLogoSVG.b361318f.svg",status:""},{img:i.p+"static/media/CSharpLogo.e65ada01.svg",status:"Learning"},{img:i.p+"static/media/NETCoreLogo.e2aac1c9.svg",status:"Learning"}]},{name:"Database",btnText:"Select",img:m,skillImages:[{img:i.p+"static/media/MongoDBLogoSVG.54e05563.svg",status:""},{img:i.p+"static/media/MySqlLogoSVG.377fb0d7.svg",status:""},{img:i.p+"static/media/PostgresSqlLogoSVG.2f1758d8.svg",status:""}]},{name:"Other",btnText:"Explore",img:j,skillImages:[{img:i.p+"static/media/GitLogoSVG.b6ab4d13.svg",status:""},{img:i.p+"static/media/FigmaLogoSVG.c5b8fbd5.svg",status:""}]}],w=i(2);!function(e){e.MOBILE="MOBILE",e.DESKTOP="DESKTOP"}(r||(r={})),(a=n||(n={})).showNormalSkillAnimation=function(e,t,i,r,n,a,c,s,o,l){var d=w.a.timeline(),u=document.querySelectorAll(".skills__category");u&&(u.forEach((function(u){if(u.getAttribute("id")!==e){var p=w.a.timeline();p.set(u,{pointerEvents:"none"}).to(u,{duration:.3,opacity:0}),p.play(0)}else t.current=u,t.current&&d.set(n.current,{pointerEvents:"none"}).to(n.current,{clipPath:"polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",duration:.2,ease:"none"}).to(l.current,{opacity:0,pointerEvents:"none",duration:.2,ease:"none"}).to(a.current,{clipPath:"polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",duration:.2,ease:"none"},"-=0.2").to(a.current,{top:"50%",y:"-200",left:"calc(30vw + 10%)",xPercent:"initial"}).to(u,{width:"100%",height:"100vh",top:0,left:"initial"===i?"initial":"0%",right:"initial"===r?"initial":"0%",xPercent:"initial",zIndex:100,duration:.7,ease:"power1.out"},"-=0.3").to(c.current,{top:"50%",y:"-50%",width:"30vw",height:"30vw",left:"0",xPercent:"initial",marginLeft:"5%",duration:.7},"-=0.7").to(s.current,{width:"calc(85% - 30vw)",height:"380",top:"calc(50% + 50px)",y:"-200",xPercent:"initial",left:"calc(30vw + 10%)",padding:"20",duration:.5,onComplete:function(){var t=document.querySelectorAll(".".concat(e,"-skill"));t.length>0&&w.a.to(t,{duration:.3,clipPath:"polygon(0 0, 100% 0, 100% 100%, 0 100%)",stagger:.08,ease:"none"})}},"-=0.5").to(a.current,{opacity:1,clipPath:"polygon(0 0, 100% 0, 100% 100%, 0 100%)",duration:.3},"-=0.1").to(o.current,{top:"50%",y:"-200",right:"0%",marginRight:"5%",duration:0},"-=0.5").to(o.current,{opacity:1,rotate:"540",pointerEvents:"all",duration:.7})})),d.play(0))},a.showMobileSkillAnimation=function(e,t,i,r,n,a,c,s){var o=w.a.timeline(),l=document.querySelectorAll(".skills__category");l&&(l.forEach((function(l){if(l.getAttribute("id")!==e){var d=w.a.timeline();d.set(l,{pointerEvents:"none"}).to(l,{duration:.3,opacity:0}),d.play(0)}else t.current=l,t.current&&o.set(i.current,{pointerEvents:"none"}).to(i.current,{clipPath:"polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",duration:.2,ease:"none"}).to(s.current,{opacity:0,pointerEvents:"none",duration:.2,ease:"none"}).to(r.current,{clipPath:"polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",duration:.2,ease:"none"},"-=0.2").to(r.current,{top:"370",xPercent:-50,left:"50%"}).to(l,{width:"100%",height:"100vh",top:0,left:0,right:"initial",xPercent:0,zIndex:100,duration:.7,transformOrigin:"center",ease:"power1.out"},"-=0.3").to(n.current,{top:"0%",width:"350",height:"350",left:"50%",xPercent:-50,duration:.7},"-=0.7").to(a.current,{width:"100%",height:"380",top:"410",xPercent:-50,left:"50%",padding:"20px 5%",duration:.5,onComplete:function(){var t=document.querySelectorAll(".".concat(e,"-skill"));t.length>0&&w.a.to(t,{duration:.3,clipPath:"polygon(0 0, 100% 0, 100% 100%, 0 100%)",stagger:.08,ease:"none"})}},"-=0.5").to(r.current,{opacity:1,clipPath:"polygon(0 0, 100% 0, 100% 100%, 0 100%)",duration:.3},"-=0.1").to(c.current,{y:"370",top:"0%",right:"0%",marginRight:"5%",duration:0},"-=0.5").to(c.current,{opacity:1,rotate:"540",pointerEvents:"all",duration:.7})})),o.play(0))},a.animateFromNormalToMobile=function(e,t,i,r,n,a){if(e===t){var c=w.a.timeline();c.to(r.current,{top:"0%",y:"initial",width:"350",height:"350",marginLeft:"initial",left:"50%",xPercent:-50,duration:.7},"-=0.7").to(i.current,{top:"370",xPercent:-50,y:"initial",left:"50%"},"-=0.7").to(n.current,{width:"100%",height:"380",top:"410",xPercent:-50,y:"initial",left:"50%",padding:"20px 5%",duration:.5},"-=0.7").to(a.current,{top:"370",y:"initial",duration:.7},"-=0.7"),c.play(0)}},a.animateFromMobileToNormal=function(e,t,i,r,n,a){if(e===t){var c=w.a.timeline();c.to(r.current,{top:"50%",y:"-50%",width:"400",height:"400",left:"0",xPercent:"initial",marginLeft:"5%",duration:.7},"-=0.7").to(i.current,{top:"50%",y:"-200",left:"calc(440px + 5%)",xPercent:"initial",duration:.7},"-=0.7").to(n.current,{width:"calc(90% - 400px)",height:"380",top:"calc(50% + 50px)",y:"-200",xPercent:"initial",left:"calc(440px + 5%)",padding:"20px 20px",duration:.7},"-=0.7").to(a.current,{top:"50%",y:"-200",right:"0%",marginRight:"5%",duration:.7},"-=0.7"),c.play(0)}},a.reverseAnimation=function(e,t,i,r,n,a,c,s,o,l,d,u,p,g){var m=w.a.timeline({onComplete:function(){o(""),s(!1)}}),j=document.querySelectorAll(".".concat(e,"-skill"));m.set(c.current,{pointerEvents:"none"}).set(".skills__category",{pointerEvents:"none"}).to(c.current,{opacity:0,rotate:"0",duration:.7}).to(j,{duration:.2,clipPath:"polygon(0 0, 100% 0, 100% 0%, 0 0%)",stagger:-.08},"-=0.5").to(a.current,{width:"0",height:"0",top:"initial",y:"initial",xPercent:"initial",left:"initial",marginLeft:"initial",padding:"initial",duration:.5}).to(r.current,{clipPath:"polygon(0 0, 100% 0, 100% 0%, 0 0%)",duration:.3},"-=0.8").to(r.current,{top:"200",y:"initial",xPercent:-50,left:"50%",marginLeft:"initial",duration:0}).to(t.current,{width:200,height:300,left:d,right:u,top:l,xPercent:p,zIndex:"initial",duration:.7},"-=0.5").to(n.current,{top:"0px",y:"0px",width:"200",height:"200",xPercent:-50,left:"50%",marginLeft:"0%",duration:.7},"-=0.7").to(r.current,{clipPath:"polygon(0 0, 100% 0, 100% 100%, 0 100%)",duration:.3},"-=0.2").to(i.current,{clipPath:"polygon(0 0, 100% 0, 100% 100%, 0 100%)",duration:.3},"-=0.2").to(".skills__category",{duration:.3,opacity:1,stagger:.1}).to(g.current,{opacity:1,duration:.2,pointerEvents:"all"}).set(i.current,{pointerEvents:"all"}).set(".skills__category",{pointerEvents:"all"}),m.play(0)};var S,k=n,N=i(0),P=function(e){return Object(N.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:e.classes,"aria-hidden":"true",focusable:"false",width:"1em",height:"1em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 36 36",children:Object(N.jsx)("path",{d:"M19.41 18l8.29-8.29a1 1 0 0 0-1.41-1.41L18 16.59l-8.29-8.3a1 1 0 0 0-1.42 1.42l8.3 8.29l-8.3 8.29A1 1 0 1 0 9.7 27.7l8.3-8.29l8.29 8.29a1 1 0 0 0 1.41-1.41z",fill:"currentColor"})})},E=function(e){var t=e.name,i=e.img,n=e.top,a=void 0===n?0:n,s=e.btnText,o=e.skillImages,l=e.categoryIndex,d=e.viewingSkillCategory,p=e.setViewingSkillCategory,g=e.currentDisplayType,m=e.setCurrentDisplayType,j=e.categoryCurrentlyBeingViewed,h=e.setCategoryCurrentlyBeingViewed,b=e.skillsHeadingRef,f=Object(c.useRef)(null),v=Object(c.useRef)(null),x=Object(c.useRef)(null),y=Object(c.useRef)(null),O=Object(c.useRef)(null),_=Object(c.useRef)(null),S=Object(c.useState)(""),E=Object(u.a)(S,2),T=E[0],A=E[1],I=Object(c.useState)(""),L=Object(u.a)(I,2),q=L[0],C=L[1],V=Object(c.useState)(""),R=Object(u.a)(V,2),M=R[0],B=R[1],G=Object(c.useState)(""),F=Object(u.a)(G,2),D=F[0],Y=F[1],z=Object(c.useState)(!1),W=Object(u.a)(z,2),J=W[0],H=W[1];Object(c.useEffect)((function(){var e=document.querySelectorAll(".skills__category");e&&e.forEach((function(e){(null===e||void 0===e?void 0:e.getAttribute("id"))===t&&(_.current=e)}));var i=function(){window.innerWidth>992?(A((Math.ceil((l-1)/2)*a+160*Math.ceil((l+1)/2)).toString()),C((l+1)%2!==0?"25%":"initial"),B((l+1)%2===0?"25%":"initial"),Y((function(e){return"0"})),m(r.DESKTOP)):window.innerWidth<=992&&(A((l*a+120*l+120).toString()),C("50%"),B("initial"),Y("-50"),m(r.MOBILE))};window.addEventListener("resize",(function(){i()})),i()}),[]),Object(c.useEffect)((function(){J||""===T||""===q||""===M||""===D||(K(),H(!0))}),[T,q,M,D]),Object(c.useEffect)((function(){if(d){if(g===r.DESKTOP&&_.current)return k.animateFromMobileToNormal(t,j,v,f,y,O);if(g===r.MOBILE&&_.current)return k.animateFromNormalToMobile(t,j,v,f,y,O)}}),[g]),Object(c.useEffect)((function(){K()}),[T,q,M,D,d]);var K=function(){_.current&&t!==j&&w.a.to(_.current,{top:T&&T,left:q&&q,right:M&&M,xPercent:D&&D})};return Object(N.jsxs)("div",{className:"skills__category",id:t,children:[Object(N.jsxs)("div",{className:"skills__category-container",children:[Object(N.jsx)("div",{className:"skills__category-img",ref:f,children:Object(N.jsx)("img",{src:i,alt:""})}),Object(N.jsx)("div",{className:"skills__category-name",ref:v,children:t}),Object(N.jsx)("button",{className:"skills__category-btn",ref:x,style:{pointerEvents:d?"none":"all"},disabled:d,onClick:function(){_.current&&(p(!0),window.innerWidth>992?k.showNormalSkillAnimation(t,_,q,M,x,v,f,y,O,b):window.innerWidth<=992&&k.showMobileSkillAnimation(t,_,x,v,f,y,O,b)),h(t)},children:s}),Object(N.jsx)("div",{className:"skills__skills-container",ref:y,children:o.length>0&&o.map((function(e,i){return Object(N.jsx)("div",{className:"skills__skill ".concat(t,"-skill"),children:Object(N.jsxs)("div",{className:"skills__skill-img ",children:[Object(N.jsx)("img",{src:e.img,alt:""}),Object(N.jsx)("div",{className:"skills__skill-status",children:e.status})]})},i)}))})]}),Object(N.jsx)("div",{className:"skills__category-close-btn",ref:O,onClick:function(){k.reverseAnimation(t,_,x,v,f,y,O,p,h,T,q,M,D,b)},children:Object(N.jsx)(P,{})})]})},T=function(){var e=Object(c.useRef)(null),t=Object(c.useRef)(null),i=Object(c.useState)(!1),n=Object(u.a)(i,2),a=n[0],s=n[1],o=Object(c.useState)((function(){return window.innerWidth>992?r.DESKTOP:r.MOBILE})),l=Object(u.a)(o,2),d=l[0],p=l[1],g=Object(c.useState)(""),m=Object(u.a)(g,2),j=m[0],h=m[1];return Object(c.useEffect)((function(){w.a.to(".skills__category",{opacity:1}),t&&e&&w.a.to(t.current,{clipPath:"polygon(0 0, 100% 0, 100% 100%, 0 100%)",duration:1,scrollTrigger:{trigger:e.current,start:"top center",end:"bottom top",toggleActions:"play reverse play reverse"}});var i=document.querySelectorAll(".skills__category");i&&e.current&&i.forEach((function(t){w.a.to(t,{clipPath:"polygon(0 0, 100% 0, 100% 100%, 0% 100%)",duration:1,stagger:.1,scrollTrigger:{trigger:e.current,start:"top center",end:"bottom top",toggleActions:"play reverse play reverse"}})}))}),[]),Object(c.useEffect)((function(){var e=document.getElementsByTagName("html")[0];if(a){e&&(e.style.overflow="hidden");var t=document.querySelector("#skills");null===t||void 0===t||t.scrollIntoView()}else e&&(e.style.overflow="initial")}),[a]),Object(N.jsxs)("section",{className:"skills__grid",id:"skills",ref:e,children:[Object(N.jsx)("div",{className:"skills__heading",ref:t,children:Object(N.jsx)("span",{children:"SKILLS"})}),_.length>0&&_.map((function(e,i){return Object(N.jsx)(E,{name:e.name,btnText:e.btnText,img:e.img,skillImages:e.skillImages,categoryIndex:i,viewingSkillCategory:a,setViewingSkillCategory:s,currentDisplayType:d,setCurrentDisplayType:p,categoryCurrentlyBeingViewed:j,setCategoryCurrentlyBeingViewed:h,skillsHeadingRef:t,top:300},i)}))]})},A=[{img:i.p+"static/media/Issue Tracker Website Picture.85967a5b.png",name:"Issue Tracker",description:["Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis","facere suscipit, enim cumque illo nesciunt temporibus nulla modi,","neque, asperiores fugiat, nobis quibusdam amet consequatur!"],btnText:"View Project",favourite:!0,longName:!1},{img:i.p+"static/media/Sorting Algorithm Visualizer Picture.d12b4671.png",name:"Sorting Algorithm Visualizer",description:["Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis","facere suscipit, enim cumque illo nesciunt temporibus nulla modi,","neque, asperiores fugiat, nobis quibusdam amet consequatur!"],btnText:"View Project",favourite:!1,longName:!0},{img:i.p+"static/media/Clothing Website Picture.44feff15.png",name:"Clothing Website",description:["Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis","facere suscipit, enim cumque illo nesciunt temporibus nulla modi,","neque, asperiores fugiat, nobis quibusdam amet consequatur!"],btnText:"View Project",favourite:!1,longName:!1}],I=i(9);(S||(S={})).initialAnimations=function(e,t){w.a.registerPlugin(I.a),t.current&&e.current&&w.a.to(t.current,{xPercent:"-=80",scrollTrigger:{trigger:e.current,start:"-20% top",end:"bottom bottom",toggleActions:"play reverse play reverse",scrub:1,pin:t.current}});var i=document.querySelectorAll(".project");i.length>0&&i.forEach((function(e){var t=e.querySelectorAll(".project__content-description-line span"),i=e.querySelector(".project__content-name h5"),r=e.querySelector(".project__content-view-project button"),n=e.querySelector(".project__img"),a=e.querySelector(".project__favourite");a&&w.a.to(a,{duration:1.8,opacity:1,scrollTrigger:{trigger:e,start:"center bottom",end:"bottom top",toggleActions:"play reverse play reverse"}}),n&&w.a.to(n,{duration:.8,clipPath:"polygon(0 0, 100% 0, 100% 100%, 0% 100%)",scrollTrigger:{trigger:e,start:"center bottom",end:"bottom top",toggleActions:"play reverse play reverse"}}),r&&w.a.from(r,{duration:1.8,y:200,ease:"power4.out",skewY:20,stagger:{amount:.4},scrollTrigger:{trigger:e,start:"center bottom",end:"bottom top",toggleActions:"play reverse play reverse"}}),i&&w.a.from(i,{duration:1.8,y:200,ease:"power4.out",skewY:20,stagger:{amount:.4},scrollTrigger:{trigger:e,start:"center bottom",end:"bottom top",toggleActions:"play reverse play reverse"}}),t.length>0&&w.a.from(t,{duration:1.8,y:200,ease:"power4.out",skewY:20,stagger:{amount:.4},scrollTrigger:{trigger:e,start:"center bottom",end:"bottom top",toggleActions:"play reverse play reverse"}})}))};var L=function(e){return Object(N.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:e.classes,"aria-hidden":"true",focusable:"false",width:"1em",height:"1em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 16 16",children:Object(N.jsx)("g",{fill:"currentColor",children:Object(N.jsx)("path",{d:"M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327l4.898.696c.441.062.612.636.282.95l-3.522 3.356l.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"})})})},q=function(){var e=Object(c.useRef)(null),t=Object(c.useRef)(null);return Object(c.useEffect)((function(){S.initialAnimations(t,e)}),[]),Object(N.jsxs)("section",{className:"projects__wrapper",ref:t,id:"projects",children:[Object(N.jsxs)("div",{className:"projects__projects",children:[Object(N.jsx)("div",{id:"pin-start"}),A.length>0&&A.map((function(e,t){return Object(N.jsxs)("div",{className:"project",children:[e.favourite&&Object(N.jsx)("div",{className:"project__favourite",children:Object(N.jsx)(L,{})}),Object(N.jsx)("div",{className:"project__img",children:Object(N.jsx)("img",{src:e.img,alt:""})}),Object(N.jsxs)("div",{className:"project__content",children:[Object(N.jsx)("div",{className:"project__content-name ".concat(e.longName&&"project__content-name--long-name"),children:Object(N.jsx)("h5",{children:e.name})}),Object(N.jsx)("div",{className:"project__content-description",children:e.description.length>0&&e.description.map((function(e,t){return Object(N.jsx)("div",{className:"project__content-description-line",children:Object(N.jsx)("span",{children:e},t)})}))}),Object(N.jsx)("div",{className:"project__content-view-project",children:Object(N.jsx)("button",{children:e.btnText})})]})]},t)}))]}),Object(N.jsx)("div",{className:"projects__heading",ref:e,children:"PROJECTS"})]})},C=function(){w.a.registerPlugin(I.a);var e=Object(c.useRef)(null);return Object(c.useEffect)((function(){if(e.current){var t=w.a.timeline({scrollTrigger:{trigger:e.current,start:"-10% top",end:"bottom center",toggleActions:"play reverse play reverse"}});w.a.set(".about__heading span",{x:"-105%"}),t.to(".about__heading span",{x:0,opacity:1,duration:.6,stagger:.1}),w.a.set(".about__paragraph-line span",{y:220,skewY:20}),t.to(".about__paragraph-line span",{y:0,skewY:0,ease:"power4.out",duration:1.8,stagger:.1},"-=1.6")}}),[]),Object(N.jsxs)("section",{className:"about__wrapper",ref:e,id:"about",children:[Object(N.jsxs)("div",{className:"about__heading",children:[Object(N.jsx)("span",{children:"A"}),Object(N.jsx)("span",{children:"B"}),Object(N.jsx)("span",{children:"O"}),Object(N.jsx)("span",{children:"U"}),Object(N.jsx)("span",{children:"T"})]}),Object(N.jsxs)("div",{className:"about__paragraph",children:[Object(N.jsx)("div",{className:"about__paragraph-line",children:Object(N.jsx)("span",{children:"Whatever name or phrase you choose to use, coding / programming / software engineering / computer science, etc. I love it."})}),Object(N.jsx)("div",{className:"about__paragraph-line",children:Object(N.jsx)("span",{children:"I've always been interested in software development from a young age, game developing taking up most of my interest at the time. As the years grew, the more I started to get my hands dirty with coding and turning my ideas into real tangle products."})}),Object(N.jsx)("div",{className:"about__paragraph-line",children:Object(N.jsx)("span",{children:"The more I code, the more I crave learning more and developing my skills further. I aim to be the best that I can be and stand among the top computer scientist in the world. To achieve these goals, I work hard every day and I enjoy every moment of it."})}),Object(N.jsx)("div",{className:"about__paragraph-line",children:Object(N.jsx)("span",{children:"I am adaptive and work fast. Slowing others down and / or being unreliable isn't who I am. I always aim to exceed expectations. By improving my skills daily, I learn new ways that I can increase the quality and quantity of the work I do and hold true to my words."})}),Object(N.jsx)("div",{className:"about__paragraph-line",children:Object(N.jsx)("span",{children:"I have strong JS fundamentals and have experience in React, Node, MongoDB, SQL, etc. I am also currently learning C# and .NET 5 and I\u2019m always improving my skills in other areas so I that I\u2019ll be able to tackle any problem thrown my way."})})]})]})},V=function(){w.a.registerPlugin(I.a);var e=Object(c.useRef)([]);e.current=[],Object(c.useEffect)((function(){e.current&&(w.a.set(e.current,{y:"100%",opacity:1}),w.a.to(e.current,{y:0,duration:1,stagger:.1,delay:2.8}))}),[]);var t=function(t){t&&!e.current.includes(t)&&e.current.push(t)};return Object(N.jsx)("nav",{className:"navbar",children:Object(N.jsx)("div",{className:"navbar__container",children:Object(N.jsxs)("ul",{className:"navbar__list",children:[Object(N.jsx)("li",{className:"navbar__list-item",ref:t,children:Object(N.jsx)("a",{href:"#about",children:Object(N.jsx)("span",{children:"About"})})}),Object(N.jsx)("li",{className:"navbar__list-item",ref:t,children:Object(N.jsx)("a",{href:"#skills",children:Object(N.jsx)("span",{children:"Skills"})})}),Object(N.jsx)("li",{className:"navbar__list-item",ref:t,children:Object(N.jsx)("a",{href:"#projects",children:Object(N.jsx)("span",{children:"Projects"})})}),Object(N.jsx)("li",{className:"navbar__list-item",ref:t,children:Object(N.jsx)("a",{href:"#contact",children:Object(N.jsx)("span",{children:"Contact"})})})]})})})},R=function(){return Object(c.useEffect)((function(){var e=w.a.timeline(),t=document.querySelectorAll(".header__name-first-part"),i=document.querySelectorAll(".header__name-second-part span"),r=document.querySelectorAll(".header__title span"),n=document.querySelector("html"),a=document.querySelector(".header__right"),c=document.querySelectorAll(".header__cta"),s=document.querySelector("#last-name");n&&e.set(n,{overflow:"initial"}),t&&e.to(t,{clipPath:"polygon(0 0, 100% 0, 100% 100%, 0 100%)",duration:.8,delay:1}),s&&e.to(s,{marginLeft:0,delay:.5,duration:1.4,ease:"power4.inout"}),i&&(w.a.set(i,{y:200,skewY:20,visibility:"visible"}),e.to(i,{duration:1.8,y:0,ease:"power4.out",skewY:0},"-=1")),r&&(w.a.set(r,{y:200,skewY:20,visibility:"visible"}),e.to(r,{duration:1.8,y:0,ease:"power4.out",skewY:0},"-=1.8")),c&&(w.a.set(c,{y:200,skewY:20,visibility:"visible"}),e.to(c,{duration:1.8,y:0,ease:"power4.out",skewY:0},"-=1.8")),a&&e.to(a,{duration:1,scaleY:1,ease:"power4.inout"},"-=1.4"),n&&e.set(n,{overflow:"initial"})}),[]),Object(N.jsxs)("div",{className:"header__wrapper",children:[Object(N.jsx)(V,{}),Object(N.jsxs)("div",{className:"header__content",children:[Object(N.jsxs)("div",{className:"header__name",children:[Object(N.jsxs)("div",{className:"header__name-first",children:[Object(N.jsx)("div",{className:"header__name-first-part",children:"A"}),Object(N.jsx)("div",{className:"header__name-second-part",children:Object(N.jsx)("span",{children:"drian"})})]}),Object(N.jsxs)("div",{className:"header__name-last",id:"last-name",children:[Object(N.jsx)("div",{className:"header__name-first-part",children:"F"}),Object(N.jsx)("div",{className:"header__name-second-part",children:Object(N.jsx)("span",{children:"orde"})})]})]}),Object(N.jsx)("div",{className:"header__title",children:Object(N.jsx)("span",{children:"Full Stack Developer"})}),Object(N.jsx)("div",{className:"header__cta-container",children:Object(N.jsx)("button",{className:"header__cta",children:Object(N.jsx)("a",{href:"#projects",children:"Projects"})})})]}),Object(N.jsx)("div",{className:"header__left"}),Object(N.jsx)("div",{className:"header__right"})]})},M=function(){w.a.registerPlugin(I.a);var e=Object(c.useRef)(null),t=Object(c.useRef)(null),i=Object(c.useRef)(null),r=Object(c.useRef)(null);return Object(c.useEffect)((function(){if(e.current){var n=w.a.timeline({scrollTrigger:{trigger:e.current,start:"-5% top",end:"bottom center",toggleActions:"play reverse play reverse"}});t.current&&n.from(t.current,{y:200,ease:"power4.out",duration:1}),i.current&&n.from(i.current,{y:200,ease:"power4.out",duration:1},"-=0.9"),n.to(".contact__form-input-container",{y:0,opacity:1,duration:1,stagger:.1},"-=0.9"),r.current&&n.to(r.current,{y:0,opacity:1,duration:1,stagger:.1},"-=1")}}),[]),Object(N.jsxs)("section",{className:"contact__wrapper",ref:e,id:"contact",children:[Object(N.jsx)("div",{className:"contact__heading",children:Object(N.jsx)("span",{ref:t,children:"GET IN TOUCH"})}),Object(N.jsx)("div",{className:"contact__sub-heading",children:Object(N.jsx)("span",{ref:i,children:"Let's work together"})}),Object(N.jsxs)("form",{action:"https://formspree.io/xqkdklzv",method:"POST",className:"contact__form",children:[Object(N.jsxs)("div",{className:"contact__form-input-container",children:[Object(N.jsx)("label",{htmlFor:"name",children:"Name"}),Object(N.jsx)("input",{type:"text",name:"name",placeholder:"Name",required:!0})]}),Object(N.jsxs)("div",{className:"contact__form-input-container",children:[Object(N.jsx)("label",{htmlFor:"_replyto",children:"Email"}),Object(N.jsx)("input",{type:"email",name:"_replyto",placeholder:"Email",required:!0})]}),Object(N.jsxs)("div",{className:"contact__form-input-container",children:[Object(N.jsx)("label",{htmlFor:"message",children:"Message"}),Object(N.jsx)("textarea",{name:"message",id:"message",cols:30,rows:10,placeholder:"Message",required:!0})]}),Object(N.jsx)("button",{type:"submit",ref:r,children:"Send"})]})]})},B=function(e){return Object(N.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:e.classes,"aria-hidden":"true",focusable:"false",width:"1em",height:"1em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 16 16",children:Object(N.jsx)("g",{fill:"currentColor",children:Object(N.jsx)("path",{d:"M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248c-.015-.709-.52-1.248-1.342-1.248c-.822 0-1.359.54-1.359 1.248c0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586c.173-.431.568-.878 1.232-.878c.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252c-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"})})})},G=function(e){return Object(N.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:e.classes,"aria-hidden":"true",focusable:"false",width:"1em",height:"1em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24",children:Object(N.jsx)("g",{fill:"none",children:Object(N.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385c.6.105.825-.255.825-.57c0-.285-.015-1.23-.015-2.235c-3.015.555-3.795-.735-4.035-1.41c-.135-.345-.72-1.41-1.23-1.695c-.42-.225-1.02-.78-.015-.795c.945-.015 1.62.87 1.845 1.23c1.08 1.815 2.805 1.305 3.495.99c.105-.78.42-1.305.765-1.605c-2.67-.3-5.46-1.335-5.46-5.925c0-1.305.465-2.385 1.23-3.225c-.12-.3-.54-1.53.12-3.18c0 0 1.005-.315 3.3 1.23c.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23c.66 1.65.24 2.88.12 3.18c.765.84 1.23 1.905 1.23 3.225c0 4.605-2.805 5.625-5.475 5.925c.435.375.81 1.095.81 2.22c0 1.605-.015 2.895-.015 3.3c0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z",fill:"currentColor"})})})},F=function(){return Object(N.jsxs)("footer",{children:[Object(N.jsx)("h4",{children:"Adrian Forde"}),Object(N.jsxs)("div",{className:"footer__social",children:[Object(N.jsx)("a",{href:"https://www.linkedin.com/in/adrian-forde-969475197/",target:"_blank",rel:"noreferrer",children:Object(N.jsx)(B,{})}),Object(N.jsx)("a",{href:"https://github.com/Adrian-Forde-1",target:"_blank",rel:"noreferrer",children:Object(N.jsx)(G,{})})]})]})},D=function(){var e=Object(c.useRef)(null);return Object(N.jsxs)("main",{className:"wrapper wrapper--fd-col",id:"homepage",ref:e,children:[Object(N.jsx)(R,{}),Object(N.jsx)(C,{}),Object(N.jsx)(T,{homepageRef:e}),Object(N.jsx)(q,{}),Object(N.jsx)(M,{}),Object(N.jsx)(F,{})]})},Y=function(){return Object(N.jsx)("div",{className:"wrapper wrapper--fd-col wrapper--mh-100",id:"app",children:Object(N.jsx)(d.c,{children:Object(N.jsx)(d.a,{exact:!0,path:"/",component:D})})})},z=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,33)).then((function(t){var i=t.getCLS,r=t.getFID,n=t.getFCP,a=t.getLCP,c=t.getTTFB;i(e),r(e),n(e),a(e),c(e)}))},W=i(14);l.a.render(Object(N.jsx)(s.a.StrictMode,{children:Object(N.jsx)(W.a,{children:Object(N.jsx)(Y,{})})}),document.getElementById("root")),z()}},[[32,1,2]]]);
//# sourceMappingURL=main.a10f3cbe.chunk.js.map