function reverseNumber(number){
    let reversed= Math.abs(number).toString().split("").reverse().join("")
    return number <0 ? -parseInt(reversed):parseInt(reversed);
}
console.log(reverseNumber(12345));