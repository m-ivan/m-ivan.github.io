(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{88:function(e,t,n){},95:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),c=n(13),r=n.n(c),s=(n(88),n(19)),i=n(118),l=n(7),d=n(127),j=n(119),b=n(139),m=n(125),h=n(140),x=n(4),u=n(121),f=n(141),O=n(122),g=n(63),p=n.n(g),k=n(1),w=Object(i.a)((function(e){var t;return{root:{color:"#fff",padding:"0rem",backgroundColor:"#19171d",minHeight:"106vh"},welcomeText:{justifyContent:"center",alignSelf:"center",transform:"skewY(-3deg)"},button:(t={border:"2px solid #03c2c9",background:"transparent",width:"500px",borderRadius:"0%",transform:"skewY(3deg)",marginTop:"5vh"},Object(x.a)(t,e.breakpoints.down("xs"),{width:"70%",fontSize:"10pt"}),Object(x.a)(t,"transition","0.5s"),Object(x.a)(t,"color","#fff"),Object(x.a)(t,"&:hover",{backgroundColor:"#00000000",color:"#fff",border:"2px solid #d300c1"}),t),iconAnim:{transition:"0.5s",width:"30px",height:"30px",marginLeft:"0.5rem",transform:"rotate(90deg)"},icon:{width:"30px",height:"30px",marginLeft:"0.5rem"}}}));function y(e){var t=e.animation,n=e.headerSection,o=e.gotoAbout,c=w(),r=Object(a.useState)(!1),i=Object(s.a)(r,2),l=i[0],d=i[1];return Object(k.jsx)(j.a,{container:!0,className:c.root,ref:n,children:Object(k.jsxs)(j.a,{container:!0,className:c.welcomeText,children:[Object(k.jsx)(j.a,{item:!0,xs:12,children:Object(k.jsx)(u.a,{direction:"left",in:t,timeout:2e3,children:Object(k.jsx)(f.a,{children:Object(k.jsx)("h1",{className:"header accerleration",children:"Iv\xe1n Miragaya"})})})}),Object(k.jsxs)(j.a,{item:!0,xs:12,style:{transform:"skewY(4.5deg)",marginLeft:"5%"},children:[Object(k.jsx)(u.a,{direction:"right",in:t,timeout:2e3,children:Object(k.jsx)(f.a,{children:Object(k.jsx)("h2",{className:"sub-header accerleration",children:"Web Developer"})})})," "]}),Object(k.jsx)(u.a,{direction:"right",in:t,timeout:2e3,children:Object(k.jsxs)(f.a,{style:{width:"100%",justifyContent:"center",display:"flex"},children:[Object(k.jsxs)(O.a,{onMouseEnter:function(){return d(!0)},onMouseLeave:function(){return d(!1)},size:"large",href:"#about",variant:"outlined",onClick:o,classes:{root:c.button},children:["Mis trabajos",Object(k.jsx)(p.a,{className:l?c.iconAnim:c.icon})]})," "]})})]})})}var v=n(123),C=n(124),N=n(144),I=n(55),S=n.n(I),T=Object(i.a)((function(e){return{root:{alignItems:"center"},appbar:Object(x.a)({margin:0,position:"absolute",display:"flex",alignItems:"center",justifyContent:"center",top:"100vh",bottom:0,borderBottom:"3px solid #d300c1",backgroundColor:"#19171d",height:"60px",zIndex:1},e.breakpoints.down("sm"),{alignItems:"flex-start"}),appbarActive:Object(x.a)({flexGrow:1,margin:0,position:"fixed",alignItems:"center",justifyContent:"center",display:"flex",borderBottom:"3px solid #d300c1",backgroundColor:"#19171d",height:"60px",zIndex:10},e.breakpoints.down("sm"),{alignItems:"flex-start"}),button:{color:"#fff",position:"relative",transition:"0.5s","&: hover":{color:"#d300c1"}},active:{color:"#ff9100"},icon:{marginRight:"5px",color:"#8600d3"},menu:{color:"#ff9100",width:"2rem",height:"2rem"}}}));function R(e){var t=e.gotoHeader,n=e.gotoAbout,o=e.gotoFolio,c=e.gotoContact,r=e.handleCallback,i=e.about,l=T(),d=Object(a.useState)(!1),b=Object(s.a)(d,2),h=b[0],x=b[1];return window.addEventListener("scroll",(function(){window.scrollY>=.95*i.current.offsetTop?x(!0):x(!1)})),Object(k.jsxs)(j.a,{container:!0,className:l.root,justify:"center",children:[h?Object(k.jsx)(u.a,{direciton:"down",timeout:700,in:h,children:Object(k.jsx)(v.a,{className:l.appbarActive,elevation:0,children:Object(k.jsxs)(C.a,{children:[Object(k.jsx)(N.a,{mdUp:!0,children:Object(k.jsx)(m.a,{onClick:function(){return r()},edge:"start",color:"inherit","aria-label":"menu",children:Object(k.jsx)(S.a,{className:l.menu})})}),Object(k.jsxs)(N.a,{smDown:!0,children:[Object(k.jsx)(O.a,{href:"#header",onClick:t,className:l.button,children:"Inicio"})," ",Object(k.jsx)(O.a,{href:"#aboutme",onClick:n,className:l.button,children:"Sobre m\xed"})," ",Object(k.jsxs)(O.a,{href:"#portafolio",onClick:o,className:l.button,children:[" ","Portafolio"]})," ",Object(k.jsxs)(O.a,{href:"#contacto",onClick:c,className:l.button,children:[" ","Contacto"]})]})]})})}):Object(k.jsx)(v.a,{className:l.appbar,elevation:0,children:Object(k.jsxs)(C.a,{children:[Object(k.jsxs)(N.a,{mdUp:!0,children:[Object(k.jsx)(m.a,{onClick:function(){return r()},edge:"start",color:"inherit","aria-label":"menu",children:Object(k.jsx)(S.a,{className:l.menu})})," "]}),Object(k.jsxs)(N.a,{smDown:!0,children:[Object(k.jsxs)(O.a,{href:"#header",onClick:t,className:l.button,children:[" ","Inicio"]})," ",Object(k.jsxs)(O.a,{href:"#aboutme",onClick:n,className:l.button,children:[" ","Sobre m\xed"]})," ",Object(k.jsxs)(O.a,{href:"#portafolio",onClick:o,className:l.button,children:[" ","Portafolio"]})," ",Object(k.jsxs)(O.a,{href:"#contacto",onClick:c,className:l.button,children:[" ","Contacto"]})," "]})]})})," "]})}var z=n(8),B=n(65),A=n.n(B),M=n(67),D=n.n(M),P=n(66),L=n.n(P),E=n(64),Y=n.n(E),U=n(126),W=n(68),F=n.n(W),q=Object(l.a)((function(e){return{root:{height:25},colorPrimary:{backgroundColor:e.palette.grey["light"===e.palette.type?400:700]},bar:{backgroundImage:"linear-gradient(to right, #a000c0, #a000c0, #a000c0, #ff9100)"}}}))(U.a),H=Object(i.a)((function(e){return{root:{background:"none",backgroundColor:"#f3f3f3",color:"#2e2e2e",minHeight:"100vh"},aboutme:Object(x.a)({padding:"1rem 20% 1rem 20%",justifyContent:"center"},e.breakpoints.down("md"),{padding:"1rem 10% 1rem 10%"}),descriptionText:{fontSize:"1.2rem",color:"#3d3d3d",padding:"0 0rem 2rem 0",textAlign:"center"},title:{fontWeight:"600",padding:"1rem 0 1rem 0",textAlign:"center",textTransform:"uppercase",display:"inline-block",textDecoration:"none",backgroundImage:"radial-gradient(circle, #ff9100, #d31ec0)",backgroundPosition:"bottom center",backgroundRepeat:"no-repeat",backgroundSize:"35% 3px",transition:"background-size .5s ease","&:hover":{backgroundSize:"100% 3px"}},subtitleColor:{color:"#d300c1"},avatar:{width:"100%",height:"100%",maxWidth:"270px",maxHeight:"270px",marginTop:"2rem"},skillArea:{marginTop:"3rem"},skillText:{textAlign:"center",fontSize:"1.1rem"},skillIcon:{paddingTop:"2.5px",color:"#fff",width:"50%",height:"50%"},progressBox:{display:"flex",width:"100%",color:"#fff",fontWeight:"bold",height:26,borderRadius:"0.15rem",backgroundColor:"#d300c1",justifyContent:"center",alignItems:"center"},button:{border:"2px solid #d300c1",transition:"0.6s",borderRadius:"0%",fontWeight:600,color:"#3c3c3c",width:"100%","&:hover":{backgroundColor:"#d300c1",color:"#fff"}}}}));function J(e){var t=e.progress;return Object(k.jsxs)(f.a,{display:"flex",alignItems:"center",children:[Object(k.jsx)(f.a,{width:"100%",mr:1,children:Object(k.jsx)(q,{variant:"determinate",value:t})}),Object(k.jsx)(f.a,{minWidth:35,children:Object(k.jsxs)("h3",{style:{fontFamily:"Work Sans"},children:[t,"%"]})})]})}function X(e){var t=e.animation,n=e.aboutSection,a=H();return Object(k.jsxs)(j.a,{container:!0,className:a.root,justify:"center",ref:n,children:[Object(k.jsxs)(j.a,{container:!0,className:a.aboutme,children:[Object(k.jsxs)(j.a,{item:!0,xs:12,children:[Object(k.jsx)(u.a,Object(z.a)(Object(z.a)({direction:"left",in:t},t?{timeout:1e3}:{}),{},{children:Object(k.jsx)(j.a,{container:!0,justify:"center",alignItems:"center",children:Object(k.jsx)("h1",{className:a.title,children:"Sobre m\xed"})})})),Object(k.jsx)(j.a,{item:!0,xs:12,children:Object(k.jsxs)(j.a,{container:!0,className:a.skillArea,children:[Object(k.jsx)(j.a,{item:!0,xs:6,lg:3,children:Object(k.jsx)(u.a,Object(z.a)(Object(z.a)({direction:"right",in:t},t?{timeout:1e3}:{}),{},{children:Object(k.jsxs)(j.a,{container:!0,alignItems:"center",direction:"column",children:[Object(k.jsx)(j.a,{className:"hexagon-skill",children:Object(k.jsx)(j.a,{container:!0,justify:"center",alignItems:"center",children:Object(k.jsx)(Y.a,{className:a.skillIcon})})}),Object(k.jsx)("h2",{children:"Clean Coder"}),Object(k.jsxs)("p",{className:a.skillText,children:["Fiel a las revisiones de c\xf3digo. ",Object(k.jsx)("br",{}),"Es escencial dejar todo lo mas facil de entender posible."]})]})}))}),Object(k.jsx)(j.a,{item:!0,xs:6,lg:3,children:Object(k.jsx)(u.a,Object(z.a)(Object(z.a)({direction:"right",in:t},t?{timeout:1e3}:{}),{},{children:Object(k.jsxs)(j.a,{container:!0,alignItems:"center",direction:"column",children:[Object(k.jsx)(j.a,{className:"hexagon-skill",children:Object(k.jsx)(j.a,{container:!0,justify:"center",alignItems:"center",children:Object(k.jsx)(A.a,{className:a.skillIcon})})}),Object(k.jsx)("h2",{style:{textAlign:"center"},children:"Mentalidad Win/Win"}),Object(k.jsxs)("p",{className:a.skillText,children:["Se profundiza lo que se sabe.",Object(k.jsx)("br",{}),"Y lo que no, se aprende."]})]})}))})," ",Object(k.jsx)(j.a,{item:!0,xs:6,lg:3,children:Object(k.jsx)(u.a,Object(z.a)(Object(z.a)({direction:"right",in:t},t?{timeout:1e3}:{}),{},{children:Object(k.jsxs)(j.a,{container:!0,alignItems:"center",direction:"column",children:[Object(k.jsx)(j.a,{className:"hexagon-skill",children:Object(k.jsx)(j.a,{container:!0,justify:"center",alignItems:"center",children:Object(k.jsx)(L.a,{className:a.skillIcon})})}),Object(k.jsx)("h2",{children:"Intuici\xf3n"}),Object(k.jsxs)("p",{className:a.skillText,children:["Partidario de la filosof\xeda UX: ",Object(k.jsx)("br",{}),"cuanto mas facil de usar, mejor."]})]})}))})," ",Object(k.jsx)(j.a,{item:!0,xs:6,lg:3,children:Object(k.jsx)(u.a,Object(z.a)(Object(z.a)({direction:"right",in:t},t?{timeout:1e3}:{}),{},{children:Object(k.jsxs)(j.a,{container:!0,alignItems:"center",direction:"column",children:[Object(k.jsx)(j.a,{className:"hexagon-skill",children:Object(k.jsx)(j.a,{container:!0,justify:"center",alignItems:"center",children:Object(k.jsx)(D.a,{className:a.skillIcon})})}),Object(k.jsx)("h2",{children:"Dedicaci\xf3n"}),Object(k.jsx)("p",{className:a.skillText,children:"En constante aprendizaje para mejorarme a mi mismo cada dia."})]})}))}),Object(k.jsx)(j.a,{item:!0,xs:12,lg:6,children:Object(k.jsx)(u.a,Object(z.a)(Object(z.a)({direction:"right",in:t},t?{timeout:1e3}:{}),{},{children:Object(k.jsxs)(j.a,{container:!0,justify:"center",alignItems:"center",direction:"column",children:[Object(k.jsxs)("div",{className:"hexagon",children:[Object(k.jsx)("div",{class:"hexTop"}),Object(k.jsx)("div",{class:"hexBottom"})]}),Object(k.jsxs)(j.a,{item:!0,xs:12,lg:9,className:a.descriptionText,children:[Object(k.jsx)("h3",{children:"\xbfQui\xe9n soy?"}),Object(k.jsx)("p",{className:a.skillText,children:"Soy un web developer de 21 a\xf1os con gran pasi\xf3n por la creaci\xf3n de aplicaciones funcionales y din\xe1micas. Me gustan los desafios por lo que busco siempre superarme dando lo mejor de m\xed en cada situaci\xf3n."})," ",Object(k.jsxs)(O.a,{href:"/cv/CV2.pdf",className:a.button,download:!0,children:[Object(k.jsx)(F.a,{}),Object(k.jsx)(N.a,{smDown:!0,children:"Descargar"})," CV"]})]})]})}))}),Object(k.jsx)(u.a,Object(z.a)(Object(z.a)({direction:"left",in:t},t?{timeout:1e3}:{}),{},{children:Object(k.jsxs)(j.a,{item:!0,xs:12,lg:6,style:{alignSelf:"center"},children:[Object(k.jsxs)(j.a,{container:!0,alignItems:"center",children:[Object(k.jsx)(j.a,{item:!0,xs:2,className:a.progressBox,children:"HTML"}),Object(k.jsx)(j.a,{item:!0,xs:10,children:Object(k.jsx)(J,{progress:80})})]}),Object(k.jsxs)(j.a,{container:!0,alignItems:"center",children:[Object(k.jsx)(j.a,{item:!0,xs:2,className:a.progressBox,children:"CSS"}),Object(k.jsx)(j.a,{item:!0,xs:10,children:Object(k.jsx)(J,{progress:80})})]}),Object(k.jsxs)(j.a,{container:!0,alignItems:"center",children:[Object(k.jsxs)(j.a,{item:!0,xs:2,className:a.progressBox,children:[Object(k.jsx)(N.a,{smDown:!0,children:"JavaScript"}),Object(k.jsx)(N.a,{mdUp:!0,children:"JS"})]}),Object(k.jsx)(j.a,{item:!0,xs:10,children:Object(k.jsx)(J,{progress:80})})]})," ",Object(k.jsxs)(j.a,{container:!0,alignItems:"center",children:[Object(k.jsx)(j.a,{item:!0,xs:2,className:a.progressBox,children:"React"}),Object(k.jsx)(j.a,{item:!0,xs:10,children:Object(k.jsx)(J,{progress:90})})]})," ",Object(k.jsxs)(j.a,{container:!0,alignItems:"center",children:[Object(k.jsx)(j.a,{item:!0,xs:2,className:a.progressBox,children:"NodeJS"}),Object(k.jsx)(j.a,{item:!0,xs:10,children:Object(k.jsx)(J,{progress:50})})]})," ",Object(k.jsxs)(j.a,{container:!0,alignItems:"center",children:[Object(k.jsxs)(j.a,{item:!0,xs:2,className:a.progressBox,children:[Object(k.jsx)(N.a,{smDown:!0,children:"Dise\xf1o UI"}),Object(k.jsx)(N.a,{mdUp:!0,children:"UI"})]}),Object(k.jsx)(j.a,{item:!0,xs:10,children:Object(k.jsx)(J,{progress:70})})]})," ",Object(k.jsxs)(j.a,{container:!0,alignItems:"center",children:[Object(k.jsxs)(j.a,{item:!0,xs:2,className:a.progressBox,children:[Object(k.jsx)(N.a,{smDown:!0,children:"PhotoShop"}),Object(k.jsx)(N.a,{mdUp:!0,children:"Ps"})]}),Object(k.jsx)(j.a,{item:!0,xs:10,children:Object(k.jsx)(J,{progress:60})})]})," ",Object(k.jsxs)(j.a,{container:!0,alignItems:"center",children:[Object(k.jsxs)(j.a,{item:!0,xs:2,className:a.progressBox,children:[Object(k.jsx)(N.a,{smDown:!0,children:"Deployment"}),Object(k.jsx)(N.a,{mdUp:!0,children:"Deploy"})]}),Object(k.jsx)(j.a,{item:!0,xs:10,children:Object(k.jsx)(J,{progress:40})})]})," ",Object(k.jsxs)(j.a,{container:!0,alignItems:"center",children:[Object(k.jsx)(j.a,{item:!0,xs:2,className:a.progressBox,children:"DevOps"}),Object(k.jsx)(j.a,{item:!0,xs:10,children:Object(k.jsx)(J,{progress:30})})]})," "]})}))]})})," "]})," "]})," "]})}var V=Object(i.a)((function(e){return{root:{backgroundColor:"#19171df9",border:"3px solid #d300c1",color:"#fff",position:"fixed",height:"100%",width:"100%",zIndex:100}}}));function $(e){var t=V();return Object(k.jsx)(j.a,{container:!0,className:t.root})}var G=n(134),Q=n(135),K=n(130),Z=n(128),_=n(133),ee=n(136),te=n(142),ne=n(69),ae=n.n(ne),oe=n(51),ce=n.n(oe),re=n(70),se=n.n(re),ie=n(129),le=n(131),de=n(132),je=Object(l.a)((function(e){return{root:{height:25,fontFamily:"Raleway"}}}))(d.a),be=Object(i.a)((function(e){var t,n,a;return{root:{width:"100%",height:"100%",color:"#fff",backgroundColor:"transparent",borderRadius:"0"},nameBox:{textAlign:"center",marginBottom:"2rem"},nombre:Object(x.a)({fontSize:"2rem",fontWeight:"bolder"},e.breakpoints.down("sm"),{fontSize:"15pt"}),tecnologias:Object(x.a)({fontSize:"1.2rem",color:"#ff0080"},e.breakpoints.down("sm"),{fontSize:"10pt"}),detailsBox:{height:300,display:"flex",alignItems:"center"},button:Object(x.a)({width:"60%",marginTop:"3rem",border:"2px solid #ff0080",borderRadius:"0%",color:"#fff",padding:"0.4rem 2rem 0.4rem 2rem ","&:hover":{backgroundColor:"#ff0080"}},e.breakpoints.down("sm"),{fontSize:"0pt"}),boxLeft:{position:"relative",height:"50%",width:"20%",right:"0%"},modal:Object(x.a)({borderRadius:"1rem",position:"absolute",width:"90%",height:"67%",backgroundColor:"#fff",boxShadow:e.shadows[24],top:"13%",left:"5%",transform:"translate(-50, -50%)"},e.breakpoints.down("md"),{overflow:"scroll",width:"100%",height:"100%",top:"0%",left:"0%"}),close:Object(x.a)({position:"absolute",top:"5px",right:"1%",width:"50px",height:"50px",zIndex:100},e.breakpoints.down("sm"),{color:"#000",backgroundColor:"#ffffff40","&:hover":{backgroundColor:"#ffffff80"}}),img:Object(x.a)({height:"100%",display:"flex",padding:"1rem",transition:"1s"},e.breakpoints.down("sm"),{alignItems:"flex-end"}),modalBtn:(t={backgroundColor:"#ff9100",position:"relative",justifySelf:"center",bottom:"0px",borderRadius:"0%",color:"#fff",fontWeight:"bold",padding:"0.4rem 2rem 0.4rem 2rem ","&:hover":{backgroundColor:"#fff",color:"#3f3f3f"}},Object(x.a)(t,e.breakpoints.down("sm"),{fontSize:"0",padding:"0.4rem 1rem 0.4rem 1rem "}),Object(x.a)(t,"&:not(:last-child)",{marginRight:"10px"}),t),back:(n={boxShadow:e.shadows[7]},Object(x.a)(n,e.breakpoints.down("md"),{color:"#d300c1",top:"0%",height:"100%",borderRadius:"0%",marginLeft:"0rem",boxShadow:"0 0",backgroundColor:"transparent","&:hover":{backgroundColor:"transparent"}}),Object(x.a)(n,"marginLeft","1rem"),Object(x.a)(n,"position","relative"),Object(x.a)(n,"backgroundColor","#fff"),Object(x.a)(n,"transition","0.6s"),Object(x.a)(n,"width","50px"),Object(x.a)(n,"height","50px"),Object(x.a)(n,"top","50%"),Object(x.a)(n,"left","0%"),Object(x.a)(n,"color","#d300c1"),Object(x.a)(n,"zIndex",10),Object(x.a)(n,e.breakpoints.up("lg"),{"&:hover":{backgroundColor:"#d300c1",color:"#fff"}}),n),forward:(a={boxShadow:e.shadows[7]},Object(x.a)(a,e.breakpoints.down("md"),{color:"#d300c1",top:"0%",borderRadius:"0%",height:"100%",marginRight:"0rem",boxShadow:"0 0",backgroundColor:"transparent","&:hover":{backgroundColor:"transparent"}}),Object(x.a)(a,"marginRight","1rem"),Object(x.a)(a,"position","relative"),Object(x.a)(a,"backgroundColor","#fff"),Object(x.a)(a,"transition","0.6s"),Object(x.a)(a,"width","50px"),Object(x.a)(a,"height","50px"),Object(x.a)(a,"right","0%"),Object(x.a)(a,"color","#d300c1"),Object(x.a)(a,"zIndex",10),Object(x.a)(a,"top","50%"),Object(x.a)(a,e.breakpoints.up("lg"),{position:"relative","&:hover":{backgroundColor:"#d300c1",color:"#fff"}}),a)}}));function me(e){var t=e.nombre,n=e.tecnologias,o=e.descripcion,c=e.img,r=e.appType,i=e.githubRepo,l=e.demoUrl,d=e.animation,b=be(),h=Object(a.useState)(!1),x=Object(s.a)(h,2),g=x[0],p=x[1],w=Object(a.useState)(!1),y=Object(s.a)(w,2),v=y[0],C=y[1],N=Object(a.useState)(0),I=Object(s.a)(N,2),S=I[0],T=I[1],R=c.images;console.log("current",S);var z=Object(k.jsx)(Z.a,{in:v,timeout:400,children:Object(k.jsxs)(j.a,{container:!0,justify:"center",className:b.modal,children:[Object(k.jsx)(m.a,{className:b.close,onClick:function(){return C(!v)},children:Object(k.jsx)(ie.a,{})}),Object(k.jsx)(j.a,{item:!0,xs:12,md:9,children:Object(k.jsx)(K.a,{component:"div",alt:"Project 2",image:R[S],title:"Project 2",className:b.img,children:Object(k.jsxs)(j.a,{container:!0,style:{height:"100%"},children:[R.length>1&&Object(k.jsxs)(j.a,{container:!0,justify:"space-between",style:{height:"90%"},children:[Object(k.jsx)(m.a,{onClick:function(){T(S-1),S<=0&&T(R.length-1)},className:b.back,children:Object(k.jsx)(le.a,{})}),Object(k.jsx)(m.a,{onClick:function(){T(S+1),S>=R.length-1&&T(0)},className:b.forward,children:Object(k.jsx)(de.a,{})})]}),Object(k.jsxs)(j.a,{container:!0,alignItems:"flex-end",justify:"flex-end",children:[Object(k.jsxs)(O.a,{href:l,className:b.modalBtn,children:["Demo",Object(k.jsx)(ae.a,{})]}),Object(k.jsxs)(O.a,{href:i,className:b.modalBtn,children:["Repo",Object(k.jsx)(ce.a,{})]})]})]})})}),Object(k.jsxs)(j.a,{item:!0,xs:12,md:3,style:{padding:"2rem"},children:[Object(k.jsx)(je,{variant:"h4",gutterBottom:!0,className:b.nombre,children:t}),Object(k.jsx)(je,{variant:"subtitle1",color:"textSecondary",gutterBottom:!0,style:{fontWeight:600,textTransform:"uppercase",alignSelf:"flex-start"},children:r}),Object(k.jsx)(_.a,{}),Object(k.jsx)(je,{variant:"body1",children:o})]})]})});return Object(k.jsx)(Z.a,{in:d,children:Object(k.jsxs)(j.a,{container:!0,children:[Object(k.jsx)(G.a,{elevation:0,onMouseEnter:function(){return p(!0)},onMouseLeave:function(){return p(!1)},className:b.root,children:g?Object(k.jsx)(ee.a,{in:g,timeout:800,children:Object(k.jsx)(j.a,{container:!0,className:b.detailsBox,children:Object(k.jsxs)(j.a,{item:!0,xs:12,children:[Object(k.jsxs)(f.a,{className:b.nameBox,children:[Object(k.jsx)("span",{className:b.nombre,children:t})," ",Object(k.jsx)("br",{}),Object(k.jsx)("span",{className:b.tecnologias,children:n})]}),Object(k.jsx)(j.a,{container:!0,justify:"center",children:Object(k.jsxs)(O.a,{onClick:function(){return C(!0)},classes:{root:b.button},children:["M\xe1s Info ",Object(k.jsx)(se.a,{})]})})]})})}):Object(k.jsx)(u.a,{direction:"up",in:!g,timeout:500,children:Object(k.jsx)(Q.a,{onClick:function(){return p(!0)},children:Object(k.jsx)(K.a,{component:"img",alt:t,height:"300",width:"400",image:R?R[0]:null,title:t})})})}),Object(k.jsx)(te.a,{open:v,onClose:function(){return C(!1)},children:z})]})})}var he=[{bullsOn:{images:["/assets/proyects/bullsOn/bullsOn.png","/assets/proyects/bullsOn/bullsOn1.png","/assets/proyects/bullsOn/bullsOn2.png","/assets/proyects/bullsOn/bullsOn3.png","/assets/proyects/bullsOn/bullsOn4.png","/assets/proyects/bullsOn/bullsOn5.png","/assets/proyects/bullsOn/bullsOn6.png","/assets/proyects/bullsOn/bullsOn7.png"]},buscador:{images:["/assets/proyects/buscador/buscadorPasajes.png"]},amLibre:{images:["/assets/proyects/e-commerce/E-commerce.png"]},restaurante:{images:["/assets/proyects/restaurante/reactstaurante.png","/assets/proyects/restaurante/reactstaurante 2.png"]}}],xe=Object(i.a)((function(e){return{root:{background:"none",backgroundColor:"#3f3f3f",color:"#fff",minHeight:"100vh",fontFamily:"Work Sans"},portafolio:{padding:"1rem 10% 1rem 10%",justifyContent:"center"},title:{fontWeight:"600",padding:"2rem 0 1rem 0",textAlign:"center",textTransform:"uppercase",display:"inline-block",textDecoration:"none",backgroundImage:"radial-gradient(circle, #ff9100, #d31ec0)",backgroundPosition:"bottom center",backgroundRepeat:"no-repeat",backgroundSize:"35% 3px",transition:"background-size .5s ease","&:hover":{backgroundSize:"100% 3px"}},subtitleColor:{color:"#d300c1"},proyectArea:{width:"80%",marginTop:"5rem",display:"flex",alignItems:"center",justifyContent:""},proyectAreaBox:{alignItems:"center",display:"flex",justifyContent:"center"}}}));function ue(e){var t=e.animation,n=e.folioSection,a=xe(),o=he[0].bullsOn,c=he[0].buscador,r=he[0].amLibre,s=he[0].restaurante;return Object(k.jsx)(j.a,{container:!0,className:a.root,justify:"center",ref:n,children:Object(k.jsxs)(j.a,{container:!0,className:a.portafolio,children:[Object(k.jsx)(N.a,{mdUp:!0,children:Object(k.jsx)($,{})}),Object(k.jsx)(j.a,{item:!0,xs:12,children:Object(k.jsx)(u.a,Object(z.a)(Object(z.a)({direction:"left",in:t},t?{timeout:1e3}:{}),{},{children:Object(k.jsx)(j.a,{container:!0,justify:"center",alignItems:"center",children:Object(k.jsx)("h1",{className:a.title,children:"Proyectos"})})}))}),Object(k.jsxs)(j.a,{item:!0,xs:12,id:"portfolioArea",className:a.proyectAreaBox,children:[Object(k.jsxs)(j.a,{container:!0,className:a.proyectArea,children:[Object(k.jsx)(j.a,{item:!0,xs:12,md:6,children:Object(k.jsx)(me,{animation:t,nombre:"BullsOn",img:o,tecnologias:"React (M-UI) / MongoDB / Express",descripcion:"Bulls On es una red social fully responsive que aunque  sigue en desarrollo, ya posee las principales funcionalidades  que una red social debe tener, permite a los usuarios registrarse y logearse, dar like, repostear post de otros usuarios y comentarlos, entre otras cosas.",githubRepo:"https://github.com/M-Ivan/BullsOn",demoUrl:"https://bullson.herokuapp.com",appType:"Red social"})}),Object(k.jsx)(j.a,{item:!0,xs:12,md:6,children:Object(k.jsx)(me,{animation:t,nombre:"Buscador de pasajes",img:c,tecnologias:"React (M-UI) / MongoDB / Express",descripcion:"Proyecto que hace request a una API REST y devuelve una lista de pasajes que cumplan con los requisitos solicitados.",githubRepo:"https://github.com/M-Ivan/Buscador-de-pasajes",demoUrl:"https://buscadorpasajes.herokuapp.com/",appType:"Consumo de API REST"})}),Object(k.jsxs)(j.a,{item:!0,xs:12,md:6,children:[Object(k.jsx)(me,{animation:t,nombre:"AmLibre",img:r,tecnologias:"React / MongoDB / Express",descripcion:"AmLibre es un E-Commerce completamente funcional y hecho a semejanza de Amazon y Mercado Libre, acepta pagos con PayPal, ofrece seguimiento de ordenes y dashoard del admin y vendedor. Entre otras cosas.",githubRepo:"https://github.com/M-Ivan/E-Commerce",demoUrl:"https://amlibre.herokuapp.com",appType:"E-Commerce"})," "]}),Object(k.jsx)(j.a,{item:!0,xs:12,md:6,children:Object(k.jsx)(me,{animation:t,nombre:"Reactstaurante",img:s,tecnologias:"React (ReactStrap) / MongoDB / Express",descripcion:"Aplicaci\xf3n con backend incluido que ofrece un menu, configuracion, lista de platos y dem\xe1s a los usuarios en una sola pagina, ya que se trata de una SPA.",githubRepo:"https://github.com/M-Ivan/Restaurante",demoUrl:"https://reactstaurant.herokuapp.com",appType:"Restaurante"})})]})," "]})," "]})})}var fe=n(137),Oe=n(73),ge=n.n(Oe),pe=n(71),ke=n.n(pe),we=n(72),ye=n.n(we),ve=n(138),Ce=Object(i.a)((function(e){return{root:{backgroundColor:"#1b1b1b",color:"#fff",minHeight:"100vh"},contact:{height:"60vh",backgroundColor:"#1a1a1a",display:"flex",textAlign:"center",justifyContent:"center",padding:"0 2rem"},title:{fontWeight:"600",zIndex:1,padding:"1rem",textAlign:"center",textTransform:"uppercase",display:"inline-block",textDecoration:"none",backgroundImage:"radial-gradient(circle, #ff9100, #d31ec0)",backgroundPosition:"bottom center",backgroundRepeat:"no-repeat",backgroundSize:"35% 3px",transition:"background-size .5s ease","&:hover":{backgroundSize:"80% 3px"}},subtitle:Object(x.a)({color:"#00d4db",fontWeight:600},e.breakpoints.down("sm"),{fontSize:"12pt"}),button:Object(x.a)({width:"50%",border:"2px solid #03c2c9",borderRadius:"0%",color:"#fff",padding:"1rem",fontSize:"1rem",transition:"0.6s","&:hover":{backgroundColor:"#03c2c9",color:"#1b1b1b",fontWeight:600}},e.breakpoints.down("sm"),{width:"100%",fontSize:"10pt"}),contactLink:Object(x.a)({textDecoration:"none",color:"#fff",fontSize:"1.5rem",transition:"0.6s","&:hover":{color:"#ff9100"}},e.breakpoints.down("sm"),{fontSize:"10pt"}),detail1:{backgroundColor:"#d31ec0",height:"80px",transform:"skewY(-5deg)",textAlign:"center",marginBottom:"3rem"},detail2:{display:"flex",alignItems:"center",backgroundColor:"#d31ec0",transform:"skewY(5deg)",height:"40px",textAlign:"center",width:"100%",marginTop:"3rem"},detailText:{textShadow:"0 0 8px #000"},detail3:{position:"absolute",backgroundColor:"#3f3f3f",height:"40px",transform:"skewY(5deg)",textAlign:"center",alignItems:"center",justifyContent:"center"},detail4:{position:"absolute",backgroundColor:"#3f3f3f",height:"40px",transform:"skewY(-5deg)",textAlign:"center",alignItems:"center",justifyContent:"center"},detailText1:{fontSize:"1.5rem",marginBottom:"1rem"},typeIcon:{color:"#808080"},footer:{height:"15vh",alignItems:"center",justifyContent:"center",backgroundColor:"#19171d"},mediaButton:Object(x.a)({width:"55px",height:"55px",backgroundColor:"#272727",color:"#fff",margin:"0 1vw 0 1vw ",borderRadius:"0%","&:hover":{color:"#fff",backgroundColor:"#03c2c9"}},e.breakpoints.down("sm"),{width:"40px",height:"40px"}),icon:{width:"30px",height:"30px",transition:"1s"},watermark:Object(x.a)({display:"flex",justifyContent:"center",textAlign:"center",color:"#acacac",fontSize:"1.2rem",textTransform:"uppercase"},e.breakpoints.down("sm"),{fontSize:"8pt"}),watermarkColor:{color:"#d300c1"},card:Object(x.a)({borderRadius:"0%",height:"12vh",justifyContent:"center",alignItems:"center",width:"50%",backgroundColor:"#1e242c",color:"#fff"},e.breakpoints.down("sm"),{width:"100%"}),available:Object(x.a)({fontSize:"15pt",textTransform:"uppercase",letterSpacing:"2px"},e.breakpoints.down("sm"),{fontSize:"10pt"}),cardText:Object(x.a)({},e.breakpoints.down("sm"),{fontSize:"11pt"})}}));function Ne(e){var t=e.animation,n=e.contactSection,a=Ce(),o=["Disponible Full-Time","Solo Part-Time","No disponible"],c=o[1];return Object(k.jsxs)(j.a,{container:!0,alignItems:"flex-end",className:a.root,ref:n,children:[Object(k.jsx)(Z.a,Object(z.a)(Object(z.a)({in:t},t?{timeout:1e3}:{}),{},{children:Object(k.jsx)(j.a,{container:!0,justify:"center",alignItems:"center",children:Object(k.jsx)("h1",{className:a.title,children:"Contacto"})})})),Object(k.jsxs)(j.a,{container:!0,className:a.contact,children:[Object(k.jsx)(Z.a,Object(z.a)(Object(z.a)({in:t},t?{timeout:1e3}:{}),{},{children:Object(k.jsxs)(j.a,{container:!0,elevation:0,className:a.card,children:[Object(k.jsx)(j.a,{item:!0,xs:12,children:Object(k.jsxs)(Me,{variant:"h6",className:a.cardText,children:[" ","En este momento me encuentro:"]})}),Object(k.jsxs)(j.a,{item:!0,xs:12,children:[Object(k.jsxs)(Me,{variant:"subtitle1",children:[Object(k.jsx)("strong",{className:a.available,style:c===o[0]?{color:"#00b62e"}:c===o[1]?{color:"#ffbb00"}:{color:"#ff0000"},children:c})," "]})," "]})]})})),Object(k.jsx)(u.a,Object(z.a)(Object(z.a)({direction:"left",in:t},t?{timeout:1e3}:{}),{},{children:Object(k.jsx)(j.a,{item:!0,xs:12,children:Object(k.jsx)(Me,{variant:"h4",className:a.subtitle,children:"Ten\xe9s una consulta o quer\xe9s que trabajemos juntos?"})})})),Object(k.jsx)(j.a,{item:!0,xs:12,lg:3,children:Object(k.jsxs)(fe.a,Object(z.a)(Object(z.a)({in:t},t?{timeout:1e3}:{}),{},{children:[Object(k.jsx)(ke.a,{className:a.typeIcon})," ",Object(k.jsx)(Me,{variant:"subtitle1",component:"h2",children:Object(k.jsx)("a",{id:"mail",className:a.contactLink,href:"mailto:MiragayaIvan@hotmail.com",children:Object(k.jsx)("strong",{children:"MiragayaIvan@hotmail.com"})})})]}))}),Object(k.jsx)(j.a,{item:!0,xs:12,lg:3,children:Object(k.jsxs)(fe.a,Object(z.a)(Object(z.a)({in:t},t?{timeout:1e3}:{}),{},{children:[Object(k.jsx)(ye.a,{className:a.typeIcon}),Object(k.jsxs)(d.a,{variant:"subtitle1",component:"h3",children:[Object(k.jsxs)("a",{className:a.contactLink,href:"tel:+541127677832",children:[Object(k.jsx)("strong",{children:"11-2767-7832"})," "]})," "]})," "]}))}),Object(k.jsx)(u.a,Object(z.a)(Object(z.a)({direction:"right",in:t},t?{timeout:1e3}:{}),{},{children:Object(k.jsx)(j.a,{item:!0,xs:12,children:Object(k.jsxs)(O.a,{href:"mailto:MiragayaIvan@hotmail.com",classes:{root:a.button},children:["Creemos algo increible"," ",Object(k.jsx)(ve.a,{style:{marginLeft:"1vw"}})]})})}))]}),Object(k.jsxs)(j.a,{container:!0,className:a.footer,children:[Object(k.jsxs)(m.a,{href:"https://www.linkedin.com/in/miragaya-ivan/",className:a.mediaButton,children:[" ",Object(k.jsx)(ge.a,{className:a.icon})]})," ",Object(k.jsx)(m.a,{href:"https://github.com/m-ivan",className:a.mediaButton,children:Object(k.jsx)(ce.a,{className:a.icon})})," ",Object(k.jsx)(j.a,{item:!0,xs:12,children:Object(k.jsxs)(f.a,{children:[Object(k.jsxs)(Me,{component:"h4",className:a.watermark,children:["Iv\xe1n Miragaya",Object(k.jsx)("span",{className:a.watermarkColor,children:"\xa92021"})]})," "]})})]})]})}var Ie=n(75),Se=n.n(Ie),Te=n(143),Re=n(74),ze=n.n(Re),Be=Object(i.a)((function(e){var t;return{root:{backgroundColor:"#19171df9",margin:0,padding:0,display:"flex",border:"3px solid #d300c1",minHeight:"100vh",alignItems:"center",boxSizing:"border-box",position:"fixed",zIndex:11},closeIcon:(t={color:"#00d4db",width:"3rem",height:"3rem"},Object(x.a)(t,e.breakpoints.down("sm"),{width:"2rem",height:"2rem"}),Object(x.a)(t,"animation","$back 0.5s alternate ".concat(e.transitions.easing.easeInOut," infinite")),t),"@keyframes back":{from:{transform:"translateX(2px)"},to:{transform:"translateX(-2px)"}}}}));function Ae(e){var t=e.gotoHeader,n=e.gotoAbout,a=e.gotoFolio,o=e.gotoContact,c=e.handleCallback,r=e.open,s=Be();return Object(k.jsx)(u.a,{direction:"right",in:r,children:Object(k.jsx)(j.a,{container:!0,justify:"center",className:s.root,children:Object(k.jsxs)(f.a,{children:[Object(k.jsx)(j.a,{container:!0,style:{transform:"skewY(-3deg)"},children:Object(k.jsx)("h2",{className:"sub-header",children:"Iv\xe1n Miragaya"})}),Object(k.jsxs)("div",{className:"navigation",children:[Object(k.jsxs)("div",{children:[Object(k.jsxs)("li",{children:[" ",Object(k.jsx)("a",{href:"#header","data-text":"Inicio",onClick:function(){t(),c()},children:"Inicio"})]})," ",Object(k.jsx)("li",{children:Object(k.jsx)("a",{href:"#about","data-text":"Sobre M\xed",onClick:function(){n(),c()},children:"Sobre M\xed"})})," ",Object(k.jsx)("li",{children:Object(k.jsx)("a",{href:"#folio","data-text":"Portafolio",onClick:function(){a(),c()},children:"Portafolio"})})," ",Object(k.jsx)("li",{children:Object(k.jsx)("a",{href:"#contact","data-text":"Contacto",onClick:function(){o(),c()},children:"Contacto"})}),Object(k.jsx)("li",{children:Object(k.jsx)("a",{"data-text":"volver",onClick:c,children:Object(k.jsx)(ze.a,{className:"sub-header",style:{width:"3rem",height:"3rem"}})})})]})," "]})]})})})}var Me=Object(l.a)((function(e){return{root:{height:25,fontFamily:"Raleway"}}}))(d.a),De=Object(i.a)((function(e){return{root:{minHeight:"100vh",padding:"0rem",margin:0,display:"flex",fontFamily:"Raleway",overflow:"hidden"},scrollTop:{boxShadow:"0 0 10px #00000030",position:"fixed",bottom:"30px",right:"5%",backgroundColor:"#fff",transition:"1s",color:"#d300c1","&:hover":{backgroundColor:"#b400cc",color:"#fff"}},scrollTopIcon:{animation:"$scrollTop 0.5s alternate ".concat(e.transitions.easing.easeInOut," infinite"),width:"40px",height:"40px"},"@keyframes scrollTop":{from:{transform:"translateY(4px)"},to:{transform:"translateY(-1px)"}}}}));function Pe(){var e=De(),t=Object(a.useRef)(null),n=Object(a.useRef)(null),o=Object(a.useRef)(null),c=Object(a.useRef)(null),r=Object(Te.a)().y,i=Object(a.useState)(!1),l=Object(s.a)(i,2),d=l[0],x=l[1],u=Object(a.useState)(!1),f=Object(s.a)(u,2),O=f[0],g=f[1],p=Object(a.useState)(!1),w=Object(s.a)(p,2),v=w[0],C=w[1],N=Object(a.useState)(!1),I=Object(s.a)(N,2),S=I[0],T=I[1],z=Object(a.useState)(!1),B=Object(s.a)(z,2),A=B[0],M=B[1],D=Object(a.useState)(!1),P=Object(s.a)(D,2),L=P[0],E=P[1];Object(a.useLayoutEffect)((function(){function e(){t.current&&n.current&&o.current&&c.current&&(0===window.pageYOffset&&(T(!1),M(!1),E(!1)),n&&window.pageYOffset<n.current.offsetTop&&C(!0),window.pageYOffset<o.current.offsetTop&&window.pageYOffset>=.9*n.current.offsetTop&&T(!0),window.pageYOffset<c.current.offsetTop&&window.pageYOffset>=.9*o.current.offsetTop&&(M(!0),C(!1)),c&&window.pageYOffset>.9*c.current.offsetTop&&(E(!0),T(!1),M(!1)))}window.addEventListener("scroll",e),e()}),[n,t,o,c]),Object(a.useEffect)((function(){r>=n.current.offsetTop?x(!0):x(!1)}),[r]);var Y=function(){return window.scrollTo({top:t.current.offsetTop,behavior:"smooth"})},U=function(){return window.scrollTo({top:.95*n.current.offsetTop,behavior:"smooth"})},W=function(){return window.scrollTo({top:.99*o.current.offsetTop,behavior:"smooth"})},F=function(){return window.scrollTo({top:c.current.offsetTop,behavior:"smooth"})},q=function(){g((function(e){return!e}))};return Object(k.jsxs)("div",{className:e.root,children:[" ",Object(k.jsxs)(j.a,{container:!0,id:"root",children:[Object(k.jsx)(R,{gotoHeader:Y,gotoAbout:U,gotoFolio:W,gotoContact:F,handleCallback:q,header:t,about:n,folio:o,contact:c,open:O}),O?Object(k.jsx)(Ae,{gotoHeader:Y,gotoAbout:U,gotoFolio:W,gotoContact:F,handleCallback:q,open:O}):null,Object(k.jsx)(y,{animation:v,headerSection:t,gotoAbout:U}),Object(k.jsx)(X,{animation:S,aboutSection:n}),Object(k.jsx)(ue,{folioSection:o,animation:A})," ",Object(k.jsx)(Ne,{animation:L,contactSection:c})," ",d?Object(k.jsx)(b.a,{in:!0,timeout:1e3,children:Object(k.jsx)(m.a,{onClick:Y,classes:{root:e.scrollTop},children:Object(k.jsx)(Se.a,{className:e.scrollTopIcon})})}):null]}),Object(k.jsx)(h.a,{})]})}var Le=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,146)).then((function(t){var n=t.getCLS,a=t.getFID,o=t.getFCP,c=t.getLCP,r=t.getTTFB;n(e),a(e),o(e),c(e),r(e)}))};r.a.render(Object(k.jsx)(o.a.StrictMode,{children:Object(k.jsx)(Pe,{})}),document.getElementById("root")),Le()}},[[95,1,2]]]);
//# sourceMappingURL=main.4ef306c8.chunk.js.map