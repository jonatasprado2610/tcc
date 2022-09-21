import { con } from "./connection.js";


export async function novoProduto(produto) {
    const comando = `
        insert into tb_produto (ID_CATEGORIA, NM_PRODUTO, VL_PRECO_DE,  VL_PRECO_POR, VL_MAX_PARCELAS ,QTD_ITENS ,BL_CATEGORIA_DIARIA , DS_DESCRICAO)
                        values (?, ?, ?, ?, ?, ?, ?,? )
    `

    const [resp] = await con.query(comando, [
                            produto.idCategoria,
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

export async function salvarProdutoCategoria(idProduto, idCategoria) {
    const comando = `
        insert into tb_produto_categoria (id_categoria, id_produto)
                                  values (?, ?)
    `

    const [resp] = await con.query(comando, [idCategoria, idProduto])
}