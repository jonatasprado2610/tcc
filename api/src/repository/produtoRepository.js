import { con } from "./connection.js";

// // CADASTRAR PRODUTO  // //               // // CADASTRAR PRODUTO  // //              // // CADASTRAR PRODUTO  // //              // // CADASTRAR PRODUTO  // // 
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
export async function salvarProdutoMarca(idMarca, idProduto) {
    const comando =
        `  insert into tb_produto_marca (ID_MARCA,ID_PRODUTO)
                              values (?, ?)
    `


    const [resp] = await con.query(comando, [idMarca, idProduto])
}
// ALTERAR PRODUTO // // ALTERAR PRODUTO // // ALTERAR PRODUTO // // ALTERAR PRODUTO // 

export async function removerProdutoImagensDiferentesDe(imagem){
    const comando = `
    delete from tb_produto_imagem 
    where DS_IMAGEM  not in (?)
    `
    const [resp] = await con.query(comando, [ imagem ]);
    return resp.affectedRows;
}

export async function alterarProduto(id, produto) {
    const comando =
        `
         UPDATE     tb_produto 
            SET     NM_PRODUTO = ?, 
                    VL_PRECO_DE = ?,  
                    VL_PRECO_POR = ?, 
                    VL_MAX_PARCELAS = ?,
                    QTD_ITENS = ?,
                    BL_CATEGORIA_DIARIA = ? , 
                    DS_DESCRICAO = ? 
                    WHERE ID_PRODUTO = ? `

    const [resp] = await con.query(comando, [

        produto.nome,
        produto.precoDe,
        produto.precoPor,
        produto.maxParcelas,
        produto.qtdItens,
        produto.categoriaDiaria,
        produto.descricao,
        id
    ])
    return resp.affectedRows;
}

// // SALVAR IMAGEM // // // // SALVAR IMAGEM // // // // SALVAR IMAGEM // // // // SALVAR IMAGEM // // // // SALVAR IMAGEM // //
export async function salvarProdutoImagem(idProduto, imagemPath) {
    const comando =
        `insert into tb_produto_imagem (ID_PRODUTO, DS_IMAGEM)
                                 values (?, ?)`


    const [resp] = await con.query(comando, [idProduto, imagemPath])

    return resp.affectedRows
}

// // PRODUTO ESTOQUE // //             // // PRODUTO ESTOQUE // //             // // PRODUTO ESTOQUE // //             // // PRODUTO ESTOQUE // //

export async function buscarProdutos() {
    const comando = ` 
    select  tb_produto.
    ID_PRODUTO    id,
    NM_PRODUTO                    nome,
    VL_PRECO_DE                    preco,
    VL_PRECO_POR           precopar,
    QTD_ITENS              qtd,
    BL_CATEGORIA_DIARIA     destaque,
    NM_CATEGORIA qtd_categoria ,
    NM_MARCA      marca
    from tb_produto
    inner join tb_produto_categoria on tb_produto.id_produto=tb_produto.id_produto
    inner join tb_categoria on tb_categoria.id_categoria = tb_produto_categoria.id_produto
    inner join tb_produto_marca on tb_produto_marca.ID_PRODUTO = tb_produto.ID_PRODUTO
    inner join tb_marca on tb_marca.ID_MARCA = tb_produto_marca.ID_MARCA
    where tb_produto.id_produto = 2
    group by
    tb_produto.ID_PRODUTO,
    NM_PRODUTO,
    VL_PRECO_DE,
    VL_PRECO_POR,
    QTD_ITENS,
    BL_CATEGORIA_DIARIA;
     `
    const [registros] = await con.query(comando);
    return registros;
}
// PROCURAR PRODUTO // // PROCURAR PRODUTO // // PROCURAR PRODUTO // // PROCURAR PRODUTO //
export async function procurarProdutoPorId(id){
    const comando = `
    SELECT 
    ID_PRODUTO as id,
    NM_PRODUTO as nome,
    VL_PRECO_DE as precoInicial,
    VL_PRECO_POR as precoFinal,
    VL_MAX_PARCELAS as parcelas,
    QTD_ITENS as quantidade,
    BL_CATEGORIA_DIARIA as diaria,
    DS_DESCRICAO as descricao
    FROM tb_produto
    WHERE id_produto = ?
    `
    const [registros] = await con.query(comando, [id]);
    return registros[0];
}

export async function procurarImagemPorId(idProduto){
    const comando = 
    `
    SELECT 
    DS_IMAGEM as imagem
    FROM tb_produto_imagem
    WHERE id_produto =  ?
    `
    const [linhas] = await con.query(comando, [idProduto]);
    return linhas.map(item => item.imagem); 
}
export async function procurarMarcaPorId(idProduto){
    const comando = 
    `
    SELECT 
    ID_MARCA as id
    FROM tb_produto_marca
    WHERE id_produto =  ?
    `
    const [linhas] = await con.query(comando , [idProduto]);
    return linhas.map(item => item.id); 
}
export async function procurarTamanhoPorId(idProduto){
    const comando = 
    `
    SELECT 
    ID_TAMANHO as id
    FROM tb_produto_tamanho
    WHERE id_produto =  ?
    `
    const [linhas] = await con.query(comando , [idProduto]);
    return linhas.map(item => item.id); 
}
export async function procurarCorPorId(idProduto){
    const comando = 
    `
    SELECT 
    ID_COR as id
    FROM tb_produto_cor
    WHERE id_produto =  ?
    `
    const [linhas] = await con.query(comando , [idProduto]);
    return linhas.map(item => item.id); 
}

export async function procurarCategoriasPorId(idProduto){
    const comando = 
    `
    SELECT 
    ID_CATEGORIA as id
    FROM tb_produto_categoria
    WHERE id_produto =  ?
    `
    const [linhas] = await con.query(comando , [idProduto]);
    return linhas.map(item => item.id); 
}

// REMOVER PRODUTO // // REMOVER PRODUTO // // REMOVER PRODUTO // // REMOVER PRODUTO // 

export async function removerProdutoMarcas(idProduto) {
    const comando =
        ` delete from tb_produto_marca
                                  where ID_PRODUTO =  ? `


    const [resp] = await con.query(comando, [idProduto])
    return resp.affectedRows
}

export async function removerProdutoTamanhos(idProduto) {
    const comando =
        `  delete from tb_produto_tamanho 
                                  where ID_PRODUTO =  ? `


    const [resp] = await con.query(comando, [idProduto])
    return resp.affectedRows
}

export async function removerProdutoCores(idProduto) {
    const comando =
        ` delete from tb_produto_cor 
                                  where ID_PRODUTO =  ? `


    const [resp] = await con.query(comando, [idProduto])
    return resp.affectedRows
}

export async function removerProdutoCategorias(idProduto) {
    const comando =
        ` delete from  tb_produto_categoria 
                                  where ID_PRODUTO =  ? `


    const [resp] = await con.query(comando, [idProduto])
    return resp.affectedRows
}

export async function removerProdutoImagens(idProduto) {
    const comando =
        ` delete from  tb_produto_imagem
                                  where ID_PRODUTO =  ? `


    const [resp] = await con.query(comando, [idProduto])
    return resp.affectedRows
}

export async function removerProduto(idProduto) {
    const comando =
        `delete from  tb_produto 
                                  where ID_PRODUTO =  ? `


    const [resp] = await con.query(comando, [idProduto])
    return resp.affectedRows
}

export async function listarProdutosInicio(){
    const comando=`
    select tb_produto.id_produto                id,
           NM_PRODUTO                           nome,
           VL_PRECO_DE                          preco,
           VL_PRECO_POR                         precopar,
           QTD_ITENS                            qtd,
           min(ds_imagem)                          imagem
           from tb_produto  
            left join tb_produto_imagem on tb_produto_imagem.id_produto = tb_produto.id_produto
            group by
            tb_produto.id_produto  , 
            NM_PRODUTO         ,            
            VL_PRECO_DE      ,              
            VL_PRECO_POR       ,            
            QTD_ITENS                   
        
    `
    const [registros] = await con.query(comando);
    return registros
}

export async function ProdutosCadastrados() {
    const comando = `
    select  tb_produto.ID_PRODUTO    id,
    DS_IMAGEM                       imagem,
    NM_PRODUTO                    nome,
    VL_PRECO_POR           precopar,
    QTD_ITENS              qtd,
    BL_CATEGORIA_DIARIA     destaque,
    NM_MARCA      marca
    from tb_produto
    inner join tb_produto_imagem on tb_produto_imagem.ID_PRODUTO = tb_produto.ID_PRODUTO
    inner join tb_produto_marca on tb_produto_marca.ID_PRODUTO = tb_produto.ID_PRODUTO
    inner join tb_marca on tb_marca.ID_MARCA = tb_produto_marca.ID_MARCA 
    group by
    tb_produto.ID_PRODUTO,
	DS_IMAGEM,
    NM_PRODUTO,
    VL_PRECO_POR,
    QTD_ITENS,
    BL_CATEGORIA_DIARIA,
    NM_MARCA;  
         `
    const [registros] = await con.query(comando);
    return registros
}

