document.addEventListener("DOMContentLoaded", function() {
    getCurrentDay();
  });

function getCurrentDay() {
    const d = new Date();

    var day = "";
    // Get weekday
    switch (d.getDay()) {
        case 0:
          day = "SUNDAY";
          break;
        case 1:
          day = "MONDAY";
          break;
        case 2:
           day = "TUESDAY";
          break;
        case 3:
          day = "WEDNESDAY";
          break;
        case 4:
          day = "THURSDAY";
          break;
        case 5:
          day = "FRIDAY";
          break;
        case 6:
          day = "SATURDAY";
    }

    var month = "";
    // Get month
    switch (d.getMonth()) {
        case 0:
          month = "JANUARY";
          break;
        case 1:
          month = "FEBRUARY";
          break;
        case 2:
          month = "MARCH";
          break;
        case 3:
          month = "APRIL";
          break;
        case 4:
          month = "MAY";
          break;
        case 5:
          month = "JUNE";
          break;
        case 6:
          month = "JULY";
          break;
        case 7:
          month = "AUGUST";
          break;
        case 8:
          month = "SEPTEMBER";
          break;
        case 9:
          month = "OCTOBER";
          break;
        case 10:
          month = "NOVEMBER";
          break;
        case 11:
          month = "DECEMBER";
    }

    dayOfMonth = "";
    // Get day of month
    dayOfMonth = d.getDate();

    // Put them together
    const ret = day + ", " + month + " " + dayOfMonth;

    var element = document.getElementById("date");
    element.innerHTML = ret;

}