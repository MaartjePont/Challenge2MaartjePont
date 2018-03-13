
(function(){
'use strict';

document.addEventListener('DOMContentLoaded', function(){
    var currentTime = document.getElementById('current-time'),
        currentDate = document.getElementById('current-date');

    setInterval(function() {
        var d = new Date();

        var hours = d.getHours(),
            minutes = d.getMinutes(),
            day = formatDay(d.getDay()),
            month = formatMonth(d.getMonth()),
            date = d.getDate();

        

        if (minutes < 10) {
            minutes = '0' + minutes;
        }

        

        currentTime.innerHTML = hours + ':' + minutes;
        currentDate.textContent = day + ' ' + date + ' ' + month;
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


