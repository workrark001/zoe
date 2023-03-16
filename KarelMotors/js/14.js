var bigsize = "600"; //Размер большой картинки
var smallsize = "400"; //Размер маленькой картинки
function changeSizeImage(im) {
  if(im.height == bigsize) im.height = smallsize;
  else im.height = bigsize;
}