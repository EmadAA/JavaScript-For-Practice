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
let arr = [1, 2, 3 ,4 ,5 ] 
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
