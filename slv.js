// //Simple program 

// // let a = parseInt(prompt("Enter First number") ,10);
// // let b = parseInt(prompt("Enter Second Number"), 10);

// let sum = a+b;
// // document.write("Sum of "+a+" and "+b+" is = "+sum+"<br>");
// let sub = a-b;
// // document.write("Sub of "+a+" and "+b+" is = "+sub+"<br>");
// let mul = a*b;
// // document.write("Mul of "+a+" and "+b+" is = "+mul+"<br>");
// let div = a/b;
// // document.write("Div of "+a+" and "+b+" is = "+div+"<br>");




// Fahrenheit to Celsius


// let far = parseFloat(prompt("Enter Fahrenheit Temperature"), 10)
// let cel = ((far-32)*5/9) ;
// document.write("Temperature in Celsius Scale is= " + cel +"<br/>")


// let Cel = parseFloat(prompt("Enter Celsius Temperature"), 10)
// let Far = (Cel *(9/5)+32) ;
// document.write("Temperature in Celsius Scale is= " + Far) 





// Check Number(Odd or Even)

// let numb = 110;
// if(numb % 2 == 0){
// console.log("Even")}
// if(numb % 2 != 0){
// console.log("Odd")} 





// program to check if the number is even or odd
// take input from the user
// const number = prompt("Enter a number: ");





//check if the number is even
// if(number % 2 == 0) {
//     document.write("The number is even.");
// }

// // if the number is odd
// else {
//     document.write("The number is odd.");
// }






//Input Marks and see your Grade! 


// let marks = parseFloat(prompt("Enter your marks : "))
// if(marks>=80 && marks<=100){
//     document.write("Congratulations! Your Grade is A+")
// }
// else if(marks>=70 && marks<80){
//     document.write("Congratulations! Your Grade is A")
// }
// else if(marks>=60 && marks<70){
//     document.write("Congratulations! Your Grade is A-")
// }
// else if(marks>=50 && marks<60){
//     document.write("Congratulations! Your Grade is B")
// }
// else if(marks>=40 && marks<50){
//     document.write("Congratulations! Your Grade is C")
// }
// else if(marks>=33 && marks<40){
//     document.write("Congratulations! Your Grade is D")
// }else if(marks>=0 && marks<33){
//     document.write("Ops! Your are Failed in this Exam.")
// } 
// else{
//     document.write("Please Enter Your Marks in the Range of Mark-sheet")
// } 






//Negative, Positive and Zero

// let randomNumber = parseFloat(prompt("Enter a  number : "))
// if(randomNumber> 0){
//     document.write(" "+randomNumber+" is Positive")
// }
// else if(randomNumber<0){
//     document.write(" "+randomNumber+" is Negative")
// }
// else {
//     document.write("This is Zero")
// }






//Check a letter is it vowel or consonant?

// let  letter = prompt("Enter a Letter :");
// letter = letter.toLowerCase();

// if(letter == "a" || letter == "e" || letter == "i" || letter == "o" || letter == "u" ){
//     document.write("This Letter Vowel")
// }  
// else{
//     document.write("This letter is Consonant")
// }





//Digit Spelling(1  to 9) using switch 

// let digit = prompt("Enter Your Digit :");

// switch(digit){
//     case "0":
//         document.write("Zero");
//         break;
//     case "1":
//         document.write("One");
//         break;
//     case "2":
//         document.write("Two");
//         break;
//     case "3":
//         document.write("Three");
//         break;
//      case "4":
//         document.write("Four");
//         break;
//      case "5":
//         document.write("Five");
//         break;
//     case "6":
//         document.write("Six");
//         break;
//     case "7":
//         document.write("Seven");
//         break;
//     case "8":
//         document.write("Eight");
//         break;
//     case "9":
//         document.write("Nine");
//         break;
//     default :
//         document.write("This is not valid in 1 to 9")

// } 





// Vowel or Consonant defined using Switch Statement

// let letter = prompt("Enter Your letter :"); 
// letter = letter.toLocaleLowerCase();
// switch(letter){
//          case "a":
//             document.write("Vowel");
//             break;
//             case "e":
//             document.write("Vowel");
//             break;
//             case "i":
//             document.write("Vowel");
//             break;
//             case "o":
//             document.write("Vowel");
//             break;
//             case "u":
//             document.write("Vowel");
//             break;
//         default:
//             document.write("Consonant");
// } 

// or 
// let letter = prompt("Enter Your letter :");
// letter = letter.toLowerCase();

// switch(letter){
//      case "a":
//      case "e":
//      case "i":
//      case "o":
//      case "u": 
//      document.write("Vowel");
//      break;
//      default:
//          document.write("Consonant")

// } 




// functions testing

// let num1 = Number(prompt("Enter First Number:"))
// let num2 = Number(prompt("Enter Second Number:"))
// function simple(num1, num2){
//     Sum = num1 + num2;
//     return Sum
// } 

// document.write( "The Sum is "+ simple(num1, num2) + "<br/>"); 

// function simple2(num1, num2){
//     Sub = num1 - num2;
//     return Sub
// } 

// document.write( "The Sub is "+ simple2(num1, num2) + "<br/>"); 

// function simple3(num1, num2){
//     Mul = num1 * num2;
//     return Mul 
// } 

// document.write( "The Multiply is "+ simple3(num1, num2) + "<br/>");

// function simple4(num1, num2){
//     Div = num1 / num2;
//     return Div
// } 

// document.write( "The Division is "+ simple4(num1, num2) + "<br/>");



// Some of Array Methods
// pop , push, concat, splice, slice, shift, unshift, sort, reverse 

 
// let array1 = ["Adil","Jamil","Jumi", "Tasin", "Tamim"] ; 
// let numbers = [10,25,3,1,31,35,3,521,78741,1000000];
// console.log(array1);

//  array1.pop();// Remove an element from the last
//  console.log(array1);

// array1.push("Adiat")// Add an element from the last
// console.log(array1) 

// array1.shift();// This is the reverse of pop
// console.log(array1)

// array1.unshift("Gilman")// This is the reverse of push
// console.log(array1) 

// array1.sort(); // Decorate array Alphabetically
// console.log(array1)
// numbers.sort(function(a,b){
//     return a-b;
// });
// console.log(numbers) // [Number sorting are different, because the sore() method use for Alphabet not for number. That's why we declare a anonymous function and 2 parameters and apply it on sort() method.It works when (a-b) is positive its mean the serial of  number b are first and a id second and when (a-b) is negative its mean the serial of  number a are first and b id second]

// let c = array1.concat(numbers); 
// console.log(c);


// Create a function called HighestScore that receive a 1D Array and return Highest Score :

// let Scores = [10,20,54,87,93,94,100,98.54];

// function HighestScore(scores){ 
//     let max = Scores[0];
//     for(let a = 1; a<Scores.length; a++){
//         if(max < Scores[a]){
//             max= Scores[a];
//         }
//     }
//     return max;
// }
// let maxScore= HighestScore(Scores);
// console.log(maxScore);



//2D Array Example

// let elderBrother = [
//     ["Adil" ,20],
//      ["Tasin" ,18],
//      ["Tamim" ,16],
//      ["Gilman" ,22],
//      ["Shakil" ,20],
//      ["Fahad" ,20]
//     ];


// function CheckElderBrother(elderBrother){
//     let elderBrotherName= elderBrother[0][0];
//     let elderBrotherAge =  elderBrother[0][1];

//     for(let x = 1; x < elderBrother.length; x++){
//         if(elderBrotherAge < elderBrother[x][1]){
//             elderBrotherAge = elderBrother[x][1];
//             elderBrotherName = elderBrother[x][0];
//         }
//     }
//     return elderBrotherName;
    
// } 
// let finalName= CheckElderBrother(elderBrother); 
// console.log(finalName);




//Object in JavaScript 

// let studentInfo = {
//     name:"Emad Uddin Adil",
//     subject: "CSE",
//     studentID: 182210012101154,
//     university:"Leading University",
//     language:["Bangla","English","Hindi","Urdu"],
//     age:20
// } 
// console.log(studentInfo); 
//   // Know a specific property of object
//   console.log(studentInfo.name)
//   console.log(studentInfo.age)
//   console.log(studentInfo.university)
//   console.log(studentInfo.subject) 

//Make multiple object using Constructor function

// function Student(name, subject, studentID, university,age){
//     this.name = name;
//     this.subject= subject;
//     this.studentID = studentID;
//     this.university = university;
//     this.age=  age; 
//     this.display= function(){
//         console.log(this.name);
//         console.log(this.subject);
//         console.log(this.studentID);
//         console.log(this.university);
//         console.log(this.age);
//     }
// } 
// let studentInfo1 = new Student("Adil","CSE",1154,"Leading", 20);
// console.log(studentInfo1);
// let studentInfo2 = new Student("Emad","EEE",1150,"Leading", 20.5);
// console.log(studentInfo2);
// let studentInfo3 = new Student("Emad",1150,"Leading", 20.5);
// console.log(studentInfo3); 

// console.clear();

// studentInfo2.display();



// Random Number guess game using Math Method

// let numOfWon =0;
// let numOfLost =0;
// for(let x = 1; x <=5; x++){
    

// let guessNumber = (prompt("Enter a Number 1 to 5:"));
// let randomNumber = Math.floor(Math.random()*5 )+1;
// if(guessNumber == randomNumber){
//     console.log("You Won! random Number is "+ randomNumber)
//     numOfWon++ ;
// }
// else{
//     console.log("You lost! random Number is " + randomNumber)
//     numOfLost++
// } 

// } 
// document.write("You have won " + numOfWon+ " Times <br/>")
// document.write("You have lost " + numOfLost+ " Times")



// Date object and method
// let date = new Date();
// let year =date.getFullYear();
// console.log(year)
// let month =date.getMonth();
// console.log(month)
// let day =date.getDay();
// console.log(day)
// let dates =date.getDate();
// console.log(dates)
// let hours =date.getHours();
// console.log(hours)
// let minute =date.getMinutes();
// console.log(minute)
// let second =date.getSeconds();
// console.log(second)
// let millisecond =date.getMilliseconds();
// console.log(millisecond)


//DOM 
// let heading = document.getElementById("EmadAdil").innerHTML = "Hello There <br/> I am Emad Uddin Adil";
 
// //onclick method বাটন এ ব্যবহার ঃ
// let clickIt =document.querySelector("#para");
// function myMassage (){
//     clickIt.innerHTML = "You have click on Button 1";
   
// }
// function myMassage2 (){
//     clickIt.innerHTML = "You have click on Button 2";
// }


// let picture1= document.querySelector("#pic1");

// function image1(){
//     picture1.src = "images/Adil.jpg";
// }
// function image2(){
//     picture1.src = "images/Ehan.jpg";
// } 


// Image Slider Using JavaScript 

let images = ["images/Adil.jpg","images/Ehan.jpg","images/Emad.jpg"]
let imgTag = document.querySelector("img");
let count = 0;


function prev(){ 
    count-- ; 
    if(count <0){
        count=images.length - 1;
        imgTag.src = images[ count];
    }
    
   else{
    imgTag.src = images[ count];
   }

}


function next(){
    count++ ; 
    if(count >= images.length){
        count=0;
        imgTag.src = images[ count];
    }
    
   else{
    imgTag.src = images[ count];
   }

}



//add or remove an style

let style = document.querySelector("#paraID");
function addStyle(){
    style.classList.add("para");
}
function removeStyle(){
    style.classList.remove("para");
} 


//add Event Listener


let mouse = document.querySelector("#mouse-check") ;
    mouse.addEventListener("mouseover", function(){
         mouse.classList.add("mouse-check"); 
});

    checking = mouse.addEventListener("mouseout", function(){
        mouse.classList.remove("mouse-check");
   });


   //Event Listeners with multiple elements

   let len = document.querySelectorAll(".myButton").length;

  for(var i = 0; i< len; i++){
    document.querySelectorAll(".myButton")[i].addEventListener("click", function(){
        let text = this.innerHTML;
        document.querySelector("#head").innerHTML = text +"is Clicked" ;
    });
    
  }
