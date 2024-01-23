// Nav
$(".openNav").click(function () {
  $(".home #leftMenu").css("left", "0");
});

$(".closeBtn").click(function () {
  $(".home #leftMenu").css("left", "-250px");
});

// dropMenu
$(".dropMenu h3").click(function () {
  $(this).next().slideToggle();
  $(".dropMenu p").not($(this).next()).slideUp();
});

// CountDown
$("#days").countdown("2024/06/05", function (event) {
  $(this).html(event.strftime("%D D"));
});
$("#hour").countdown("2024/06/05", function (event) {
  $(this).html(event.strftime("%H H"));
});
$("#minute").countdown("2024/06/05", function (event) {
  $(this).html(event.strftime("%M M"));
});
$("#sec").countdown("2024/06/05", function (event) {
  $(this).html(event.strftime("%S S"));
});

// Message Area
$("#message").keyup(function () {
  let myLength = $(this).val().length;

  $("#num").text(
    100 - myLength <= 0 ? "your available character finished" : 100 - myLength
  );
});
