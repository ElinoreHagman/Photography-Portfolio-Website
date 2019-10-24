/* PROGRESS BARS ANIMATION */
function runBarAnimation() {
    var dict = {
        //Skills
        "bar1": 100, "bar2": 80, "bar3": 80,
        //Languages
        "bar4": 90, "bar5": 90, "bar6": 85
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