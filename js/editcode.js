const contenido = document.querySelector(".editable");
const codeeditor = document.querySelector(".codeeditor");
const codigo = document.querySelector('.getcode');

//const fragmento = document.getElementById('coderender').value;


function mostrarcodigo() {

    var code = document.querySelector('.editable').innerHTML;
    var loadsecond = document.getElementById('coderender').value += code;

    codeeditor.classList.remove('hide');
    document.querySelector('.constructor').classList.add('hide');
    document.querySelector('#botonedit').classList.add('hide');
    document.querySelector('#btncopy').classList.add('hide');
    document.querySelector('.savebtn').classList.remove('hide');
    document.querySelector('#save').classList.remove('hide');
    document.querySelector('#downloadLink').classList.add('hide');

    //console.log(load)

}

function guardarcodigo() {

    var clearcont = contenido.innerHTML = '';
    var editadarcodigo = document.getElementById('coderender').value;
    var retorno = contenido.innerHTML += editadarcodigo;
    var clearrender = document.getElementById('coderender').value = '';

    codeeditor.classList.add('hide');
    document.querySelector('.constructor').classList.remove('hide');
    document.querySelector('#botonedit').classList.remove('hide');
    document.querySelector('#btncopy').classList.remove('hide');
    document.querySelector('.savebtn').classList.add('hide');

}



// final seccion del editor de codigo