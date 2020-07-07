$("ul").on("click","li",function(){
   $(this).toggleClass("done");
});
$("ul").on("click","span",function (event) { 
    $(this).parent().fadeOut(500,function(){
        remove();
    });
    event.stopPropagation();
});
$("input").keypress(function (e) { 
    if(e.which===13){
        var todo=$(this).val();
        $(this).val("");
        $("<li>"+"<span><i class='fa fa-trash'></i></span> "+todo+"</li>").appendTo("ul");
    }
});
$(".fa-plus").click(function (e) { 
    e.preventDefault();
    $("input").fadeToggle();
    
});