import{i as m,S as h}from"./assets/vendor-46aac873.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const p="/foot-js-hw-11/assets/error-icon-d9b820e6.svg";function d(r=[]){return c.innerHTML=r.reduce((i,{webformatURL:o,largeImageURL:s,tags:e,likes:t,views:n,comments:u,downloads:f})=>i+`
      <li class = "gallery-item">
        <a class="gallery-link" href="${s}">
        <img class="gallery-image"
        src="${o}" 
        alt="${e}"/>
        </a>
         <ul class="info-list">
          <li class="info-item">
            <h2>Likes</h2>
            <p>${t}</p>
          </li>
          <li class="info-item">
            <h2>Vievs</h2>
            <p>${n}</p>
          </li>
          <li class="info-item">
            <h2>Comments</h2>
            <p>${u}</p>
          </li>
          <li class="info-item">
            <h2>Downloads</h2>
            <p>${f}</p>
          </li>
        </ul>
       </li>
        `,"")}function l(r){m.error({message:r,messageColor:"#FFF",messageSize:"16px",messageLineHeight:"24px",position:"topRight",transitionIn:"fadeInLeft",backgroundColor:"#EF4040",title:"Error",titleColor:"#FFF",titleSize:"16px",titleLineHeight:"24px",timeout:3e3,iconUrl:`${p}`,theme:"dark"})}function g(r){r.innerHTML='<span class="loader"></span>'}function y(r){r.innerHTML=""}function L(){g(c);const i=`https://pixabay.com/api/?key=41789210-2260d99c0029effaf849d1b98&q=${a.value.trim()}&image_type=photo&orientation=horizontal&safesearch=true`;fetch(i).then(o=>o.json()).then(o=>{o.hits.length===0?(y(c),l("Sorry, there are no images matching your search query. Please try again!")):(d(o.hits),new h(".gallery a",{captionsData:"alt",captionDelay:250}).refresh())}).catch(o=>{l("URL error")}),a.value=""}const $=document.querySelector(".search-form"),a=document.querySelector(".search-form input"),c=document.querySelector(".gallery");$.addEventListener("submit",r=>{r.preventDefault(),a.value.trim()!==""?L():l("Please fill the query")});
//# sourceMappingURL=commonHelpers.js.map
