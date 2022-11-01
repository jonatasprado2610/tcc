import { con } from './connection.js'


export async function loginAdm(login, senha){

    console.log(login);
    console.log(senha);

      const comando =

      `select ID_ADMIN_LOGIN	  id,
              DS_LOGIN	    login,
              DS_SENHA        senha
         from tb_admin_login
        where DS_LOGIN =?
          and DS_SENHA =?`

          const [linhas] = await con.query(comando, [login,senha])
          console.log(linhas)
          return linhas[0];

}

export async function PerfilADM(id) {
    const comando =

    `select NM_FUNCIONARIO as nome,
            DS_IMAGEM      as imagem, 
            NM_AREA_ATUANTE as area, 
            DT_ATUA_DESDE as atua,
            DT_NASCIMENTO as nascimento
       from tb_admin 
       join tb_admin_login on tb_admin.id_funcionario = tb_admin_login.id_funcionario
      where id_admin_login = ?`

        const [linhas] = await con.query(comando, [id])
        return linhas;

}
