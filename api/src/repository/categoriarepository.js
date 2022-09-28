
import { con } from "./connection.js";

export async function listarCategorias() {
    const comando = `
        select ID_CATEGORIA        as id,
               NM_CATEGORIA        as categoria
          from tb_categoria
    `
    const [linhas] = await con.query(comando);
    return linhas;
}