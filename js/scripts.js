var leapYear = function(year) {
  if ((year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0)) {
    return true;
  } else {
    return false;
  }
};

$(document).ready(function() {
  $("form#leap-year").submit(function(event) {
    event.preventDefault();
    var year = parseInt($("input#year").val());
    var endResult = leapYear(year);
    $("#endresult").text(endResult);

    $(".year").text(year);

    if (!endResult) {
      $(".not").text("not");
    } else {
      $(".not").text("");
    }

      $("#endresult").show();
  });
});
