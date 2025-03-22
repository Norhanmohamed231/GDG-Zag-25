let website = "Go";
let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];
//Method 1
console.log(words[website.length][0].slice(website.length).toUpperCase()); 
//Method 2
console.log(words.reverse()[0][0].slice(website.length).toUpperCase()); 
