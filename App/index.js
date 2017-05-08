const getPrimes = (integerValue) =>{
    if (typeof(integerValue) != "number"){
        return "invalid input";
    }
    else if(integerValue ==0){
        return [1];
    }
    else if(integerValue < 2){
        return [];
    }else if(integerValue == 2){
        return [2];
    }
    else if(integerValue%1 !=0){
        return "invalid input";
    }
    else if(typeof(integerValue) == "number"){
        let theArray =[];
        theArray.length=integerValue;
        theSquareRoot = Math.sqrt(integerValue);
        for(counter=2; counter<theSquareRoot; counter++){
            if (typeof(theArray[counter]) == "undefined"){
                 let determinantValue=0;
                 innerCounter=counter*counter +(determinantValue*counter);
                 while(innerCounter < integerValue){
                      theArray[innerCounter] = 0;
                      innerCounter=counter*counter +(++determinantValue*counter);
                 }
            }
        }
         var arrayResult=[2];
         for(i=3; i<=integerValue; i++){
              if(theArray[i]!=false)
                arrayResult.push(i);
        }
     return arrayResult;
    }
return "Invalid input";

}


module.exports = {
    myPrime:getPrimes
};