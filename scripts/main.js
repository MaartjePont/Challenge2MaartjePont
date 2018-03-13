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

        if (hours == 8) {
            text = "Goedemorgen Maartje, het is tijd om op te staan!";
        } 
        else if (hours == 9) {
            text = "Goedemorgen Maartje, het is tijd om te ontbijten!";
        }
        else if (hours >= 10 && hours < 12) {
            text = "Goedemorgen Maartje, het is tijd om naar muziekles te gaan!";
        }
        else if (hours >= 12 && hours < 15) {
            text = "Goedemiddag Maartje, het is tijd om te lunchen!";
        }
        else if (hours == 15) {
            text = "Goedemiddag Maartje, het is snacktime!";
        }
        else if (hours == 16) {
            text = "Goedemiddag Maartje, het is koffietijd!";
        }
        else if (hours == 17) {
            text = "Goedemiddag Maartje, het is tijd om te sporten!";
        }
        else if (hours >= 18 && hours < 21) {
            text = "Goedenavond Maartje, het is tijd om avond te eten!";
        }
        else if (hours == 21) {
            text = "Goedenavond Maartje, het is tijd om je hond uit te laten!";
        }
        else if (hours == 22) {
            text = "Goedenavond Maartje, het is tijd om te relaxen!";
        }
        else if (hours == 23) {
            text = "Goedenavond Maartje, het is tijd om naar bed te gaan!";
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