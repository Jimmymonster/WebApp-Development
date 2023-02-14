function changeBTNColorandText(){
    var x= (new Date).getSeconds();
    var color,backgroundColor;
    x%=6;
    if(x==0){
        color="#F0EDCC";
        backgroundColor="#02343F";
    }
    else if(x==1){
        color="#ACC7B4";
        backgroundColor="#331B3F";
    }
    else if(x==2){
        color="#F5D042";
        backgroundColor="#0A174E";
    }
    else if(x==3){
        color="#CED46A";
        backgroundColor="#07553B";
    }
    else if(x==4){
        color="#DCE2F0";
        backgroundColor="#50586C";
    }
    else if(x==5){
        color="#F9EBDE";
        backgroundColor="#815854";
    }
    postMessage([1,new Date,color,backgroundColor]);
}

var myInterval;
onmessage = (e) =>{
    // 1 change color and text , 0 change position
    changeBTNColorandText();
    if(e.data=="fixed"){
        postMessage([0,"static","default"]);
        clearInterval(myInterval);
    }
    else{
        postMessage([0,"fixed","0"]);
        myInterval=setInterval(changeBTNColorandText,1000);
        
    }
}