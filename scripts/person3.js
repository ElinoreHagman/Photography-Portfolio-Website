/* LEFT MENU */
$("#menuButton").click(function() {
    var menuPosition = $('.menuMobile').css('left');
        if (menuPosition == "0px") {
            $(".menuMobile").animate({ left: '-100%' , opacity: 1 }, 60);
            $("#menuButton").animate({ left: '0%' , opacity: 1 }, 5).css("background-image", "url('img/menuIcon.png')");
        } else {
            $(".menuMobile").animate({ left: '0px' , opacity: 0 }, 60);
            $(".menuMobile").animate( { opacity : 1 }, 1);   
            $("#menuButton").animate({ left: '-99.7%' , opacity: 1 }, 5).css("background-image", "url('img/menuIconCross.png')");
        }
});
/**/

/* CONTENT FADE IN WHEN PAGE LOAD */
function contentFadeIn() {  
    var nameTitle = $(".titleBox");
    (nameTitle).css({ opacity: 0 }, 1).show();
    (nameTitle).animate({ opacity: 1 }, 1000);

    $("#profileImage").animate({ opacity: 1 }, 1000);
    $("#progressBarArea").animate({ opacity: 1 }, 1000);
    $("#bodyText").animate({ opacity: 1 }, 1000);
}
/**/

/* PROGRESS BARS ANIMATION */
function runBarAnimation() {

    var dict = {
        //Skills
        "bar1": 50,
        "bar2": 70,
        "bar3": 45,
        //Languages
        "bar4": 60,
        "bar5": 80,
        "bar6": 70,
    };

    for (var key in dict) {
        var value = dict[key];
        animateBars(key, value);
    }
}

function animateBars(id, bwidth) {
    var greenBar = document.getElementById(id);
    var iteration = setInterval(addLength, 10);
    var width = 0;

    function addLength() {
        if (width >= bwidth) {
            $(greenBar.append(width + "%"));
            clearInterval(iteration);

        } else {
            width++;
            greenBar.style.width = width + "%"; 
        }
    }
}
/**/
document.body.onload = runBarAnimation(), contentFadeIn();