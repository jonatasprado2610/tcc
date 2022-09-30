import { con } from "./connection.js";


export async function novoProduto(produto) {
    const comando = 
    
    `
        insert into tb_produto (NM_PRODUTO, VL_PRECO_DE,  VL_PRECO_POR, VL_MAX_PARCELAS ,QTD_ITENS ,BL_CATEGORIA_DIARIA , DS_DESCRICAO)
                        values (?,?, ?, ?, ?, ?, ? )   `
    

    const [resp] = await con.query(comando, [
                            produto.nome,
                            produto.precoDe,
                            produto.precoPor,
                            produto.maxParcelas,
                            produto.qtdItens,
                            produto.categoriaDiaria,
                            produto.descricao
                        ])
    return resp.insertId;
}

export async function salvarProdutoCategoria(idCategoria, idProduto) {
    const comando = 
        ` insert into tb_produto_categoria (ID_CATEGORIA, ID_PRODUTO)
                                  values (?, ?) `
    

    const [resp] = await con.query(comando, [idCategoria, idProduto])
}

export async function salvarProdutoCor(idCor, idProduto) {
    const comando = 
       ` insert into tb_produto_cor (ID_COR, ID_PRODUTO)
                                  values (?, ? ) `
    

    const [resp] = await con.query(comando, [idCor, idProduto])
}

export async function salvarProdutoTamanho(idTamanho, idProduto) {
    const comando = 
       ` insert into tb_produto_tamanho (ID_TAMANHO, ID_PRODUTO)
                                  values (?, ?) 
    `
                                  console.log(idTamanho)
                                  console.log(idProduto)
                              

    const [resp] = await con.query(comando, [idTamanho, idProduto])
}
export async function salvarProdutoMarca( idMarca, idProduto) {
    const comando = 
       `  insert into tb_produto_marca (ID_MARCA,ID_PRODUTO)
                              values (?, ?)
    `   


    const [resp] = await con.query(comando, [idMarca, idProduto])
}