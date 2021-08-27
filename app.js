var btntranslate = document.querySelector("#btn-translate");

var txtinput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

var apiurl = "https://api.funtranslations.com/translate/minion.json"

function gettranslatedtexturl(text) {
    return apiurl + "?" + "text=" + text
}

function clickhandler() {

    var inputtext = txtinput.value;

    fetch(gettranslatedtexturl(inputtext))
        .then(response => response.json())
        .then(json => {
            var translatedtext = json.contents.translated;
            outputDiv.innerText = translatedtext;
        });
}
btntranslate.addEventListener("click", clickhandler)