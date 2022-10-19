fetch('./words.json')
    .then((response) => response.json())
    .then((json) => document.getElementById("frenchSentence").innerHTML = json["2020-10-19"]["sentence"]);
