var colorSchemesNr = 6;

if (localStorage.getItem("colorScheme") == null) {
    localStorage.setItem("colorScheme", 0);
}

function changeColorScheme() {
    document.getElementById("site-colors").href = "color_schemes/site-colors" + localStorage["colorScheme"] + ".css";
}

function nextColorScheme() {
    localStorage["colorScheme"]++;
    localStorage["colorScheme"] %= colorSchemesNr;
    changeColorScheme();
}
