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

/* EFFECTS FOR CONTENT WHEN PAGE LOADS IN */
function contentFadeIn() {  
    $(".titleBox").css({ opacity: 0 }).show().animate({ opacity: 1 }, 1000);
    $("#bodyText").animate({ opacity: 1 }, 1000);
    $("#mapArea").css({ marginTop: "30px" }).animate({ opacity: 1, marginTop: "10px" }, 1000);
    $("#formArea").css({ marginTop: "30px" }).animate({ opacity: 1, marginTop: "10px" }, 1000);}
/**/

/* MAP */
mapboxgl.accessToken = "none";
    var map = new mapboxgl.Map({
        container: "map",
        style: "mapbox://styles/mapbox/streets-v11",
        center: [15.2493, 59.2548],
        zoom: 14,
        maxZoom: 14,
        minZoom: 11,
        logoPosition: "bottom-left"
});

var popup = new mapboxgl.Popup()
    .setHTML('<p><strong>Örebro Universitet</strong></p><p>Fakultetsgatan 1, 702 81 Örebro</p><p>Open 9am-4pm Mon-Fri</p>');

var marker = new mapboxgl.Marker()
    .setLngLat([15.2493, 59.2548])
    .setPopup(popup)
    .addTo(map);
/**/

/* FORM */
var isValid = false;

$("#name").keyup(function() {
    var theName = document.getElementById("name").value;
    if(theName.match(/^([a-z-A-Z_ ]{3,20})$/)) {
        $("#nameW").text("");
        isValid = true;

    } else {
        $("#nameW").text("Name has to be at least 3 letters and not contain numbers.");
        isValid = false;
    }
});

$("#email").keyup(function() {
    var theEmail = document.getElementById("email").value;
    if( theEmail.match(/^[a-zA-Z0-9._-]{3,}@[a-zA-Z0-9]{3,}\.[a-zA-Z]{2,}$/) ) {
        $("#emailW").text("");
        isValid = true;

    } else {
        $("#emailW").text("The email is not valid.");
        isValid = false;
    }
});

$("#number").keyup(function() {
    var theNumber = document.getElementById("number").value;
    if(theNumber.match(/^(07[0-9]{1}-[0-9 ]{7,})$/)) {
        $("#numberW").text("");
        isValid = true;

    } else {
        $("#numberW").text("Check if the number has the correct format (07x-xxxxxxx)");
        isValid = false;
    }
});

$("#message").keyup(function() {
    var theMessage = document.getElementById("message").value;
    if(theMessage.length > 5) {
        $("#messageW").text("");
        isValid = true;

    } else {
        $("#messageW").text("Write at least some words in the message.");
        isValid = false;
    }
});

$('#sendMessage').click(function(event) {
    event.preventDefault();

    var saveName = document.getElementById('name').value;
    var saveEmail = document.getElementById('email').value;
    var saveNumber = document.getElementById('number').value;
    var saveMessage = document.getElementById('message').value; 

    if ((isValid == true) && (saveName != "") && (saveEmail != "") && (saveNumber != "") && (saveMessage != "")) {

        function putInDataInStorage() {
            personInformation = {
                name: saveName,
                email: saveEmail,
                number: saveNumber,
                message: saveMessage
            };

            localStorage.setItem("personData", JSON.stringify(personInformation));
            $("#messageSent").show();
            $("#removeOverlay").show();
        } 
        document.body.onload = putInDataInStorage();

    } else {
        alert("Fill out the form correctly before sending any message.");
    }
});

function loadOldMessage() {
    if (localStorage.getItem("personData") != null) {
        var personDataList = JSON.parse(localStorage.getItem("personData"));
        document.getElementById("name").value = personDataList.name;
        document.getElementById("email").value = personDataList.email;
        document.getElementById("number").value = personDataList.number;
        isValid = true;
    }
}
/**/

// REMOVES OVERLAY THAT SHOWS UP AFTER SENDING A MESSAGE.
$("#removeOverlay").click(function() {
    $("#messageSent").hide();
    $("#removeOverlay").hide();
    document.getElementById('message').value = "";
});

// CLEARS THE STORAGE OF INFORMATION AND EMPTIES THE FORM.
$('#clearMessage').click(function(event) {
    event.preventDefault();
    localStorage.clear();
    document.getElementById('name').value = "";
    document.getElementById('email').value = "";
    document.getElementById('number').value = "";
    document.getElementById('message').value = "";
});

document.body.onload = contentFadeIn(), loadOldMessage();