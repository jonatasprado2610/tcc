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
