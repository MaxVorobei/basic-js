const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(data) {
   if (!data) {
   return 'Unable to determine the time of year!'
   } else if (Object.prototype.toString.call(data) !== '[object Date]') {
      throw new Error('Invalid date!');
         return;
   } else {
      try {
         data.getTime();
      }
      catch (error) {
         throw new Error('Invalid date!');
         return;
      }
   }
   switch (data.getMonth(data)) {
      case 2:
      case 3:
      case 4:
         return 'spring'; break;
      case 5:
      case 6:
      case 7:
         return'summer'; break;
      case 8:
      case 9:
      case 10:
         return 'autumn'; break;
      case 11:
      case 0:
      case 1:
         return 'winter'; break;
   };
   
}

module.exports = {
   getSeason
};
