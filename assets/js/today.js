// Get Day of the week and date from moment.js
const dayOfTheWeek = moment().format("dddd");
const currentDate = moment().format("MMMM Do");
// Get field to add date
const currentDayField = $("#currentDay");

// Concatenate day readout and add them to the page
$(currentDayField).html(dayOfTheWeek + ", " + currentDate);