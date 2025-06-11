import{a as d,S as O}from"./assets/vendor-C_cafi3u.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function A(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(s){if(s.ep)return;s.ep=!0;const a=A(s);fetch(s.href,a)}})();const o={artistsList:document.querySelector(".artists"),loadMoreBtn:document.querySelector(".load-more-btn"),learnMoreArtistBtns:document.querySelectorAll(".learn-more-artist-btn"),artists:document.querySelector(".list-artists"),modalAlbumList:document.querySelector(".modal-list__album"),backdropModalElem:document.querySelector(".backdrop"),closeModalBtn:document.querySelector(".close-btn-modal")},C="/project-team-06-2025/assets/sprite-BMp1TjPy.svg",F="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAgICAgJCAkKCgkNDgwODRMREBARExwUFhQWFBwrGx8bGx8bKyYuJSMlLiZENS8vNUROQj5CTl9VVV93cXecnNEBCAgICAkICQoKCQ0ODA4NExEQEBETHBQWFBYUHCsbHxsbHxsrJi4lIyUuJkQ1Ly81RE5CPkJOX1VVX3dxd5yc0f/CABEIASwB6AMBIgACEQEDEQH/xAAtAAEBAQEBAQEBAAAAAAAAAAAABQQDBgIBBwEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEAMQAAAA/vkL8+AAAAAAAAAAAAAAAAAAAAAAAAAAAAB9/A9EgD4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA59I5qTBTTBTTBTTBT1QtZWAAAAAAAAAAAAAAAAAAAAAAAAAjWYxnAOhzryKZwx6cw05tJYAAAAAAAAAAAAAAAAAAAAAAAAAjWYxnOxoofX6QudrEZfi/EOenNpLAAAAAAAAAAAAAAAAAAAAAAAAAEazGONqLrKiWKiWKnHCMejh3LAAAAAAAAAAAAAAAAAAAAAAAAAE6iPPvQDz70A8+9APPvQDz9HeAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAN2H0kkwgAAAAAAAAAAAAAAAAAAAAAAAAAAAG4+Vgf/8QALhAAAgECAwcEAQQDAAAAAAAAAQIDAAQRFFIQEjE0QVBREyEicSAwMoGQYqGx/9oACAEBAAE/AL29EA9OP9//ACnlkkOLuSe9JJIhxViKsb71vg/s4/3Ujl5GY9T3yNzHIjjof69pZUiGLGs9Hoas8mhqzyaGrPJoas8mhqzyaGrPJoas8mhqz0ehqjlSQYqe53bEzsPHt+lZsRMB0IPc7rmJPyitYlUbyhj1xq7gWMqy8D022nML9Hud1zEn4PDJGAWXAHZFeR7gEmIIq5n9YgAfEbbTmF+j3O65iTbaQbx9Rh7DhUiLIpVuBqWNo3KnYY3VQxUgHgdtpzC/R7ndcxJsghMrgdOpoAAAAYAbJ4RKn+Q4Vb2rM2Mi4KKdFdSrD2NSxNE5U/wdlpzC/R7ndcxJSqWYKOJqGJYkCj+T+U8IlTDr0NEFSQeIq05hfo9zuuYkpGKMGHEVnpNK1npNK1npNK1npNK1npNK1npNK1npdK0zFmLHiTVpzC/R7ndwMW9RRj5FbreDW63g1ut4NbreDW63g1ut4NbreDW63g1utpNWkDKfUYYeB/ZnfWzQyk4fFvcHvlnAZZQxHwU4mmVWBVgCDV5bxwudwnDvVnbRzN88aVVQbqgACv/EABQRAQAAAAAAAAAAAAAAAAAAAJD/2gAIAQIBAT8AE3//xAAUEQEAAAAAAAAAAAAAAAAAAACQ/9oACAEDAQE/ABN//9k=",P="icon-youtube",V="learn-more";function U(t,e){if(!t)return"No description available";const A=t.indexOf(".");return A!==-1&&A<=e?t.slice(0,A+1).trim():t.length<=e?t.trim():t.slice(0,e).trim()+"..."}function Y(){const t=window.innerWidth;return t<768?60:t<1024?160:147}function k(){const t=Y(),e=h.map(A=>{const n=(A.genres||[]).map(r=>`<li class="artist-genre">${r}</li>`).join(""),s=A.strArtistThumb||`${F}`,a=U(A.strBiographyEN,t);return`
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
                <use href="${C}#${V}"></use>
              </svg>
            </button>
          </div>
        </li>
      `}).join("");o.artistsList.innerHTML=e}function E(t){t.style.display="block"}function p(t){t.style.display="none"}function K(){const t=document.querySelector(".load-more-btn");t.style.display="block"}function y(){const t=document.querySelector(".load-more-btn");t.style.display="none"}async function j(t){const{_id:e,strArtist:A,strArtistThumb:n,intFormedYear:s,intMembers:a,strCountry:r,strGender:i,strBiographyEN:m,genres:u=[],albumsList:g=[]}=t,_=u.map(b=>`<li class="artist__genre-item">${b}</li>`).join("");console.log("genres:",u);const Q=g.map(({strAlbum:b,intYearReleased:T,tracks:q=[]})=>{const $=q.map(({strTrack:D,intDuration:B,movie:l})=>{const x=Math.floor(B/6e4),N=String(Math.floor(B%6e4/1e3)).padStart(2,"0"),H=l!=null&&l.startsWith("http")?l:l?`https://${l}`:"";return`
        <li class="track__row">
          <span class="track__name track__font">${D}</span>
          <span class="track__time track__font">${x}:${N}</span>
          <span class="track__link track__font">
            ${l?`<a class="track__link__youtube" href="${H}" target="_blank" aria-label="YouTube link" rel="noopener noreferrer">
              <svg class="icon-youtube" width="24" height="24">
                <use href="${C}#${P}"></use>
              </svg>
            </a>`:""}
          </span>
        </li>
      `}).join("");return`
      <li class="album-list-item">
        <h4 class="album__name">${b} (${T})</h4>
        <div class="track__row__name">
        <span class="track__name track__font__title">Track</span>
        <span class="track__time track__font__title">Time</span>
        <span class="track__link track__font__title">Link</span>
        </div>
        <ul class="album__track-list">${$}</ul>
      </li>
    `}).join(""),I=`
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
    <p class="artist__info-value">${s}–present</p>
  </li>
  <li class="artist__info-item">
    <h4 class="artist__subtitle__info">Sex</h4>
    <p class="artist__info-value">${i}</p>
  </li>
  <li class="artist__info-item">
    <h4 class="artist__subtitle__info">Members</h4>
    <p class="artist__info-value">${a}</p>
  </li>
  <li class="artist__info-item">
    <h4 class="artist__subtitle__info">Country</h4>
    <p class="artist__info-value">${r}</p>
  </li>
</ul>
<div class="artist__biography">
      <h4 class="artist__subtitle__info">Biography</h4>
        <p class="artist__biography-value">${m}</p>
</div>
      <ul class="artists__genres-list">${_}</ul>
  </div>
</div>
      <h3 class="title__albums-modal">Albums</h3>
      <ul class="modal__album-list">${Q}</ul>
    </li>
  `;console.log("this is a foto artist:",t),o.modalAlbumList.innerHTML=I}function J(t){const e=document.querySelector(".swiper-wrapper"),A=t.map(({name:n,rating:s,descr:a})=>`
    <div class="swiper-slide">
      <div class="rating" data-rating="${s}"></div>
      <p class="feedback-descr">"${a}"</p>
      <p class="feedback-name">${n}</p>
    </div>
  `).join("");e.innerHTML=A}d.defaults.baseURL="https://sound-wave.b.goit.study/api";let h=[],f=1;const R=8;let w=0,M;const c=document.querySelector(".section-artists-loader");window.addEventListener("resize",()=>{clearTimeout(M),M=setTimeout(()=>{k()},300)});async function L(t=1){const e={limit:8,page:t},A="/artists";try{return(await d.get(A,{params:e})).data}catch(n){throw console.error("Помилка при завантаженні артистів:",n.message),n}}E(c);L(f).then(t=>{h=t.artists,w=Math.ceil(t.totalArtists/R),k(),p(c),f>=w?y():K()}).catch(t=>{console.error("Error during initial loading of artists:",t.message),p(c)});async function W(){E(c),f+=1;try{const e=(await L(f)).artists;if(!e.length){alert("We're sorry, there are no more artists to load."),p(c),y();return}h=[...h,...e],k(),p(c),f>=w&&y()}catch(t){console.error("Error loading new artists:",t.message),p(c)}}o.loadMoreBtn.addEventListener("click",W);document.addEventListener("click",t=>{if(t.target.classList.contains("learn-more-artist-btn")){const e=t.target.dataset.artistId;console.log(e)}});async function z(t){const e=`/artists/${t}`;try{const A=await d.get(e);return console.log(A.data),A.data}catch(A){throw console.error("Помилка при отриманні артиста:",A.message),A}}async function G(t){const e=`/artists/${t}/albums`;try{return(await d.get(e)).data}catch(A){throw console.error("Помилка при отриманні альбомів артиста:",A.message),A}}async function Z(t=1){const e=[],A="/feedbacks",s={limit:25,page:t};try{const a=await d.get(A,{params:s});e.push(...a.data.data),console.log(a.data);const r=a.data.total,i=Math.ceil(r/25);for(let g=2;g<i;g++){const _=await d.get(A,{params:{limit:25,page:g}});e.push(..._.data.data)}const m=r-25*(i-1),u=await d.get(A,{params:{limit:m,page:i}});return e.push(...u.data.data),console.log(e),e}catch(a){throw console.error("Помилка при отриманні відгуків:",a.message),a}}async function X(t){if(t.target.tagName!=="BUTTON")return;E();const e=t.target.dataset.artistId;try{const A=await z(e),a=((await L()).artists||[]).find(u=>u._id===e),r=(a==null?void 0:a.genres)||[],{albumsList:i=[]}=await G(e),m={...A,genres:r,albumsList:i};j(m),p(),et()}catch(A){console.error("Помилка при завантаженні артиста або альбомів:",A.message)}}function tt(){v()}function At(t){t.target===t.currentTarget&&v()}o.artistsList.addEventListener("click",X);o.closeModalBtn.addEventListener("click",tt);o.backdropModalElem.addEventListener("click",At);function S(t){t.key==="Escape"&&v()}function et(){o.backdropModalElem.classList.add("is-open"),document.body.classList.add("modal-open"),window.addEventListener("keydown",S)}function v(){o.backdropModalElem.classList.remove("is-open"),document.body.classList.remove("modal-open"),window.removeEventListener("keydown",S)}const st="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAATCAYAAACQjC21AAAABHNCSVQICAgIfAhkiAAAASRJREFUOI2NkzFygzAURHeFT5JrpEC4y2XscWGGLtB57IIhF8g1UkWiyDlyEvRTJDhIYElbMqv3V6sPkKF6P7T1fmhzvEXK0OheC/gOQD8/vfDr+8PG/CoFnFi85iTLAja614To+wdBEh4FbqVLdclYOkdlNlOIqy72ZDeBje61U0oDgAjL/0mLq25IQA9IyqicsztHZSB3SIzhJwkHCvTEolQgumxKaghlJBDvK1dzrwoALvZklbgq7CVHAtrlI61e+Vy9mdSDLGE3c6i8pKGJlDE3XSHTqv/krxfTvG5R4HIXU9ryrq+c2d8jrwdsdL+GEd3VHPloC8IzHnDVCdFdP48t8LtaN3OoQnB4ZhdOFNCSMs6gUH/7Zuv90IqwLNzkpf4B4QeBWWwk9AEAAAAASUVORK5CYII=",at="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAATCAYAAACQjC21AAAABHNCSVQICAgIfAhkiAAAALBJREFUOI2tk9sVwyAMQ+UsFjpZyWSEydQf2gaDwSnVX7B84+MH4BDJSDJ6vB5Y4FdT6OZgPtfLKlLVkSRXgUkDf+5lr7qLgpUnJfg27JeYmVR0qu8M4JTlvqifbACOPwIzgGm/vAoVukB7U50pjYZkrYoJ0/m9S8k3etb033N6IwUPcO+8WWq8oh/Ie3spIhWjqtCY1lGSHmivw8r5BKOaYuwB1CY0Hg1MQ1PrrSp8AbFIZxE4LYnOAAAAAElFTkSuQmCC";function nt(){document.querySelectorAll(".rating").forEach(e=>{const A=parseFloat(e.dataset.rating)||0,n=Math.round(A),s=5-n;let a="";for(let r=0;r<n;r++)a+=`<i class="star-custom" style="background-image: url('${st}');"></i>`;for(let r=0;r<s;r++)a+=`<i class="star-custom" style="background-image: url('${at}');"></i>`;e.innerHTML=a})}function rt(){const t=new O(".swiper",{slidesPerView:1,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".swiper-pagination",clickable:!0,type:"custom",renderCustom:function(e,A,n){return console.log(`current= ${A}`),console.log(`total = ${n}`),A===1?`
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
        `}},mousewheel:!0,keyboard:!0,on:{init(){this.pagination.render(),this.pagination.update()},slideChange(){this.pagination.render(),this.pagination.update()}}});document.querySelector(".swiper-pagination").addEventListener("click",e=>{const A=e.target.closest(".swiper-pagination-bullet");console.log(A),A&&t.slideTo(parseInt(A.dataset.index))})}async function it(){try{const t=await Z();J(t),nt(),rt()}catch(t){console.error("Error initializing feedback:",t)}}it();document.addEventListener("DOMContentLoaded",()=>{const t={openBtn:document.querySelector("[data-menu-open]"),closeBtn:document.querySelector("[data-menu-close]"),menu:document.querySelector("[data-menu]"),links:document.querySelectorAll(".menu-list .link-menu"),header:document.querySelector(".header")},e={scrollBehavior:"smooth",scrollDelay:300},A=s=>{t.menu.classList.toggle("is-open",s),document.body.style.overflow=s?"hidden":"",document.documentElement.style.scrollBehavior=s?"auto":e.scrollBehavior},n=s=>{const a=document.querySelector(s);if(!a)return;const r=t.header.offsetHeight,i=a.getBoundingClientRect().top+window.scrollY-r;window.scrollTo({top:i,behavior:e.scrollBehavior})};t.openBtn.addEventListener("click",()=>A(!0)),t.closeBtn.addEventListener("click",()=>A(!1)),t.menu.addEventListener("click",s=>{!s.target.closest("[data-menu-close]")&&!s.target.closest(".link-menu")&&!s.target.closest(".link-logo")&&A(!1)}),t.links.forEach(s=>{s.addEventListener("click",a=>{const r=s.getAttribute("href");if(!r.startsWith("#"))return;a.preventDefault(),t.menu.classList.contains("is-open")?(A(!1),setTimeout(()=>n(r),e.scrollDelay)):n(r)})}),window.addEventListener("resize",()=>{window.innerWidth>=768&&t.menu.classList.contains("is-open")&&A(!1)})});
//# sourceMappingURL=index.js.map
