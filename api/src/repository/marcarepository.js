
import { con } from "./connection.js";

export async function listarMarcas() {
    const comando = `
        select ID_MARCA        as id,
               NM_MARCA        as categoria
          from tb_marca
    `
    const [linhas] = await con.query(comando);
    return linhas;
}