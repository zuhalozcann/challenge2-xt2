    function startTime() {
        var today = new Date();
        var h = today.getHours();
        var m = today.getMinutes();
        var s = today.getSeconds();
        m = checkTime(m);
        s = checkTime(s);
        document.getElementById('tekst').innerHTML =
        h + ":" + m + ":" + s;
        var t = setTimeout(startTime, 500);
        }
    function checkTime(i) {
        if (i < 10) {i = "0" + i};  
        return i;
    }

    function timeOfTheDay(){
        var today = new Date();
        var date = today.getDate();
        var weekday = new Array(7);
        weekday[0] = "Sunday";
        weekday[1] = "Monday";
        weekday[2] = "Tuesday";
        weekday[3] = "Wednesday";
        weekday[4] = "Thursday";
        weekday[5] = "Friday";
        weekday[6] = "Saturday";

        var month = new Array(11);
        month[0] = "January";
        month[1] = "February";
        month[2] = "March";
        month[3] = "April";
        month[4] = "May";
        month[5] = "June";
        month[6] = "July";
        month[7] = "August";
        month[8] = "September";
        month[9] = "October";
        month[10] = "November";
        month[11] = "December";

        var dag = weekday[today.getDay()];
        var maand = month[today.getMonth()];
        document.getElementById("day").innerHTML =  dag + ", " + maand + " "  + date ;
    }

    function greeting(){
        var d = new Date();
        var time = d.getHours();

        if (time > 0 && time < 12){
            document.getElementById('greeting').innerHTML = "GOOD MORNING MARS" ;
        }
        if(time >= 12 ){
            document.getElementById('greeting').innerHTML = "GOOD AFTERNOON MARS";
        }
        if(time >= 18 ){
            document.getElementById('greeting').innerHTML = "GOOD EVENING MARS";
        }
    }

    function task(){
        var d = new Date();
        var time = d.getHours();

        if (time >= 0 && time < 7){
            document.body.style.backgroundColor = "#263B41";
            document.getElementById('taak').innerHTML = "Sleep time!";
        }
    
        else if (time >= 7 && time < 8){
            document.body.style.backgroundColor = "#68A8AA";
            document.getElementById('taak').innerHTML = "Wake up!";
            
            
        }
        else if (time >= 8 && time < 9){
            document.body.style.backgroundColor = "#68A8AA";
            document.getElementById('taak').innerHTML = "Breakfast time!";
           

        }

        else if (time >= 9 && time < 12){
            document.body.style.backgroundColor = "#99A18B";
            document.getElementById('taak').innerHTML = "Let's work!";

          
        }

        else if (time >= 12 && time < 13){
            document.body.style.backgroundColor = "#99A18B";
            document.getElementById('taak').innerHTML = "Lunch time!";

        }

        else if (time >= 13 && time < 17){
            document.body.style.backgroundColor = "#99A18B";
            document.getElementById('taak').innerHTML = "Get back to work";
        }

        else if (time >= 17 && time < 18){
            document.body.style.backgroundColor = "#497082";
            document.getElementById('taak').innerHTML = "Time for go to home!";
        }

         else if (time >= 18 && time < 19){
            document.body.style.backgroundColor = "#497082";
            document.getElementById('taak').innerHTML = "Time for a dinner!";
        }

        else if (time >= 19 && time < 23){
            document.body.style.backgroundColor = "#497082";
            document.getElementById('taak').innerHTML = "Time to chill";
        }
    
         else if (time >= 23 && time < 24){
            document.body.style.backgroundColor = "#263B41";
            document.getElementById('taak').innerHTML = "Sleep time!";
     
        }
    }

    function tekst_color() {
    
        var message = document.getElementById('greeting');

        var tl1 = new TimelineMax({repeat: -1});
        tl1.to(message, 10, {right: '100%'});

        var d = new Date();
        var time = d.getHours();

        if ( time <= 6 || time >= 17  ){
            document.getElementById('tekst').style.color = "white";
            document.getElementById('greeting').style.color = "white";
            document.getElementById('day').style.color = "white";
            document.getElementById('taak').style.color = "white";
            document.getElementById('taak').style.color = "white";
            }
        else {
            document.getElementById('tekst').style.color = "white";
            document.getElementById('greeting').style.color = "white";
            document.getElementById('day').style.color = "white";
            document.getElementById('taak').style.color = "white";
        } 
    }  

 
    startTime();
    timeOfTheDay();
    greeting(); 
    task();
    tekst_color();
     //voorbeelden();
