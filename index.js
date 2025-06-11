import{a as c,S as V}from"./assets/vendor-C_cafi3u.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function A(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(s){if(s.ep)return;s.ep=!0;const a=A(s);fetch(s.href,a)}})();const o={artistsList:document.querySelector(".artists"),loadMoreBtn:document.querySelector(".load-more-btn"),learnMoreArtistBtns:document.querySelectorAll(".learn-more-artist-btn"),artists:document.querySelector(".list-artists"),modalAlbumList:document.querySelector(".modal-list__album"),backdropModalElem:document.querySelector(".backdrop"),closeModalBtn:document.querySelector(".close-btn-modal")},M="/project-team-06-2025/assets/sprite-BMp1TjPy.svg",Y="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAgICAgJCAkKCgkNDgwODRMREBARExwUFhQWFBwrGx8bGx8bKyYuJSMlLiZENS8vNUROQj5CTl9VVV93cXecnNEBCAgICAkICQoKCQ0ODA4NExEQEBETHBQWFBYUHCsbHxsbHxsrJi4lIyUuJkQ1Ly81RE5CPkJOX1VVX3dxd5yc0f/CABEIASwB6AMBIgACEQEDEQH/xAAtAAEBAQEBAQEBAAAAAAAAAAAABQQDBgIBBwEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEAMQAAAA/vkL8+AAAAAAAAAAAAAAAAAAAAAAAAAAAAB9/A9EgD4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA59I5qTBTTBTTBTTBT1QtZWAAAAAAAAAAAAAAAAAAAAAAAAAjWYxnAOhzryKZwx6cw05tJYAAAAAAAAAAAAAAAAAAAAAAAAAjWYxnOxoofX6QudrEZfi/EOenNpLAAAAAAAAAAAAAAAAAAAAAAAAAEazGONqLrKiWKiWKnHCMejh3LAAAAAAAAAAAAAAAAAAAAAAAAAE6iPPvQDz70A8+9APPvQDz9HeAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAN2H0kkwgAAAAAAAAAAAAAAAAAAAAAAAAAAAG4+Vgf/8QALhAAAgECAwcEAQQDAAAAAAAAAQIDAAQRFFIQEjE0QVBREyEicSAwMoGQYqGx/9oACAEBAAE/AL29EA9OP9//ACnlkkOLuSe9JJIhxViKsb71vg/s4/3Ujl5GY9T3yNzHIjjof69pZUiGLGs9Hoas8mhqzyaGrPJoas8mhqzyaGrPJoas8mhqz0ehqjlSQYqe53bEzsPHt+lZsRMB0IPc7rmJPyitYlUbyhj1xq7gWMqy8D022nML9Hud1zEn4PDJGAWXAHZFeR7gEmIIq5n9YgAfEbbTmF+j3O65iTbaQbx9Rh7DhUiLIpVuBqWNo3KnYY3VQxUgHgdtpzC/R7ndcxJsghMrgdOpoAAAAYAbJ4RKn+Q4Vb2rM2Mi4KKdFdSrD2NSxNE5U/wdlpzC/R7ndcxJSqWYKOJqGJYkCj+T+U8IlTDr0NEFSQeIq05hfo9zuuYkpGKMGHEVnpNK1npNK1npNK1npNK1npNK1npNK1npdK0zFmLHiTVpzC/R7ndwMW9RRj5FbreDW63g1ut4NbreDW63g1ut4NbreDW63g1utpNWkDKfUYYeB/ZnfWzQyk4fFvcHvlnAZZQxHwU4mmVWBVgCDV5bxwudwnDvVnbRzN88aVVQbqgACv/EABQRAQAAAAAAAAAAAAAAAAAAAJD/2gAIAQIBAT8AE3//xAAUEQEAAAAAAAAAAAAAAAAAAACQ/9oACAEDAQE/ABN//9k=",U="icon-youtube",K="learn-more";function j(t,e){if(!t)return"No description available";const A=t.indexOf(".");return A!==-1&&A<=e?t.slice(0,A+1).trim():t.length<=e?t.trim():t.slice(0,e).trim()+"..."}function J(){const t=window.innerWidth;return t<768?60:t<1024?160:147}function E(){const t=J(),e=m.map(A=>{const n=(A.genres||[]).map(r=>`<li class="artist-genre">${r}</li>`).join(""),s=A.strArtistThumb||`${Y}`,a=j(A.strBiographyEN,t);return`
        <li class="artist-card" id="${A._id}">
          <div class="artist-image-wrapper">
            <img
              class="artist-image"
              src="${s}"
              alt="Фото виконавця ${A.strArtist}"
              loading="lazy"
            />
          </div>

          <div class="artist-content">
            <ul class="artist-genres">
              ${n}
            </ul>
            <h3 class="artist-name">${A.strArtist}</h3>
            <p class="artist-description">${a}</p>

            <button class="learn-more-artist-btn" data-artist-id="${A._id}">
              Learn More
              <svg class="learn-more-icon" width="8" height="15" aria-hidden="true">
                <use href="${M}#${K}"></use>
              </svg>
            </button>
             <span class="loader js-learn-more" style="display: none;"></span>
          </div>
        </li>
      `}).join("");o.artistsList.innerHTML=e}function C(t){t.style.display="block"}function f(t){t.style.display="none"}function S(){const t=document.querySelector(".load-more-btn");t.style.display="block"}function g(){const t=document.querySelector(".load-more-btn");t.style.display="none"}async function R(t){const{_id:e,strArtist:A,strArtistThumb:n,intFormedYear:s,intDiedYear:a,intMembers:r,strCountry:i,strGender:b,strBiographyEN:_,genres:d=[],albumsList:y=[]}=t,$=d.map(w=>`<li class="artist__genre-item">${w}</li>`).join("");console.log("genres:",d);const T=y.map(({strAlbum:w,intYearReleased:D,tracks:x=[]})=>{const N=x.map(({strTrack:H,intDuration:v,movie:l})=>{const O=Math.floor(v/6e4),F=String(Math.floor(v%6e4/1e3)).padStart(2,"0"),P=l!=null&&l.startsWith("http")?l:l?`https://${l}`:"";return`
        <li class="track__row">
          <span class="track__name track__font">${H}</span>
          <span class="track__time track__font">${O}:${F}</span>
          <span class="track__link track__font">
            ${l?`<a class="track__link__youtube" href="${P}" target="_blank" aria-label="YouTube link" rel="noopener noreferrer">
              <svg class="icon-youtube" width="24" height="24">
                <use href="${M}#${U}"></use>
              </svg>
            </a>`:""}
          </span>
        </li>
      `}).join("");return`
      <li class="album-list-item">
        <h4 class="album__name">${w} (${D})</h4>
        <div class="track__row__name">
        <span class="track__name track__font__title">Track</span>
        <span class="track__time track__font__title">Time</span>
        <span class="track__link track__font__title">Link</span>
        </div>
        <ul class="album__track-list">${N}</ul>
      </li>
    `}).join(""),q=`
    <li class="artist__item" data-id="${e}">
    <h3 class="artist__name">${A}</h3>
    <div class="artist__box">
    <div class="artist__image__modal artist__box__item">
        <img class="artist__image" src="${n}" alt="${A}" width="272">
    </div>
  <div class="artist__box__item">
    <ul class="artist__info">
  <li class="artist__info-item">
    <h4 class="artist__subtitle__info">Years active</h4>
    <p class="artist__info-value">${s&&a?`${s} – ${a}`:s?`${s} – present`:"information missing"}</p>
  </li>
  <li class="artist__info-item">
    <h4 class="artist__subtitle__info">Sex</h4>
    <p class="artist__info-value">${b}</p>
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
        <p class="artist__biography-value">${_}</p>
</div>
      <ul class="artists__genres-list">${$}</ul>
  </div>
</div>
      <h3 class="title__albums-modal">Albums</h3>
      <ul class="modal__album-list">${T}</ul>
    </li>
  `;console.log("this is a foto artist:",t),o.modalAlbumList.innerHTML=q}function W(t){const e=document.querySelector(".swiper-wrapper"),A=t.map(({name:n,rating:s,descr:a})=>`
    <div class="swiper-slide">
      <div class="rating" data-rating="${s}"></div>
      <p class="feedback-descr">"${a}"</p>
      <p class="feedback-name">${n}</p>
    </div>
  `).join("");e.innerHTML=A}c.defaults.baseURL="https://sound-wave.b.goit.study/api";let m=[],p=1;const z=8;let k=0,L,h;const u=document.querySelector(".section-artists-loader");window.addEventListener("resize",()=>{clearTimeout(L),L=setTimeout(()=>{E()},300)});async function Q(t=1){const e={limit:8,page:t},A="/artists";try{return(await c.get(A,{params:e})).data}catch(n){throw console.error("Помилка при завантаженні артистів:",n.message),n}}C(u);Q(p).then(t=>{m=t.artists,k=Math.ceil(t.totalArtists/z),E(),f(u),p>=k?g():S(),h=m.map(({genres:e,_id:A})=>({genres:e,_id:A}))}).catch(t=>{console.error("Error during initial loading of artists:",t.message),f(u)});async function G(){o.loadMoreBtn.disabled=!0,g(),C(u),p+=1;try{const e=(await Q(p)).artists;if(h=[...h,...e.map(({genres:A,_id:n})=>({genres:A,_id:n}))],!e.length){alert("We're sorry, there are no more artists to load."),f(u),g();return}m=[...m,...e],E(),p>=k?g():S()}catch(t){console.error("Error loading new artists:",t.message)}finally{f(u),o.loadMoreBtn.disabled=!1}}o.loadMoreBtn.addEventListener("click",G);async function Z(t){const e=`/artists/${t}`;try{const A=await c.get(e);return console.log(A.data),A.data}catch(A){throw console.error("Помилка при отриманні артиста:",A.message),A}}async function X(t){const e=`/artists/${t}/albums`;try{return(await c.get(e)).data}catch(A){throw console.error("Помилка при отриманні альбомів артиста:",A.message),A}}async function tt(t=1){const e=[],A="/feedbacks",s={limit:25,page:t};try{const a=await c.get(A,{params:s});e.push(...a.data.data),console.log(a.data);const r=a.data.total,i=Math.ceil(r/25);for(let d=2;d<i;d++){const y=await c.get(A,{params:{limit:25,page:d}});e.push(...y.data.data)}const b=r-25*(i-1),_=await c.get(A,{params:{limit:b,page:i}});return e.push(..._.data.data),console.log(e),e}catch(a){throw console.error("Помилка при отриманні відгуків:",a.message),a}}async function At(t){if(t.target.tagName!=="BUTTON")return;const e=t.target.dataset.artistId;try{const A=await Z(e),n=h.find(({_id:i})=>i===e),s=(n==null?void 0:n.genres)||[],{albumsList:a=[]}=await X(e),r={...A,genres:s,albumsList:a};R(r),at()}catch(A){console.error("Помилка при завантаженні артиста або альбомів:",A.message)}}function et(){B()}function st(t){t.target===t.currentTarget&&B()}o.artistsList.addEventListener("click",At);o.closeModalBtn.addEventListener("click",et);o.backdropModalElem.addEventListener("click",st);function I(t){t.key==="Escape"&&B()}function at(){o.backdropModalElem.classList.add("is-open"),document.body.classList.add("modal-open"),window.addEventListener("keydown",I)}function B(){o.backdropModalElem.classList.remove("is-open"),document.body.classList.remove("modal-open"),window.removeEventListener("keydown",I)}const nt="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAATCAYAAACQjC21AAAABHNCSVQICAgIfAhkiAAAASRJREFUOI2NkzFygzAURHeFT5JrpEC4y2XscWGGLtB57IIhF8g1UkWiyDlyEvRTJDhIYElbMqv3V6sPkKF6P7T1fmhzvEXK0OheC/gOQD8/vfDr+8PG/CoFnFi85iTLAja614To+wdBEh4FbqVLdclYOkdlNlOIqy72ZDeBje61U0oDgAjL/0mLq25IQA9IyqicsztHZSB3SIzhJwkHCvTEolQgumxKaghlJBDvK1dzrwoALvZklbgq7CVHAtrlI61e+Vy9mdSDLGE3c6i8pKGJlDE3XSHTqv/krxfTvG5R4HIXU9ryrq+c2d8jrwdsdL+GEd3VHPloC8IzHnDVCdFdP48t8LtaN3OoQnB4ZhdOFNCSMs6gUH/7Zuv90IqwLNzkpf4B4QeBWWwk9AEAAAAASUVORK5CYII=",rt="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAATCAYAAACQjC21AAAABHNCSVQICAgIfAhkiAAAALBJREFUOI2tk9sVwyAMQ+UsFjpZyWSEydQf2gaDwSnVX7B84+MH4BDJSDJ6vB5Y4FdT6OZgPtfLKlLVkSRXgUkDf+5lr7qLgpUnJfg27JeYmVR0qu8M4JTlvqifbACOPwIzgGm/vAoVukB7U50pjYZkrYoJ0/m9S8k3etb033N6IwUPcO+8WWq8oh/Ie3spIhWjqtCY1lGSHmivw8r5BKOaYuwB1CY0Hg1MQ1PrrSp8AbFIZxE4LYnOAAAAAElFTkSuQmCC";function it(){document.querySelectorAll(".rating").forEach(e=>{const A=parseFloat(e.dataset.rating)||0,n=Math.round(A),s=5-n;let a="";for(let r=0;r<n;r++)a+=`<i class="star-custom" style="background-image: url('${nt}');"></i>`;for(let r=0;r<s;r++)a+=`<i class="star-custom" style="background-image: url('${rt}');"></i>`;e.innerHTML=a})}function ot(){const t=new V(".swiper",{slidesPerView:1,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".swiper-pagination",clickable:!0,type:"custom",renderCustom:function(e,A,n){return console.log(`current= ${A}`),console.log(`total = ${n}`),A===1?`
            <span class="swiper-pagination-bullet active" data-index="0"></span>
            <span class="swiper-pagination-bullet" data-index="${Math.floor(n/2)}"></span>
            <span class="swiper-pagination-bullet" data-index="${n-1}"></span>
          `:A===n?`
            <span class="swiper-pagination-bullet" data-index="0"></span>
            <span class="swiper-pagination-bullet" data-index="${Math.floor(n/2)}"></span>
            <span class="swiper-pagination-bullet active" data-index="${n}"></span>
          `:`
          <span class="swiper-pagination-bullet" data-index="0"></span>
          <span class="swiper-pagination-bullet active" data-index="${Math.floor(n/2)}"></span>
          <span class="swiper-pagination-bullet" data-index="${n-1}"></span>
        `}},mousewheel:!0,keyboard:!0,on:{init(){this.pagination.render(),this.pagination.update()},slideChange(){this.pagination.render(),this.pagination.update()}}});document.querySelector(".swiper-pagination").addEventListener("click",e=>{const A=e.target.closest(".swiper-pagination-bullet");console.log(A),A&&t.slideTo(parseInt(A.dataset.index))})}async function lt(){try{const t=await tt();W(t),it(),ot()}catch(t){console.error("Error initializing feedback:",t)}}lt();document.addEventListener("DOMContentLoaded",()=>{const t={openBtn:document.querySelector("[data-menu-open]"),closeBtn:document.querySelector("[data-menu-close]"),menu:document.querySelector("[data-menu]"),links:document.querySelectorAll(".menu-list .link-menu"),header:document.querySelector(".header")},e={scrollBehavior:"smooth",scrollDelay:300},A=s=>{t.menu.classList.toggle("is-open",s),document.body.style.overflow=s?"hidden":"",document.documentElement.style.scrollBehavior=s?"auto":e.scrollBehavior},n=s=>{const a=document.querySelector(s);if(!a)return;const r=t.header.offsetHeight,i=a.getBoundingClientRect().top+window.scrollY-r;window.scrollTo({top:i,behavior:e.scrollBehavior})};t.openBtn.addEventListener("click",()=>A(!0)),t.closeBtn.addEventListener("click",()=>A(!1)),t.menu.addEventListener("click",s=>{!s.target.closest("[data-menu-close]")&&!s.target.closest(".link-menu")&&!s.target.closest(".link-logo")&&A(!1)}),t.links.forEach(s=>{s.addEventListener("click",a=>{const r=s.getAttribute("href");if(!r.startsWith("#"))return;a.preventDefault(),t.menu.classList.contains("is-open")?(A(!1),setTimeout(()=>n(r),e.scrollDelay)):n(r)})}),window.addEventListener("resize",()=>{window.innerWidth>=768&&t.menu.classList.contains("is-open")&&A(!1)})});
//# sourceMappingURL=index.js.map
