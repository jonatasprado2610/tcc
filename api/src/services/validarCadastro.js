



export async function validarCadastro(usuario) {
    if (usuario.nome == undefined || usuario.nome == '') {
        throw new Error('Nome e obrigatório!');
    }
   
}