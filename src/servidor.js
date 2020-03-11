const porta = 3003

const express = require('express')
const BancodeDados = require('./bandoDeDados')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.urlencoded({ extended: true }))

app.get('/produtos', (req, res, next)=>{ //Funciona pra essa URL em especifico
    res.send(BancodeDados.getProdutos()) //Converte para JSON
})

app.get('/produtos/:id', (req, res, next)=>{
    res.send(BancodeDados.getProduto(req.params.id)) //Dentro de params tem aquilo que veio depois de ":"
})

app.post('/produtos', (req, res, next)=>{
    const produto = BancodeDados.salvaProduto({
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) //Enviando o resultado da CONST PRODUTO
})

app.put('/produtos/:id', (req, res, next)=>{ //Substitu um valor já salvo no BD
            //O valor vai ser salvo no ID informado apagando o antigo.
    const produto = BancodeDados.salvaProduto({
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) //Enviando o resultado da CONST PRODUTO
})

app.delete('/produtos/:id', (req, res, next)=>{
    const produto = BancodeDados.excluirProduto(req.params.id)
    res.send(produto)
})

app.listen(porta, ()=>{ //Aplicação está rodando nessa porta
    console.log(`Servirdor executado na porta ${porta}`)
})