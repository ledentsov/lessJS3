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

function task2function(){
    let i=0;
    do{
        if(i==0){
            console.log(i + " Это ноль"); 
        } else if(i%2==0){ 
            console.log(i + " Четное"); 
        } else console.log(i + " Нечетное");
        i++;
    }while(i<11)
}
function task3function(){
    for(let i=0; i<10;console.log(i++));
}
function task4function(){
    let str="";
    for(let i=1; i<21;i++){
         for(let j=0; j<i;j++){
            str=str+"x";
        }
            console.log(str);
            str="";
        }
    
}