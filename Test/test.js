//TEST SUIT FOR PRIME NUMBERS FUNCTION
(function() {
  var myApp = require('../App/index.js');
  describe("Prime numbers tests ", function() {
    describe("Case for some invalid values", function() {
      it("should return 'invalid input' for input true ", function() {
        expect(myApp.myPrime(true)).toEqual('invalid input');
      });
      it("should return 'invalid input' for 'frank' ", function() {
        expect(myApp.myPrime('frank')).toEqual('invalid input');
      });

      it("should return 'invalid input' for [5,6] ", function() {
        expect(myApp.myPrime([5,6])).toEqual('invalid input');
      });

      it("should return 'invalid input' for input with decimal number 254.34 ", function() {
        expect(myApp.myPrime(254.34)).toEqual('invalid input');
      });
      it("should return 'invalid input' for input with decimal number 254.34 ", function() {
        expect(myApp.myPrime(254.34)).toEqual('invalid input');
      });
    });
   describe("Case for input less than 3", function() {
      it("should return [1] for 0", function() {
        expect(myApp.myPrime(0)).toEqual([1]);
      });

      it("should return [1] for 1", function() {
        expect(myApp.myPrime(1)).toEqual([1]);
      });

      it("should return [2] for 2", function() {
        expect(myApp.myPrime(2)).toEqual([2]);
      });
    });
        
    describe("Case for valid input", function() {
      it("should return [2,3,5,7] for 10", function() {
        expect(myApp.myPrime(10)).toEqual([2,3,5,7]);
      });

      it("should return [ 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47] for 51", function() {
        expect(myApp.myPrime(51)).toEqual([ 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47]);
      });
      it("should return 'large Array' for 100000000", function() {
        expect(myApp.myPrime(100000000)).toBeDefined();
      });
      
      var arr = jasmine.arrayContaining([13, 541])
      it("should contain 'large Array' for 100000", function() {
        expect(myApp.myPrime(100000)).toEqual(arr);
      });
    });
  });
})();