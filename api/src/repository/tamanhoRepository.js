
import { con } from "./connection.js";

export async function listarTamanhos() {
    const comando = `
        select ID_TAMANHO       as id,
               DS_TAMANHO       as tamanho
          from tb_tamanho
    `
    const [linhas] = await con.query(comando);
    return linhas;
}

export async function buscarTamanhoPorId(id) {
    const comando = 
       `  select ID_TAMANHO         as id,
               DS_TAMANHO         as tamanho
          from tb_tamanho
         where ID_TAMANHO = ?
         `
    

    const [linhas] = await con.query(comando, [id]);
    return linhas[0];
}