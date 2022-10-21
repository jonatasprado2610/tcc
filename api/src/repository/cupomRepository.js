import { con } from "./connection.js";

export async function buscarCupom(cod) {
    const comando = `
         SELECT id_cupom         id,
                cod_cupom        cod,
                vl_cupom         valor,
                qtd_restante     restante
           FROM tb_cupom 
          WHERE cod_cupom = ?
    `

    const [linhas] = await con.query(comando, [cod]);
    return linhas[0];
}


export async function atualizarCupom(cod) {
    const comando = `
        UPDATE tb_cupom
           SET qtd_restante = qtd_restante - 1
         WHERE cod_cupom = ?
    `

    const [info] = await con.query(comando, [cod]);
    return info.affectedRows;

}
