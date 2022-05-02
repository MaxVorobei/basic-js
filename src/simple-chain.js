const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
   chain: [],
   getLength() {
      return this.chain.length;
   },
   addLink(value) {
      if (value === undefined) {
         this.chain.push(' ');
      } else {
      this.chain.push(value);
      }
      return this;
   },
   removeLink(position) {
      if (this.chain[position - 1] !== undefined) {
            this.chain.splice(position - 1, 1);
         return this;
      } else {
         this.chain = [];
         throw new Error("You can't remove incorrect link!");
         return;
      }

   },
   reverseChain() {
      this.chain.reverse();
      return this;
   },
   finishChain() {
      let result ='';
      this.chain.forEach((el, index) => {
         if (index === this.chain.length - 1) {
            result +=   '( ' + el + ' )';
         } else {
            result = result + '( ' + el + ' )' + '~~';
         }
      
      })
      this.chain = [];
      return result;
   }
};

module.exports = {
   chainMaker
};
