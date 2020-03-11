const sequence = {
    _id: 1,
    get id() { return this._id++ }
}

const produtos = {}

function salvaProduto(produto) {
    if(!produto.id) produto.id = sequence.id
    produtos[produto.id] = produto
    return produto
}

function getProduto(id){
    return produtos[id] || {}
}

function getProdutos(){
    return Object.values(produtos)
}

function excluirProduto(id){
    delete produtos[id]
    return produtos
}

module.exports = { salvaProduto, getProduto, getProdutos, excluirProduto }