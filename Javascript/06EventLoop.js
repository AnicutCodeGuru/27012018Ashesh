function print(){  
    for(var i=0;i<10;i++){
        (function(val){
            setTimeout(function(){
                console.log(val);
            },1000)
        })(i)
    }
}

print();