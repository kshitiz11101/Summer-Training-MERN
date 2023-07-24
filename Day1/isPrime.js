function isPrime(n){
    var flag=false;
    
    if(n<=1){
        return false;}
    for(let i =2;i<n;i++){
        if(n%i==0){
            flag=true;
            break;
        }
    }
       if(flag==true){
           console.log("Number is not prime");
       }
    else{
        console.log("Prime Number");
    }
    
}
