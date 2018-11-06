function output_from_0(value){
    console.log(0);
    if(value > 0)
    for(var i = 1; i<= value; i++){
console.log(i);
    }
    else
    for(var i = -1; i>= value;i--){
        console.log(i);
    }


}
console.log(output_from_0(12));
console.log(output_from_0(-7));
console.log(output_from_0(7));