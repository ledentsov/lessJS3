function task1function(){
    let i=0;
    let task1value='2';
    let t=false;
    while(i<100){
        let j=2;
        while(j < i){
            if(i%j==0) {t=false;j++; break;} else{
                    
                    
                    // console.log(timedelay);
                    t=true;
                    j++;
                }
                
            
            
        }
        if (t==true){
            task1value= task1value+', '+i;
        }
        i++; 
    }
    document.getElementById("task1Value").innerHTML = task1value;
}