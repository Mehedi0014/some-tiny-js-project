/*
===================================================================
>>> Porject 01
>>> Add custom link in elementor carousel or image gallery
===================================================================
*/

/* =============================================================
>>>> Note

If your uppoer node is not anchor tag then this line: =>
let catchImageTagParentNote = imgNode.parentNode;
arn't work.
Then you inspect your code and find the anchor tag and modify the line like: =>
let catchImageTagParentNote = imgNode.parentNode.parentNode.parentNode;

All image wrappe in youtubeLogoGalleryWrapper class. Your class could be something else.
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

/* ============================================================= 
>>>> Note

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










/*
===================================================================
>>> Porject 04
>>> Add Preloader in any website update version
===================================================================
*/

/* =============================================================
>>>> Note

This Proloader build without image.
If you use this preloader in elementor, take a section and take html element to write html.
Make the section margin -2px otherwise a white space cover your site.
*/

/* HTML Part ============================================================= */
<div id="preloader"> 
  <div id="loader-img">
    <div id="loader"></div> 
  </div>
  <div id="panel_left" class='loader-section section-left'></div>
  <div id="panel_right" class='loader-section section-right'></div>
</div>



/* CSS Part ============================================================= */
#preloader {
	height: 100vh;
	width: 100%;
	position: fixed;
	z-index: 9999;
}

#panel_right {
	height: 100%;
	width: 50%;
	float: right;
	background: #21a0ff;
	position: fixed;
	top: 0;
	right: 0;
}

#panel_left {
	height: 100%;
	width: 50%;
	background: #21a0ff;
	position: fixed;
	top: 0;
	left: 0;
}

#loader {
	position: absolute;
	width: 130px;
	height: 130px;
	border-radius: 50%;
	border: 3px solid transparent;
	border-top-color: red;
	-webkit-animation: spin 2s linear infinite;
	animation: spin 2s linear infinite;
	z-index: 1001;
	left: calc(50% - 65px);
	top: calc(50% - 65px);
}

#loader:before {
    content: "";
    position: absolute;
    top: 5px;
    left: 5px;
    right: 5px;
    bottom: 5px;
    border-radius: 50%;
    border: 3px solid transparent;
    border-top-color: blue;
    -webkit-animation: spin 3s linear infinite;
    animation: spin 3s linear infinite;
}

#loader:after {
    content: "";
    position: absolute;
    top: 15px;
    left: 15px;
    right: 15px;
    bottom: 15px;
    border-radius: 50%;
    border: 3px solid transparent;
    border-top-color: yellow;
    -webkit-animation: spin 1.5s linear infinite;
    animation: spin 1.5s linear infinite;
}


/* JS Part ============================================================= */
window.addEventListener('load', function(){
 	let panel_left = document.getElementById("panel_left");
	let panel_right = document.getElementById("panel_right");
	let loader = document.getElementById("loader");
	let loader_img = document.getElementById("loader-img");
	let preloader = document.getElementById("preloader");
	
	loader.style.cssText = "display: none;";	
	panel_left.style.cssText = "width: 0%; transition: all 2s; opacity: 0;";
	panel_right.style.cssText = "width: 0%; transition: all 2s; opacity: 0;";
});




