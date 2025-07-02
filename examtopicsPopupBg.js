// examtopicsPopupBg
(function() {
    'use strict';

    // Removed ==UserScript== block for uBlock Origin scriptlet   
    // The window.onurlchange grant is handled by uBlock Origin when you call the scriptlet on examtopics.com, so you don't need it in the scriptlet ==Userscript== block itself.
    // Added checks (if (popupOverlay)) to ensure the elements exist before trying to modify their styles, preventing potential errors.
    console.log("hijda");


    function removePopup() {
         // queryselector   elmnt  #id  .class
        const popupOverlay = document.querySelector("#notRemoverPopup");
                                    //OR
        //const popupOverlay = document.querySelector(".popup-overlay");
        if (popupOverlay) {                                                            
            popupOverlay.style.backgroundColor = "rgba(0,0,0,0)";
        }

        const popupContent = document.querySelector(".popup-content");
        if (popupContent) {
            popupContent.style.display = "none";
        }
    }

    //to even affect on internal link path change or routing (for SPA navigation)        give @grant permission  "window.onurlchange"       
    window.addEventListener('urlchange', () => {
        
        //delay script run by 1ms
        //setTimeout(()=>{
            removePopup();
        //}, 1);
        
    });

})();
