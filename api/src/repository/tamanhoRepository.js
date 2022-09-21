
import { con } from "./connection.js";

export async function listarTamanhos() {
    const comando = `
        select ID_PRODUTO_TAMANHO       as id,
               DS_TAMANHO               as tamanho
          from tb_produto_tamanho
    `
    const [linhas] = await con.query(comando);
    return linhas;
}