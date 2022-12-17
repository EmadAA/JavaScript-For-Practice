// Scroll to change bg color start here
let bgChangeColor = document.getElementById('scrollingDiv');

window.onscroll = ()=>{
    let scrollWindow = window.scrollY;
    if(scrollWindow > 150){
        bgChangeColor.classList.add('scrollingDivAfter');
    }
    else{
        bgChangeColor.classList.remove('scrollingDivAfter');
    }
} 
// Scroll to change bg color end here 



//Bulb On Off Section


function lightBtn(match){
    let pic; 
    let Light = document.getElementById('light');
    for(let i=1; i<=5; i++){
        if(match == 0){
            pic = 'images/bulboff.jpg';
            Light.innerHTML = 'Light Off';
        }
        else{
            pic= 'images/bulbon.jpg';
            Light.innerHTML = 'Light On';
        } 
        let light = document.getElementById('image'+(i));
        light.src = pic;
    }
}

//Webcam Section 
let webCamVideo = document.getElementById('webcam');
let camera = navigator.mediaDevices.getUserMedia; 
if(camera){
    navigator.mediaDevices.getUserMedia({
        //  video:true,
        // audio:true
    })
    .then((streamLive)=>{
        webCamVideo.srcObject = streamLive;
    }) 
    .catch(function(error){
        console.log('Error! Please try again')
    })
} 

let canvas = document.getElementById("canvas");
let takePhoto = document.getElementById("takePhoto") 
let context = canvas.getContext('2d');
takePhoto.addEventListener("click", ()=>{
    context.drawImage(webCamVideo,0,0,700,700);
}) 





//Car Running section

let carStartBtn = document.getElementById('start');
let carStopBtn = document.getElementById('stop');
let carImg = document.getElementById('carImg'); 
let carStart; 
let carRunning = false; 
let m=0;
 carStartBtn.addEventListener("click", ()=>{ 
    if(!carRunning) {
    carRunning= true;
   carStart = setInterval(run,50); 
   function run(){
       if(m == 1100){
        //    clearInterval(carStart); 
           m=0;
       }
       else{
           m+=10 ;
           carImg.style.marginLeft = m+'px';
    
       } 
       
   }
    }
 })
carStopBtn.addEventListener('click', ()=>{
    carRunning= false;
    clearInterval(carStart);
}) 





// Onclick Image Zoom 
let image1 = document.getElementById('image-1');
let image2 =document.getElementById('image-2');
let image3 = document.getElementById('image-3');
let image4 = document.getElementById('image-4');
let image5 = document.getElementById('image-5');

function changeImage2(){
    image1.src ="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?cs=srgb&dl=pexels-anjana-c-674010.jpg&fm=jpg" 
}
function changeImage3(){
    image1.src ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcRk-OdHgfW0Kq-FwE1TA09zE461c97Rze_A&usqp=CAU" 
}
function changeImage4(){
    image1.src ="https://images.all-free-download.com/images/graphiclarge/beautiful_beauty_bloom_268807.jpg"
}
function changeImage5(){
    image1.src ="https://thumbs.dreamstime.com/b/beautiful-nature-background-abstract-wallpaper-celebration-love-holiday-artistic-flowers-art-design-spring-flower-golden-colors-191443741.jpg"
}
