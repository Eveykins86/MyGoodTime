$(document).ready(function () {
  // Moment.js code for current date and time
  let NowMoment = moment().format("MMMM Do YYYY");
  let displayDate = document.getElementById("currentDay");
  let displayTime = document.getElementById("currentTime");
  displayDate.innerHTML = NowMoment;
  let currentHour = moment().format("HH");

  function updateTime() {
    let currentTime = moment().format("MMMM Do YYYY, h:mm:ss A");
    displayDate.innerHTML = "Current Date: " + currentTime.substr(0, currentTime.indexOf(","));
    displayTime.innerHTML = "Current Time: " + currentTime.substr(currentTime.indexOf(",") + 1);
  }

  // Call the function initially
  updateTime(); 

  // Update time every second
  setInterval(updateTime, 1000); 


  //grabs hour from each time slot and compares it to actual time
  $(".time-div").each(function () {
    var timeDiv = $(this).attr("id").split("-")[1];
    
    if (currentHour == timeDiv) {
      $(this).addClass("present");
      $(this).children(".description").addClass("white-text");
      console.log("Color: present");
    } else if (currentHour < timeDiv) {
      $(this).removeClass("present");
      $(this).addClass("future");
      console.log("Color: future");
    } else {
      $(this).removeClass("future");
      $(this).addClass("past");
      console.log("Color: past");
    }
  });

  //grabs values from time and value divs and saves them to local storage
  $(".saveBtn").click(function (event) {
    event.preventDefault();
    var value = $(this).siblings(".time-block").val();
    var time = $(this).parent().attr("id").split("-")[1];
    localStorage.setItem(time, value);
    console.log("save event" + event)

       // Show the notification
       $("#notification").toast("show");
  });



  //retrieves items from local storage and sets them in proper places
  $("#hour-09 .time-block").val(localStorage.getItem("09"));
  $("#hour-10 .time-block").val(localStorage.getItem("10"));
  $("#hour-11 .time-block").val(localStorage.getItem("11"));
  $("#hour-12 .time-block").val(localStorage.getItem("12"));
  $("#hour-13 .time-block").val(localStorage.getItem("13"));
  $("#hour-14 .time-block").val(localStorage.getItem("14"));
  $("#hour-15 .time-block").val(localStorage.getItem("15"));
  $("#hour-16 .time-block").val(localStorage.getItem("16"));
  $("#hour-17 .time-block").val(localStorage.getItem("17"));

  // Button function to clear local storage and clear contents
  $("#clearFieldsBtn").click(function (event) {
    event.preventDefault();
    $("textarea").val("");
    localStorage.clear();
  });
});