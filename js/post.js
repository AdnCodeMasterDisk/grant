var app = new Vue({
    el: '#app',
    data: {
        posts: [
            // entrada inicio //
            {
                link: 'post/post1.html',
                nombre: '¿Cómo escoger el tema de la tesis o proyecto de grado? ',
                picture: 'img/p1-m.jpg',
                descripcion: 'En este apartado podrá encontrar 6 consejos, tips o claves que le permitirán obtener una visión más clara a la hora de elegir el tema de su proyecto con sus debidas variables.'
            },
            // entrada final //

            // entrada inicio //
            {
                link: 'post/post2.html',
                nombre: 'Cuando se debe aplicar encuesta y/o entrevista ',
                picture: 'img/bloque2.jpg',
                descripcion: 'Para aplicar encuesta y/o entrevista en un proyecto de grado o investigación se deben tener en cuenta varios aspectos, los cuales se muestran en este apartado. '
            },
            // entrada final //

        ]
    }
})