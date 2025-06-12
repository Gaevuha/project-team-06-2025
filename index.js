import{a as d,S as j,i as h}from"./assets/vendor-BT6NWGSC.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const A of document.querySelectorAll('link[rel="modulepreload"]'))a(A);new MutationObserver(A=>{for(const n of A)if(n.type==="childList")for(const r of n.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&a(r)}).observe(document,{childList:!0,subtree:!0});function s(A){const n={};return A.integrity&&(n.integrity=A.integrity),A.referrerPolicy&&(n.referrerPolicy=A.referrerPolicy),A.crossOrigin==="use-credentials"?n.credentials="include":A.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function a(A){if(A.ep)return;A.ep=!0;const n=s(A);fetch(A.href,n)}})();const o={artistsList:document.querySelector(".artists"),loadMoreBtn:document.querySelector(".load-more-btn"),learnMoreArtistBtns:document.querySelectorAll(".learn-more-artist-btn"),artists:document.querySelector(".list-artists"),modalAlbumList:document.querySelector(".modal-list__album"),backdropModalElem:document.querySelector(".backdrop"),closeModalBtn:document.querySelector(".close-btn-modal")},M="/project-team-06-2025/assets/sprite-BMp1TjPy.svg",K="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAgICAgJCAkKCgkNDgwODRMREBARExwUFhQWFBwrGx8bGx8bKyYuJSMlLiZENS8vNUROQj5CTl9VVV93cXecnNEBCAgICAkICQoKCQ0ODA4NExEQEBETHBQWFBYUHCsbHxsbHxsrJi4lIyUuJkQ1Ly81RE5CPkJOX1VVX3dxd5yc0f/CABEIASwB6AMBIgACEQEDEQH/xAAtAAEBAQEBAQEBAAAAAAAAAAAABQQDBgIBBwEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEAMQAAAA/vkL8+AAAAAAAAAAAAAAAAAAAAAAAAAAAAB9/A9EgD4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA59I5qTBTTBTTBTTBT1QtZWAAAAAAAAAAAAAAAAAAAAAAAAAjWYxnAOhzryKZwx6cw05tJYAAAAAAAAAAAAAAAAAAAAAAAAAjWYxnOxoofX6QudrEZfi/EOenNpLAAAAAAAAAAAAAAAAAAAAAAAAAEazGONqLrKiWKiWKnHCMejh3LAAAAAAAAAAAAAAAAAAAAAAAAAE6iPPvQDz70A8+9APPvQDz9HeAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAN2H0kkwgAAAAAAAAAAAAAAAAAAAAAAAAAAAG4+Vgf/8QALhAAAgECAwcEAQQDAAAAAAAAAQIDAAQRFFIQEjE0QVBREyEicSAwMoGQYqGx/9oACAEBAAE/AL29EA9OP9//ACnlkkOLuSe9JJIhxViKsb71vg/s4/3Ujl5GY9T3yNzHIjjof69pZUiGLGs9Hoas8mhqzyaGrPJoas8mhqzyaGrPJoas8mhqz0ehqjlSQYqe53bEzsPHt+lZsRMB0IPc7rmJPyitYlUbyhj1xq7gWMqy8D022nML9Hud1zEn4PDJGAWXAHZFeR7gEmIIq5n9YgAfEbbTmF+j3O65iTbaQbx9Rh7DhUiLIpVuBqWNo3KnYY3VQxUgHgdtpzC/R7ndcxJsghMrgdOpoAAAAYAbJ4RKn+Q4Vb2rM2Mi4KKdFdSrD2NSxNE5U/wdlpzC/R7ndcxJSqWYKOJqGJYkCj+T+U8IlTDr0NEFSQeIq05hfo9zuuYkpGKMGHEVnpNK1npNK1npNK1npNK1npNK1npNK1npdK0zFmLHiTVpzC/R7ndwMW9RRj5FbreDW63g1ut4NbreDW63g1ut4NbreDW63g1utpNWkDKfUYYeB/ZnfWzQyk4fFvcHvlnAZZQxHwU4mmVWBVgCDV5bxwudwnDvVnbRzN88aVVQbqgACv/EABQRAQAAAAAAAAAAAAAAAAAAAJD/2gAIAQIBAT8AE3//xAAUEQEAAAAAAAAAAAAAAAAAAACQ/9oACAEDAQE/ABN//9k=",J="icon-youtube",z="learn-more";function R(t,e){if(!t)return"No description available";const s=t.indexOf(".");return s!==-1&&s<=e?t.slice(0,s+1).trim():t.length<=e?t.trim():t.slice(0,e).trim()+"..."}function G(){const t=window.innerWidth;return t<768?60:t<1024?160:147}function F(){const t=G();o.artistsList.innerHTML="";const e=p.map(s=>{const a=(s.genres||[]).map(r=>`<li class="artist-genre">${r}</li>`).join(""),A=s.strArtistThumb||`${K}`,n=R(s.strBiographyEN,t);return`
        <li class="artist-card" id="${s._id}">
          <div class="artist-image-wrapper">
            <img
              class="artist-image"
              src="${A}"
              alt="Фото виконавця ${s.strArtist}"
              loading="lazy"
            />
          </div>

          <div class="artist-content">
            <ul class="artist-genres">
              ${a}
            </ul>
            <h3 class="artist-name">${s.strArtist}</h3>
            <p class="artist-description">${n}</p>

            <button class="learn-more-artist-btn" data-artist-id="${s._id}">
              Learn More
              <svg class="learn-more-icon" width="8" height="15" aria-hidden="true">
                <use href="${M}#${z}"></use>
              </svg>
            </button>
             <span class="loader section-artists-loader" style="display: none;"></span>
          </div>
        </li>
      `}).join("");o.artistsList.insertAdjacentHTML("beforeend",e)}function C(t){t.style.display="block"}function y(t){t.style.display="none"}function S(){const t=document.querySelector(".load-more-btn");t.style.display="block"}function b(){const t=document.querySelector(".load-more-btn");t.style.display="none"}async function Z(t){const{_id:e,strArtist:s,strArtistThumb:a,intFormedYear:A,intDiedYear:n,intMembers:r,strCountry:i,strGender:f,strBiographyEN:u,genres:q=[],albumsList:O=[]}=t,$=q.map(E=>`<li class="artist__genre-item">${E}</li>`).join(""),x=O.map(({strAlbum:E,intYearReleased:N,tracks:H=[]})=>{const P=H.map(({strTrack:U,intDuration:L,movie:l})=>{const V=Math.floor(L/6e4),W=String(Math.floor(L%6e4/1e3)).padStart(2,"0"),Y=l!=null&&l.startsWith("http")?l:l?`https://${l}`:"";return`
        <li class="track__row">
          <span class="track__name track__font">${U}</span>
          <span class="track__time track__font">${V}:${W}</span>
          <span class="track__link track__font">
            ${l?`<a class="track__link__youtube" href="${Y}" target="_blank" aria-label="YouTube link" rel="noopener noreferrer">
              <svg class="icon-youtube" width="24" height="24">
                <use href="${M}#${J}"></use>
              </svg>
            </a>`:""}
          </span>
        </li>
      `}).join("");return`
      <li class="album-list-item">
        <h4 class="album__name">${E} (${N})</h4>
        <div class="track__row__name">
        <span class="track__name track__font__title">Track</span>
        <span class="track__time track__font__title">Time</span>
        <span class="track__link track__font__title">Link</span>
        </div>
        <ul class="album__track-list">${P}</ul>
      </li>
    `}).join(""),D=`
    <li class="artist__item" data-id="${e}">
    <h3 class="artist__name">${s}</h3>
    <div class="artist__box">
    <div class="artist__image__modal artist__box__item">
        <img class="artist__image" src="${a}" alt="${s}" width="272">
    </div>
  <div class="artist__box__item">
    <ul class="artist__info">
  <li class="artist__info-item">
    <h4 class="artist__subtitle__info">Years active</h4>
    <p class="artist__info-value">${A&&n?`${A} – ${n}`:A?`${A} – present`:"information missing"}</p>
  </li>
  <li class="artist__info-item">
    <h4 class="artist__subtitle__info">Sex</h4>
    <p class="artist__info-value">${f}</p>
  </li>
  <li class="artist__info-item">
    <h4 class="artist__subtitle__info">Members</h4>
    <p class="artist__info-value">${r}</p>
  </li>
  <li class="artist__info-item">
    <h4 class="artist__subtitle__info">Country</h4>
    <p class="artist__info-value">${i}</p>
  </li>
</ul>
<div class="artist__biography">
      <h4 class="artist__subtitle__info">Biography</h4>
        <p class="artist__biography-value">${u}</p>
</div>
      <ul class="artists__genres-list">${$}</ul>
  </div>
</div>
      <h3 class="title__albums-modal">Albums</h3>
      <ul class="modal__album-list">${x}</ul>
    </li>
  `;o.modalAlbumList.innerHTML=D}function X(t){const e=document.querySelector(".swiper-wrapper"),s=t.map(({name:a,rating:A,descr:n})=>`
    <div class="swiper-slide">
      <div class="rating" data-rating="${A}"></div>
      <p class="feedback-descr">"${n}"</p>
      <p class="feedback-name">${a}</p>
    </div>
  `).join("");e.innerHTML=s}d.defaults.baseURL="https://sound-wave.b.goit.study/api";let p=[],m=1;const tt=8;let w=0,B,k;const c=document.querySelector(".section-artists-loader");window.addEventListener("resize",()=>{clearTimeout(B),B=setTimeout(()=>{F()},300)});async function I(t=1){const e={limit:8,page:t},s="/artists";try{return(await d.get(s,{params:e})).data}catch(a){throw console.error("Помилка при завантаженні артистів:",a.message),a}}C(c);I(m).then(t=>{p=t.artists,w=Math.ceil(t.totalArtists/tt),F(),y(c),m>=w?b():S(),k=p.map(({genres:e,_id:s})=>({genres:e,_id:s}))}).catch(t=>{console.error("Error during initial loading of artists:",t.message),y(c)});async function et(){o.loadMoreBtn.disabled=!0,b(),C(c),m+=1;try{const e=(await I(m)).artists;if(k=[...k,...e.map(({genres:s,_id:a})=>({genres:s,_id:a}))],!e.length){alert("We're sorry, there are no more artists to load."),y(c),b();return}p=[...p,...e],F(),m>=w?b():S()}catch(t){console.error("Error loading new artists:",t.message)}finally{y(c),o.loadMoreBtn.disabled=!1}}o.loadMoreBtn.addEventListener("click",et);async function st(t){const e=`/artists/${t}`;try{return(await d.get(e)).data}catch(s){throw console.error("Помилка при отриманні артиста:",s.message),s}}async function At(t){const e=`/artists/${t}/albums`;try{return(await d.get(e)).data}catch(s){throw console.error("Помилка при отриманні альбомів артиста:",s.message),s}}async function at(t=1){const e=[],s="/feedbacks",A={limit:25,page:t};try{const n=await d.get(s,{params:A});e.push(...n.data.data);const r=n.data.total,i=Math.ceil(r/25),f=r-25*(i-1),u=await d.get(s,{params:{limit:25,page:i}});return e.push(...u.data.data),e}catch(n){throw console.error("Помилка при отриманні відгуків:",n.message),n}}async function nt(t){if(t.target.tagName!=="BUTTON")return;const e=t.target.dataset.artistId,s=t.target,a=t.target.nextElementSibling;lt(s,a);try{const A=await st(e),n=k.find(({_id:u})=>u===e),r=(n==null?void 0:n.genres)||[],{albumsList:i=[]}=await At(e),f={...A,genres:r,albumsList:i};Z(f),it(),ct(s,a)}catch(A){console.error("Помилка при завантаженні артиста або альбомів:",A.message)}}function rt(){v()}function ot(t){t.target===t.currentTarget&&v()}o.artistsList.addEventListener("click",nt);o.closeModalBtn.addEventListener("click",rt);o.backdropModalElem.addEventListener("click",ot);function Q(t){t.key==="Escape"&&v()}function it(){o.backdropModalElem.classList.add("is-open"),document.body.classList.add("modal-open"),window.addEventListener("keydown",Q)}function v(){o.backdropModalElem.classList.remove("is-open"),document.body.classList.remove("modal-open"),window.removeEventListener("keydown",Q)}function lt(t,e){t.style.display="none",e.style.margin="0",e.style.display="block",e.style.height="27px"}function ct(t,e){t.style.display="",e.style.display="none"}const dt="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAATCAYAAACQjC21AAAABHNCSVQICAgIfAhkiAAAASRJREFUOI2NkzFygzAURHeFT5JrpEC4y2XscWGGLtB57IIhF8g1UkWiyDlyEvRTJDhIYElbMqv3V6sPkKF6P7T1fmhzvEXK0OheC/gOQD8/vfDr+8PG/CoFnFi85iTLAja614To+wdBEh4FbqVLdclYOkdlNlOIqy72ZDeBje61U0oDgAjL/0mLq25IQA9IyqicsztHZSB3SIzhJwkHCvTEolQgumxKaghlJBDvK1dzrwoALvZklbgq7CVHAtrlI61e+Vy9mdSDLGE3c6i8pKGJlDE3XSHTqv/krxfTvG5R4HIXU9ryrq+c2d8jrwdsdL+GEd3VHPloC8IzHnDVCdFdP48t8LtaN3OoQnB4ZhdOFNCSMs6gUH/7Zuv90IqwLNzkpf4B4QeBWWwk9AEAAAAASUVORK5CYII=",ut="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAATCAYAAACQjC21AAAABHNCSVQICAgIfAhkiAAAALBJREFUOI2tk9sVwyAMQ+UsFjpZyWSEydQf2gaDwSnVX7B84+MH4BDJSDJ6vB5Y4FdT6OZgPtfLKlLVkSRXgUkDf+5lr7qLgpUnJfg27JeYmVR0qu8M4JTlvqifbACOPwIzgGm/vAoVukB7U50pjYZkrYoJ0/m9S8k3etb033N6IwUPcO+8WWq8oh/Ie3spIhWjqtCY1lGSHmivw8r5BKOaYuwB1CY0Hg1MQ1PrrSp8AbFIZxE4LYnOAAAAAElFTkSuQmCC";function mt(){document.querySelectorAll(".rating").forEach(e=>{const s=parseFloat(e.dataset.rating)||0,a=Math.round(s),A=5-a;let n="";for(let r=0;r<a;r++)n+=`<i class="star-custom" style="background-image: url('${dt}');"></i>`;for(let r=0;r<A;r++)n+=`<i class="star-custom" style="background-image: url('${ut}');"></i>`;e.innerHTML=n})}function pt(){const t=new j(".swiper",{slidesPerView:1,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".swiper-pagination",clickable:!0,type:"custom",renderCustom:function(e,s,a){return s===1?`
            <span class="swiper-pagination-bullet active" data-index="0"></span>
            <span class="swiper-pagination-bullet" data-index="${Math.floor(a/2)}"></span>
            <span class="swiper-pagination-bullet" data-index="${a-1}"></span>
          `:s===a?`
            <span class="swiper-pagination-bullet" data-index="0"></span>
            <span class="swiper-pagination-bullet" data-index="${Math.floor(a/2)}"></span>
            <span class="swiper-pagination-bullet active" data-index="${a}"></span>
          `:`
          <span class="swiper-pagination-bullet" data-index="0"></span>
          <span class="swiper-pagination-bullet active" data-index="${Math.floor(a/2)}"></span>
          <span class="swiper-pagination-bullet" data-index="${a-1}"></span>
        `}},mousewheel:!0,keyboard:!0,on:{init(){this.pagination.render(),this.pagination.update()},slideChange(){this.pagination.render(),this.pagination.update()}}});document.querySelector(".swiper-pagination").addEventListener("click",e=>{const s=e.target.closest(".swiper-pagination-bullet");console.log(s),s&&t.slideTo(parseInt(s.dataset.index))})}async function gt(){try{const t=await at();X(t),mt(),pt()}catch(t){console.error("Error initializing feedback:",t)}}gt();document.addEventListener("DOMContentLoaded",()=>{const t={openBtn:document.querySelector("[data-menu-open]"),closeBtn:document.querySelector("[data-menu-close]"),menu:document.querySelector("[data-menu]"),links:document.querySelectorAll(".menu-list .link-menu"),header:document.querySelector(".header")},e={scrollBehavior:"smooth",scrollDelay:300},s=A=>{t.menu.classList.toggle("is-open",A),document.body.style.overflow=A?"hidden":"",document.documentElement.style.scrollBehavior=A?"auto":e.scrollBehavior},a=A=>{const n=document.querySelector(A);if(!n)return;const r=t.header.offsetHeight,i=n.getBoundingClientRect().top+window.scrollY-r;window.scrollTo({top:i,behavior:e.scrollBehavior})};t.openBtn.addEventListener("click",()=>s(!0)),t.closeBtn.addEventListener("click",()=>s(!1)),t.menu.addEventListener("click",A=>{!A.target.closest("[data-menu-close]")&&!A.target.closest(".link-menu")&&!A.target.closest(".link-logo")&&s(!1)}),t.links.forEach(A=>{A.addEventListener("click",n=>{const r=A.getAttribute("href");if(!r.startsWith("#"))return;n.preventDefault(),t.menu.classList.contains("is-open")?(s(!1),setTimeout(()=>a(r),e.scrollDelay)):a(r)})}),window.addEventListener("resize",()=>{window.innerWidth>=768&&t.menu.classList.contains("is-open")&&s(!1)})});const ft=document.querySelector("[data-modal-feedback-open]"),ht=document.querySelector("[data-modal-feedback-close]");document.querySelector(".modal-feedback");const g=document.querySelector(".modal-overley-feedback"),T=document.querySelector(".modal-feedback-form");ft.addEventListener("click",t=>{bt()});ht.addEventListener("click",t=>{_()});function bt(){g.classList.add("is-open"),document.documentElement.style.overflow="hidden"}function _(){g.classList.remove("is-open"),document.documentElement.style.overflow=""}g.addEventListener("click",t=>{t.target===g&&_()});document.addEventListener("keydown",t=>{t.key==="Escape"&&g.classList.contains("is-open")&&_()});T.addEventListener("submit",t=>{t.preventDefault();const e=t.target.elements["user-name"].value.trim(),s=t.target.elements["user-comment"].value.trim(),a=Number(t.target.elements.rating.value);yt(e,s,a).length>0||kt({name:e,descr:s,rating:a})});function yt(t,e,s){const a=[];return(t.length<3||t.length>16)&&(h.show({class:"custom-toast",title:"",message:"The name must consist of 3...16 characters!",backgroundColor:"#000000",messageColor:"#FFFFFF",titleColor:"#FFFFFF",maxWidth:"30%",position:"center",timeout:5e3,progressBar:!0,close:!0,transitionIn:"fadeInUp",transitionOut:"fadeOut"}),a.push("Error")),s||(a.push("Please select a rating."),h.show({class:"custom-toast",title:"",message:"Choose a rating!",backgroundColor:"#000000",messageColor:"#FFFFFF",titleColor:"#FFFFFF",maxWidth:"30%",position:"center",timeout:5e3,progressBar:!0,close:!0,transitionIn:"fadeInUp",transitionOut:"fadeOut"}),a.push("Error")),(e.length<10||e.length>512)&&(a.push("Please select a rating."),h.show({class:"custom-toast",title:"",message:"The comment must consist of 10...512 characters!",backgroundColor:"#000000",messageColor:"#FFFFFF",titleColor:"#FFFFFF",maxWidth:"30%",position:"center",timeout:5e3,progressBar:!0,close:!0,transitionIn:"fadeInUp",transitionOut:"fadeOut"}),a.push("Error")),a}async function kt(t){try{const e=await fetch("https://sound-wave.b.goit.study/api/feedbacks",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});e.ok?(h.show({class:"custom-toast",title:"",message:"Thanks for the feedback!",backgroundColor:"#000000",messageColor:"#FFFFFF",titleColor:"#FFFFFF",maxWidth:"30%",position:"center",timeout:5e3,progressBar:!0,close:!0,transitionIn:"fadeInUp",transitionOut:"fadeOut"}),T.reset(),_()):alert("Помилка сервера: "+e.status)}catch(e){console.error("Network error:",e),alert("Помилка з'єднання")}}
//# sourceMappingURL=index.js.map
