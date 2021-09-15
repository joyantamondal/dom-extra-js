const images=[
    'images/p1.jpeg',
    'images/p2.jpeg',
    'images/p3.jpeg',
    'images/p4.jpeg',
    'images/p5.jpeg',
    'images/p6.jpeg',
    'images/p7.jpeg',
    'images/p8.jpeg',
    'images/p9.jpeg'
]
let imgIndex = 0;
const imgSlider = document.getElementById('slider-img');
setInterval(()=>{
 if(imgIndex>=images.length){
     imgIndex=0;
    
 }
 let imgUrl = images[imgIndex];
 imgSlider.setAttribute('src',imgUrl)
    imgIndex++;
},1000)