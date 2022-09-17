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