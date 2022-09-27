import {con} from './connection.js';

export async function CadastrarEndereco() {
    const comando = `insert into tb_usuario_endereco (
        DS_LOGRADOURO,
        DS_CEP,
        DS_RUA,
        DS_BLOCO,
        NR_NUMERO
    )
    values(?, ?, ?, ?, ?)
    `
    const [linhas] = await con.query(comando);
    return linhas;
}
