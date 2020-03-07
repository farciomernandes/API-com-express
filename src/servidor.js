//Primeiro passo a fazer um app em rede é criar uma "porta".
const porta = 3003

const express = require('express')
const app = express()
const bancoDeDados = require('./bancoDeDados')


/*app.get('/produtos', (req, res, next) => {
    res.send({nome:'Notebook', preco: 123.456}) //send = Converte para JSON
})*/

app.get('/produtos', (req, res, next) => {
    res.send(bancoDeDados.getProdutos()) //get em produtos retorna tudo
})

app.get('/produtos/:id', (req, res, next) => { //"ID" é recebido da url e vira req
    res.send(bancoDeDados.getProduto(req.params.id)) //Tudo depois de .params são os ':algo'
})

app.post('/produtos', (res, next) => {
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.name,
        preco: res.body.preco
    })
    res.send(produto) //Converte em JSON pra ir pra web
})

app.listen(porta, ()=> {
    console.log(`Servido executando na porta ${porta}.`)
})