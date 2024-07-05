// 1. array ichidagi eng katta sonni toping 

// let arr = [1,2,8,5,22,6,7,3]
// let BiggestNumber = []
// for (let i = 0; i < arr.length; i++) {
//      let num = arr.sort(function(a,b){return a - b})
//      console.log(num);
//      BiggestNumber = arr[arr.length-1]
     
//     }
//     console.log(BiggestNumber);
    
     
//  2. array ichidagi eng kichik sonni toping 

// let arr = [1,2,8,5,22,6,7,3]
// let smallestNumber = []
// for (let i = 0; i < arr.length; i++) {
//      let num = arr.sort(function(a,b){return a - b})
//      console.log(num);
//      smallestNumber = arr[0]
     
//     }
//     console.log(smallestNumber);
     

//  3. Foydalanuvchi son kiritadi va arrey ichidagi 
// foydalanuvchi sonidan kichik bo’lgan sonlarni ekranga chiqaring 


// let user = +prompt("Raqam kiriting")
// let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]

// for (let i = 0; i < arr.length; i++) {
//     if (user > arr[i]) {
//         console.log(arr[i]);
//     }
    
// }


// 4. argument sifatida qabul qilingan sonning 
// mukammal yoki mukammal son emasligini aniqlaydigan function yarating 


// function mukammalSon(num) {
//     let total = 0
//     for (let i = 0; i < num; i++) {
//         if(num % i == 0 ) {
//            total += i
//         }  
//     }

//     if (num == total) {
//     console.log(`${num} mukammal son`);
//     }else if(!num == total) {
//         console.log(`${num} mukammal son emas`);
//     }else {
//         console.log('Son kiriting');
//     }
// }
// mukammalSon(8128)

// Tekshirish uchun Mukammla sonlar to'plami

//1. 6
//2. 28
//3. 496
//4. 8128
//5. 33,550,336
//6. 8,589,869,056
//7. 137,438,691,328
//8. 2,305,843,008,139,952,128


//5. raqamlar kiritilgan arreyni teskari qilish (for dan foydalaning)

// let arr = [1,3,6,7,9,12]
// arr.reverse()

// const reverseArr = (num) => {
//     for (let i = 0; i < arr.length; i++) {
        
//     }
//     console.log(arr);
// }
// reverseArr(arr)



// 6. arrey ichidagi tub sonlar ni toping 

// const tubSon = (number) => {
//     let count = 0
//     let result = ""
//     if (number >= 2) {
//         for(let i = 1; i < number; i++) {
//             if (number % i == 0 ) {
//                 count++
//             }
//         }
//         if (count === 1) {
//             result = `${number} Tub son`
//         }else {
//             result = `${number} Tub son emas`
//         }
//     }else {
//         result = "Son kiriting"
//     }
//     return result
// }
// console.log(tubSon(11)); 


// 7. Ixtiyoriy function va value lari sonlardan iborat bo'lgan object yaratilsin, 
// va object value laridan tashkil topgan arrayga function parametri ham oxiridan ham boshidan qo'shilsin


// let obj = {a:1,b:2,c:3,d:4,e:5,f:6}

// function addNumber(num) {
//     let value = Object.values(obj)
//     value.push(num)
//     value.unshift(num)
//     console.log(value);
// }
// console.log(addNumber(22));