var express = require('express');
var app = express();
const cors = require('cors');

app.use(cors());
const port = 3001;

app.use(express.json());
app.use(express.urlencoded({extended: false}));

const usuarios =[
    {
        nombre: 'usuario1',         
    },
    {
        nombre: 'usuario2',
    },
    {
        nombre: 'usuario3'
    }
]

app.get('/', function (req, res) {
  res.send('Hola soy la ruta raiz!');
});

app.get('/usuarios', (req, res) => {
    res.send(usuarios);
})

app.post('/usuarios', (req, res) => {
    const user = req.body;
    usuarios.push(user);
    res.send(user);
})

app.delete('/usuarios/:index',(req, res) => {
    if(usuarios[req.params.index]){
        res.send(usuarios.splice(req.params.index, 1));
    }else{
        res.send(`No se ha encontrado un usuario con el id: ${req.params.index}`);
    }
})

app.put('/usuarios/:index',(req, res) => {
    if(usuarios[req.params.index]){
        usuarios[req.params.index] = req.body; 
        res.send(usuarios[req.params.index]);
    } else {
        res.send(`No se ha encontrado un usuario con el id: ${req.params.index}`);
    }
})

app.get('/usuarios/:index', function (req, res) {
    
    if(usuarios[req.params.index]){
        res.send(usuarios[req.params.index]);
    }else {
        res.send(`No se encontró el usuario ${req.params.index}`);
    }
  });



app.listen(port, function () {
  console.log('Example app listening on port 3001!');
});



