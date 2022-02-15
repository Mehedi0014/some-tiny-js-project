===================================================================
>>> Porject 01
>>> Add custom link in elementor carousel or image gallery
===================================================================
If your uppoer node is not anchor tag then this line: =>
let catchImageTagParentNote = imgNode.parentNode;
arn't work.
Then you inspect your code and find the anchor tag and modify the line like: =>
let catchImageTagParentNote = imgNode.parentNode.parentNode.parentNode;

All image wrappe in youtubeLogoGalleryWrapper class. Your class could be something else.



===================================================================
>>> Porject 02
>>> Find all images where alt tag aren't use
===================================================================

===================================================================
>>> Porject 03
>>> Add Preloader in any website
===================================================================

===================================================================
>>> Porject 04
>>> Add Preloader in any website update version
===================================================================
This Proloader build without image.
If you use this preloader in elementor, take a section and take html element to write html.
Make the section margin -2px otherwise a white space cover your site.
