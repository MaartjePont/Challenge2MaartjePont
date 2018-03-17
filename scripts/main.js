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
        else {
            text = "Goedenavond Maartje, het is tijd om te slapen!";
            document.getElementById("activity-image").src = "styles/images/sleep.png";
        }

        // show sun or moon
        if (hours >= 7 && hours < 20) {
            document.getElementById("moon").style.display = "none";
        } else {
            document.getElementById("sun").style.display = "none";
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
        else if (hours >= 10 && hours < 18) {
            document.body.style.backgroundImage = "linear-gradient(#1EA2FF, #60BDFF)";
        }
        else if (hours == 18) {
            document.body.style.backgroundImage = "linear-gradient(#60BDFF 70%, #FFCA40)";
        }
        else if (hours == 19) {
            document.body.style.backgroundImage = "linear-gradient(#60BDFF 80%, #FFCA40)";
        }
        else { 
            document.body.style.backgroundImage = "linear-gradient(#00081C, #00123D)";
            document.body.style.color = "white";
        }

        // de stand van de zon of maan (kan met if else en postie geven of met tweenmax)

        currentTime.innerHTML = hours + ':' + minutes;
        currentDate.textContent = day + ' ' + date + ' ' + month;
        welcomeText.textContent = text;
    }, 1000);
        
    function formatDay(w) {
        w = parseInt(w, 7);

        if (w < 0) {
            w = 0;
        } else if (w > 6) {
            w = 6;
        }

        var dayNames = [
            'Zondag', 'Maandag', 'Dinsdag', 'Woensdag',
            'Donderdag', 'Vrijdag', 'Zaterdag'
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

    var tl1 = new TimelineMax();
    tl1.to(currentTime, 1, {left: 50, ease: Sine.easeInOut})
        .to(currentTime, 1, {left: -50, ease: Sine.easeInOut})
        .to(currentTime, 1, {left: 50, ease: Sine.easeInOut})
        .to(currentTime, 1, {left: -50, ease: Sine.easeInOut})
        .to(currentTime, 1, {left: 50, ease: Sine.easeInOut})
        .to(currentTime, 1, {left: -50, ease: Sine.easeInOut})
        .to(currentTime, 1, {left: 50, ease: Sine.easeInOut})
        .to(currentTime, 1, {left: 0, ease: Sine.easeInOut});


    /*var welcomeText = document.getElementById("welcome-text");
    welcomeText.innerHTML = "<span>" +
    welcomeText.innerHTML.split("").join("</span><span>") + "</span>"

    var mySplitText = new SplitText("#welcome-text", {type:"chars,words, lines"}),
    tl = new TimelineMax();

    
    TweenMax.set("#welcome-text", {css:{perspective:500, perspectiveOrigin:"50% 50%", transformStyle:"preserve-3d"}});

    var numChars = mySplitText.chars.length;

    for(var i = 0; i < numChars; i++){
    tl.from(mySplitText.chars[i], 0.8, {css:{y:getRandomInt(-75, 75), x:getRandomInt(-150, 150), rotation:getRandomInt(0, 720), autoAlpha:0}, ease:Back.easeOut}, i * 0.02, "dropIn");
    }
        
    tl.staggerTo(mySplitText.chars, 4, {css:{transformOrigin:"50% 50% -30px", rotationY:-360, rotationX:360, rotation:360}, ease:Elastic.easeInOut}, 0.02, "+=1");


    function getRandomInt (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
    }*/


});

})();
