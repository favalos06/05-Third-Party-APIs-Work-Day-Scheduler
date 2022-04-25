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

function generateJson() {
  const input = textAreas;
  let output = [];
  let temp;

  // loop through textareas and make arr
  textAreas.each(function (i) {
    temp = { value: input[i].value };
    output.push(temp);
  });

  // save to local storage
  localStorage.setItem("events", JSON.stringify(output));
}

function setEventsFromStorage() {
  // set events to textareas
  if (storedEvents !== null) {
    textAreas.each(function (i) {
      $(this).val(storedEvents[i].value);
    });
  } else {
    generateJson();
  }
}
setEventsFromStorage();

function updateJsonHandler() {
  // add click handler to all save btns
  saveBtns.each(function (i) {
    $(this).click(function () {
      // update stored events array with updated value
      storedEvents[i].value = textAreas[i].value;

      // save to local storage
      localStorage.setItem("events", JSON.stringify(storedEvents));
    });
  });
}
updateJsonHandler();
