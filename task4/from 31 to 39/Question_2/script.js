function primeNumber(number){
    if(number<=1){
        return console.log("not prime")
    }

    for(let i=2;i<=Math.sqrt(number);i++){
        if(number %i ===0){
        return console.log("not prime")
        
    }
}
return console.log("is prime")
}
primeNumber(19)