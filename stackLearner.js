// Falsy Value 
// ''
// 0
// NaN
// undefined
// null
// false
// this 6 types are considered as a falsy value

// Hexadecimal number 
// let hex = 0xae;
// console.log(hex);

// Octal Number 
// let oct = 0100;
// console.log(oct);

//Operator 
// + - * / % ++ -- 

// Logical Operator
// && || !

//Bitwise Operator
// & | ~ ^ <<  >>


// typeof operator

// console.log(typeof '10');

// Builtin Math function/object

// Math.E
// Math.PI
// Math.floor()
// Math.ceil()
// Math.abs()
// Math.max(100, 520)
// Math.min(100, 542)
// Math.random()
// Math.pow(5 , 2)
// Math.sqrt(100)

// Date Object

// let date = new Date();
// console.log(date);
// console.log(date.toDateString())
// date.toTimeString()
// date.toLocaleString()
// date.getFullYear()
// date.getMonth()
// date.getHours()
// date.getMinutes()
// date.getSeconds()
// date.getMilliseconds()

// String 

// let str ="Emad Uddin" 
// let str2= "Adil"  
// let STR = str.concat(str2) // Concat method add two or more strings 
// console.log(STR)
// let STR2 =STR.substr(1, 5) //substring method
// console.log(STR2)
// console.log(STR2.charAt(2)) // character in index no 2
// console.log(STR.startsWith(' ')) //Start with 
// console.log(STR.endsWith("l")) // ends with
// let str3 ='         Emad Adil           '
// console.log(str3.trim()) // trim first and last spaces
// console.log(str.toUpperCase()) //convert all to upper case
// console.log(str.toLowerCase()) // convert all to lower case
// console.log(str.split(" ")); // split base on different regex 

// // This below code is for knowing the length of a string
// let length = 0;
// while(1){
//   if(str.charAt(length)=="" ) {
//     break
//   } 
//   else{ 
//     length++
//   }
// }
// console.log(length);

// console.log(str.length); // this is builtin function to know the length of a string
// Array

// let arr = [1, 2, 3 ,4 ,5 ] // array using Array Literal 
// console.log(arr[0])
// arr[10]= 100
// console.log(arr);
// let length = 0;
// while(1){
//   if(arr[length]== undefined ) {
//     break
//   } 
//   else{ 
//     length++
//   }
// }
// console.log(length);

// Array traversing 


// let arr = [1, 2, 3 ,4 ,5 ] 
// for(let i=0; i<arr.length; i++){
//     console.log(arr[i]);
// }

// //sum of all elements in array
// sum=0;

// for(let i=0; i<arr.length; i++){
//     sum+=arr[i];
   
// }
// console.log(sum); 
// //multiplication of all elements in array

// mul=1;

// for(let i=0; i<arr.length; i++){
//     mul*=arr[i];
   
// }
// console.log(mul);

// // even elements in array

// for(let i=0; i<arr.length; i++){
//    if(arr[i]%2==0){
//     console.log(arr[i]);
//    }
   
// }

// // odd elements in array

// for(let i=0; i<arr.length; i++){
//     if(arr[i]%2!=0){
//      console.log(arr[i]);
//     }
    
//  }


//  // even elements sum in array
//  sumOfEven=-0
// for(let i=0; i<arr.length; i++){
//     if(arr[i]%2==0){
//      sumOfEven+= arr[i];
//     }
    
//  }
//  console.log(sumOfEven);

//   // odd elements sum in array
//   sumOfOdd=-0
//   for(let i=0; i<arr.length; i++){
//       if(arr[i]%2!=0){
//        sumOfOdd+= arr[i];
//       }
      
//    }

//    console.log(sumOfOdd);


// let arr = [1, 2, 3 ,4 ,5 ] 

// arr.push(6);
// console.log(arr); 

// arr.pop();
// console.log(arr);

// arr.unshift(6);
// console.log(arr);


// arr.shift();
// console.log(arr);

// arr.splice(2, 0, 10);// delete 0 element in index 2 and insert 102
// console.log(arr);

// arr.splice(2, 1, 10,1); // delete 1 element in index 2 and insert 102
// console.log(arr);



// Searching in Array
//let arr = [1, 2, 3 ,4 ,5 ] 
// let find = 40
// let  isFound = false
// for(let i=0 ; i <arr.length ;i++){
//     if(arr[i]== find){
//         isFound= true
//         console.log("Data is found in index "+ i);
//     }
// }

// if(!isFound){
//     console.log("data not found");
// }
// let arrr2= arr.join('aaaaa')
// console.log(arrr2);
// arr.fill(0)
// console.log(arr);

// Object 


// let obj = Object() -> object constructor 
// let obj = {} -> object literal 

// let obj = {
//     a :10,
//     b:20
// }
// console.log(obj);
// // obj.c = 30  -> adding value in object from outside
// console.log(obj);



// in operand  

// let obj = {
//     x:10 ,
//     y: 20, 
//     z: "ADil"
// }

// console.log("x" in obj); // এটার মাধ্যমে অবজেক্ট এর প্রোপার্টি গুলো চেক করা যায় যে এটা অব্জেক্টে আছে কি না, থাকলে ট্রু না থাকলে ফলস



// for in loop


// for(let i in obj){
//     console.log(i + " : " +obj[i]);  // for in loop used in object 
// }

// console.log(Object.keys(obj)); // keys return kore
// console.log(Object.values(obj));// values return kore
// console.log(Object.entries(obj));// [keys, Values] akare multidimensional array return kore

// let obj2 = Object.assign(obj) // Create new object from obj with all its property
// obj2.z = "Emad" 
// console.log(obj2);


//Function 
// function adil()
// {
//     console.log("Emad Uddin Adil");
// }

// adil()


// function sub()
// {
//     let a=10 ,b =20; 

//     console.log(c=b-a);
// }

// sub() 

// function add()
// {
//     let a=10 ,b =20; 

//     console.log(c=a+b);
// }

// add() 

// function sub(a , b )
// {

//     console.log(c=a+b);
// }

// sub(200, 100)

// let arr1 =[1,2,3]
// let arr2 =[10,20,30]
// let arr3 =[11,20,33]

// function sumOfArr(arr)
// {
//     sum = 0
//     for(let i =0; i<arr.length; i++){
//         sum += arr[i];

//     }
//     console.log(sum);
// } 
// sumOfArr(arr2) 

// function multiplyOfArr(arr)
// {
//     sum = 1
//     for(let i =0; i<arr.length; i++){
//         sum *= arr[i];

//     }
//     console.log(sum);
// } 
// multiplyOfArr(arr3)

// First Class Function

//Function can be store in a variable
//  function add(a ,b ){
// return a+b ;
//  }
//  let sum = add ;

//  console.log(sum(4, 5));

 //Function can be store in a array
// let arr = [] 
// arr.push(add)
// console.log(arr[0](5, 3)); 

//Function can be store in a object

// let obj= {
//     a: add
// }
// console.log(obj.a(5,3));

//we can create a function when it needs

// setTimeout(function () {
//     console.log("Emad Uddin ADil");
// },2*1000);

//Higher Order Function 


// function add(a ,b ){
//     return a+b 
//      } 

// function random(a, b, func){
//     let c = a+b 
//     let d = a-b 

//     return function() { 
//         let m =func(a,b)
//         return c*d*m 
//     }
// }
// let a =random(1,2, add)
// console.log(a()); 

//forEach function 

//let arr = [1,2,3,4,5] 
// var sum =0
// arr.forEach((value ,index , array )=>{
//     sum+= value
//     console.log(value,index);
// })
// console.log(sum);

// foreach function made in custom code

// function foreacH(arr , CB){
//     for(let i =0 ;i<arr.length ;i++){
//         CB(arr[i], i ,arr)
//     }
// } 
// sum =0
// foreacH(arr, function(value, index ,array){
//     console.log(value ,index ,array);
//  sum+= value

// }) 
// console.log(sum); 


// foreacH(arr,function(value, index ,array){
// arr[index] =value+5 


// }) 
// console.log(arr); 

// array.map function
//  arr = [1,2,3,4,5] 

//  let sqrArr  = arr.map(function(value){
//     return value* value
//  })

//  console.log(arr);
//  console.log(sqrArr); 

// find and findIndex method 

// let arr2= arr.find(function (value){
//    return value == 4
// } )
// console.log(arr2); 
// let arr12= arr.findIndex(function (value){
//    return value == 4
// } )
// console.log(arr12); 

// let myFind = function(arr, cb){
//    for(let  i=0 ; i<arr.length; i++){
//       if(cb(arr[i])){
//          return i
      
//       }
    
//    }
// } 

// let result = myFind(arr , function(value){
//    return value ==4
// }) 
// console.log(result);

 //  let arr = [1,2,5,42,45,3,1,98,421,4,5] 

   // arr.sort(function(a, b){
   // if(a>b){
   //    return 1
   // }
   // else if(a<b){
   //    return -1
   // }
   // else{
   //    return 0
   // }
   // })
   // console.log(arr);

   // let res1 = arr.every((value)=>{
   //    return value%2==0
   // })
   // console.log(res1);

   // let res2 = arr.some((value)=>{ 
   //   return value<=0
   // })
   // console.log(res2); 


   // simple power function 
   // function base(b){
   //    function power(p){
   //      let result = 1;
   //      for( let i = 0; i < p; i++){
   //          result *= b;
   //      }
    
   //      return result;
   //    }
   //    return power;
   //  }
    
   //  let mainBase = base(2);
   //  let mainPower = mainBase(5);
   //  console.log(mainPower); 


   // Recursoin function

//    function adil(n) {
//       if(n==1) {
//          return
//       } 
//       else{
//          console.log("Hello Adil")
//          adil(n-1)
//       }
//    }
 
// function fact(n) {
//    if (n==1) {
//       return 1
//    }
//    return n*fact(n-1)
// }
// console.log(fact(5))

// SUm Of Array  

// let arr=[1,5,3,41,8,23,1,8,4,9,4,8,2,4,9,87,52,1,98] 


// function sumOfArray(arr ,LastIndex ){
//    if(LastIndex<0){
//       return 0
//    } 
//    return arr[LastIndex] + sumOfArray(arr ,LastIndex-1)
// } 
// console.log(sumOfArray(arr, arr.length-1));




// Multiplication of Array Elements
// let arr1=[1,5,3] 


// function multiplyOfArray(arr ,LastIndex ){
//    if(LastIndex<0){
//       return 1
//    } 
//    return arr[LastIndex] * multiplyOfArray(arr ,LastIndex-1)
// } 
// console.log(multiplyOfArray(arr1, arr1.length-1));


// Number english to bangla conversion
// let obj = {
//    ".":"." ,
//    "1": "১",
//    "2": "২",
//    "3": "৩",
//    "4": "৪",
//    "5": "৫",
//    "6": "৬",
//    "7": "৭ ",
//    "8": "৮",
//    "9": "৯",
// }
// function numberToBn(number){
//    return number.toString().split("").map((e)=>(
//       (obj[e]?obj[e]:"")
//    ))
// }

// console.log(numberToBn("125.54").join(""));

//OOP in JS 

// let rect = {
//    height : 400, 
//    width : 200 ,
//    draw : function() {
//       console.log("I am Adil")
//       console.log("My Width is " + this.width)
//       console.log("My Height is " + this.height)
//    }
// } 

// rect.draw()

// rect.height = 250 
// rect.draw()

// console.log(this);

// Object accessors (getter & setter) 

// let person ={
//   firstName: "Emad", 
//   lastName :"Adil" , 
//   language: "Javascript" ,
 
//   get lang(){
//    return this.language 
//   }
// }
// console.log(person.lang);


// let person ={
//    firstName: "Emad", 
//    lastName :"Adil" , 
//    language: "" ,
  
//    set llang(lang){
//      this.language =lang
//    }
// } 
// person.llang ="Javascript"
// console.log(person);


// ES6 
// Template string 

// let tempStr = `       jdbf
// asducfhdf
// ajdsf
// dfcno` 
// console.log(tempStr.trim()); // trim method remove space at first and last in a variable

// let age =22 
// let name = "Adil"
// let result = `My name is ${name} and my age is ${age}`
// console.log(result); 

// console.log(name.padStart(10, 'a'));
// console.log(name.padEnd(10, 'a').repeat(5));


// Object Destructure 

// let person ={
//    name : 'Emad Adil' ,
//    age: 22, 
//    address: {
//       city :'Sylhet', 
//       country :' BD'
//    }
// } 


// let {name ,age,address, address:{city , country} } = person  // this is call object destructuring 

// console.log(name, age, city, address , country); 

// object to array 

// let obj ={ 
//   a :10 ,
//   b: 20
// } 

// let arr = Object.entries(obj) 
// console.log(arr); 

// Array to Object 

// let arr = [
//   ['a' , '10'],
//   ['b', '20']
// ] 
// let obj = Object.fromEntries(arr) 
// console.log(obj);
// if('object'[Symbol.iterator]){
//   console.log('True');
// }
// else{
//   console.log("False");
// }  

// let iterateStr = " Emad " 
// let iterate = iterateStr[Symbol.iterator]()
// console.log(iterate.next());
// console.log(iterate.next());
// console.log(iterate.next());
// console.log(iterate.next());
// console.log(iterate.next());
// console.log(iterate.next());
// console.log(iterate.next());
// console.log(iterate.next());

 // For of loop 



//  let arrStr =['adil' ,'emad' ,[1,2,5]]
//  for(let x of arrStr ){
//   console.log(x);
//  } 

// Set dataStructure in javaScript 


// let arr =['adil', 'emad','tasin']
// let arr2 =[1,2,3,4,5]
// let set = new Set(arr)
// let set2 = new Set(arr2) 

// set.add(1)
// set.delete(1)
// console.log(set); 
// console.log(set.entries());
// console.log(set.values());
// console.log(set.has("adil"));
// console.log(set2); 

//Map in javaScript 

// let map = new Map([
//   ['a' , 10],
//   ['b' , 20],
//   ['c' , 30],
// ])  
// map.set('d',100)
// console.log(map.get('a'));
// map.delete('a')
// console.log(map);
// console.log(map.has('c'));
// map.clear() 
// console.log(map);
// map.forEach((v, k)=>{
// console.log(k,v);
// })\

// class Adil {
//   constructor(name , age){
//     name = this.name 
//     age = this.age
//   }
//   draw(){
//     console.log("I love You");
//   }
// }

// let adil = new Adil("Emad" , 22)
// console.log(adil);


// Inheritance in ES6 

// class Person{
//   constructor(color){
//     this.color = color
//   }
//   status() {
//     console.log("I love You ");
//   }
  
// }

// class Men extends Person {
//   constructor(color ,age, salary){
//     super(color) 
//     this.age = age
//     this.salary = salary

//   }
//   sum() {
//     return (this.age + this.salary) 
//   }
// }

// let men = new Men("Men in Black" ,22, 250000)
// console.log(men);
// men.status() 


// try-catch method 

// try{
//   console.log('1')
//   throw new Error("Love you ")
//   console.log('12')
//   console.log('11')
//   console.log('13.')
// }
// catch(e){
//   console.log(e.message);
// } 
// finally{
//   console.log("Its FInal");
// }


// AJAX Code 

// const xhr = new XMLHttpRequest() 
// xhr.open('get', 'https://jsonplaceholder.typicode.com/users')

// xhr.onreadystatechange= function(e){
//   if(xhr.readyState=== 4){
//     if(xhr.status=== 200) {
//       console.log(xhr.response);
//     }
//     else{
//       console.log(xhr.status);
//     }
//   }
// }

// xhr.send()  

// custom made AJAX 

// function getRequest (url, cb) {

//   const xhr = new XMLHttpRequest() 
//   xhr.open('get', url) 

//   xhr.onreadystatechange= function(e){
//     if(xhr.readyState=== 4){
//       if(xhr.status=== 200) {
//         let response = JSON.parse(xhr.response) 
//         cb(null, response)
//       }
//       else{
//         cb(xhr.status , null)    
//       }
//     }
//   } 
//   xhr.send()
// }

// getRequest('https://jsonplaceholder.typicode.com/users', (err, res)=>{
//   if(err){
//     console.log(err);
//   }
//   else{

// // console.log(res);
//     res.map(r => console.log(r.email))
//   }
// }) 


// getRequest('https://jsonplaceholder.typicode.com/posts', (err, res)=>{
//   if(err){
//     console.log(err);
//   }
//   else{
//     console.log(res);
//   }
// })


//  let list = document.getElementById("list") 

// let li= document.createElement("li") 
// li.innerHTML = " Four" 

// list.appendChild(li)


// let li = createElement('li', 'list-item' ,'Four')
// let li2 = createElement('li', 'list-item' ,'Five')


// function createElement(tagName, ClassName, innerHTML){
//   let tag = document.createElement(tagName) 
//   tag.ClassName = ClassName || ''

//   tag.innerHTML = innerHTML || ''

//   return tag
// } 

// list.appendChild(li)
// list.appendChild(li2)

// let p = createElement('p', 'Paragraph', 'lisabibswvibsi vsbvi v ivbfihvhefbvief  b fvbvihfebv dv ubgvi sdbv sdhv wdivhb iwdfbgv iigvb iwbg iwevb isdfjjvb sdjjhfb isjdbf isdjfb isdjfb ibf iasbgv ioabgv iiabhdg isdfvb ')
// let div= document.getElementById("cont")
// div.appendChild(p)


// function getElement(id){
//   let item = document.getElementById(id) 
//   return item
// }
// let list2= getElement("list")
// console.log(list2);

// let p = new Promise((resolve, reject) => { 
//   console.log("I am a promise");
// })

// let e = new Error("I Love You")
// console.log(e.message);
// let p = new Promise((res,rej)=>{
//   setTimeout(() => {
//     console.log("I am Done");
//     rej(new Error("I love you"))
//   }, 2500);
// })
// // to get the value
// p.then((val)=>{
//   console.log(val);
// })

// // to catch the error
// p.catch((err)=>{
//   console.log(err.message);
// })

// let p1 = new Promise((res,rej)=>{
//   setTimeout(() => {
//     console.log("Resolve after 2 second !"); 
//     res(45)
//   }, 2000);
// })

// p1.then(val=>{
//   console.log(val);
// })



//Clock Using Immediately Invoke Function Expression


( ()=>{
 let Hours = document.getElementById("hours")
 let Min = document.getElementById("min")
 let Sec = document.getElementById("sec")
 let ampm = document.getElementById("ampm")


setInterval(()=>{
  
let date = new Date(); 
let sec  =  date.getSeconds(); 
let min = date.getMinutes()
let hours = date.getHours();
if(sec<10){
   sec  = '0'+ date.getSeconds(); 
}
if(min<10){
  min  = '0' + date.getMinutes(); 
}

if(hours==0 && hours <= 12)
{
  if(hours==0){
   
    hours  = 12 ; 
    ampm.innerHTML = "AM"
    
  }
  
  else if(hours <  12){
    
    hours = '0' +hours
    ampm.innerHTML = "AM"
  
  }}

if(hours > 12){
 
  hours  = date.getHours() - 12 ; 
  hours = '0' + hours
  ampm.innerHTML = "PM"

}


  `${Hours.innerHTML= hours} : ${Min.innerHTML = min} : ${Sec.innerHTML = sec} `
}, 1000)} ) () ;

// End