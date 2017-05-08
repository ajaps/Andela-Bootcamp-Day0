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
    
return "Invalid input";

}


module.exports = {
    myPrime:getPrimes
};