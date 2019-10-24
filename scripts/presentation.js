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

/* THE PRESENTATION PAGE PROFILE PICTURES */
function contentFadeIn() {  
    $(".profileLink").css({ marginTop: '50px' , opacity: 0 }).show().animate({ marginTop: '0' , opacity: 1 }, 1000);
    $(".titleBox").css({ opacity: 0 }).show().animate({ opacity: 1 }, 1000);
    $("#bodyText").animate({ opacity: 1 }, 1000);
    $("#bodyText2").animate({ opacity: 1 }, 1000);
}
/**/

/* PROFILE PICTURES ANIMATIONS */
$(".profileLink").mouseover(function() {
    var enskildProfilBild = $(this).attr("data-personid"); 
    $("#" + enskildProfilBild).animate({ opacity: 0.7 }, 1).css({ transform: 'rotate(' + 3 + 'deg)'});
});

$(".profileLink").mouseleave(function() {
    var enskildProfilBild = $(this).attr("data-personid"); 
    $("#" + enskildProfilBild).animate({ opacity: 1 }, 1).css({ transform: 'rotate(' + 0 + 'deg)'});
});

$("#person1").click(function() { window.location = "person1.html"; });
$("#person2").click(function() { window.location = "person2.html"; });
$("#person3").click(function() { window.location = "person3.html"; });
/**/
document.body.onload = contentFadeIn();