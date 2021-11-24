const produtos = [
    {id: 1, nome: 'Suco de Laranja', litros: 0.5, preco: 3},
    {id: 2, nome: 'Suco de Uva', litros: 1, preco: 5},
    {id: 3, nome: 'Suco de Abacaxi', litros: 0.5, preco: 3}
];

module.exports = {

    index: (req, res) => {
        return res.json(produtos);
    },
    
    show: (req, res) => {
        const id = req.params.id;
        const index = id -1;
    
        res.send(produtos[index]);
    },

    create: (req, res) => {
        const produto = req.body;
    
        //Adicionar o produto recebiudo por parametro no vetor produtos
        produtos.push(produto);
    
        res.send(produto);
    }

}