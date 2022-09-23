
import { con } from "./connection.js";

export async function listarCores() {
    const comando = `
        select ID_PRODUTO_COR        as id,
               DS_COR                as cor
          from tb_produto_cor
    `
    const [linhas] = await con.query(comando);
    return linhas;
}