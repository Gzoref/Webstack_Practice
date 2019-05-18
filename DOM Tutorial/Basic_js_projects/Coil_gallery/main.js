const images = document.querySelector('.images'); 
const nextBtn = document.querySelector('.nextBtn'); 
const prevBtn = document.querySelector('.prevBtn'); 

nextBtn.addEventListener('click', nextImg);
prevBtn.addEventListener('click', prevImg);

let currentImg = 0;

function nextImg() {
   if(currentImg === 8){
        currentImg = -1;
   }
   currentImg++;
   images.style.backgroundImage = `url(imgs/img-${currentImg}.jpeg)`;
   console.log(currentImg);

}

function prevImg() {

     if(currentImg === 8){
          currentImg = 4;
     }
     currentImg--;
     images.style.backgroundImage =  `url(imgs/img-${currentImg}.jpeg)`;
console.log(currentImg);

}
  



