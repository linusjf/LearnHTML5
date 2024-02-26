$(document).ready(function() {
  setTimeout('$("#target1").css("color", "red")', 1000);
  setTimeout('$("#target1").prop("disabled", true)', 2000);
  setTimeout('$("#target4").remove()', 3000);
  setTimeout('$("#target2").appendTo("#right-card")', 4000);
  setTimeout('$("#target5").clone().appendTo("#left-card")', 5000);
  setTimeout('$("#target1").parent().css("background-color", "red")', 6000);
  setTimeout('$("#right-card").children().css("color", "orange")', 7000);
  setTimeout('$("#left-card").children().css("color", "green")', 8000);
  setTimeout('$(".target:nth-child(2)").addClass("animate bounce")', 9000);
  setTimeout('$(".target:even").addClass("animate shake")', 10000);
  setTimeout('$("body").addClass("spinner-border collapsing")', 11000);
  setTimeout('$("body").addClass("collapse")', 13000);
  setTimeout('$("body").removeClass("collapse")', 13500);
  setTimeout('$("body").removeClass("spinner-border collapsing")', 13750);
  setTimeout('$("body").addClass("collapse")', 13000);
  setTimeout('$("body").addClass("collapse.show")', 14000);
  setTimeout('$("body").addClass("animate hinge")', 16000);
});
