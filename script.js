// addEventListener('DOMContentLoaded',()=>{
//     let index =0;
//     let btnLeft = document.querySelector('.left-arrow');
//     let btnRight = document.querySelector('.right-arrow');
//     let slider = document.querySelector('.slider')
//     let slides = document.querySelectorAll('.slide');
//     // for 
//     let sliderDes = document.querySelector('.description-slider');
//     let slidesDes = document.querySelectorAll('.description-slide');
   
//     btnLeft.addEventListener('click',()=>{
//         console.log("left");
//         prevSlide();
//         prevSlideDes();
//     })
//     btnRight.addEventListener('click',()=>{
//         console.log("right")
//        nextSlide();
//        nextSlideDes()
//     })

//     function showSlide(){
//         if(window.innerWidth > 768){
//             slider.style.transform = `translateX(${-index * 780}px)`;
//             console.log("from window size > 768px");
//         }
//         else{
//             slider.style.transform = `translateX(${-index * 100}%)`;
//         }
        
//     }
//     function showSlideDes(){
//         sliderDes.style.transform = `translateX(${-index * 100}%)`;
//         console.log("from window size < 768px");
//     }
//     function nextSlide(){
//         if(index < slides.length -1){
//             index++;
//         }
//         else{
//             index =0;
//         }
//         showSlide();
//     }
//     function nextSlideDes(){
//         if(index < slidesDes.length -1){
//             index++;
//         }
//         else{
//             index =0;
//         }
//         showSlideDes();
//     }
// function prevSlide(){
//     if(index >0){
//         index--;
//     }
//     else{
//         index = slides.length -1;
//     }
//     showSlide();
// }
// function prevSlideDes(){
//     if(index >0){
//         index--;
//     }
//     else{
//         index = slidesDes.length -1;
//     }
//     showSlideDes();
// }

// }) 
addEventListener('DOMContentLoaded', () => {
    let index = 0;           // For image slider
    let indexDes = 0;        // For description slider

    const btnLeft = document.querySelector('.left-arrow');
    const btnRight = document.querySelector('.right-arrow');
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slide');
    const sliderDes = document.querySelector('.description-slider');
    const slidesDes = document.querySelectorAll('.description-slide');
    const menuIcon = document.querySelector('.menu-icon');
    const closeIcon = document.querySelector('.close-icon');
    const nav = document.querySelectorAll('nav ul a')
    const logo = document.querySelector('.logo')
    const navUl = document.querySelector('nav ul')



menuIcon.addEventListener('click',()=>{
    nav.forEach(element => { 
        element.classList.add('active')
    });
menuIcon.style.display = 'none'
logo.style.display='none'
closeIcon.style.display='block'
navUl.style.position = 'static';
navUl.style.background = '#a1a1a1';
})
closeIcon.addEventListener('click',()=>{
    nav.forEach(element => { 
        element.classList.remove('active')
    });
    menuIcon.style.display = 'block'
logo.style.display='block'
closeIcon.style.display='none'
navUl.style.position = 'fixed';
navUl.style.background = 'transparent';
})
    btnLeft.addEventListener('click', () => {
        console.log("left");
        prevSlide();
        prevSlideDes();
    });

    btnRight.addEventListener('click', () => {
        console.log("right");
        nextSlide();
        nextSlideDes();
    });

    function showSlide() {
        if (window.innerWidth > 768) {
            slider.style.transform = `translateX(${-index * 840}px)`;
         menuIcon.style.display = 'none'
        } else {
            slider.style.transform = `translateX(${-index * 100}%)`;
            menuIcon.style.display = 'block'
        }
    }

    function showSlideDes() {
        sliderDes.style.transform = `translateX(${-indexDes * 100}%)`;
        console.log("Description slider moved");
    }

    function nextSlide() {
        if (index < slides.length - 1) {
            index++;
        } else {
            index = 0;
        }
        showSlide();
    }

    function nextSlideDes() {
        if (indexDes < slidesDes.length - 1) {
            indexDes++;
        } else {
            indexDes = 0;
        }
        showSlideDes();
    }

    function prevSlide() {
        if (index > 0) {
            index--;
        } else {
            index = slides.length - 1;
        }
        showSlide();
    }

    function prevSlideDes() {
        if (indexDes > 0) {
            indexDes--;
        } else {
            indexDes = slidesDes.length - 1;
        }
        showSlideDes();
    }

    // Initial display
    showSlide();
    showSlideDes();

    // Responsive support
    window.addEventListener('resize', () => {
        showSlide();
        showSlideDes();
    });
});
