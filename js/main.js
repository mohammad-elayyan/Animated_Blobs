$(document).ready(function(){
    $burger = $(".burger");
    $ul = $(".navbar");
    $burger.click(function(){
        $ul.toggleClass("open");
    });
  
});