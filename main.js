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
