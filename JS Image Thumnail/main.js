document.addEventListener("DOMContentLoaded", function(event){
var thumbnailElement = document.getElementsByClassName("small");


thumbnailElement.addEventListener('click', function(event) {
  
  if (thumbnailElement.className === "small") {
      thumbnailElement.className = "";
  } else {
     thumbnailElement.className = "small";
  }
});

});


