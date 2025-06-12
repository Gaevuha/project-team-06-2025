import{a as c,S as U}from"./assets/vendor-C_cafi3u.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const r of n.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&a(r)}).observe(document,{childList:!0,subtree:!0});function A(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function a(s){if(s.ep)return;s.ep=!0;const n=A(s);fetch(s.href,n)}})();const i={artistsList:document.querySelector(".artists"),loadMoreBtn:document.querySelector(".load-more-btn"),learnMoreArtistBtns:document.querySelectorAll(".learn-more-artist-btn"),artists:document.querySelector(".list-artists"),modalAlbumList:document.querySelector(".modal-list__album"),backdropModalElem:document.querySelector(".backdrop"),closeModalBtn:document.querySelector(".close-btn-modal")},C="/project-team-06-2025/assets/sprite-BMp1TjPy.svg",K="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAgICAgJCAkKCgkNDgwODRMREBARExwUFhQWFBwrGx8bGx8bKyYuJSMlLiZENS8vNUROQj5CTl9VVV93cXecnNEBCAgICAkICQoKCQ0ODA4NExEQEBETHBQWFBYUHCsbHxsbHxsrJi4lIyUuJkQ1Ly81RE5CPkJOX1VVX3dxd5yc0f/CABEIASwB6AMBIgACEQEDEQH/xAAtAAEBAQEBAQEBAAAAAAAAAAAABQQDBgIBBwEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEAMQAAAA/vkL8+AAAAAAAAAAAAAAAAAAAAAAAAAAAAB9/A9EgD4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA59I5qTBTTBTTBTTBT1QtZWAAAAAAAAAAAAAAAAAAAAAAAAAjWYxnAOhzryKZwx6cw05tJYAAAAAAAAAAAAAAAAAAAAAAAAAjWYxnOxoofX6QudrEZfi/EOenNpLAAAAAAAAAAAAAAAAAAAAAAAAAEazGONqLrKiWKiWKnHCMejh3LAAAAAAAAAAAAAAAAAAAAAAAAAE6iPPvQDz70A8+9APPvQDz9HeAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAN2H0kkwgAAAAAAAAAAAAAAAAAAAAAAAAAAAG4+Vgf/8QALhAAAgECAwcEAQQDAAAAAAAAAQIDAAQRFFIQEjE0QVBREyEicSAwMoGQYqGx/9oACAEBAAE/AL29EA9OP9//ACnlkkOLuSe9JJIhxViKsb71vg/s4/3Ujl5GY9T3yNzHIjjof69pZUiGLGs9Hoas8mhqzyaGrPJoas8mhqzyaGrPJoas8mhqz0ehqjlSQYqe53bEzsPHt+lZsRMB0IPc7rmJPyitYlUbyhj1xq7gWMqy8D022nML9Hud1zEn4PDJGAWXAHZFeR7gEmIIq5n9YgAfEbbTmF+j3O65iTbaQbx9Rh7DhUiLIpVuBqWNo3KnYY3VQxUgHgdtpzC/R7ndcxJsghMrgdOpoAAAAYAbJ4RKn+Q4Vb2rM2Mi4KKdFdSrD2NSxNE5U/wdlpzC/R7ndcxJSqWYKOJqGJYkCj+T+U8IlTDr0NEFSQeIq05hfo9zuuYkpGKMGHEVnpNK1npNK1npNK1npNK1npNK1npNK1npdK0zFmLHiTVpzC/R7ndwMW9RRj5FbreDW63g1ut4NbreDW63g1ut4NbreDW63g1utpNWkDKfUYYeB/ZnfWzQyk4fFvcHvlnAZZQxHwU4mmVWBVgCDV5bxwudwnDvVnbRzN88aVVQbqgACv/EABQRAQAAAAAAAAAAAAAAAAAAAJD/2gAIAQIBAT8AE3//xAAUEQEAAAAAAAAAAAAAAAAAAACQ/9oACAEDAQE/ABN//9k=",J="icon-youtube",R="learn-more";function W(e,t){if(!e)return"No description available";const A=e.indexOf(".");return A!==-1&&A<=t?e.slice(0,A+1).trim():e.length<=t?e.trim():e.slice(0,t).trim()+"..."}function z(){const e=window.innerWidth;return e<768?60:e<1024?160:147}function L(){const e=z();i.artistsList.innerHTML="";const t=f.map(A=>{const a=(A.genres||[]).map(r=>`<li class="artist-genre">${r}</li>`).join(""),s=A.strArtistThumb||`${K}`,n=W(A.strBiographyEN,e);return`
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
              ${a}
            </ul>
            <h3 class="artist-name">${A.strArtist}</h3>
            <p class="artist-description">${n}</p>

            <button class="learn-more-artist-btn" data-artist-id="${A._id}">
              Learn More
              <svg class="learn-more-icon" width="8" height="15" aria-hidden="true">
                <use href="${C}#${R}"></use>
              </svg>
            </button>
             <span class="loader section-artists-loader" style="display: none;"></span>
          </div>
        </li>
      `}).join("");i.artistsList.insertAdjacentHTML("beforeend",t)}function Q(e){e.style.display="block"}function y(e){e.style.display="none"}function I(){const e=document.querySelector(".load-more-btn");e.style.display="block"}function b(){const e=document.querySelector(".load-more-btn");e.style.display="none"}async function G(e){const{_id:t,strArtist:A,strArtistThumb:a,intFormedYear:s,intDiedYear:n,intMembers:r,strCountry:o,strGender:u,strBiographyEN:p,genres:m=[],albumsList:E=[]}=e,D=m.map(w=>`<li class="artist__genre-item">${w}</li>`).join(""),x=E.map(({strAlbum:w,intYearReleased:N,tracks:O=[]})=>{const H=O.map(({strTrack:P,intDuration:M,movie:l})=>{const V=Math.floor(M/6e4),Y=String(Math.floor(M%6e4/1e3)).padStart(2,"0"),j=l!=null&&l.startsWith("http")?l:l?`https://${l}`:"";return`
        <li class="track__row">
          <span class="track__name track__font">${P}</span>
          <span class="track__time track__font">${V}:${Y}</span>
          <span class="track__link track__font">
            ${l?`<a class="track__link__youtube" href="${j}" target="_blank" aria-label="YouTube link" rel="noopener noreferrer">
              <svg class="icon-youtube" width="24" height="24">
                <use href="${C}#${J}"></use>
              </svg>
            </a>`:""}
          </span>
        </li>
      `}).join("");return`
      <li class="album-list-item">
        <h4 class="album__name">${w} (${N})</h4>
        <div class="track__row__name">
        <span class="track__name track__font__title">Track</span>
        <span class="track__time track__font__title">Time</span>
        <span class="track__link track__font__title">Link</span>
        </div>
        <ul class="album__track-list">${H}</ul>
      </li>
    `}).join(""),F=`
    <li class="artist__item" data-id="${t}">
    <h3 class="artist__name">${A}</h3>
    <div class="artist__box">
    <div class="artist__image__modal artist__box__item">
        <img class="artist__image" src="${a}" alt="${A}" width="272">
    </div>
  <div class="artist__box__item">
    <ul class="artist__info">
  <li class="artist__info-item">
    <h4 class="artist__subtitle__info">Years active</h4>
    <p class="artist__info-value">${s&&n?`${s} – ${n}`:s?`${s} – present`:"information missing"}</p>
  </li>
  <li class="artist__info-item">
    <h4 class="artist__subtitle__info">Sex</h4>
    <p class="artist__info-value">${u}</p>
  </li>
  <li class="artist__info-item">
    <h4 class="artist__subtitle__info">Members</h4>
    <p class="artist__info-value">${r}</p>
  </li>
  <li class="artist__info-item">
    <h4 class="artist__subtitle__info">Country</h4>
    <p class="artist__info-value">${o}</p>
  </li>
</ul>
<div class="artist__biography">
      <h4 class="artist__subtitle__info">Biography</h4>
        <p class="artist__biography-value">${p}</p>
</div>
      <ul class="artists__genres-list">${D}</ul>
  </div>
</div>
      <h3 class="title__albums-modal">Albums</h3>
      <ul class="modal__album-list">${x}</ul>
    </li>
  `;i.modalAlbumList.innerHTML=F}function Z(e){const t=document.querySelector(".swiper-wrapper"),A=e.map(({name:a,rating:s,descr:n})=>`
    <div class="swiper-slide">
      <div class="rating" data-rating="${s}"></div>
      <p class="feedback-descr">"${n}"</p>
      <p class="feedback-name">${a}</p>
    </div>
  `).join("");t.innerHTML=A}c.defaults.baseURL="https://sound-wave.b.goit.study/api";let f=[],g=1;const X=8;let v=0,S,k;const d=document.querySelector(".section-artists-loader");window.addEventListener("resize",()=>{clearTimeout(S),S=setTimeout(()=>{L()},300)});async function q(e=1){const t={limit:8,page:e},A="/artists";try{return(await c.get(A,{params:t})).data}catch(a){throw console.error("Помилка при завантаженні артистів:",a.message),a}}Q(d);q(g).then(e=>{f=e.artists,v=Math.ceil(e.totalArtists/X),L(),y(d),g>=v?b():I(),k=f.map(({genres:t,_id:A})=>({genres:t,_id:A}))}).catch(e=>{console.error("Error during initial loading of artists:",e.message),y(d)});async function ee(){i.loadMoreBtn.disabled=!0,b(),Q(d),g+=1;try{const t=(await q(g)).artists;if(k=[...k,...t.map(({genres:A,_id:a})=>({genres:A,_id:a}))],!t.length){alert("We're sorry, there are no more artists to load."),y(d),b();return}f=[...f,...t],L(),g>=v?b():I()}catch(e){console.error("Error loading new artists:",e.message)}finally{y(d),i.loadMoreBtn.disabled=!1}}i.loadMoreBtn.addEventListener("click",ee);async function te(e){const t=`/artists/${e}`;try{return(await c.get(t)).data}catch(A){throw console.error("Помилка при отриманні артиста:",A.message),A}}async function Ae(e){const t=`/artists/${e}/albums`;try{return(await c.get(t)).data}catch(A){throw console.error("Помилка при отриманні альбомів артиста:",A.message),A}}async function se(e=1){const t=[],A="/feedbacks",s={limit:25,page:e};try{const n=await c.get(A,{params:s});t.push(...n.data.data);const r=n.data.total,o=Math.ceil(r/25);for(let m=2;m<o;m++){const E=await c.get(A,{params:{limit:25,page:m}});t.push(...E.data.data)}const u=r-25*(o-1),p=await c.get(A,{params:{limit:u,page:o}});return t.push(...p.data.data),t}catch(n){throw console.error("Помилка при отриманні відгуків:",n.message),n}}async function ae(e){if(e.target.tagName!=="BUTTON")return;const t=e.target.dataset.artistId,A=e.target,a=e.target.nextElementSibling;oe(A,a);try{const s=await te(t),n=k.find(({_id:p})=>p===t),r=(n==null?void 0:n.genres)||[],{albumsList:o=[]}=await Ae(t),u={...s,genres:r,albumsList:o};G(u),ie(),le(A,a)}catch(s){console.error("Помилка при завантаженні артиста або альбомів:",s.message)}}function ne(){B()}function re(e){e.target===e.currentTarget&&B()}i.artistsList.addEventListener("click",ae);i.closeModalBtn.addEventListener("click",ne);i.backdropModalElem.addEventListener("click",re);function T(e){e.key==="Escape"&&B()}function ie(){i.backdropModalElem.classList.add("is-open"),document.body.classList.add("modal-open"),window.addEventListener("keydown",T)}function B(){i.backdropModalElem.classList.remove("is-open"),document.body.classList.remove("modal-open"),window.removeEventListener("keydown",T)}function oe(e,t){e.style.display="none",t.style.margin="0",t.style.display="block",t.style.height="27px"}function le(e,t){e.style.display="",t.style.display="none"}const ce="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAATCAYAAACQjC21AAAABHNCSVQICAgIfAhkiAAAASRJREFUOI2NkzFygzAURHeFT5JrpEC4y2XscWGGLtB57IIhF8g1UkWiyDlyEvRTJDhIYElbMqv3V6sPkKF6P7T1fmhzvEXK0OheC/gOQD8/vfDr+8PG/CoFnFi85iTLAja614To+wdBEh4FbqVLdclYOkdlNlOIqy72ZDeBje61U0oDgAjL/0mLq25IQA9IyqicsztHZSB3SIzhJwkHCvTEolQgumxKaghlJBDvK1dzrwoALvZklbgq7CVHAtrlI61e+Vy9mdSDLGE3c6i8pKGJlDE3XSHTqv/krxfTvG5R4HIXU9ryrq+c2d8jrwdsdL+GEd3VHPloC8IzHnDVCdFdP48t8LtaN3OoQnB4ZhdOFNCSMs6gUH/7Zuv90IqwLNzkpf4B4QeBWWwk9AEAAAAASUVORK5CYII=",de="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAATCAYAAACQjC21AAAABHNCSVQICAgIfAhkiAAAALBJREFUOI2tk9sVwyAMQ+UsFjpZyWSEydQf2gaDwSnVX7B84+MH4BDJSDJ6vB5Y4FdT6OZgPtfLKlLVkSRXgUkDf+5lr7qLgpUnJfg27JeYmVR0qu8M4JTlvqifbACOPwIzgGm/vAoVukB7U50pjYZkrYoJ0/m9S8k3etb033N6IwUPcO+8WWq8oh/Ie3spIhWjqtCY1lGSHmivw8r5BKOaYuwB1CY0Hg1MQ1PrrSp8AbFIZxE4LYnOAAAAAElFTkSuQmCC";function ue(){document.querySelectorAll(".rating").forEach(t=>{const A=parseFloat(t.dataset.rating)||0,a=Math.round(A),s=5-a;let n="";for(let r=0;r<a;r++)n+=`<i class="star-custom" style="background-image: url('${ce}');"></i>`;for(let r=0;r<s;r++)n+=`<i class="star-custom" style="background-image: url('${de}');"></i>`;t.innerHTML=n})}function pe(){const e=new U(".swiper",{slidesPerView:1,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".swiper-pagination",clickable:!0,type:"custom",renderCustom:function(t,A,a){return A===1?`
            <span class="swiper-pagination-bullet active" data-index="0"></span>
            <span class="swiper-pagination-bullet" data-index="${Math.floor(a/2)}"></span>
            <span class="swiper-pagination-bullet" data-index="${a-1}"></span>
          `:A===a?`
            <span class="swiper-pagination-bullet" data-index="0"></span>
            <span class="swiper-pagination-bullet" data-index="${Math.floor(a/2)}"></span>
            <span class="swiper-pagination-bullet active" data-index="${a}"></span>
          `:`
          <span class="swiper-pagination-bullet" data-index="0"></span>
          <span class="swiper-pagination-bullet active" data-index="${Math.floor(a/2)}"></span>
          <span class="swiper-pagination-bullet" data-index="${a-1}"></span>
        `}},mousewheel:!0,keyboard:!0,on:{init(){this.pagination.render(),this.pagination.update()},slideChange(){this.pagination.render(),this.pagination.update()}}});document.querySelector(".swiper-pagination").addEventListener("click",t=>{const A=t.target.closest(".swiper-pagination-bullet");console.log(A),A&&e.slideTo(parseInt(A.dataset.index))})}async function me(){try{const e=await se();Z(e),ue(),pe()}catch(e){console.error("Error initializing feedback:",e)}}me();document.addEventListener("DOMContentLoaded",()=>{const e={openBtn:document.querySelector("[data-menu-open]"),closeBtn:document.querySelector("[data-menu-close]"),menu:document.querySelector("[data-menu]"),links:document.querySelectorAll(".menu-list .link-menu"),header:document.querySelector(".header")},t={scrollBehavior:"smooth",scrollDelay:300},A=s=>{e.menu.classList.toggle("is-open",s),document.body.style.overflow=s?"hidden":"",document.documentElement.style.scrollBehavior=s?"auto":t.scrollBehavior},a=s=>{const n=document.querySelector(s);if(!n)return;const r=e.header.offsetHeight,o=n.getBoundingClientRect().top+window.scrollY-r;window.scrollTo({top:o,behavior:t.scrollBehavior})};e.openBtn.addEventListener("click",()=>A(!0)),e.closeBtn.addEventListener("click",()=>A(!1)),e.menu.addEventListener("click",s=>{!s.target.closest("[data-menu-close]")&&!s.target.closest(".link-menu")&&!s.target.closest(".link-logo")&&A(!1)}),e.links.forEach(s=>{s.addEventListener("click",n=>{const r=s.getAttribute("href");if(!r.startsWith("#"))return;n.preventDefault(),e.menu.classList.contains("is-open")?(A(!1),setTimeout(()=>a(r),t.scrollDelay)):a(r)})}),window.addEventListener("resize",()=>{window.innerWidth>=768&&e.menu.classList.contains("is-open")&&A(!1)})});const ge=document.querySelector("[data-modal-feedback-open]"),fe=document.querySelector("[data-modal-feedback-close]");document.querySelector(".modal-feedback");const h=document.querySelector(".modal-overley-feedback"),$=document.querySelector(".modal-feedback-form");ge.addEventListener("click",e=>{he()});fe.addEventListener("click",e=>{_()});function he(){h.classList.add("is-open"),document.documentElement.style.overflow="hidden"}function _(){h.classList.remove("is-open"),document.documentElement.style.overflow=""}h.addEventListener("click",e=>{e.target===h&&_()});document.addEventListener("keydown",e=>{e.key==="Escape"&&h.classList.contains("is-open")&&_()});$.addEventListener("submit",e=>{e.preventDefault();const t=e.target.elements["user-name"].value.trim(),A=e.target.elements["user-comment"].value.trim(),a=Number(e.target.elements.rating.value),s=be(t,A,a);if(s.length>0){alert(s.join(`
`));return}ye({name:t,descr:A,rating:a})});function be(e,t,A){const a=[];return(e.length<3||e.length>16)&&a.push("Enter 3...16 characters"),A||a.push("Будь ласка, виберіть рейтинг."),(t.length<10||t.length>512)&&a.push("Коментар не може перевищувати 512 символів."),a}async function ye(e){try{const t=await fetch("https://sound-wave.b.goit.study/api/feedbacks",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});t.ok?(alert("Дякуємо за відгук!"),$.reset(),_()):alert("Помилка сервера: "+t.status)}catch(t){console.error("Network error:",t),alert("Помилка з'єднання")}}
//# sourceMappingURL=index.js.map
