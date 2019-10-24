/* LEFT MENU */
$("#menuButton").click(function() {
    var menuPosition = $('.menuMobile').css('left');
        if (menuPosition == "0px") {
            $(".menuMobile").animate({ left: '-100%' , opacity: 1 }, 60);
            $("#menuButton").animate({ left: '0%' , opacity: 1 }, 5).css("background-image", "url('img/menuIcon.png')");
        } else {
            $(".menuMobile").animate({ left: '0px' , opacity: 0 }, 60).animate( { opacity : 1 }, 1);
            $("#menuButton").animate({ left: '-99.7%' , opacity: 1 }, 5).css("background-image", "url('img/menuIconCross.png')");
        }
});
/**/

/* CONTENT FADE IN WHEN PAGE LOAD */
function contentFadeIn() {  
    $(".titleBox").css({ opacity: 0 }, 1).show().animate({ opacity: 1 }, 1000);
    $("#profileImage").animate({ opacity: 1 }, 1000);
    $("#progressBarArea").animate({ opacity: 1 }, 1000);
    $("#bodyText").css({ marginTop: "40px" }).animate({ marginTop: "10px", opacity: 1 }, 1000);
}
/**/

/* PROGRESS BARS ANIMATION */
function runBarAnimation() {
    var dict = {
        //Skills
        "bar1": 80, "bar2": 70, "bar3": 90,
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

/* ANIMATION FOR PROFILE PICTURE */
var profileImage = $("#profileImage");

profileImage.mouseover(function() {
    profileImage.css({ transform: 'rotate(' + -2 + 'deg)'});
});

profileImage.mouseleave(function() {
    profileImage.css({ transform: 'rotate(' + 2 + 'deg)'});
});
/**/

document.body.onload = runBarAnimation(), contentFadeIn();

$("#profileImage").mouseover(function(){
    $("#infoBox").css({ display: "block" }, 100);
});
$("#profileImage").mouseleave(function(){
    $("#infoBox").css({ display: "none" }, 100);
});