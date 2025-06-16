// ==UserScript==
// @name         ExamtopicsPopupBgRemover
// @namespace    http://tapermonkey.net/
// @version      2025-06-16
// @description  make background transperent !
// @author       You
// @match        https://www.examtopics.com/*
// @icon         https://www.examtopics.com/assets/images/et/favicon/favicon-32x32.png
// @grant        window.onurlchange
// ==/UserScript==

(function() {
    'use strict';

    console.log("hijda");

    //to even affect on internal link path change or routing     give @grant permission  "window.onurlchange"
    window.addEventListener('urlchange', () => {

        // queryselector   elmnt  #id  .class
        const popupOverlay = document.querySelector("#notRemoverPopup");
          //or
          //const popupOverlay = document.querySelector(".popup-overlay");
        popupOverlay.style.backgroundColor = "rgba(0,0,0,0)";


        const popupContent = document.querySelector(".popup-content");
        popupContent.style.display = "none";

        //delay script run by 1ms
        //setTimeout(()=>{

        //}, 1);

    });

})();
