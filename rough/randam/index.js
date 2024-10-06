// let number = [205456];
// number.forEach((number)=>(
//     console.log(number*number)
// ));

// let num = [1, 2, 3, 4, 5]
// let newarr = num.map((val)=>{
//     return val;
// });
// console.log(newarr)

// let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,15];

// let newarr = num.filter((num) => {
//     return num % 2 === 0;
// })

// console.log(newarr)

// let num = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// let newnum = num.reduce((val)=>{
// return val + val
// })
// console.log(newnum);, 

// let num = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// let newarr = num.map((val)=>{
//     return val;
// })
// console.log(newarr,)

// count vovel

// function vovlecount(str){
//     let count = 0;
//     for (const char of str) {
//         if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u" ) {
//             count++ 
//         }
      
//     }
// console.log(count)
// }

// let arr = [1, 2, 3, 4, 5,6 ,7]
// let newarr = arr.filter((val)=>{
//     return val%2===0;
// })
// console.log(newarr)
//1*2*3*4*5*6

//largest value in arr
// let number = [1,2,3,4,5,6,7,8,9,0]
// let newarr = number.reduce((res,cur)=>{
//     return res > cur ? cur : res;
// })
// console.log(newarr)

// let marks = [90,56,84,57,23,69,90,89,94,90,97,94,23,34,64];
// let topper = marks.filter((val)=>{
//     return val >= 90
// })
// console.log(topper)


//find factorial

// let number = prompt("enter your number what ever you want to factorial")
// let arr = [];
// for(let i = 1; i <= number; i++){
//     arr[i-1]=i
    
// }
// console.log(arr)
// let newarr = arr.reduce((result,condition)=>{
//     return result * condition
// })
// console.log(newarr)


//add number

// let num = prompt("enter you number what you want to add")
// let container = [];
// for (let i = 1; i <= num; i++){
//     container[i - 1]= i
   
// }


// console.log(container)
// let add = container.reduce((result,previous)=>{
//     return result + previous;
// })

// console.log(add)


// let divs = document.querySelectorAll(".box")

// let idx = 1;
// for (div of divs){
//     div.innerText = `this is box ${idx}`;
//     idx++
// }