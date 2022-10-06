import { con } from "./connection.js";


export async function buscarPorNome(nome){

    const comando =

    `
    select  tb_produto.ID_PRODUTO    id,
    NM_PRODUTO                    nome,
    VL_PRECO_DE                    preco,
    VL_PRECO_POR           precopar,
    QTD_ITENS              qtd,
    BL_CATEGORIA_DIARIA     destaque,
    count(NM_CATEGORIA) qtd_categoria ,
    NM_MARCA      marca
     
    from tb_produto
    inner join tb_produto_categoria on tb_produto.id_produto=tb_produto.id_produto
    inner join tb_categoria on tb_categoria.id_categoria = tb_produto_categoria.id_produto
    inner join tb_produto_marca on tb_produto_marca.ID_PRODUTO = tb_produto.ID_PRODUTO
    inner join tb_marca on tb_marca.ID_MARCA = tb_produto_marca.ID_MARCA 
    where    NM_PRODUTO    like ?  ;
    `;
    const [linhas]= await  con.query(comando,[`%${nome}%`]);
    return linhas;

}