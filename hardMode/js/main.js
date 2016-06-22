var imgUrls = function(imgs) {
  urls = [];
  for (i in imgs) {
    urls.push("url(" + imgs[i].image_url + ")")
  }
  return urls
}

var urls = imgUrls(carouselImages)
var imgCount = 0

var swipeLeft = function(event){
  if (imgCount === 0) {
    $('.container').css("background-image", urls[imgCount])
    imgCount = urls.length;
    imgCount--
  } else {
    $('.container').css("background-image", urls[imgCount])
    imgCount--
  }
};



var swipeRight = function(event){
  if (imgCount == urls.length) {
    imgCount = 0;
    $('.container').css("background-image", urls[imgCount])
    imgCount++
  } else {
    $('.container').css("background-image", urls[imgCount])
    imgCount++
  }
};


$(document).ready(function(){
  $('.container').css("background-image", urls[0])
  $('.left-arrow').on('click', swipeLeft);
  $('.right-arrow').on('click', swipeRight);
});


//left arrow takes img-1.  if img == undefined, img == img last
//right arrow takes img+1, if img == undefined, img == 0
