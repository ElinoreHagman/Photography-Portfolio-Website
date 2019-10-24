/* PROGRESS BARS ANIMATION */
function runBarAnimation() {
    var dict = {
        //Skills
        "bar1": 90, "bar2": 70, "bar3": 90,
        //Languages
        "bar4": 95, "bar5": 85, "bar6": 75
    };

    for (var key in dict) {
        var value = dict[key];
        animateBars(key, value);
    }
}

function animateBars(theBar, totalLength) {
    var wholeBar = document.getElementById(theBar);
    var iteration = setInterval(addLength, 10);
    var widthOfProgress = 0;

    function addLength() {
        if (widthOfProgress >= totalLength) {
            $(wholeBar.append(widthOfProgress + "%"));
            clearInterval(iteration);
        } else {
            widthOfProgress++;
            wholeBar.style.width = widthOfProgress + "%"; 
        }
    }
}
/**/