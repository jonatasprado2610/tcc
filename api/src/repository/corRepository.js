
import { con } from "./connection.js";







export async function listarCores() {
    const comando = `
        select ID_COR        as id,
               DS_COR        as cor
          from tb_cor
    `
    const [linhas] = await con.query(comando);
    return linhas;
}

export async function buscarCorPorId(id) {
    const comando = 
       `  select ID_COR               as id,
               DS_COR                 as cor
          from tb_cor
         where ID_COR = ?
         `
    

    const [linhas] = await con.query(comando, [id]);
    return linhas[0];
}