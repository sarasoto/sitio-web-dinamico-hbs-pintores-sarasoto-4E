const express =  require('express');
const hbs = require('hbs');

const app = express();

app.set('view engine', 'hbs');

//Generar partials
hbs.registerPartials(__dirname + '/views/partials/');

app.use(express.static(__dirname + '/public'));


//configurar mis rutas
app.get('/', (req, res)=>{
    res.render('index',{
        title: 'Inicio de Practica de Pintores',
        estilo: 'styles/estilomenu.css'
    });


});


app.get('/vanGogh', (req, res)=>{
    res.render('pintorone',{
        title: 'vanGogh',
        frase : 'EL ARTE ES SOBRE TODO UN ESTADO DEL ALMA',
        estilo: 'styles/estilovan.css',
        estilotwo: 'styles/estilocarrusel.css',
        dato: 'En vida solo vendió un cuadro y se suicidó de un disparo en el pecho.'

    });
});


app.get('/Picasso', (req, res)=>{
    res.render('pintortwo',{
        title: 'Picasso',
        frase : 'EL ARTE ES LA UNICA FORMA DE ESCAPAR, SIN SALIR DE CASA',
        estilo: 'styles/estilopicasso.css',
        estilotwo: 'styles/estilocarrusel.css',
        dato: 'Es él artista más robado de la historia, entre 350 obras fueron objeto de robos.'

    });
});


app.get('/Vinci', (req, res)=>{
    res.render('pintorthree',{
        title: 'Vinci',
        frase : 'ARTE NO ES LO QUE VES, ES LO QUE HACES A OTROS VER',
        estilo: 'styles/estilovinci.css',
        estilotwo: 'styles/estilocarrusel.css',
        dato: 'La mayor parte de las pinturas y demás obras de Leonardo da Vinci quedaron incompletas.'

    });
});


app.get('/dali', (req, res)=>{
    res.render('pintorfour',{
        title: 'Dali',
        frase : 'EL ARTE TIENE UN ENEMIGO QUE SE LLAMA IGNORANCIA',
        estilo: 'styles/estilodali.css',
        estilotwo: 'styles/estilocarrusel.css',
        dato: ' Dalí rediseñó el logo de Chupa Chups.'
    });
});


app.get('/Velazquez', (req, res)=>{
    res.render('pintorfive',{
        title: 'Velazquez',
        frase : 'EL ARTE LIMPIA DEL ALMA EL POLVO DE LA VIDA COTIDIANA',
        estilo: 'styles/estilodiego.css',
        estilotwo: 'styles/estilocarrusel.css',
        dato: 'Con 19 años se casó con la hija de su maestro, Francisco Pacheco, de 15 años de edad mediante un matrimonio de conveniencia.'
    });
});


app.get('/Acerca', (req, res)=>{
    res.render('acerca',{
        title: 'Acerca',
        estilo: 'styles/estiloacerca.css',
        estilotwo: 'styles/estilocarrusel.css'
    });

});


app.listen(3000, ()=>{
    console.log('Escuchando el puerto 3000');
 });