function identityMatrix(num){
    for(let i = 1; i <= num; i++){
       for(let j = 1; j <= num; j++){
        if(j === i){
            console.log(1);
        }else{
            console.log(0);
        }
       }
       console.log('------------')
    }
}
identityMatrix(2);