import{d as b,r as v,o as O,a as l,c as p,b as o,e as d,w as m,u as h,p as P,f as $,_ as F,g as k,h as N,F as C,i as w,s as M,j as S,k as T,t as g,n as I,l as D,m as H}from"./index-BcBmIgku.js";import{_ as y}from"./Motion.vue_vue_type_script_setup_true_lang-B3F4TeVt.js";import{F as q}from"./FooterTemplate-D4uEuHEr.js";function x(){return x=Object.assign?Object.assign.bind():function(i){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(i[s]=t[s])}return i},x.apply(this,arguments)}var z={strings:["These are the default values...","You know what you should do?","Use your own!","Have a great day!"],stringsElement:null,typeSpeed:0,startDelay:0,backSpeed:0,smartBackspace:!0,shuffle:!1,backDelay:700,fadeOut:!1,fadeOutClass:"typed-fade-out",fadeOutDelay:500,loop:!1,loopCount:1/0,showCursor:!0,cursorChar:"|",autoInsertCss:!0,attr:null,bindInputFocusEvents:!1,contentType:"html",onBegin:function(i){},onComplete:function(i){},preStringTyped:function(i,n){},onStringTyped:function(i,n){},onLastStringBackspaced:function(i){},onTypingPaused:function(i,n){},onTypingResumed:function(i,n){},onReset:function(i){},onStop:function(i,n){},onStart:function(i,n){},onDestroy:function(i){}},j=new(function(){function i(){}var n=i.prototype;return n.load=function(t,s,e){if(t.el=typeof e=="string"?document.querySelector(e):e,t.options=x({},z,s),t.isInput=t.el.tagName.toLowerCase()==="input",t.attr=t.options.attr,t.bindInputFocusEvents=t.options.bindInputFocusEvents,t.showCursor=!t.isInput&&t.options.showCursor,t.cursorChar=t.options.cursorChar,t.cursorBlinking=!0,t.elContent=t.attr?t.el.getAttribute(t.attr):t.el.textContent,t.contentType=t.options.contentType,t.typeSpeed=t.options.typeSpeed,t.startDelay=t.options.startDelay,t.backSpeed=t.options.backSpeed,t.smartBackspace=t.options.smartBackspace,t.backDelay=t.options.backDelay,t.fadeOut=t.options.fadeOut,t.fadeOutClass=t.options.fadeOutClass,t.fadeOutDelay=t.options.fadeOutDelay,t.isPaused=!1,t.strings=t.options.strings.map(function(f){return f.trim()}),t.stringsElement=typeof t.options.stringsElement=="string"?document.querySelector(t.options.stringsElement):t.options.stringsElement,t.stringsElement){t.strings=[],t.stringsElement.style.cssText="clip: rect(0 0 0 0);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px;";var r=Array.prototype.slice.apply(t.stringsElement.children),a=r.length;if(a)for(var c=0;c<a;c+=1)t.strings.push(r[c].innerHTML.trim())}for(var u in t.strPos=0,t.currentElContent=this.getCurrentElContent(t),t.currentElContent&&t.currentElContent.length>0&&(t.strPos=t.currentElContent.length-1,t.strings.unshift(t.currentElContent)),t.sequence=[],t.strings)t.sequence[u]=u;t.arrayPos=0,t.stopNum=0,t.loop=t.options.loop,t.loopCount=t.options.loopCount,t.curLoop=0,t.shuffle=t.options.shuffle,t.pause={status:!1,typewrite:!0,curString:"",curStrPos:0},t.typingComplete=!1,t.autoInsertCss=t.options.autoInsertCss,t.autoInsertCss&&(this.appendCursorAnimationCss(t),this.appendFadeOutAnimationCss(t))},n.getCurrentElContent=function(t){return t.attr?t.el.getAttribute(t.attr):t.isInput?t.el.value:t.contentType==="html"?t.el.innerHTML:t.el.textContent},n.appendCursorAnimationCss=function(t){var s="data-typed-js-cursor-css";if(t.showCursor&&!document.querySelector("["+s+"]")){var e=document.createElement("style");e.setAttribute(s,"true"),e.innerHTML=`
        .typed-cursor{
          opacity: 1;
        }
        .typed-cursor.typed-cursor--blink{
          animation: typedjsBlink 0.7s infinite;
          -webkit-animation: typedjsBlink 0.7s infinite;
                  animation: typedjsBlink 0.7s infinite;
        }
        @keyframes typedjsBlink{
          50% { opacity: 0.0; }
        }
        @-webkit-keyframes typedjsBlink{
          0% { opacity: 1; }
          50% { opacity: 0.0; }
          100% { opacity: 1; }
        }
      `,document.body.appendChild(e)}},n.appendFadeOutAnimationCss=function(t){var s="data-typed-fadeout-js-css";if(t.fadeOut&&!document.querySelector("["+s+"]")){var e=document.createElement("style");e.setAttribute(s,"true"),e.innerHTML=`
        .typed-fade-out{
          opacity: 0;
          transition: opacity .25s;
        }
        .typed-cursor.typed-cursor--blink.typed-fade-out{
          -webkit-animation: 0;
          animation: 0;
        }
      `,document.body.appendChild(e)}},i}()),B=new(function(){function i(){}var n=i.prototype;return n.typeHtmlChars=function(t,s,e){if(e.contentType!=="html")return s;var r=t.substring(s).charAt(0);if(r==="<"||r==="&"){var a;for(a=r==="<"?">":";";t.substring(s+1).charAt(0)!==a&&!(1+ ++s>t.length););s++}return s},n.backSpaceHtmlChars=function(t,s,e){if(e.contentType!=="html")return s;var r=t.substring(s).charAt(0);if(r===">"||r===";"){var a;for(a=r===">"?"<":"&";t.substring(s-1).charAt(0)!==a&&!(--s<0););s--}return s},i}()),R=function(){function i(t,s){j.load(this,s,t),this.begin()}var n=i.prototype;return n.toggle=function(){this.pause.status?this.start():this.stop()},n.stop=function(){this.typingComplete||this.pause.status||(this.toggleBlinking(!0),this.pause.status=!0,this.options.onStop(this.arrayPos,this))},n.start=function(){this.typingComplete||this.pause.status&&(this.pause.status=!1,this.pause.typewrite?this.typewrite(this.pause.curString,this.pause.curStrPos):this.backspace(this.pause.curString,this.pause.curStrPos),this.options.onStart(this.arrayPos,this))},n.destroy=function(){this.reset(!1),this.options.onDestroy(this)},n.reset=function(t){t===void 0&&(t=!0),clearInterval(this.timeout),this.replaceText(""),this.cursor&&this.cursor.parentNode&&(this.cursor.parentNode.removeChild(this.cursor),this.cursor=null),this.strPos=0,this.arrayPos=0,this.curLoop=0,t&&(this.insertCursor(),this.options.onReset(this),this.begin())},n.begin=function(){var t=this;this.options.onBegin(this),this.typingComplete=!1,this.shuffleStringsIfNeeded(this),this.insertCursor(),this.bindInputFocusEvents&&this.bindFocusEvents(),this.timeout=setTimeout(function(){t.strPos===0?t.typewrite(t.strings[t.sequence[t.arrayPos]],t.strPos):t.backspace(t.strings[t.sequence[t.arrayPos]],t.strPos)},this.startDelay)},n.typewrite=function(t,s){var e=this;this.fadeOut&&this.el.classList.contains(this.fadeOutClass)&&(this.el.classList.remove(this.fadeOutClass),this.cursor&&this.cursor.classList.remove(this.fadeOutClass));var r=this.humanizer(this.typeSpeed),a=1;this.pause.status!==!0?this.timeout=setTimeout(function(){s=B.typeHtmlChars(t,s,e);var c=0,u=t.substring(s);if(u.charAt(0)==="^"&&/^\^\d+/.test(u)){var f=1;f+=(u=/\d+/.exec(u)[0]).length,c=parseInt(u),e.temporaryPause=!0,e.options.onTypingPaused(e.arrayPos,e),t=t.substring(0,s)+t.substring(s+f),e.toggleBlinking(!0)}if(u.charAt(0)==="`"){for(;t.substring(s+a).charAt(0)!=="`"&&(a++,!(s+a>t.length)););var E=t.substring(0,s),A=t.substring(E.length+1,s+a),L=t.substring(s+a+1);t=E+A+L,a--}e.timeout=setTimeout(function(){e.toggleBlinking(!1),s>=t.length?e.doneTyping(t,s):e.keepTyping(t,s,a),e.temporaryPause&&(e.temporaryPause=!1,e.options.onTypingResumed(e.arrayPos,e))},c)},r):this.setPauseStatus(t,s,!0)},n.keepTyping=function(t,s,e){s===0&&(this.toggleBlinking(!1),this.options.preStringTyped(this.arrayPos,this));var r=t.substring(0,s+=e);this.replaceText(r),this.typewrite(t,s)},n.doneTyping=function(t,s){var e=this;this.options.onStringTyped(this.arrayPos,this),this.toggleBlinking(!0),this.arrayPos===this.strings.length-1&&(this.complete(),this.loop===!1||this.curLoop===this.loopCount)||(this.timeout=setTimeout(function(){e.backspace(t,s)},this.backDelay))},n.backspace=function(t,s){var e=this;if(this.pause.status!==!0){if(this.fadeOut)return this.initFadeOut();this.toggleBlinking(!1);var r=this.humanizer(this.backSpeed);this.timeout=setTimeout(function(){s=B.backSpaceHtmlChars(t,s,e);var a=t.substring(0,s);if(e.replaceText(a),e.smartBackspace){var c=e.strings[e.arrayPos+1];e.stopNum=c&&a===c.substring(0,s)?s:0}s>e.stopNum?(s--,e.backspace(t,s)):s<=e.stopNum&&(e.arrayPos++,e.arrayPos===e.strings.length?(e.arrayPos=0,e.options.onLastStringBackspaced(),e.shuffleStringsIfNeeded(),e.begin()):e.typewrite(e.strings[e.sequence[e.arrayPos]],s))},r)}else this.setPauseStatus(t,s,!1)},n.complete=function(){this.options.onComplete(this),this.loop?this.curLoop++:this.typingComplete=!0},n.setPauseStatus=function(t,s,e){this.pause.typewrite=e,this.pause.curString=t,this.pause.curStrPos=s},n.toggleBlinking=function(t){this.cursor&&(this.pause.status||this.cursorBlinking!==t&&(this.cursorBlinking=t,t?this.cursor.classList.add("typed-cursor--blink"):this.cursor.classList.remove("typed-cursor--blink")))},n.humanizer=function(t){return Math.round(Math.random()*t/2)+t},n.shuffleStringsIfNeeded=function(){this.shuffle&&(this.sequence=this.sequence.sort(function(){return Math.random()-.5}))},n.initFadeOut=function(){var t=this;return this.el.className+=" "+this.fadeOutClass,this.cursor&&(this.cursor.className+=" "+this.fadeOutClass),setTimeout(function(){t.arrayPos++,t.replaceText(""),t.strings.length>t.arrayPos?t.typewrite(t.strings[t.sequence[t.arrayPos]],0):(t.typewrite(t.strings[0],0),t.arrayPos=0)},this.fadeOutDelay)},n.replaceText=function(t){this.attr?this.el.setAttribute(this.attr,t):this.isInput?this.el.value=t:this.contentType==="html"?this.el.innerHTML=t:this.el.textContent=t},n.bindFocusEvents=function(){var t=this;this.isInput&&(this.el.addEventListener("focus",function(s){t.stop()}),this.el.addEventListener("blur",function(s){t.el.value&&t.el.value.length!==0||t.start()}))},n.insertCursor=function(){this.showCursor&&(this.cursor||(this.cursor=document.createElement("span"),this.cursor.className="typed-cursor",this.cursor.setAttribute("aria-hidden",!0),this.cursor.innerHTML=this.cursorChar,this.el.parentNode&&this.el.parentNode.insertBefore(this.cursor,this.el.nextSibling)))},i}();const V=i=>(P("data-v-dcf05899"),i=i(),$(),i),Y={class:"main"},U={class:"main__title"},G=V(()=>o("img",{src:F,width:"450",alt:"logo"},null,-1)),J=b({__name:"MainTemplate",setup(i){const n=v(null);return O(()=>{if(n.value){const t={strings:["Экономическая защита города!"],typeSpeed:50,backSpeed:25,loop:!1};new R(n.value,t)}}),(t,s)=>(l(),p("div",Y,[o("div",U,[d(h(y),{initial:{rotateY:360},animate:{rotateY:0},exit:{rotateY:360},transition:{duration:4}},{default:m(()=>[G]),_:1}),o("h1",{class:"typed-text",ref_key:"typedElement",ref:n},null,512)]),d(h(y),{initial:{opacity:0,y:100},animate:{opacity:1,y:0},exit:{opacity:0},transition:{duration:2}},{default:m(()=>[d(h(yt))]),_:1}),d(h(ot)),d(h(Ot))]))}}),K=k(J,[["__scopeId","data-v-dcf05899"]]),Q=i=>(P("data-v-384c38d3"),i=i(),$(),i),W={class:"services",id:"services"},X=Q(()=>o("h3",null,"Наши услуги",-1)),Z={class:"services__content"},tt=["onMouseover"],st={class:"flex flex-col gap-1"},et={class:"font-bold text-xl"},nt=["innerHTML"],it=b({__name:"ServicesTemplate",setup(i){const n=v(null),t=v([]),s=r=>{n.value=r},e=()=>{n.value=null};return O(()=>{const r=new IntersectionObserver(c=>{c.forEach(u=>{const f=Number(u.target.dataset.index);u.isIntersecting&&(t.value[f]=!0)})});document.querySelectorAll(".services__content--item").forEach((c,u)=>{c.dataset.index=u.toString(),r.observe(c)}),N(()=>{r.disconnect()})}),(r,a)=>(l(),p("div",W,[X,o("div",Z,[(l(!0),p(C,null,w(h(M),(c,u)=>(l(),p("div",{key:u,onMouseover:f=>s(u),onMouseleave:e},[d(h(y),{class:"services__content--item",initial:{y:0,opacity:0},animate:t.value[u]?{y:[0,-20,0],opacity:1}:{y:0,opacity:0},transition:{duration:1,delay:u*.2}},{default:m(()=>[o("div",st,[(l(),S(T(n.value===u&&c.iconAnim?c.iconAnim:c.icon),{size:45})),o("span",et,g(c.title),1)]),o("p",{innerHTML:c.description},null,8,nt)]),_:2},1032,["animate","transition"])],40,tt))),128))])]))}}),ot=k(it,[["__scopeId","data-v-384c38d3"]]),_=i=>(P("data-v-46f6a526"),i=i(),$(),i),rt={class:"about",id:"about"},at=_(()=>o("div",{class:"about--line"},null,-1)),ct=_(()=>o("div",{class:"about__text"},[o("h2",null,"Почему выбирают нас"),o("p",null,' Агентство безопасности "Защитник" универсальная организация с самым широким спектром услуг! Вы ставите задачу, мы её решаем! Сегодня Вам не нужна безопасность, завтра может быть поздно! Работая с Защитником вся полученная информация будет строго конфиденциальна. ')],-1)),ut={class:"about__content"},lt=_(()=>o("p",{class:"about__content--item-number"},"01",-1)),pt=_(()=>o("div",{class:"about__content--item-text"},[o("h3",null,"Индивидуальный подход"),o("p",null," Каждая ситуация уникальна, поэтому мы предлагаем персонализированные решения для обеспечения безопасности с учётом всех ваших потребностей и особенностей ")],-1)),ht=_(()=>o("p",{class:"about__content--item-number"},"02",-1)),dt=_(()=>o("div",{class:"about__content--item-text"},[o("h3",null,"Большой спектор услуг"),o("p",null," От охраны объектов до персональной безопасности и технических решений — мы предлагаем комплексный набор услуг, чтобы полностью закрыть ваши потребности в защите ")],-1)),_t=_(()=>o("p",{class:"about__content--item-number"},"03",-1)),ft=_(()=>o("div",{class:"about__content--item-text"},[o("h3",null,"Надежность"),o("p",null," Мы гарантируем высокие стандарты безопасности и профессионализм, обеспечивая спокойствие и уверенность в защите ваших интересов ")],-1)),mt=b({__name:"AboutTemplate",setup(i){return(n,t)=>(l(),p("div",rt,[at,ct,o("div",ut,[d(h(y),{class:"about__content--item",initial:{opacity:0,scale:0},animate:{opacity:1,scale:1},exit:{opacity:0},transition:{duration:1,delay:.5}},{default:m(()=>[lt,pt]),_:1}),d(h(y),{class:"about__content--item",initial:{opacity:0,scale:0},animate:{opacity:1,scale:1},exit:{opacity:0},transition:{duration:1,delay:1}},{default:m(()=>[ht,dt]),_:1}),d(h(y),{class:"about__content--item",initial:{opacity:0,scale:0},animate:{opacity:1,scale:1},exit:{opacity:0},transition:{duration:1,delay:1.5}},{default:m(()=>[_t,ft]),_:1})])]))}}),yt=k(mt,[["__scopeId","data-v-46f6a526"]]),gt={class:"switcher"},vt={class:"switcher__btns"},bt={class:"switcher__content"},Ct={key:0,class:""},kt={class:"switcher__fiz"},wt={class:"flex flex-col gap-1"},St={class:"font-bold"},Tt={class:"w-full"},xt={key:1,class:"switcher__content--ur"},Pt={class:"switcher__content--ur__items"},$t={class:"switcher__ur"},Et={class:"flex flex-col gap-1"},It={class:"w-full"},Bt=b({__name:"ForFaceTemplate",setup(i){const n=v("fiz"),t=v(H);return(s,e)=>(l(),p("div",gt,[o("div",vt,[o("button",{class:I(["switcher__btns--item",{selected:n.value==="yur"}]),onClick:e[0]||(e[0]=r=>n.value="yur")}," Юридические лица ",2),o("button",{class:I(["switcher__btns--item",{selected:n.value==="fiz"}]),onClick:e[1]||(e[1]=r=>n.value="fiz")}," Физические лица ",2)]),o("div",bt,[n.value==="fiz"?(l(),p("div",Ct,[o("div",kt,[(l(!0),p(C,null,w(h(D),(r,a)=>(l(),p("div",{key:a,class:"switcher__ur--item h-[250px] group"},[o("div",wt,[(l(),S(T(r.icon),{size:45,class:"transform transition-transform group-hover:-rotate-45"})),o("h3",St,g(r.title),1)]),o("p",Tt,g(r.description),1)]))),128))])])):(l(),p("div",xt,[o("div",Pt,[o("div",$t,[(l(!0),p(C,null,w(t.value,(r,a)=>(l(),p("div",{key:a,class:"switcher__ur--item h-[250px] group"},[o("div",Et,[(l(),S(T(r.icon),{size:45,class:"transform transition-transform group-hover:-rotate-45"})),o("h3",null,g(r.title),1)]),o("p",It,g(r.description),1)]))),128))])])]))])]))}}),Ot=k(Bt,[["__scopeId","data-v-ee038756"]]),At={class:"flex flex-col items-center"},Mt=b({__name:"HomeView",setup(i){return(n,t)=>(l(),p(C,null,[o("main",At,[d(h(K))]),d(h(q),{class:"w-[75%] mt-20 m-auto"})],64))}});export{Mt as default};