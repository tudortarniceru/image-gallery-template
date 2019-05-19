var images = [];

function pushImage(imgName, imgSource, imgDesc, imgWidth, imgHeight) {
    images.push( {
        name: imgName,
        source: imgSource,
        desc: imgDesc,
        width: imgWidth,
        height: imgHeight
    })
}

function loadCustomDimensions() {
    for (var i = 0; i < images.length; ++i) {
        if (images[i].height != 0) {
            document.getElementById("img" + i).style.height = images[i].height + "px";
        }
        if (images[i].width != 0) {
            document.getElementById("img" + i).style.width = images[i].width + "px";
        }
    }
}

function displayPhotos() {
    var domTxt = "";
    for (var i = 0; i < images.length; ++i) {
        domTxt += "<img class='image-thumbnail' id='img" + i + "' onclick='showImage(" + i + ");' src='images/" + images[i].source + "'>";
    }
    document.getElementById("gallery").innerHTML = domTxt;
    loadCustomDimensions();
    loadPerspective();
}

function calculateVerticalDisplay() {
    if (localStorage["perspective"] == 0) {
        var imageWidth = document.getElementById("image-area").clientWidth;
        document.getElementById("image-name").style.width = imageWidth + "px";
        document.getElementById("image-description").style.width = imageWidth + "px";
    }
}

function showImage(nr) {
    document.getElementById("display-area").style.display = "flex";
    var domTxt = "";
    document.getElementById("image-area").innerHTML = "<img onload='calculateVerticalDisplay();' class='image-displayer' src='images/" + images[nr].source + "'>";
    document.getElementById("image-name").innerHTML = images[nr].name;
    document.getElementById("image-description").innerHTML = images[nr].desc;
}

function closeImage() {
    document.getElementById("display-area").style.display = "none";
}