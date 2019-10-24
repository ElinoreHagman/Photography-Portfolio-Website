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

/* CONTENT ANIMATION WHEN PAGE IS OPEN */
function contentFadeIn() {  
    $(".titleBox").css({ opacity: 0 }).show().animate({ opacity: 1 }, 1000);
    $("#bodyText").animate({ opacity: 1 }, 1000);
    $("#gallery").css({ marginLeft: "-500px" }).animate({ opacity: 1, marginLeft: "0px" }, 2300);
    $("#slideshowArea").css({ marginLeft: "70px" }).animate({ opacity: 1, marginLeft: "0px" }, 1600);
}
/**/

/* SLIDESHOW EFFECT */
var start = '';
var checkIfActive = 1;
$("#slideshow > div:gt(0)").hide();
function startShow(){
start = setInterval(function slideShow() { 
    var eachImage = $('#slideshow > div:first')
    eachImage.fadeOut(1200).next().fadeIn(1200).end().appendTo('#slideshow');
    },  2300);
}

$("#slideButton").click( function() {
    var iconState = document.getElementById("pauseplayicon");
    if (checkIfActive === 1) {
        clearInterval(start);
        checkIfActive = 0;
        iconState.setAttribute("src", "img/playIcon.png");
    } else {
        checkIfActive = 1; 
        startShow();     
        iconState.setAttribute("src", "img/pauseIcon.png");
    }
});
startShow();
/**/

/* THE IMAGE THUMBNAIL ANIMATIONS */
$(".imgCell").mouseover(function() {
    var eachThumbnail = $(this).attr("data-thumbnailid"); 
    $("#" + eachThumbnail).animate({ opacity: 0.7 }, 1).css({ transform: 'rotate(' + 3 + 'deg)'});
});

$(".imgCell").mouseleave(function() {
    var enskildProfilbild = $(this).attr("data-thumbnailid"); 
    $("#" + enskildProfilbild).animate({ opacity: 1 }, 1).css({ transform: 'rotate(' + 0 + 'deg)'});
});

$(".imgCell").click(function() {

    var chosenImage = $(this).attr("data-thumbnailid"); 
    var imageSource =  "img/" + chosenImage + ".jpg" ;
    var previewVisible = $('#imagePreview').css('display');
    $("#showHideDescriptionButton").css({ transform: "rotate(0deg)" });

    if (previewVisible === "none") {
        $("#imagePreview").css({ opacity: 0, display: "block" }).animate({ opacity: 1}, 500);
    }

    document.getElementById("chosenImage").setAttribute("src", imageSource);
    $("#imageDescription").css({ marginBottom: '-260px' });
});
/**/

/* ANIMATIONS IN THE PRESENTATION OF THE CHOSEN IMAGE */
$("#previewExitButton").click(function() {
    $("#imagePreview").css({ display: "none" });
});

var imageInfo = {
    "img/image4.jpg": "Photograph of hot air balloons.",
    "img/image5.jpg": "Photograph taken over a ravine.. I think..",
    "img/image6.jpg": "Photograph of the alps.",
    "img/image7.jpg": "Photograph taken of a misty field.",
    "img/image8.jpg": "Photograph of people on a beach.",
    "img/image9.jpg": "Photograph of the Golden Gate Bridge.",
    "img/image10.jpg": "Photograph taken of mountains in the mist.",
    "img/image11.jpg": "Photograph of a snowy field and forest."
};

$("#showHideDescriptionButton").click(function() {
    var moveDescription = $('#imageDescription').css('margin-bottom');
    var chosenImage = document.getElementById("chosenImage").getAttribute("src");
    var imageText = imageInfo[chosenImage];

    if (moveDescription == "-200px") {
        $("#imageDescription").animate({ marginBottom: '-260px' }, 150);
        $("#showHideDescriptionButton").css({ transform: "rotate(0deg)" });

    } else {
        $("#showHideDescriptionButton").css({ transform: "rotate(180deg)" });
        $("#imageDescription").animate({ marginBottom: '-200px' }, 150);
        $("#descriptionText").empty().append(imageText);
    }
});
/**/
document.body.onload = contentFadeIn();
