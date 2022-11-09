
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
        select id_usuario 		id,
           NM_USUARIO           nome,
           ds_email			email,
           ds_senha    senha
      from tb_usuario
     where ds_email 		= ?
      and ds_senha			= ?; `

         

          

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

export async function ProdutosUsuario(id) {
  const comando = `

  select count(*)  as produtos_comprados
  from tb_pedido 
  inner join tb_usuario on tb_pedido.ID_USUARIO = tb_pedido.ID_USUARIO
  where tb_usuario.ID_USUARIO = ?;   ` 
  
  const [linhas] = await con.query(comando, [id])
  return linhas;
}