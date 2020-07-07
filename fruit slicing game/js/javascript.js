
$(document).ready(function () {
    var playing=false;
    var trail=3;
    var scorevalue=0;
    var fruits=[];
    var action;
    var value=-100;
    for(var i=1;i<=5;i++){
        fruits.push("images/fruit"+i+".png");
    }
    
    $("#start-button").click(function (e) { 
        e.preventDefault();
        if(playing){
            location.reload();
        }
        else{
            playing=true;
            $("#score").html("Score: "+scorevalue);
            hide("game-over")
            $("#start-button").html("Reset-game");
            show("trail-left");
            createlife();
            start();
        }
    });
    
    function start(){
        $("#fruit").show();
        $("#fruit").css("top", "-100px");
        $("#fruit").css({
            "left":Math.floor(Math.random()*550)+"px"
        });
        pickrandomfruit();
        value=-100;
        action=setInterval(function(){
            $("#fruit").css("top", value+"px");
            value+=3;
            if(value>400){
                trail-=1;
                
                if(trail>0){
                    $("#fruit").css({
                        "top":'-100px'
                    });
                    $("#fruit").css({
                        "left":Math.floor(Math.random()*550)+"px"
                    });
                    pickrandomfruit();
                    value=-100;
                    createlife();
                   
                }
                else{
                    $("#fruit").hide();
                    $("#trail-left").hide();
                    $("#game-over").append(scorevalue);
                    $("#game-over").show();
                    clearInterval(action);
                }
                
            }
            
        },
        10);
        
    
    };
    
    function pickrandomfruit() {
        $("#fruit").attr("src", fruits[Math.floor(Math.random()*5)]);
    }
    function createlife() {
        $("#trail-left").html("");
        for(var i=0;i<trail;i++){
            $('<i><img src="images/heart.jpg" class="heart"></i>').appendTo("#trail-left");
        }
    };
    $("#fruit").mouseover(function () { 
        scorevalue+=1;
        $("#score").html("Score: "+scorevalue);
        $("#slice-sound")[0].play();
        clearInterval(action);
        $("#fruit").hide("explode",500);
        
        setTimeout(function(){
            start();
        },500);

    });
    function show(id){
        document.getElementById(id).style.display='block';
    }
    function hide(id){
        document.getElementById(id).style.display='none';
    }
});