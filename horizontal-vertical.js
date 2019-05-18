//0 - Vertical
//1 - Horizontal

if (localStorage.getItem("perspective") == null) {
    localStorage.setItem("perspective", 1);
}

function loadPerspective() {
    if (localStorage["perspective"] == 0) {
        document.getElementById("changePerspective").className = "footer-icon-min-width fas fa-grip-vertical";
        var domTxt = "";
        domTxt += '<div class="image-name" id="image-name"></div>';
        domTxt += '<div class="image-area" id="image-area"></div>';
        domTxt += '<div class="image-description" id="image-description"></div>';
        document.getElementById("wrapper").innerHTML = domTxt;

        document.getElementById("display-perspective").href = "perspectives/vertical.css";
        document.getElementById("image-name").classList.remove("no-background");
        document.getElementById("image-description").classList.remove("no-background");

    }

    if (localStorage["perspective"] == 1) {
        document.getElementById("changePerspective").className = "footer-icon-min-width fas fa-grip-horizontal";
        var domTxt = "";
        domTxt = '<div class="image-area" id="image-area"></div>';
        domTxt += '<div class="name-description-wrapper" id="name-description-wrapper">';
        domTxt += '<div class="image-name" id="image-name"></div>';
        domTxt += '<div class="image-description" id="image-description"></div>';
        domTxt += '</div>';
        document.getElementById("wrapper").innerHTML = domTxt;
        document.getElementById("display-perspective").href = "perspectives/horizontal.css";
        document.getElementById("image-name").classList.add("no-background");
        document.getElementById("image-description").classList.add("no-background");
    }
}

function changePerspective() {
    localStorage["perspective"]++;
    localStorage["perspective"] %= 2;
    loadPerspective();
}