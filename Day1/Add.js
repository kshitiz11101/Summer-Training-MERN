function add(){
    var a=0;
    for(var i=0;i<arguments.length;i++){
        if(isNaN(arguments[i]) && isNaN(parseFloat(arguments[i]))){
            continue;
        }
       else if(typeof(arguments[i])== 'number'){
           a=a+arguments[i];
        }
       
        else if(typeof(arguments[i])=='string'){
            if(typeof(parseFloat(arguments[i]))=='number'){
                a=a+parseFloat(arguments[i]);
            }
                else if(Array.isArray(arguments[i])){
                    for(var j=0;j<arguments[i].length;j++){
                        a=a+arguments[i][j];
                    }
                }
          else{
                continue;
            }
        }
      
            else{
                continue;
            }
        
    }
    return a;
}
