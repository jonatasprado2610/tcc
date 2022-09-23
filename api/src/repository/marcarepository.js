
import { con } from "./connection.js";

export async function listarMarcas() {
    const comando = `
        select ID_PRODUTO_MARCA        as id,
               NM_MARCA                as marca
          from tb_produto_marca
    `
    const [linhas] = await con.query(comando);
    return linhas;
}