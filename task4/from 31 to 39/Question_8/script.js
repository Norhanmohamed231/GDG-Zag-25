function calculator(num1,num2,op){
    switch(true){
        case (op=="+"):
            console.log(num1+num2);
            break;
        case (op=="-"):
            console.log(num1-num2);
            break;
        case (op=="*"):
            console.log(num1*num2);
            break;
        case (op=="/"):
            console.log(num1/num2);
            break;

    }


}
calculator(10,3,"+");
calculator(10,3,"-");
calculator(10,3,"*");
calculator(10,3,"/");
