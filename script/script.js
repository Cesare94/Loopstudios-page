$( document ).ready(function() {
    
    $("nav img").click(function() {
        $("nav ul").show();
        $("nav img").hide();
        $(".close").show();

    })
    $(".close").click(function() {
        $("nav ul").hide();
        $("nav img").show();
        $(".close").show();
    })



}) 

