fetch('./words.json')
    .then((response) => response.json())
    .then((json) => console.log(json["2020-10-19"]["sentence"]));
