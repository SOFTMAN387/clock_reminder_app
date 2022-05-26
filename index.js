function clock() {
    var hours = document.getElementById("hours");
    var mins = document.getElementById("mins");
    var secs = document.getElementById("secs");


    var time = new Date();
    var a = time.getHours();
    var b = time.getMinutes();
    var c = time.getSeconds();
    hours.innerHTML = a;
    mins.innerHTML = b;
    secs.innerHTML = c;
    if (a => 12) {
        document.getElementById("am_pm").innerHTML = "PM";
    }

}

setInterval(clock, 1000);



function settime() {

    //time setting for breakfast..************************
    select_wake_hours = document.getElementById("wake-up-time").value;
    console.log(select_wake_hours);
    var current_hours = new Date().getHours();

    if (select_wake_hours == current_hours) {
        document.getElementById("container-id").style.backgroundImage = "url(./images/breakfast.jpeg)";

        document.getElementById("bottom-msg").innerHTML = "Let's Have Breakfast !!";
    } else {
        console.log("someThing Went Wrong in breakFast time..");
    }

    //time setting for lunch .....*****************************

    var select_lunch_hours = document.getElementById("lunch-time").value;
    console.log(select_lunch_hours);
    var current_hours = new Date().getHours();

    if (select_lunch_hours == current_hours) {

        document.getElementById("container-id").style.backgroundImage = "url(./images/lunch.jpeg)";

        document.getElementById("bottom-msg").innerHTML = "Let's Have Lunch !!";
    } else {
        console.log("someThing Went Wrong in Lunch time..");

    }

    //setting time for dinner....*******************************

    var select_dinner_hours = document.getElementById("dinner-time").value;
    console.log(select_dinner_hours);
    var current_hours = new Date().getHours();

    if (select_dinner_hours == current_hours) {
        document.getElementById("container-id").style.backgroundImage = "url(./images/dinner.jpeg)";
        document.getElementById("bottom-msg").innerHTML = "Let's Have Dinner !!";
    } else {
        console.log("someThing Went Wrong in Dinner time..");

    }

    //time setting sucess...**************

    if (select_lunch_hours != 0 && select_dinner_hours != 0 && select_dinner_hours != 0) {
        alert("Time Setting Sucessfull !!");
    } else {
        alert("Please Set All Time..");
    }

}