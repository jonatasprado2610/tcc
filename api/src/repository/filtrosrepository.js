import { con } from "./connection.js";


export async function buscarPorNome(nome){

    const comando =

    `
    select  ID_PRODUTO  ID,
    NM_PRODUTO   NOME,
    VL_PRECO_DE   PRECO,
    VL_PRECO_POR   PRECOPARCELADO,
    VL_MAX_PARCELAS  MAXIMODEPARCELAS,
    QTD_ITENS        QTDITENS


FROM tb_produto
where  NM_PRODUTO  LIKE ?  ;
    `;
    const [linhas]= await  con.query(comando,[`%${nome}%`]);
    return linhas;

}