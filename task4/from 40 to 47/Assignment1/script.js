let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
let num = 3;
//method 1
console.log(myFriends.slice(myFriends[num].length-myFriends[num].length,num))
//method 2
myFriends.splice(myFriends[num].length - num-num, myFriends[num].length - num)
console.log(myFriends)