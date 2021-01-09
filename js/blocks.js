function blayout() {
    var boxcodigo = document.createElement('textarea');
    boxcodigo.innerHTML += (`
<!doctype html><html lang="en"><head> <!-- Required meta tags --> <meta charset="utf-8"> <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"> <link rel="shortcut icon" href="../img/icono.png"> <!-- Bootstrap CSS --> <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"> <title>Grant</title> <style> .colorpri { background-color: #306c9e; color: #ffffff; /* background-image: url('https://highwaymagazine.files.wordpress.com/2014/10/periodismo-social-connection.jpg'); */ /* background-position: inherit; */ /* background-attachment: fixed; */ /* background-repeat: no-repeat; */ /* background-size: cover; */ box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1); } .layer { width: 100%; background-color: rgba(0, 0, 0, 0.0); height: 100%; z-index: 300; } .menu { width: 100%; position: fixed; background-color: rgba(255, 255, 255, 1); display: flex; justify-content: flex-end; box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.1); z-index: 200; } .link { padding: 18px; opacity: 0.8; transition: 0.3s all; font-weight: 400; } .link:hover { opacity: 0.8; } .link a { color: black; text-decoration: none; } .logowhat { position: fixed; width: 50px; bottom: 30px; right: 30px; z-index: 3000; } .logofacebook { position: fixed; width: 40px; bottom: 30px; left: 30px; z-index: 3000; } @media (max-width: 992px) {} </style></head><body> <!--inicio navegacion--> <div class="menu"> <div class="link"> <a href="../index.html">Home</a> </div> <div class="link"> <a href="../blog.html">Blog</a> </div> </div> <!--final navegacion--> <!--inicio link whatsapp--> <div class="logowhat"> <a href="https://wa.me/message/7QYBLBI5I26WN1" target="_Blank"> <img src="../img/whatsapp-logo-3-1.png" alt="" style="width: 100%;"> </a> </div> <!-- final link whatsapp--> <!--inicio link facebook--> <div class="logofacebook"> <a href="https://m.me/grant.universitario.1" target="_Blank"> <img src="../img/facebook-messenger-logo-5.png" alt="" style="width: 100%;"> </a> </div> <!-- final link facebook--> <br><br>
<!--Contend of the blog, paste hear your blocks -->

<!--Contend of the blog, paste hear your blocks -->
</body>
</html>`);
    document.body.appendChild(boxcodigo);
    boxcodigo.select();
    document.execCommand('copy');
    document.body.removeChild(boxcodigo);
    alert("Copy to dashboard");
}

function b1() {
    var boxcodigo = document.createElement('textarea');
    boxcodigo.innerHTML += (`
    <section class="mt-5 mb-5">
        <div class="container">
            <div class="pt-5 text-center pb-0">
                <div class="row justify-content-center d-flex">
                    <div class="col-xs-12 col-md-12 align-self-center">
                        <h1 class="display-4 text-center  mb-3 ">Lorem ipsum dolor</h1>
                        <p class=" lead  text-center  mb-4  " style="opacity: 0.7; font-weight: 400; line-height: 30px;"> sit amet consectetur adipisicing elit. Distinctio veniam perspiciatis nemo, incidunt assumenda odit possimus corporis recusandae accusantium perferendis dolorem numquam earum hic expedita beatae architecto ut eveniet dolorum </p>
                        <img src="" alt=""
                            class="rounded img-fluid mt-5 mb-0" style="margin:auto">
                    </div>
                </div>
            </div>
        </div>
    </section>`);
    document.body.appendChild(boxcodigo);
    boxcodigo.select();
    document.execCommand('copy');
    document.body.removeChild(boxcodigo);
}


function b2() {
    var boxcodigo = document.createElement('textarea');
    boxcodigo.innerHTML += (`
    <section>
        <div class="container pb-5 pt-5">
            <div class="row align-items-center justify-content-between ">
                <div class="col-12 col-md-7  mt-4 mt-md-0">
                    <div class="embed-responsive embed-responsive-16by9 shadow-lg rounded overflow-hidden">
                        <iframe class="embed-responsive-item"
                            src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" allowfullscreen=""></iframe>
                    </div>
                </div>
                <div class="col-12 col-md-4 offset-md-1   ">
                    <h1 class="mb-3  display-4 font-weight-bold">Lorem impsupls</h1>
                    <p class="lead  ">Lorem ipsum dolor sit amet consectetur adipisicing elitolorum voluptas similique quis natus.</p>
                    <div class="  d-flex mt-3 mb-1">
                        <a class="btn btn-lg  mt-md-3 " style="font-size: 18px; color: rgba(0, 0, 0, 0.555); border: 1px solid rgba(0, 0, 0, 0.1); box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.1);" href="" role="button">Look the play list</a>
                    </div>
                </div>
            </div>
        </div>
    </section>`);
    document.body.appendChild(boxcodigo);
    boxcodigo.select();
    document.execCommand('copy');
    document.body.removeChild(boxcodigo);
}


function b3() {
    var boxcodigo = document.createElement('textarea');
    boxcodigo.innerHTML += (`
    <section class="mt-5 mb-5">
        <div class="container">
            <div class="row">
                <div class="col-lg-7 col-sm-12">
                    <img src="" alt=""
                        class="img-fluid mx-auto d-block">
                </div>
                <div class="col-lg-5 col-sm-12">
                    <h1 class="mb-2 display-4">Lorem ipsum </h1>
                    <p class="lead">Lorem ipsum dolor sit  elit:</p>
                    <ol class="list-features lead list-l">
                        <li>lorem impsum</li>
                        <li>lorem impsum</li>
                        <li>lorem impsum</li>
                        <li>lorem impsum</li>
                        <li>lorem impsum</li>
                        <li>lorem impsum</li>
                    </ol>
                </div>
            </div>
        </div>
    </section>`);
    document.body.appendChild(boxcodigo);
    boxcodigo.select();
    document.execCommand('copy');
    document.body.removeChild(boxcodigo);
}


function b4() {
    var boxcodigo = document.createElement('textarea');
    boxcodigo.innerHTML += (`
    <section class="mt-5 mb-5">
        <div class="container">
            <div class="row">
                <div class="col-lg-7 col-sm-12">
                    <h1 class="mb-2 display-4">Lorem impsum</h1>
                    <p class="lead">Lorem ipsum dolor sit  elit:</p>
                    <ul class="list-features">
                        <li>lorem impsum</li>
                        <li>lorem impsum</li>
                        <li>lorem impsum</li>
                        <li>lorem impsum</li>
                        <li>lorem impsum</li>
                        <li>lorem impsum</li>
                    </ul>
                </div>
                <div class="col-lg-5 col-sm-12">
                    <img src="" alt=""
                        class="img-fluid mx-auto d-block">
                </div>
            </div>
        </div>
    </section>`);
    document.body.appendChild(boxcodigo);
    boxcodigo.select();
    document.execCommand('copy');
    document.body.removeChild(boxcodigo);
}


function b() {
    var boxcodigo = document.createElement('textarea');
    boxcodigo.innerHTML += (`<section class="pt-5 pb-5">
    <div class="container">
        <div class="row text-left equal d-flex justyfy-content-between">
            <div class="col-12 col-md-3 pr-md-0 h-100 align-self-center ">
                <h5>Your Website</h5>
                <p class="text-h3">Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.
                </p>
            </div>
            <div
                class="col-12 col-md-1 d-none p-0 h-100 d-md-flex align-self-center justify-content-center">
                <div class="h-100 w-25 border-right border-dark mr-2" style="min-height:70px; width:1px">
                </div>
            </div>

            <div class="col-12 col-md-4 pt-4 pt-md-0  h-100">

                <p class="text-h3">Richard McClintock, a Latin professor at Hampden-Sydney College in
                    Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum
                    passage, and going through the cites of the word in classical literature, discovered the
                    undoubtable source. Lorem Ipsum passages, and more recently with desktop publishing
                    software like Aldus PageMaker including versions of Lorem Ipsum. </p>

            </div>

            <div class="col-12 col-md-4 pt-5 pt-lg-0  ">
                <p class="text-h3">Lorem Ipsum is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type specimen
                    book. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia,
                    looked up one of the more obscure Latin words. </p>
            </div>
        </div>
    </div>
</section>`);
    document.body.appendChild(boxcodigo);
    boxcodigo.select();
    document.execCommand('copy');
    document.body.removeChild(boxcodigo);
}


function b6() {
    var boxcodigo = document.createElement('textarea');
    boxcodigo.innerHTML += (`
    <section class="mt-5 mb-5">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-12">
                    <p style="opacity: 0.7; font-weight: 400; line-height: 30px;">
                        <!-- pegue aqui su texto -->
                    </p>
                </div>
            </div>
        </div>
    </section>`);
    document.body.appendChild(boxcodigo);
    boxcodigo.select();
    document.execCommand('copy');
    document.body.removeChild(boxcodigo);
}



function b8() {
    var boxcodigo = document.createElement('textarea');
    boxcodigo.innerHTML += (`
    <section class="mt-5 mb-5">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col">
                    <img alt="image" class="rounded" src="" style="width: 100%;">
                </div>
            </div>
        </div>
    </section>`);
    document.body.appendChild(boxcodigo);
    boxcodigo.select();
    document.execCommand('copy');
    document.body.removeChild(boxcodigo);
}

function b9() {
    var boxcodigo = document.createElement('textarea');
    boxcodigo.innerHTML += (`
    <section class="mt-5 mb-5">
        <div class="container">
            <div class="row align-items-center justify-content-center">
                <div class="col-lg-6 col-sm-12" >
                    <div class="contimg">
                        <img src="" alt="" style="width: 100%;">
                    </div>
                </div>
                <div class="col-lg-6 col-sm-12" >
                    <p class="text-h3 mt-3" style="opacity: 0.7; font-weight: 400; line-height: 30px;">
                        Texto
                    </p>
                </div>
             </div>
        </div>
    </section>`);
    document.body.appendChild(boxcodigo);
    boxcodigo.select();
    document.execCommand('copy');
    document.body.removeChild(boxcodigo);
}

function b10() {
    var boxcodigo = document.createElement('textarea');
    boxcodigo.innerHTML += (`
    <section class="mt-5 mb-5">
        <div class="container">
            <div class="row align-items-center justify-content-center">

                <div class="col-lg-6 col-sm-12">
                    <p class="text-h3 mt-3" style="opacity: 0.7; font-weight: 400; line-height: 30px;">
                    Texto
                    </p>
                </div>
                <div class="col-lg-6 col-sm-12">
                    <div class="contimg">
                        <img src="" alt="" style="width: 100%;">
                    </div>
                </div>
            </div>
        </div>
    </section>`);
    document.body.appendChild(boxcodigo);
    boxcodigo.select();
    document.execCommand('copy');
    document.body.removeChild(boxcodigo);
}

function b11() {
    var boxcodigo = document.createElement('textarea');
    boxcodigo.innerHTML += (`
    <section>
        <div class="container">
            <div class="row mt-0   d-flex justify-content-center align-items-center text-center">
                <div class="col-12 col-md-9 text-center">
                    <h2 class="mt-5 pt-3 mb-3 font-italic" style="font-size: 40px; font-weight: 400;">Lorem ipsum dolor</h2>
                    <h4 class="display-5 font-italic" style="opacity: 0.8; padding-bottom: 50px;">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h4>
                    <div class="separator" style="width: 30%; opacity: 0.1; height: 1px; margin: 0px auto; background: black "></div>
                </div>
            </div>
        </div>
    </section>
    `);
    document.body.appendChild(boxcodigo);
    boxcodigo.select();
    document.execCommand('copy');
    document.body.removeChild(boxcodigo);
}



function b14() {
    var boxcodigo = document.createElement('textarea');
    boxcodigo.innerHTML += (`
    <section class="pt-5 pb-5">
        <div class="separator" style="width: 30%; opacity: 0.1; height: 1px; margin: 0px auto; background: black "></div>
    </section>`);
    document.body.appendChild(boxcodigo);
    boxcodigo.select();
    document.execCommand('copy');
    document.body.removeChild(boxcodigo);
}

function b15() {
    var boxcodigo = document.createElement('textarea');
    boxcodigo.innerHTML += (`
    <section>
        <h1 class="text-center" style="margin-top: 100px; font-size: 35px; opacity: 0.8; font-style: italic;">Lorem ipsum dolor sit amet </h1>
        <div class="container" style="text-align: center; opacity: 0.6; margin-top: 20px; margin-bottom: 30px; font-style: italic;">
            <p>consectetur adipisicing elit. Quam suscipit ea officia debitis sit architecto a qui dicta pariatur iusto quasi.</p>
        </div>
        <div class="separador" style="width: 20%; opacity: 0.2; height: 1px; margin: 0px auto; background: black "></div>
        <br><br>
    </section>`);
    document.body.appendChild(boxcodigo);
    boxcodigo.select();
    document.execCommand('copy');
    document.body.removeChild(boxcodigo);
}

function b16() {
    var boxcodigo = document.createElement('textarea');
    boxcodigo.innerHTML += (`
    <section class="mt-5 mb-5">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-12">
                    <p style="opacity: 0.7; font-weight: 400; line-height: 30px;">
                        <b> 1. Lorem ipsum dolor sit </b> <br>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore earum, eveniet ipsum dolore nam ipsam quibusdam obcaecati, iusto similique veritatis reprehenderit voluptas doloribus dignissimos odio. Mollitia amet eveniet illum at. <br><br>
                        <b>2. Lorem ipsum dolor sit </b> <br>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore earum, eveniet ipsum dolore nam ipsam quibusdam obcaecati, iusto similique veritatis reprehenderit voluptas doloribus dignissimos odio. Mollitia amet eveniet illum at. <br><br>
                        <b>3. Lorem ipsum dolor sit </b> <br>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore earum, eveniet ipsum dolore nam ipsam quibusdam obcaecati, iusto similique veritatis reprehenderit voluptas doloribus dignissimos odio. Mollitia amet eveniet illum at. <br><br>
                        <b>4. Lorem ipsum dolor sit </b> <br>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore earum, eveniet ipsum dolore nam ipsam quibusdam obcaecati, iusto similique veritatis reprehenderit voluptas doloribus dignissimos odio. Mollitia amet eveniet illum at. <br><br>
                        <b>5. Lorem ipsum dolor sit </b> <br>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore earum, eveniet ipsum dolore nam ipsam quibusdam obcaecati, iusto similique veritatis reprehenderit voluptas doloribus dignissimos odio. Mollitia amet eveniet illum at. <br><br>
                        <b>6. Lorem ipsum dolor sit </b> <br>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore earum, eveniet ipsum dolore nam ipsam quibusdam obcaecati, iusto similique veritatis reprehenderit voluptas doloribus dignissimos odio. Mollitia amet eveniet illum at.

                    </p>
                </div>
            </div>
        </div>
    </section>`);
    document.body.appendChild(boxcodigo);
    boxcodigo.select();
    document.execCommand('copy');
    document.body.removeChild(boxcodigo);
    alert("Copy to dashboard");
}

function b17() {
    var boxcodigo = document.createElement('textarea');
    boxcodigo.innerHTML += (`
    <section class="mt-5 mb-5 pt-3" style="background-color: rgb(99, 189, 169);">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-12">
                    <p style="opacity: 1; font-weight: 600; line-height: 30px; font-style: italic;">
                        Texto  
                    </p>
                </div>
            </div>
        </div>
    </section>`);
    document.body.appendChild(boxcodigo);
    boxcodigo.select();
    document.execCommand('copy');
    document.body.removeChild(boxcodigo);
}

function b18() {
    var boxcodigo = document.createElement('textarea');
    boxcodigo.innerHTML += (`
    <section>
        <div style="width: 50%; margin: 0px auto; margin-top: 50px; margin-bottom: 50px;">
            <img alt="image" class="rounded" src="" style="width: 100%;">
        </div>
    </section>`);
    document.body.appendChild(boxcodigo);
    boxcodigo.select();
    document.execCommand('copy');
    document.body.removeChild(boxcodigo);
}

