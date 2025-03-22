function temperature(temp){
    switch(true){
        case (temp < 10):
            console.log("recommend wearing a coat");
            break
        case (temp >= 10 && temp <= 20):
            console.log("recommend wearing a sweater");
            break
        case (temp > 20):
            console.log("recommend wearing a T-shirt");
            break
        default:console.log("nnnnn")
    }
}
temperature(50)