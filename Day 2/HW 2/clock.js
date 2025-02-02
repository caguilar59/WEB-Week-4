//Create a time data function
function currentTime () {
    var d = new Date();//Get current date
    var hr = d.getHours(); //Get current hours
    var min = d.getMinutes(); //Get current minutes
    var sec = d.getSeconds(); // Get current seconds
    var ampm; //Declare empty variable to store AM or PM
    var utchr = d.getUTCHours(); // Get current greenwich mean time (GMT)
    var timeDiff; //to store time difference between GMT hour and Local hour
    var adjTimerDiff; //To store time difference converted to positive number
    var timeZone; //To store the 4 time zones (PT, MT, CT, ET)

    //Add 0 to sinfgle digits for seconds
    if (sec < 10) {
        sec = "0" + sec;
    }
    // Add 0 to sinfgle digits for minutes
    if (min < 10) {
        min = "0" + min;
    }
    //Determine AM or PM string
    if (hr == 12) {
        ampm = "PM";//Set to PM
    }else if (hr > 12) {
        hr -= 12; //Decduct 12 from hours greater than 12 (military time)
        ampm = "PM"; //Set to PM
    }else {
        ampm = "AM"; //Set to AM
    }

    //Greenwich Mean Time
    timeDiff = d.getHours() - utchr;

    adjTimerDiff = Math.abs(timeDiff);

    switch (adjTimerDiff){
        case 8:
            timeZone = "PT";
            break;
        case 7:
            timeZone = "MT";
            break;
        case 6:
            timeZone = "CT";
            break;
        case 5:
            timeZone = "ET";
            break;
    }

    //Assemble time format to display
    var time = hr + ":" + min + ":" + sec + " " + ampm + " " + timeZone;

    //Display current local time and time zone on HTML elements
    document.getElementById("clock").innerText = time; // adding time

    //Run time data function every second
    setInterval(currentTime, 1000); //seting timer
}
// Initial run of time data function
currentTime();