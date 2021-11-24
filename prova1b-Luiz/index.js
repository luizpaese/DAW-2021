const express = require('express');
const groupRouter = require('./routes/group-router');
const productRouter = require('./routes/product-router');
const brandRouter = require('./routes/brand-router');

const app = express();

const PORT = 3333;

//Middleware
app.use(express.json());

//Rota principal
app.get('/', (req, res) => {
    res.send(`It's working!`);
});

//Demais rotas
app.use('/groups', groupRouter);

app.use('/products',productRouter);

app.use('/brands',brandRouter);

app.listen(PORT, () => {
    console.log(`Executando na porta ${PORT}`);
});