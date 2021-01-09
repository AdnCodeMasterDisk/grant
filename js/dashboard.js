const stitchesHTML =  `
<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <title>Grant</title>
    <link rel="shortcut icon" href="../img/icono.png">
</head>
<body>`;

const postHTML = document.querySelector(".editable");

// final del html

const end = `</body></html>`


function copytodash(){

    var html = stitchesHTML;
    var final = end;

    var creartexarea = document.createElement('textarea');
    creartexarea.innerHTML += html += postHTML.innerHTML += final;
    document.body.appendChild(creartexarea);
    creartexarea.select();
    document.execCommand('copy');
    document.body.removeChild(creartexarea);
    alert("Copy contend");
}


