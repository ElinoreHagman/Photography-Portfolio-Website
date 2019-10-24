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

/* lINK ICON FUNCTIONS */
$("#presentationBox").click(function() { window.location = "presentation.html"; });
$("#portfolioBox").click(function() { window.location = "portfolio.html"; });
$("#contactBox").click(function() { window.location = "contact.html"; });

$(".imageButtonbox").mouseover(function() {
    var chosenLink = $(this).attr("data-lankid");
    $("#"+chosenLink).animate({ marginTop: '-2px' , opacity: 0.7 }, 1);
});

$(".imageButtonbox").mouseleave(function() {
    var chosenLink = $(this).attr("data-lankid");
    $("#"+chosenLink).animate({ marginTop: '0px' , opacity: 1 }, 1);
});
/**/

/* TITLE AND LINK ICON PAGE LOAD ANIMATION */
function contentFadeIn() {  
    $(".titleBox").css({ opacity: 0 }).show().animate({ opacity: 1 }, 1000);
    $(".imageButtonbox").css({ marginTop: "50px", opacity: 0 }).show().animate({ marginTop: "0" , opacity: 1 }, 1000);
    $("#bodyText").css({ marginTop: "-10px"}).animate({ marginTop: "10px" , opacity: 1 }, 1000);
}
/**/
document.body.onload = contentFadeIn();
