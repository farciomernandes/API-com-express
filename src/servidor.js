//Primeiro passo a fazer um app em rede é criar uma "porta".
const porta = 3030

const express = require('express')
const app = express()

/*app.get('/produtos', (req, res, next) => {
    console.log('Middleware1...')
    next() //Se não tiver next ele fica pra sempre rodando até ter um SEND
})*/

app.get('/produtos', (req, res, next) => {
    res.send({nome:'Notebook', preco: 123.456}) //send = Converte para JSON
})

app.listen(porta, ()=> {
    console.log(`Servido executando na porta ${porta}.`)
})