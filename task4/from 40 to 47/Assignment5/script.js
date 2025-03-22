let needle = "JS";
let haystack = ["PHP", "JS", "Python"];
if(haystack.includes(needle)){
    console.log("found");
}
if(haystack.includes("JS")){
    console.log("found");
}
if(haystack[1]===needle){
    console.log("found");
}
if(haystack.indexOf("JS") === 1) {
    console.log("Found");
}else{
    console.log("Not Found");
}