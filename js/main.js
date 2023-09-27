// JavaScript

// Get elements
const allSliderImages = document.querySelectorAll('.slider-image');
const rightBtn = document.querySelector('.right');
const leftBtn = document.querySelector('.left');

let currentPosition = 0;

const nextImage = ()=>{
    if(currentPosition < allSliderImages.length - 1){
        allSliderImages[currentPosition + 1].classList.add('active')
        allSliderImages[currentPosition].classList.remove('active')

        currentPosition += 1
    } else{
        allSliderImages[0].classList.add('active');
        allSliderImages[currentPosition].classList.remove('active')
         currentPosition = 0
    }
}

const previousImage = ()=>{
    if(currentPosition != 0){
        allSliderImages[currentPosition - 1].classList.add('active')
        allSliderImages[currentPosition].classList.remove('active')

        currentPosition -= 1
    }else{
        allSliderImages[allSliderImages.length - 1].classList.add('active')
        allSliderImages[currentPosition].classList.remove('active')
        currentPosition = allSliderImages.length - 1
    }
}

rightBtn.addEventListener('click', nextImage)
leftBtn.addEventListener('click', previousImage)