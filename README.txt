===================================================================
>>> Porject 01
>>> Add custom link in elementor carousel or image gallery
===================================================================
If your uppoer node is not anchor tag then this line: =>
  let catchImageTagParentNote = imgNode.parentNode;
arn't work. Then you inspect your code and find the anchor tag and modify the line like: =>
  let catchImageTagParentNote = imgNode.parentNode.parentNode.parentNode;

All image wrappe in youtubeLogoGalleryWrapper class. Your class could be something else.



===================================================================
>>> Porject 02
>>> Find all images where alt tag aren't use
===================================================================