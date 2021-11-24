const express = require('express');
const app = express();

app.use(express.json());

//Rota principal
app.get('/', (req, res) => {
    res.send(`It's working!`);
})

//Rota home: query param
app.get('/home', (req, res) => {

    const nome = req.query.nome;

    res.send(`Seja bem vindo ${nome}!`);
})

//Rota profile: request param
app.get('/profile/:username', (req, res) => {

    const username = req.params.username

    res.send(`Você está no perfil de ${username}!`);
})

//Rota login: request body
app.get('/login', (req, res) => {

    const user = req.body;
    const {password, username} = req.body;

    console.log(user)

    console.log('->', username);

    res.send(`Você está no perfil de ${user.username}!`);
})



app.listen(3000, () => {
    console.log('Executando na porta 3000');
});