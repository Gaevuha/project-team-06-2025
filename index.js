import{a as c,S as F}from"./assets/vendor-Breb73Hu.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();const d={artistsList:document.querySelector(".artists"),loadMoreBtn:document.querySelector(".load-more-btn"),learnMoreArtistBtns:document.querySelectorAll(".learn-more-artist-btn"),artists:document.querySelector(".list-artists"),modalAlbumList:document.querySelector(".modal-list__album"),backdropModalElem:document.querySelector(".backdrop"),closeModalBtn:document.querySelector(".close-btn-modal")},Q="/project-team-06-2025/assets/sprite-CXotorLC.svg",$="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAgICAgJCAkKCgkNDgwODRMREBARExwUFhQWFBwrGx8bGx8bKyYuJSMlLiZENS8vNUROQj5CTl9VVV93cXecnNEBCAgICAkICQoKCQ0ODA4NExEQEBETHBQWFBYUHCsbHxsbHxsrJi4lIyUuJkQ1Ly81RE5CPkJOX1VVX3dxd5yc0f/CABEIASwB6AMBIgACEQEDEQH/xAAtAAEBAQEBAQEBAAAAAAAAAAAABQQDBgIBBwEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEAMQAAAA/vkL8+AAAAAAAAAAAAAAAAAAAAAAAAAAAAB9/A9EgD4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA59I5qTBTTBTTBTTBT1QtZWAAAAAAAAAAAAAAAAAAAAAAAAAjWYxnAOhzryKZwx6cw05tJYAAAAAAAAAAAAAAAAAAAAAAAAAjWYxnOxoofX6QudrEZfi/EOenNpLAAAAAAAAAAAAAAAAAAAAAAAAAEazGONqLrKiWKiWKnHCMejh3LAAAAAAAAAAAAAAAAAAAAAAAAAE6iPPvQDz70A8+9APPvQDz9HeAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAN2H0kkwgAAAAAAAAAAAAAAAAAAAAAAAAAAAG4+Vgf/8QALhAAAgECAwcEAQQDAAAAAAAAAQIDAAQRFFIQEjE0QVBREyEicSAwMoGQYqGx/9oACAEBAAE/AL29EA9OP9//ACnlkkOLuSe9JJIhxViKsb71vg/s4/3Ujl5GY9T3yNzHIjjof69pZUiGLGs9Hoas8mhqzyaGrPJoas8mhqzyaGrPJoas8mhqz0ehqjlSQYqe53bEzsPHt+lZsRMB0IPc7rmJPyitYlUbyhj1xq7gWMqy8D022nML9Hud1zEn4PDJGAWXAHZFeR7gEmIIq5n9YgAfEbbTmF+j3O65iTbaQbx9Rh7DhUiLIpVuBqWNo3KnYY3VQxUgHgdtpzC/R7ndcxJsghMrgdOpoAAAAYAbJ4RKn+Q4Vb2rM2Mi4KKdFdSrD2NSxNE5U/wdlpzC/R7ndcxJSqWYKOJqGJYkCj+T+U8IlTDr0NEFSQeIq05hfo9zuuYkpGKMGHEVnpNK1npNK1npNK1npNK1npNK1npNK1npdK0zFmLHiTVpzC/R7ndwMW9RRj5FbreDW63g1ut4NbreDW63g1ut4NbreDW63g1utpNWkDKfUYYeB/ZnfWzQyk4fFvcHvlnAZZQxHwU4mmVWBVgCDV5bxwudwnDvVnbRzN88aVVQbqgACv/EABQRAQAAAAAAAAAAAAAAAAAAAJD/2gAIAQIBAT8AE3//xAAUEQEAAAAAAAAAAAAAAAAAAACQ/9oACAEDAQE/ABN//9k=",H="icon-youtube",O="learn-more";function P(A,e){if(!A)return"No description available";const t=A.indexOf(".");return t!==-1&&t<=e?A.slice(0,t+1).trim():A.length<=e?A.trim():A.slice(0,e).trim()+"..."}function U(){const A=window.innerWidth;return A<768?60:A<1024?160:147}function w(){const A=U(),e=_.map(t=>{const o=(t.genres||[]).map(a=>`<li class="artist-genre">${a}</li>`).join(""),s=t.strArtistThumb||`${$}`,r=P(t.strBiographyEN,A);return`
        <li class="artist-card" id="${t._id}">
          <div class="artist-image-wrapper">
            <img
              class="artist-image"
              src="${s}"
              alt="Фото виконавця ${t.strArtist}"
              loading="lazy"
            />
          </div>

          <div class="artist-content">
            <ul class="artist-genres">
              ${o}
            </ul>
            <h3 class="artist-name">${t.strArtist}</h3>
            <p class="artist-description">${r}</p>

            <button class="learn-more-artist-btn" data-artist-id="${t._id}">
              Learn More
              <svg class="learn-more-icon" width="8" height="15" aria-hidden="true">
                <use href="${Q}#${O}"></use>
              </svg>
            </button>
          </div>
        </li>
      `}).join("");d.artistsList.innerHTML=e}function L(){const A=document.querySelector(".loader");A.style.display="block"}function m(){const A=document.querySelector(".loader");A.style.display="none"}function V(){const A=document.querySelector(".load-more-btn");A.style.display="block"}function k(){const A=document.querySelector(".load-more-btn");A.style.display="none"}async function Y(A){const{_id:e,strArtist:t,strArtistThumb:o,intFormedYear:s,intMembers:r,strCountry:a,strGender:n,strBiographyEN:g,genres:i=[],albumsList:u=[]}=A,v=i.map(f=>`<li class="artist__genre-item">${f}</li>`).join("");console.log("genres:",i);const h=u.map(({strAlbum:f,intYearReleased:M,tracks:y=[]})=>{const I=y.map(({strTrack:T,intDuration:S,movie:l})=>{const q=Math.floor(S/6e4),D=String(Math.floor(S%6e4/1e3)).padStart(2,"0"),N=l!=null&&l.startsWith("http")?l:l?`https://${l}`:"";return`
        <li class="track__row">
          <span class="track__name track__font">${T}</span>
          <span class="track__time track__font">${q}:${D}</span>
          <span class="track__link track__font">
            ${l?`<a class="track__link__youtube" href="${N}" target="_blank" aria-label="YouTube link" rel="noopener noreferrer">
              <svg class="icon-youtube" width="24" height="24">
                <use href="${Q}#${H}"></use>
              </svg>
            </a>`:""}
          </span>
        </li>
      `}).join("");return`
      <li class="album-list-item">
        <h4 class="album__name">${f} (${M})</h4>
        <div class="track__row__name">
        <span class="track__name track__font__title">Track</span>
        <span class="track__time track__font__title">Time</span>
        <span class="track__link track__font__title">Link</span>
        </div>
        <ul class="album__track-list">${I}</ul>
      </li>
    `}).join(""),b=`
    <li class="artist__item" data-id="${e}">
    <h3 class="artist__name">${t}</h3>
    <div class="artist__box">
    <div class="artist__image__modal artist__box__item">
        <img class="artist__image" src="${o}" alt="${t}" width="272">
    </div>
  <div class="artist__box__item">
    <ul class="artist__info">
  <li class="artist__info-item">
    <h4 class="artist__subtitle__info">Years active</h4>
    <p class="artist__info-value">${s}–present</p>
  </li>
  <li class="artist__info-item">
    <h4 class="artist__subtitle__info">Sex</h4>
    <p class="artist__info-value">${n}</p>
  </li>
  <li class="artist__info-item">
    <h4 class="artist__subtitle__info">Members</h4>
    <p class="artist__info-value">${r}</p>
  </li>
  <li class="artist__info-item">
    <h4 class="artist__subtitle__info">Country</h4>
    <p class="artist__info-value">${a}</p>
  </li>
</ul>
<div class="artist__biography">
      <h4 class="artist__subtitle__info">Biography</h4>
        <p class="artist__biography-value">${g}</p>
</div>
      <ul class="artists__genres-list">${v}</ul>
  </div>
</div>
      <h3 class="title__albums-modal">Albums</h3>
      <ul class="modal__album-list">${h}</ul>
    </li>
  `;console.log("this is a foto artist:",A),d.modalAlbumList.innerHTML=b}function K(A){const e=document.querySelector(".swiper-wrapper"),t=A.map(({name:o,rating:s,descr:r})=>`
    <div class="swiper-slide">
        <div class="rating" data-rating="${s}"></div>
        <p class="feedback-descr">"${r}"</p>
        <p class="feedback-name">${o}</p>
    </div>
  `).join("");e.innerHTML=t}c.defaults.baseURL="https://sound-wave.b.goit.study/api";let _=[],p=1;const x=8;let E=0,C;window.addEventListener("resize",()=>{clearTimeout(C),C=setTimeout(()=>{w()},300)});async function B(A=1){const e={limit:8,page:A},t="/artists";try{return(await c.get(t,{params:e})).data}catch(o){throw console.error("Помилка при завантаженні артистів:",o.message),o}}L();B(p).then(A=>{_=A.artists,E=Math.ceil(A.totalArtists/x),w(),m(),p>=E?k():V()}).catch(A=>{console.error("Error during initial loading of artists:",A.message),m()});async function J(){L(),p+=1;try{const e=(await B(p)).artists;if(!e.length){alert("We're sorry, there are no more artists to load."),m(),k();return}_=[..._,...e],w(),m(),p>=E&&k()}catch(A){console.error("Error loading new artists:",A.message),m()}}d.loadMoreBtn.addEventListener("click",J);document.addEventListener("click",A=>{if(A.target.classList.contains("learn-more-artist-btn")){const e=A.target.dataset.artistId;console.log(e)}});async function R(A){const e=`/artists/${A}`;try{const t=await c.get(e);return console.log(t.data),t.data}catch(t){throw console.error("Помилка при отриманні артиста:",t.message),t}}async function W(A){const e=`/artists/${A}/albums`;try{return(await c.get(e)).data}catch(t){throw console.error("Помилка при отриманні альбомів артиста:",t.message),t}}async function j(A=1){const e=[],t="/feedbacks",s={limit:25,page:A};try{const r=await c.get(t,{params:s}),n=r.data.data[0];e.push(n);const g=r.data.total,i=Math.ceil(g/25);let u;do u=Math.floor(Math.random()*i)+1;while(u===1||u===i);const h=(await c.get(t,{params:{limit:25,page:u}})).data.data,b=h[Math.floor(Math.random()*h.length)];e.push(b);const y=(await c.get(t,{params:{limit:25,page:i}})).data.data.at(-1);return e.push(y),e}catch(r){throw console.error("Помилка при отриманні відгуків:",r.message),r}}d.artistsList.addEventListener("click",z);d.closeModalBtn.addEventListener("click",G);async function z(A){if(A.target.tagName!=="BUTTON")return;L();const e=A.target.dataset.artistId;try{const t=await R(e),r=((await B()).artists||[]).find(i=>i._id===e),a=(r==null?void 0:r.genres)||[],{albumsList:n=[]}=await W(e),g={...t,genres:a,albumsList:n};Y(g),m(),Z()}catch(t){console.error("Помилка при завантаженні артиста або альбомів:",t.message)}}function G(A){X()}function Z(){d.backdropModalElem.classList.add("is-open"),document.body.classList.add("modal-open")}function X(){d.backdropModalElem.classList.remove("is-open"),document.body.classList.remove("modal-open")}const AA="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAATCAYAAACQjC21AAAABHNCSVQICAgIfAhkiAAAASRJREFUOI2NkzFygzAURHeFT5JrpEC4y2XscWGGLtB57IIhF8g1UkWiyDlyEvRTJDhIYElbMqv3V6sPkKF6P7T1fmhzvEXK0OheC/gOQD8/vfDr+8PG/CoFnFi85iTLAja614To+wdBEh4FbqVLdclYOkdlNlOIqy72ZDeBje61U0oDgAjL/0mLq25IQA9IyqicsztHZSB3SIzhJwkHCvTEolQgumxKaghlJBDvK1dzrwoALvZklbgq7CVHAtrlI61e+Vy9mdSDLGE3c6i8pKGJlDE3XSHTqv/krxfTvG5R4HIXU9ryrq+c2d8jrwdsdL+GEd3VHPloC8IzHnDVCdFdP48t8LtaN3OoQnB4ZhdOFNCSMs6gUH/7Zuv90IqwLNzkpf4B4QeBWWwk9AEAAAAASUVORK5CYII=",tA="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAATCAYAAACQjC21AAAABHNCSVQICAgIfAhkiAAAALBJREFUOI2tk9sVwyAMQ+UsFjpZyWSEydQf2gaDwSnVX7B84+MH4BDJSDJ6vB5Y4FdT6OZgPtfLKlLVkSRXgUkDf+5lr7qLgpUnJfg27JeYmVR0qu8M4JTlvqifbACOPwIzgGm/vAoVukB7U50pjYZkrYoJ0/m9S8k3etb033N6IwUPcO+8WWq8oh/Ie3spIhWjqtCY1lGSHmivw8r5BKOaYuwB1CY0Hg1MQ1PrrSp8AbFIZxE4LYnOAAAAAElFTkSuQmCC";function eA(){document.querySelectorAll(".rating").forEach(e=>{const t=parseFloat(e.dataset.rating)||0,o=Math.round(t),s=5-o;let r="";for(let a=0;a<o;a++)r+=`<i class="star-custom" style="background-image: url('${AA}');"></i>`;for(let a=0;a<s;a++)r+=`<i class="star-custom" style="background-image: url('${tA}');"></i>`;e.innerHTML=r})}function sA(){new F(".swiper",{navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".swiper-pagination",clickable:!0},mousewheel:!0,keyboard:!0})}async function rA(){const A=await j();K(A),sA(),eA()}rA();document.addEventListener("DOMContentLoaded",()=>{const A={openBtn:document.querySelector("[data-menu-open]"),closeBtn:document.querySelector("[data-menu-close]"),menu:document.querySelector("[data-menu]"),links:document.querySelectorAll(".menu-list .link-menu"),header:document.querySelector(".header")},e={scrollBehavior:"smooth",scrollDelay:300},t=s=>{A.menu.classList.toggle("is-open",s),document.body.style.overflow=s?"hidden":"",document.documentElement.style.scrollBehavior=s?"auto":e.scrollBehavior},o=s=>{const r=document.querySelector(s);if(!r)return;const a=A.header.offsetHeight,n=r.getBoundingClientRect().top+window.scrollY-a;window.scrollTo({top:n,behavior:e.scrollBehavior})};A.openBtn.addEventListener("click",()=>t(!0)),A.closeBtn.addEventListener("click",()=>t(!1)),A.menu.addEventListener("click",s=>{!s.target.closest("[data-menu-close]")&&!s.target.closest(".link-menu")&&!s.target.closest(".link-logo")&&t(!1)}),A.links.forEach(s=>{s.addEventListener("click",r=>{const a=s.getAttribute("href");if(!a.startsWith("#"))return;r.preventDefault(),A.menu.classList.contains("is-open")?(t(!1),setTimeout(()=>o(a),e.scrollDelay)):o(a)})}),window.addEventListener("resize",()=>{window.innerWidth>=768&&A.menu.classList.contains("is-open")&&t(!1)})});
//# sourceMappingURL=index.js.map
