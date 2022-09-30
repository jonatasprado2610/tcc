
import { con } from "./connection.js";

export async function listarMarcas() {
    const comando = `
        select ID_MARCA        as id,
               NM_MARCA        as marca
          from tb_marca
    `
    const [linhas] = await con.query(comando);
    return linhas;
}


export async function buscarMarcaPorId(id) {
    const comando = 
       `  select  ID_MARCA        as id,
               NM_MARCA         as marca
          from tb_marca
         where ID_MARCA = ?
         `
    

    const [linhas] = await con.query(comando, [id]);
    return linhas[0];
}