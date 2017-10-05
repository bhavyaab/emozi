var allImages;
$.ajax({
  url: 'http://localhost:8000/allImages',
  type: 'GET',
})
.done(function(data){
  localStorage.allImages = data;
  allImages = data;
  // for (var i = allImages.length - 1; i < allImages.length; i++) {
  //   makeACall('./images/' + allImages[i])
  // }
});
