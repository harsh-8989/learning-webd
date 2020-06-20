var colors=[];
var playingmode='hard';
var hard=document.getElementById('hard');
var easy =document.getElementById('easy');
generate_color(playingmode);
document.getElementById("newcolor").innerHTML="New colors";
//document.getElementById("result").style.visibility="hidden";
document.getElementById('easy').onclick=function(){
    if(playingmode=='hard'){
        playingmode='easy';
        hard.classList.toggle('active');
        easy.classList.toggle('active');
        
    }
    document.getElementById("newcolor").innerHTML="New colors";
    document.getElementById("temp").style.backgroundColor="#4682B4";
    generate_color(playingmode);
}
document.getElementById('hard').onclick=function(){
    if(playingmode=='easy'){
        playingmode='hard';
        hard.classList.toggle('active');
        easy.classList.toggle('active');
    }
    document.getElementById("newcolor").innerHTML="New colors";
    document.getElementById("temp").style.backgroundColor="#4682B4";
    generate_color(playingmode);
}
document.getElementById('newcolor').onclick=function(){
    document.getElementById("newcolor").innerHTML="New colors";
    document.getElementById("temp").style.backgroundColor="#4682B4";
    generate_color(playingmode);
}

function generate_color(mode){
    if(mode=='hard'){
        for(var i=4;i<=6;i++){
            document.getElementById('box'+i).style.display="block";
        }
        var answer=Math.round(Math.random()*5)+1;
        while(colors.length!=6){
            var x=Math.round(Math.random()*255);
            var y=Math.round(Math.random()*255);
            var z=Math.round(Math.random()*255);
            var color="rgb("+x+", "+y+", "+z+")";
            if(colors.indexOf(color)==-1){
                colors.push(color);
            }
            else {
                continue;
            }
        }
        document.getElementById("gussing-color").innerHTML=colors[answer-1];
        for(var i=1;i<=6;i++){
            document.getElementById('box'+i).style.backgroundColor=colors[i-1];
        }
        colors=[];
    }
    else{
        var answer=Math.round(Math.random()*2)+1;
        while(colors.length!=3){
            var x=Math.round(Math.random()*255);
            var y=Math.round(Math.random()*255);
            var z=Math.round(Math.random()*255);
            var color="rgb("+x+", "+y+", "+z+")";
            if(colors.indexOf(color)==-1){
                colors.push(color);
            }
            else {
                continue;
            }
        }
        document.getElementById("gussing-color").innerHTML=colors[answer-1];
        for(var i=1;i<=3;i++){
            document.getElementById('box'+i).style.backgroundColor=colors[i-1];
        }
        
        for(var i=4;i<=6;i++){
            document.getElementById('box'+i).style.display="none";
        }
        colors=[];
    }
}
var temp=document.getElementById("temp")
for(var i=1;i<=6;i++){
    document.getElementById('box'+i).onclick=function(){
        if(document.getElementById("newcolor").innerHTML=="New colors"){
            if(this.style.backgroundColor==document.getElementById("gussing-color").innerHTML)
            {
                for(var j=1;j<=6;j++){
                    document.getElementById("box"+j).style.backgroundColor=document.getElementById("gussing-color").innerHTML;
                }
                temp.style.backgroundColor=document.getElementById("gussing-color").innerHTML;
                document.getElementById("result").innerHTML="correct!";
                setInterval(() => {
                    document.getElementById("result").innerHTML="";
                }, 1000);
                document.getElementById("newcolor").innerHTML="play Again?";
            }
            else{
                this.style.backgroundColor="black";
                document.getElementById("result").innerHTML="try again";
                setTimeout(() => {
                    document.getElementById("result").innerHTML="";
                }, 1000);
            }
        }
    }
}