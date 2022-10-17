import {con} from './connection.js';

export async function cadastrarEndereco(endereco) {
    const comando = `insert into tb_usuario_endereco (
        id_usuario
        DS_LOGRADOURO,
        DS_CEP,
        DS_RUA,
        DS_BLOCO,
        NR_NUMERO
    )
    values(?, ?, ?, ?, ?, ?)
    `
    const [linhas] = await con.query(comando, [
                                                endereco.idusuario,
                                                endereco.logradouro, 
                                               endereco.cep,
                                               endereco.rua, 
                                               endereco.bloco, 
                                               endereco.numero
                                            ])
    return linhas;
}

export async function listarEndereco (idUsuario) {
    const comando = `select 	ID_USUARIO_ENDERECO				id,
    DS_LOGRADOURO					logradouro,
    DS_CEP							CEP,
    DS_BAIRRO						bairro,
    DS_RUA							rua,
    DS_BLOCO						bloco,
    NR_NUMERO						numero
from tb_usuario_endereco
where id_usuario = ?`

const [registros] = await con.query(comando, [idUsuario]);
return registros;
}





/*
export async function cadastrarEndereco(endereco) {
    const comando = `insert into tb_usuario_endereco (
        id_usuario
        DS_LOGRADOURO,
        DS_CEP,
        DS_BAIRRO,
        DS_RUA,
        DS_BLOCO,
        NR_NUMERO
    )
    values(?, ?, ?, ?, ?, ?, ?)
    `
    const [linhas] = await con.query(comando, [
                                                endereco.idusuario,
                                                endereco.logradouro, 
                                               endereco.cep, 
                                               endereco.bairro,
                                               endereco.rua, 
                                               endereco.bloco, 
                                               endereco.numero
                                            ])
    return linhas.insertId;
}*/