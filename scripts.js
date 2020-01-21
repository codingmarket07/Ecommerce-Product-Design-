$(document).ready(function(){

$(".size_select").click(function() {
  $(".sliders").addClass("active");
  $(".select_size").show();
  $(".select_quantity").hide();
});

$(".qty_select").click(function() {
  $(".sliders").addClass("active");
  $(".select_size").hide();
  $(".select_quantity").show();
});

$(".sliders .close, .bg_shadow").click(function() {
  $(".sliders").removeClass("active");
});

$(".sliders .select_size .body ul li").click(function() {
  $(".sliders .select_size .body ul li").removeClass("active");
  $(this).addClass("active");
  $(".size_select span").text($(this).text());
  $(".sliders").removeClass("active");
});

$(".sliders .select_quantity .body ul li").click(function() {
  $(".sliders .select_quantity .body ul li").removeClass("active");
  $(this).addClass("active");
  $(".qty_select span").text($(this).text());
  $(".sliders").removeClass("active");
});

})