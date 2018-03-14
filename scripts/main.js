(function(){
'use strict';

document.addEventListener('DOMContentLoaded', function(){
    var currentTime = document.getElementById('current-time'),
        currentDate = document.getElementById('current-date'),
        welcomeText = document.getElementById('welcome-text');


    setInterval(function() {
        var d = new Date();

        var hours = d.getHours(),
            minutes = d.getMinutes(),
            day = formatDay(d.getDay()),
            month = formatMonth(d.getMonth()),
            date = d.getDate(),
            text = "";

        if (minutes < 10) {
            minutes = '0' + minutes;
        }

        // welcome text and image
        if (hours == 8) {
            text = "Goedemorgen Maartje, het is tijd om op te staan!";
            document.getElementById("activity-image").src = "styles/images/hi.png";
        } 
        else if (hours == 9) {
            text = "Goedemorgen Maartje, het is tijd om te ontbijten!";
            document.getElementById("activity-image").src = "styles/images/ontbijt.png";
        }
        else if (hours >= 10 && hours < 12) {
            text = "Goedemorgen Maartje, het is tijd om naar muziekles te gaan!";
            document.getElementById("activity-image").src = "styles/images/music.png";
        }
        else if (hours >= 12 && hours < 14) {
            text = "Goedemiddag Maartje, het is tijd om te lunchen!";
            document.getElementById("activity-image").src = "styles/images/lunch.png";
        }
        else if (hours == 14) {
            text = "Goedemiddag Maartje, het is tijd om je hond uit te laten!";
            document.getElementById("activity-image").src = "styles/images/dog.png";
        }
        else if (hours == 15) {
            text = "Goedemiddag Maartje, het is snacktime!";
            document.getElementById("activity-image").src = "styles/images/snack.png";
        }
        else if (hours == 16) {
            text = "Goedemiddag Maartje, het is koffietijd!";
            document.getElementById("activity-image").src = "styles/images/coffee.png";
        }
        else if (hours == 17) {
            text = "Goedemiddag Maartje, het is tijd om te sporten!";
            document.getElementById("activity-image").src = "styles/images/sport.png";
        }
        else if (hours >= 18 && hours < 21) {
            text = "Goedenavond Maartje, het is tijd om avond te eten!";
            document.getElementById("activity-image").src = "styles/images/food.png";
        }
        else if (hours == 21) {
            text = "Goedenavond Maartje, het is tijd om je hond uit te laten!";
            document.getElementById("activity-image").src = "styles/images/dog.png";
        }
        else if (hours == 22) {
            text = "Goedenavond Maartje, het is tijd om te relaxen!";
            document.getElementById("activity-image").src = "styles/images/relax.png";
        }
        else if (hours == 23) {
            text = "Goedenavond Maartje, het is tijd om te slapen!";
            document.getElementById("activity-image").src = "styles/images/sleep.png";
        }

        // background color
        if (hours == 7) {
            document.body.style.backgroundImage = "linear-gradient(#60BDFF 80%, #FFCA40)";
        }
        else if (hours == 8) {
            document.body.style.backgroundImage = "linear-gradient(#60BDFF 70%, #FFCA40)";
        }
        else if (hours == 9) {
            document.body.style.backgroundImage = "linear-gradient(#60BDFF 60%, #FFCA40)";
        }
        else if (hours >= 10 && hours < 17) {
            document.body.style.backgroundImage = "linear-gradient(#1EA2FF, #60BDFF)";
        }
        else if (hours == 18) {
            document.body.style.backgroundImage = "linear-gradient(#FFCA40, #60BDFF 70%)";
        }
        else if (hours == 19) {
            document.body.style.backgroundImage = "linear-gradient(#FFCA40, #60BDFF 80%)";
        }
        else { 
            document.body.style.backgroundImage = "linear-gradient(#00081C, #00123D)";
            document.body.style.color = "white";
        }

        currentTime.innerHTML = hours + ':' + minutes;
        currentDate.textContent = day + ' ' + date + ' ' + month;
        welcomeText.textContent = text;
    }, 1000);
        
 
    function formatDay(w) {
        w = parseInt(w, 5);

        if (w < 0) {
            w = 0;
        } else if (w > 6) {
            w = 6;
        }

        var dayNames = [
            'Zondag', 'Maandag', 'Dinsdag', 'Woensdag',
            'Dnderdag', 'Vrijdag', 'Zaterdag'
        ];

        return dayNames[w];
    }

    function formatMonth(m) {
        m = parseInt(m, 10);

        if (m < 0) {
            m = 0;
        } else if (m > 11) {
            m = 11;
        }

        var monthNames = [
            'januari', 'februari', 'maart',
            'april', 'mei', 'juni',
            'juli', 'augustus', 'september',
            'oktober', 'november', 'december'
        ];

        return monthNames[m];
    }
});


})();