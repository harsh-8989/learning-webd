var playing =false;
var correct_index;
var scorevalue=0;
var timervalue=60;
var answer;
document.getElementById('start-button').onclick=function(){
    if(playing){
        location.reload();
    }
    else{
        playing=true;
        start_timer();
        generate_quetion();
        document.getElementById('start-button').innerHTML='Reset Game'
        show('timer');

    }
}


function generate_quetion(){
    var x=1+Math.round(Math.random()*9);
    var y=1+Math.round(Math.random()*9);
    answer=x*y;
    correct_index=1+Math.round(Math.random()*3);
    document.getElementById('option'+correct_index).innerHTML=answer;
    var ans=[answer];
    document.getElementById('question').innerHTML=x+'x'+y;
    for(var i=1;i<=4;i++){
        if(i!=correct_index){
            var wrongAnswer;
            do{
                wrongAnswer = (1+ Math.round(9*Math.random()))*(1+ Math.round(9*Math.random())); //a wrong answer
            }while(ans.indexOf(wrongAnswer)>-1)
            document.getElementById("option"+i).innerHTML = wrongAnswer;
            ans.push(wrongAnswer);
        }
    }

}

for(var i=1;i<=4;i++){
    document.getElementById('option'+i).onclick=function(){
        if(!playing){
    
        }
        else{
            if(this.innerHTML==answer){
                increase_score();
                generate_quetion();
                hide('try-again');
                show('correct');
                setTimeout(() => {
                    hide('correct');
                }, 1000);
            }
            else{
                hide('correct');
                show('try-again');
                setTimeout(() => {
                    hide('try-again');
                }, 1000);
            }
        }
    }
}

function increase_score(){
    scorevalue++;
    document.getElementById('score').innerHTML='Score: '+scorevalue;
}
function start_timer(){
action=setInterval(() => {
    timervalue-=1;
    if(timervalue==0){
        stop_timer();
        hide('correct');
        hide('timer');
        hide('try-again');
        show('game-over');
        document.getElementById('scorevalue').innerHTML=scorevalue;
        playing=false;
        document.getElementById('start-button').onclick=function(){
            location.reload();
        }
    }
    document.getElementById('timervalue').innerHTML=timervalue;

}, 1000);
function stop_timer(){
    clearInterval(action);
}
}
function show(id){
    document.getElementById(id).style.display='block';
}

function hide(id){
    document.getElementById(id).style.display='none';
}