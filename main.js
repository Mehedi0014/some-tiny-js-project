/*
===================================================================
>>> Porject 01
>>> Add custom link in elementor carousel or image gallery
===================================================================
*/
function addCustomLinkInElementorCarouselOrGallery(){
  let allImageAltCollection = ["Petopedia" , "kitchen gadgets"];
  let allYoutubeUrlCollection = ["https://google.com" , "https://fb.com"];
  let allImageAltCollectionLength = allImageAltCollection.length;
  
  let youtubeLogoGalleryWrapper = document.querySelector(".youtubeLogoGallery");
  let allImages = youtubeLogoGalleryWrapper.getElementsByTagName("img");
  for( let allImage in allImages){
    let altName = allImages[allImage]["alt"];
    if(allImageAltCollection.includes(altName)){
      let altIndexNumber = allImageAltCollection.indexOf(altName);
      let imgNode = allImages[allImage];
      let catchImageTagParentNote = imgNode.parentNode;
      let catchImageTagParentNoteUrl = catchImageTagParentNote.href;
      if (catchImageTagParentNoteUrl !== null && catchImageTagParentNoteUrl !== '') {
        catchImageTagParentNote.href = allYoutubeUrlCollection[altIndexNumber];
        catchImageTagParentNote.setAttribute("target","_blank");
      }
    }
  }
}
addCustomLinkInElementorCarouselOrGallery();




/*
===================================================================
>>> Porject 02
>>> Find all images where alt tag aren't use
===================================================================
*/
function getImgNodeWhereWeAreNotUseAlt(){
  let allImages = document.getElementsByTagName("img");
  let len = allImages.length;
  let images = [];

  for( let i = 0; i <= len; i++){
    let blankAlt = allImages[i].alt;
    let blankSrc = allImages[i].src;
    if (blankAlt == ""){
      console.log(blankSrc);
    }
  }
}
getImgNodeWhereWeAreNotUseAlt();





/*
===================================================================
>>> Porject 03
>>> Add Preloader in any website
===================================================================
*/

/* Note =============================================================
    Add a div Immediate after body tag and name the tag Id = "preloader"
*/

/* CSS Part ============================================================= */
#preloader {
  margin: 0;
  padding: 0;
  height: 100vh;
  width: 100%;
  position: fixed;
  background: black url('https://thumbs.gfycat.com/ZealousFineHochstettersfrog-size_restricted.gif');
  z-index: 999999999;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: 20%;
	transition: all 0.9s ease-out;
}

/* JS Part ============================================================= */
window.addEventListener('load', function(){
  let preloader = document.getElementById('preloader');
  preloader.style.cssText = "height: 0; transition: all 0.3s ease-out;";
})
