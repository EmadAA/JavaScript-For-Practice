//PopUp section

let model =document.getElementById('model');
let openButton =document.getElementById('model-open-btn');
let closeButton =document.getElementById('model-close-btn');
openButton.addEventListener('click', ()=>{
    model.classList.add('show');

})
closeButton.addEventListener('click', ()=>{
    model.classList.remove('show');
    
})