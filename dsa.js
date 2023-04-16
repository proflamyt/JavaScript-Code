// function convertToRoman(num) {
//     const romans = new Map([
//       [1000, 'M'], [900, 'CM'], [500, 'D'], [400, 'CD'],
//       [100, 'C'], [90, 'XC'], [50, 'L'], [40, 'XL'],
//       [10, 'X'], [9, 'IX'],  [5, 'V'], [4, 'IV'], [1, 'I']
    
//     ]);
//     let result = ''
//     if (romans.has(num)) return romans.get(num)
//      for (let i of romans.keys()) {
        
//        while (num >= i && num !==0) {
//          result += romans.get(i)
//          num -= i;
//        }
//      }
//      return result
//     }
    
// console.log(convertToRoman(2)) ;



// function palindrome(str) {
    
//     str = str.toLowerCase();
//     let len = str.length-1;
 
//     for (let i = 0, j=len; i <= len, j > 0; i++, j--) {
//         while (/[a-zA-Z0-9]/.test(str[j]) !== true)  j--;
        
//         while (/[a-zA-Z0-9]/.test(str[i]) !== true) ++i;
        
//         if (str[i] !== str[j]) {
//             return false
//         }
//         if (i===j)  return true;
      
//     }

//     return true
//   }


//console.log(palindrome("_eyeu"));