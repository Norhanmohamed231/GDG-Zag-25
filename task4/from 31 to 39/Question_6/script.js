function gradeCalc(score){
    switch (true){
        case (score>=90 && score<=100):
            console.log("A");
            break;
        case (score>=80 && score<=89):
            console.log("B");
            break;
        case (score>=70 && score<=79):
            console.log("C");
            break;
        case (score>=60 && score<=69):
            console.log("D");
            break;
        case (score>=0 && score<=59):
            console.log("F");
            break;
            default:("non")
            
    }

    

}
gradeCalc(98);