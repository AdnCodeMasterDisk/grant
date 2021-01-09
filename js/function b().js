function b() {
    var boxcodigo = document.createElement('textarea');
    boxcodigo.innerHTML += (``);
    document.body.appendChild(boxcodigo);
    boxcodigo.select();
    document.execCommand('copy');
    document.body.removeChild(boxcodigo);
    alert("Copy to dashboard");
}


