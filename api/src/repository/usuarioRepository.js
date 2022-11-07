
import { con } from './connection.js';



export  async  function CriarConta(usuario){

      const comando =
      `
           insert into tb_usuario(NM_USUARIO,DT_NASCIMENTO , DS_RG, DS_CPF, ds_email, ds_senha )		
                       value(?, ?, ?, ?, ?, ?)`

          const [resposta]= await con.query(comando, [usuario.nome, usuario.nascimento, usuario.rg, usuario.cpf, usuario.email,usuario.senha]);
          usuario.id= resposta.insertId;

       
        return usuario;
        

    
}


export  async  function LoginUsuario(email,senha){
    const comando = 
        `
        select ID_USUARIO	 id,
                   
               ds_email    email,
               ds_senha    senha
  	      from tb_login
         where ds_email  =  ?
          and  ds_senha = (?); `

         const [linhas] = await con.query(comando, [email,senha])
          console.log(linhas)
          return linhas[0];
}

export  async  function PerfilUsuario(id){
  const comando = 
      `select NM_USUARIO, 
      ds_email 
      from tb_usuario 
      where ID_USUARIO = ?;
       `
       const [linhas] = await con.query(comando, [id])
        return linhas;
}