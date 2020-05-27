$(function(){
  $(".park--show__info__thumbnail a").click(function (){
    $(".park--show__info__main img").attr("src", $(this).attr("href"));
    return false;
  });
});