import { con } from "./connection.js";


export async function novoProduto(produto) {
    const comando = `
        insert into tb_produto (ID_CATEGORIA, ID_MARCA, ID_TAMANHO, ID_COR, NM_PRODUTO, VL_PRECO_DE,  VL_PRECO_POR, VL_MAX_PARCELAS ,QTD_ITENS ,BL_CATEGORIA_DIARIA , DS_DESCRICAO)
                        values (?, ?,?,?,?,?, ?, ?, ?, ?, ? )
    `

    const [resp] = await con.query(comando, [
                            produto.idCategoria,
                            produto.idMarca,
                            produto.idTamanho,
                            produto.idCor,
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
    const comando = `
        insert into tb_produto_categoria (ID_CATEGORIA, ID_PRODUTO)
                                  values (?, ?)
    `

    const [resp] = await con.query(comando, [idCategoria, idProduto])
}

export async function salvarProdutoCor(idCor, idProduto, DS_COR) {
    const comando = `
        insert into tb_produto_cor (ID_PRODUTO_COR, ID_PRODUTO, DS_COR)
                                  values (?, ?,? )
    `

    const [resp] = await con.query(comando, [idCor, idProduto, DS_COR])
}

export async function salvarProdutoTamanho(idTamanho, idProduto, DS_TAMANHO) {
    const comando = `
        insert into tb_produto_tamanho (ID_PRODUTO_TAMANHO, ID_PRODUTO, DS_TAMANHO)
                                  values (?, ?, ?)
    `

    const [resp] = await con.query(comando, [idTamanho, idProduto, DS_TAMANHO])
}

export async function salvarProdutoMarca( idMarca, idProduto, NM_MARCA) {
    const comando = `
        insert into tb_produto_cor (ID_PRODUTO_MARCA, ID_PRODUTO, NM_MARCA)
                                  values (?, ?, ?)
    `

    const [resp] = await con.query(comando, [idMarca, idProduto, NM_MARCA])
}
