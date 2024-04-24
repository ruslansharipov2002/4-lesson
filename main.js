
// 1-task 


// function middlenumber(params) {
//         array = [...params]
//     let result = 0 
//     let num1 = 0 
//     let num2 = 0
//     if (array.length % 2 == 0 ) {
//     num1 = (array.length / 2 )
//     num2 = (array.length / 2 ) - 1
//     result = (array[num1] + array[num2]) / 2 
//     return result  
//     }
//     else{
//         result = (array.length / 2 ) - 0.5
//         return(array[result])
    
//     }
//     }
    
//     console.log(middlenumber([1,2,3,2,7,8,5,8]))


// 2-task 

// let products = [
//     {id: 6, name: "Smartphone", price: 12000, rating: 4.5, discount: 20},
//     {id: 2, name: "Acer", price: 12000, rating: 4.3, discount: 10},
//     {id: 1, name: "Mac book", price: 17000, rating: 4.7, discount: 40},
//     {id: 4, name: "HP", price: 21000, rating: 4.1, discount: 16},
//   ];
  
//   let filter_x = products.filter(product => product.id !== 4);
  
//   console.log(filter_x);

// 3-task 


// function isOnlyLetters(str) {
//     for (let i = 0; i < str.length; i++) {
//       if (!(/[A-zA-Z]/).test(str[i])) {
//         return false;
//       }
//     }
//     return true;
//   }
  
//   let string1 = "FaqatginaHarflardanIboratEkanliginiTekshirish";
//   let string2 = "Bu stringda sonlar ham bor: 123"
  
//   console.log(isOnlyLetters(string1)) 
//   console.log(isOnlyLetters(string2)) 
  
//   4-task 


// let animals = ['dog', 'chicken', 'cat', 'dog', 'chicken', 'chicken', 'rabbit'];

// function animals_1(arr) {
//   let x_y = {};
//   arr.forEach(word => {
//     if (x_y[word]) {
//       x_y[word]++;
//     } else {
//       x_y[word] = 1;
//     }
//   });
//   return x_y;
// }

// let obj1 = animals_1(animals);
// console.log(obj1);


// 5-task 

// function w(str) {
//     const word1 = str.split(' ');
  
//     const word2 = word1.map(word => word.length);
  
//     return word2;
//   }
  
//   const title = "Hello world";
//   const result = w(title);
//   console.log(result)
  

// 6-task 


// function title(str) {
//     return str.trim().length == str.length;
//   }
  
//   let input = "salom dunyo";
//   let h1 = title(input);
//   console.log(h1); // true
  

// 7-task 

// function key(obj) {
//     let h1 = Object.entries(obj);
  
//     let x_y = h1.map(([key, value]) => `${key}${value}`);
  
//     return x_y;
//   }
  
//   let input = {a: 2, b: 5, c: 7};
//   let result = key(input);
//   console.log(result)  


// 8-task 

// let x_y = [
//     {name: "Elbek", percent: 95,},
//     {name: "Zafar", percent: 78,},
//     {name: "Aziz", percent: 83,},
//     {name: "Jasur", percent: 88,},
//     {name: "Bobur", percent: 66,},
//     {name: "Kamron", percent: 75,},
//   ];
  
//   function x(arr) {
//     let result = arr.reduce((acc, curr) => {
//       if (curr.percent >= 80) {
//         acc.passed++;
//       } else {
//         acc.failed++;
//       }
//       return acc;
//     }, { passed: 0, failed: 0 });
  
//     return result;
//   }
  
//   let result = x(x_y);
//   console.log("O'tgan talabalar soni:", result.passed);
//   console.log("O'ta olmagan talabalar soni:", result.failed);
  

// 9-task 



// var title = function(nums1, nums2) {
//     let x_y = nums1.concat(nums2);
    
//     x_y.sort((a, b) => a - b);
    
//     let length = x_y.length;
    
//     if (length % 2 === 0) {
//       let h1 = length / 2;
//       return (x_y[h1 - 1] + x_y[h1]) / 2;
//     } else {
//       let midIndex = Math.floor(length / 2);
//       return x_y[midIndex];
//     }
//   }
  
//   let nums1 = [1, 2];
//   let nums2 = [3, 4];
//   console.log(title(nums1, nums2))
  