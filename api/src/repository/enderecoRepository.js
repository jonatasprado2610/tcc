import { con } from './connection.js';

export async function Listar(idUsuario) {
    const comando =
        `
        select id_usuario_endereco  id,
        ds_referencia           referencia,
        ds_cep             cep,
        ds_logradouro      logradouro ,
        ds_bairro          bairro,
        ds_cidade          cidade,
        ds_estado          estado,
        ds_numero         numero,
        ds_complemento    complemento
  from tb_usuario_endereco
  where id_usuario = ?`

    const [linhas] = await con.query(comando, [idUsuario])
    return linhas;



}


export async function salvar(idUsuario, endereco) {
    const comando = `
    insert into tb_usuario_endereco (id_usuario, ds_referencia, ds_cep, ds_logradouro, ds_bairro, ds_cidade, ds_estado, ds_numero, ds_complemento)
                             values (?, ?, ?, ?, ?, ?, ?, ?, ?)
    `

    const [info] = await con.query(comando, [idUsuario, endereco.referencia, endereco.cep, endereco.logradouro, endereco.bairro, endereco.cidade, endereco.estado, endereco.numero, endereco.complemento])
    return info.insertId;
}