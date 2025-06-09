import{a as l,S as N}from"./assets/vendor-Breb73Hu.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const w={artistsList:document.querySelector(".artists"),loadMoreBtn:document.querySelector(".load-more-btn"),learnMoreArtistBtns:document.querySelectorAll(".learn-more-artist-btn"),artists:document.querySelector(".list-artists"),modalAlbumList:document.querySelector(".modal-list__album")},C="/project-team-06-2025/assets/sprite-BnzrclCM.svg",H="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAgICAgJCAkKCgkNDgwODRMREBARExwUFhQWFBwrGx8bGx8bKyYuJSMlLiZENS8vNUROQj5CTl9VVV93cXecnNEBCAgICAkICQoKCQ0ODA4NExEQEBETHBQWFBYUHCsbHxsbHxsrJi4lIyUuJkQ1Ly81RE5CPkJOX1VVX3dxd5yc0f/CABEIASwB6AMBIgACEQEDEQH/xAAtAAEBAQEBAQEBAAAAAAAAAAAABQQDBgIBBwEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEAMQAAAA/vkL8+AAAAAAAAAAAAAAAAAAAAAAAAAAAAB9/A9EgD4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA59I5qTBTTBTTBTTBT1QtZWAAAAAAAAAAAAAAAAAAAAAAAAAjWYxnAOhzryKZwx6cw05tJYAAAAAAAAAAAAAAAAAAAAAAAAAjWYxnOxoofX6QudrEZfi/EOenNpLAAAAAAAAAAAAAAAAAAAAAAAAAEazGONqLrKiWKiWKnHCMejh3LAAAAAAAAAAAAAAAAAAAAAAAAAE6iPPvQDz70A8+9APPvQDz9HeAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAN2H0kkwgAAAAAAAAAAAAAAAAAAAAAAAAAAAG4+Vgf/8QALhAAAgECAwcEAQQDAAAAAAAAAQIDAAQRFFIQEjE0QVBREyEicSAwMoGQYqGx/9oACAEBAAE/AL29EA9OP9//ACnlkkOLuSe9JJIhxViKsb71vg/s4/3Ujl5GY9T3yNzHIjjof69pZUiGLGs9Hoas8mhqzyaGrPJoas8mhqzyaGrPJoas8mhqz0ehqjlSQYqe53bEzsPHt+lZsRMB0IPc7rmJPyitYlUbyhj1xq7gWMqy8D022nML9Hud1zEn4PDJGAWXAHZFeR7gEmIIq5n9YgAfEbbTmF+j3O65iTbaQbx9Rh7DhUiLIpVuBqWNo3KnYY3VQxUgHgdtpzC/R7ndcxJsghMrgdOpoAAAAYAbJ4RKn+Q4Vb2rM2Mi4KKdFdSrD2NSxNE5U/wdlpzC/R7ndcxJSqWYKOJqGJYkCj+T+U8IlTDr0NEFSQeIq05hfo9zuuYkpGKMGHEVnpNK1npNK1npNK1npNK1npNK1npNK1npdK0zFmLHiTVpzC/R7ndwMW9RRj5FbreDW63g1ut4NbreDW63g1ut4NbreDW63g1utpNWkDKfUYYeB/ZnfWzQyk4fFvcHvlnAZZQxHwU4mmVWBVgCDV5bxwudwnDvVnbRzN88aVVQbqgACv/EABQRAQAAAAAAAAAAAAAAAAAAAJD/2gAIAQIBAT8AE3//xAAUEQEAAAAAAAAAAAAAAAAAAACQ/9oACAEDAQE/ABN//9k=",O="icon-youtube",P="learn-more";function V(A,s){if(!A)return"No description available";const t=A.indexOf(".");return t!==-1&&t<=s?A.slice(0,t+1).trim():A.length<=s?A.trim():A.slice(0,s).trim()+"..."}function Y(){const A=window.innerWidth;return A<768?60:A<1024?160:147}function B(){const A=Y(),s=h.map(t=>{const a=(t.genres||[]).map(n=>`<li class="artist-genre">${n}</li>`).join(""),e=t.strArtistThumb||`${H}`,r=V(t.strBiographyEN,A);return`
        <li class="artist-card" id="${t._id}">
          <div class="artist-image-wrapper">
            <img
              class="artist-image"
              src="${e}"
              alt="Фото виконавця ${t.strArtist}"
              loading="lazy"
            />
          </div>

          <div class="artist-content">
            <ul class="artist-genres">
              ${a}
            </ul>
            <h3 class="artist-name">${t.strArtist}</h3>
            <p class="artist-description">${r}</p>

            <button class="learn-more-artist-btn" data-artist-id="${t._id}">
              Learn More
              <svg class="learn-more-icon" width="8" height="15" aria-hidden="true">
                <use href="${C}#${P}"></use>
              </svg>
            </button>
          </div>
        </li>
      `}).join("");w.artistsList.innerHTML=s}function I(){const A=document.querySelector(".loader");A.style.display="block"}function u(){const A=document.querySelector(".loader");A.style.display="none"}function U(){const A=document.querySelector(".load-more-btn");A.style.display="block"}function k(){const A=document.querySelector(".load-more-btn");A.style.display="none"}async function K(A){const{_id:s,strArtist:t,strArtistThumb:a,intFormedYear:e,intMembers:r,strCountry:n,strGender:o,strBiographyEN:f,genres:c=[],albumsList:d=[]}=A,v=c.map(p=>`<li class="artist__genre-item">${p}</li>`).join("");console.log("genres:",c);const g=d.map(({strAlbum:p,intYearReleased:S,tracks:b=[]})=>{const T=b.map(({strTrack:q,intDuration:M,movie:i})=>{const D=Math.floor(M/6e4),F=String(Math.floor(M%6e4/1e3)).padStart(2,"0"),$=i!=null&&i.startsWith("http")?i:i?`https://${i}`:"";return`
        <li class="track__row">
          <span class="track__name track__font">${q}</span>
          <span class="track__time track__font">${D}:${F}</span>
          <span class="track__link track__font">
            ${i?`<a class="track__link__youtube" href="${$}" target="_blank" aria-label="YouTube link">
              <svg class="icon-youtube" width="24" height="24">
                <use href="${C}#${O}"></use>
              </svg>
            </a>`:""}
          </span>
        </li>
      `}).join("");return`
      <li class="album-list-item">
        <h4 class="album__name">${p} (${S})</h4>
        <div class="track__row__name">
        <span class="track__name track__font__title">Track</span>
        <span class="track__time track__font__title">Time</span>
        <span class="track__link track__font__title">Link</span>
        </div>
        <ul class="album__track-list">${T}</ul>
      </li>
    `}).join(""),_=`
    <li class="artist__item" data-id="${s}">
    <h3 class="artist__name">${t}</h3>
    <div class="artist__box">
    <div class="artist__image__modal artist__box__item">
        <img class="artist__image" src="${a}" alt="${t}" width="272">
    </div>
  <div class="artist__box__item">
    <ul class="artist__info">
  <li class="artist__info-item">
    <h4 class="artist__subtitle__info">Years active</h4>
    <p class="artist__info-value">${e}–present</p>
  </li>
  <li class="artist__info-item">
    <h4 class="artist__subtitle__info">Sex</h4>
    <p class="artist__info-value">${o}</p>
  </li>
  <li class="artist__info-item">
    <h4 class="artist__subtitle__info">Members</h4>
    <p class="artist__info-value">${r}</p>
  </li>
  <li class="artist__info-item">
    <h4 class="artist__subtitle__info">Country</h4>
    <p class="artist__info-value">${n}</p>
  </li>
</ul>
<div class="artist__biography">
      <h4 class="artist__subtitle__info">Biography</h4>
        <p class="artist__biography-value">${f}</p>
</div>
      <ul class="artists__genres-list">${v}</ul>
  </div>
</div>
      <h3 class="title__albums-modal">Albums</h3>
      <ul class="modal__album-list">${g}</ul>
    </li>
  `;console.log("this is a foto artist:",A),w.modalAlbumList.innerHTML=_}function x(A){const s=document.querySelector(".swiper-wrapper"),t=A.map(({name:a,rating:e,descr:r})=>`
    <div class="swiper-slide">
        <div class="rating" data-rating="${e}"></div>
        <p class="feedback-descr">"${r}"</p>
        <p class="feedback-name">${a}</p>
    </div>
  `).join("");s.innerHTML=t}l.defaults.baseURL="https://sound-wave.b.goit.study/api";let h=[],m=1;const J=8;let E=0,Q;window.addEventListener("resize",()=>{clearTimeout(Q),Q=setTimeout(()=>{B()},300)});async function L(A=1){const s={limit:8,page:A},t="/artists";try{return(await l.get(t,{params:s})).data}catch(a){throw console.error("Помилка при завантаженні артистів:",a.message),a}}I();L(m).then(A=>{h=A.artists,E=Math.ceil(A.totalArtists/J),B(),u(),m>=E?k():U()}).catch(A=>{console.error("Error during initial loading of artists:",A.message),u()});async function R(){I(),m+=1;try{const s=(await L(m)).artists;if(!s.length){alert("We're sorry, there are no more artists to load."),u(),k();return}h=[...h,...s],B(),u(),m>=E&&k()}catch(A){console.error("Error loading new artists:",A.message),u()}}w.loadMoreBtn.addEventListener("click",R);document.addEventListener("click",A=>{if(A.target.classList.contains("learn-more-artist-btn")){const s=A.target.dataset.artistId;console.log(s)}});async function W(A){const s=`/artists/${A}`;try{const t=await l.get(s);return console.log(t.data),t.data}catch(t){throw console.error("Помилка при отриманні артиста:",t.message),t}}async function j(A){const s=`/artists/${A}/albums`;try{return(await l.get(s)).data}catch(t){throw console.error("Помилка при отриманні альбомів артиста:",t.message),t}}async function z(A=1){const s=[],t="/feedbacks",e={limit:25,page:A};try{const r=await l.get(t,{params:e}),o=r.data.data[0];s.push(o);const f=r.data.total,c=Math.ceil(f/25);let d;do d=Math.floor(Math.random()*c)+1;while(d===1||d===c);const g=(await l.get(t,{params:{limit:25,page:d}})).data.data,_=g[Math.floor(Math.random()*g.length)];s.push(_);const b=(await l.get(t,{params:{limit:25,page:c}})).data.data.at(-1);return s.push(b),s}catch(r){throw console.error("Помилка при отриманні відгуків:",r.message),r}}const y="65ada5b8af9f6d155db4806b";document.addEventListener("DOMContentLoaded",async()=>{try{const A=await W(y),a=((await L()).artists||[]).find(o=>o._id===y),e=(a==null?void 0:a.genres)||[],{albumsList:r=[]}=await j(y),n={...A,genres:e,albumsList:r};K(n)}catch(A){console.error("Помилка при завантаженні артиста або альбомів:",A.message)}});const G="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAATCAYAAACQjC21AAAABHNCSVQICAgIfAhkiAAAASRJREFUOI2NkzFygzAURHeFT5JrpEC4y2XscWGGLtB57IIhF8g1UkWiyDlyEvRTJDhIYElbMqv3V6sPkKF6P7T1fmhzvEXK0OheC/gOQD8/vfDr+8PG/CoFnFi85iTLAja614To+wdBEh4FbqVLdclYOkdlNlOIqy72ZDeBje61U0oDgAjL/0mLq25IQA9IyqicsztHZSB3SIzhJwkHCvTEolQgumxKaghlJBDvK1dzrwoALvZklbgq7CVHAtrlI61e+Vy9mdSDLGE3c6i8pKGJlDE3XSHTqv/krxfTvG5R4HIXU9ryrq+c2d8jrwdsdL+GEd3VHPloC8IzHnDVCdFdP48t8LtaN3OoQnB4ZhdOFNCSMs6gUH/7Zuv90IqwLNzkpf4B4QeBWWwk9AEAAAAASUVORK5CYII=",Z="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAATCAYAAACQjC21AAAABHNCSVQICAgIfAhkiAAAALBJREFUOI2tk9sVwyAMQ+UsFjpZyWSEydQf2gaDwSnVX7B84+MH4BDJSDJ6vB5Y4FdT6OZgPtfLKlLVkSRXgUkDf+5lr7qLgpUnJfg27JeYmVR0qu8M4JTlvqifbACOPwIzgGm/vAoVukB7U50pjYZkrYoJ0/m9S8k3etb033N6IwUPcO+8WWq8oh/Ie3spIhWjqtCY1lGSHmivw8r5BKOaYuwB1CY0Hg1MQ1PrrSp8AbFIZxE4LYnOAAAAAElFTkSuQmCC";function X(){document.querySelectorAll(".rating").forEach(s=>{const t=parseFloat(s.dataset.rating)||0,a=Math.round(t),e=5-a;let r="";for(let n=0;n<a;n++)r+=`<i class="star-custom" style="background-image: url('${G}');"></i>`;for(let n=0;n<e;n++)r+=`<i class="star-custom" style="background-image: url('${Z}');"></i>`;s.innerHTML=r})}function AA(){new N(".swiper",{navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".swiper-pagination",clickable:!0},mousewheel:!0,keyboard:!0})}async function tA(){const A=await z();x(A),AA(),X()}tA();document.addEventListener("DOMContentLoaded",()=>{const A={openBtn:document.querySelector("[data-menu-open]"),closeBtn:document.querySelector("[data-menu-close]"),menu:document.querySelector("[data-menu]"),links:document.querySelectorAll(".menu-list .link-menu"),header:document.querySelector(".header")},s={scrollBehavior:"smooth",scrollDelay:300},t=e=>{A.menu.classList.toggle("is-open",e),document.body.style.overflow=e?"hidden":"",document.documentElement.style.scrollBehavior=e?"auto":s.scrollBehavior},a=e=>{const r=document.querySelector(e);if(!r)return;const n=A.header.offsetHeight,o=r.getBoundingClientRect().top+window.scrollY-n;window.scrollTo({top:o,behavior:s.scrollBehavior})};A.openBtn.addEventListener("click",()=>t(!0)),A.closeBtn.addEventListener("click",()=>t(!1)),A.menu.addEventListener("click",e=>{!e.target.closest("[data-menu-close]")&&!e.target.closest(".link-menu")&&!e.target.closest(".link-logo")&&t(!1)}),A.links.forEach(e=>{e.addEventListener("click",r=>{const n=e.getAttribute("href");if(!n.startsWith("#"))return;r.preventDefault(),A.menu.classList.contains("is-open")?(t(!1),setTimeout(()=>a(n),s.scrollDelay)):a(n)})}),window.addEventListener("resize",()=>{window.innerWidth>=768&&A.menu.classList.contains("is-open")&&t(!1)})});
//# sourceMappingURL=index.js.map
