//Number Counter Section 
//for total
let count = 0;
let span = document.getElementById('span') 
span.style.color="White";
span.style.fontSize="1.5rem";
let num1 = document.getElementById('div1');
let numberCount = setInterval(project , 5);
function project(){
    count++ ;
    num1.innerHTML=count+"+";
    if(count==500){
        clearInterval(numberCount);
        span.innerHTML = "Very Good! Keep it Up";
       
    }
}
//for client
let count2 = 0; 
let span2 = document.getElementById('span2') 
span2.style.color="White";
span2.style.fontSize="1.5rem";
let num2 = document.getElementById('div2');
let numberCount2 = setInterval(clients , 5);
function clients(){
    count2++ ;
    num2.innerHTML=count2+"+";
    if(count2==200){
        clearInterval(numberCount2);
        span2.innerHTML = "Very Good!Stay with Them";
       
    }
} 
//for achieve
let count3 = 0;
let span3 = document.getElementById('span3') 
span3.style.color="White";
span3.style.fontSize="1.5rem";
let num3 = document.getElementById('div3');
let numberCount3 = setInterval(achieve , 5);
function achieve(){
    count3++ ;
    num3.innerHTML=count3+"+M$";
    if(count3==100){
        clearInterval(numberCount3);
        span3.innerHTML = "Very Good!See you soon on the list of billionaire";
       
    }
}

