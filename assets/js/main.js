const textAreas = $("textarea"); // arr of all textarea fields
const saveBtns = $(".saveBtn"); // arr of all textarea fields
const currentTime = parseInt(moment().format("H")); // get current hour
let storedEvents = JSON.parse(localStorage.getItem("events")); // get stored events from local storage

function setColors() {
  // loop through all times and compare to current time
  textAreas.each(function () {
    const targetTime = $(this).data("hour"); // get target hour

    // set classes
    if (currentTime > targetTime) {
      $(this).addClass("past");
    } else if (currentTime === targetTime) {
      $(this).addClass("present");
    } else {
      $(this).addClass("future");
    }
  });
}
setColors();