$(document).ready(function () {
    $(".gnb > li").on("mouseover", function () {
        $(this).children(".sub").stop().slideDown();
    });

    $(".gnb > li").on("mouseleave", function () {
        $(this).children(".sub").stop().slideUp();
    });

    $(".click").on("click", function() {
       $(".popup").show(); 
    });
    
    $(".btn").on("click", function() {
       $(".popup").hide(); 
    });
});
