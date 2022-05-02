const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
   let arrResult = [];
   if (!Array.isArray(arr)) {
      throw new Error("'arr' parameter must be an instance of the Array!");
   }
   for (let i = 0; i < arr.length; i++) {
      
      switch (arr[i]) {
         case '--discard-next':
            if (i === (arr.length -1)) {
               break;
            }
            arrResult.push(null); i+=2; break;
         case '--discard-prev':
            if (i === 0) {
               break;
            }
            arrResult[arrResult.length - 1] = null; break;
         case '--double-next':
            if (i === (arr.length -1)) {
               break;
            }
            arrResult.push(arr[i+1]); break;
         case '--double-prev':
            if (i === 0) {
               break;
            }
            arrResult.push(arr[i-1]); break;
         default:
            arrResult.push(arr[i]); break;
      }
   };
   return arrResult.filter(el => el != null)
}

module.exports = {
   transform
};
