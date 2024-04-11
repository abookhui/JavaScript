function three(i){
    if(i%3==0){
        console.log('박수');
    }
    else console.log('통과');
}
function threenine(i){
    if(i%3==0){        
        if(i%9==0) console.log('짝짝')
        else console.log('박수');
    }

    else console.log('통과');
}
function pass(num1, num2){
    if(num1 >= 40 && num2 >= 40 && num1+num2 >= 120) console.log('pass');
    else console.log('....');
}