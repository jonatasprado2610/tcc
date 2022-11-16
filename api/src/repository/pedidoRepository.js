import { con } from "./connection.js";



export async function inserirPedido(novoPedido) {
    const comando = `
        INSERT INTO tb_pedido (
            id_usuario,
            id_usuario_endereco,
            id_cupom,
            dt_pedido,
            cod_nota_fiscal,
            tp_frete,
            vl_frete,
            ds_status,
            tp_pagamento
        )
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    `

    const [info] = await con.query(comando, [
        novoPedido.idUsuario,
        novoPedido.idEndereco,
        novoPedido.idCupom,
        novoPedido.data,
        novoPedido.notaFiscal,
        novoPedido.tipoFrete,
        novoPedido.valorFrete,
        novoPedido.status,
        novoPedido.tipoPagamento
    ]);
    return info.insertId;
}

export async function inserirPagamentopix(idPedido, novoPagamentox) {

    const comando = `

    insert  into tb_pagamento_pix (ID_PEDIDO,DS_CHAVE_PIX,DS_FORMA_PAGAMENTO	)
    values (?,?,?);
    `
    const [info] = await con.query(comando, [
        idPedido,
        novoPagamentox.chave,
        novoPagamentox.codChave,
        novoPagamentox.formaPagamentox
    ]);
    return info.affectedRows;
}



export async function inserirPagamento(idPedido, novoPagamento) {
    const comando = `
            INSERT INTO tb_pagamento_cartao (
                id_pedido,
                nm_cartao,
                nr_cartao,
                dt_vencimento,
                cod_seguranca,
                nr_parcelas,
                ds_forma_pagamento
            )
            VALUES (?, ?, ?, ?, ?, ?, ?);
    `

    const [info] = await con.query(comando, [
        idPedido,
        novoPagamento.nome,
        novoPagamento.numero,
        novoPagamento.vencimento,
        novoPagamento.codSeguranca,
        novoPagamento.parcelas,
        novoPagamento.formaPagamento
    ]);
    return info.affectedRows;
}






export async function inserirPedidoItem(idPedido, idProduto, qtd, valor) {
    const comando = `
        INSERT INTO tb_pedido_item (
            id_pedido,
            id_produto,
            qtd_itens,
            vl_produto
        )
        VALUES (?, ?, ?, ?)
    `

    const [info] = await con.query(comando, [idPedido, idProduto, qtd, valor]);
    return info.affectedRows;
}

export async function alterarStatus(id, pedido) {

    const comando =
        `
        UPDATE tb_pedido
           SET DS_STATUS     = ?
         WHERE id_pedido = ? `

    const [resp] = await con.query(comando, [

        pedido.status,
        id
    ])
    return resp.affectedRows;
}

export async function alterarStatusx(id, pedido) {

    const comando =
        `
        UPDATE tb_pedido
           SET DS_STATUS     = 'pedido recebidox'
         WHERE id_pedido = ? ` ;



    const [registros] = await con.query(comando, [id], pedido);

    return registros[0];

   
}

export async function listarpedidoIdx(id){
    const comando=
    `
   select tb_pedido.id_pedido    as    id,
   nm_produto                 as    produto,
   nm_usuario                 as    Cliente,
   id_usuario_endereco        as    id_endereo,
   ds_status                  as    statuxs,
   dt_pedido                  as    dataPedido,
   tp_pagamento               as    tipoPagamento,
   tb_pedido_item.qtd_itens   as qtd,
   tb_pedido_item. vl_produto as valor              
   from tb_pedido
   inner join  tb_usuario     on tb_pedido.id_usuario= tb_usuario.id_usuario
   inner join  tb_pedido_item on tb_pedido.id_pedido= tb_pedido_item.id_pedido
   inner join  tb_produto     on tb_pedido_item.id_produto = tb_produto.id_produto
   where tb_usuario.id_usuario = ?
  
    `    
    const [registros] = await con.query(comando, [id]);
    return registros;

}

export async function listarpedidoIdxx(id){
    const comando=
    `
    select tb_pedido.id_pedido    as    id,
    nm_produto                 as    produto,
    nm_usuario                 as    Cliente,
    id_usuario_endereco        as    id_endereo,
    ds_status                  as    statuxs,
    dt_pedido                  as    dataPedido,
    tp_pagamento               as    tipoPagamento,
    tb_pedido_item.qtd_itens   as qtd,
    tb_pedido_item. vl_produto as valor              
    from tb_pedido
    inner join  tb_usuario     on tb_pedido.id_usuario= tb_usuario.id_usuario
    inner join  tb_pedido_item on tb_pedido.id_pedido= tb_pedido_item.id_pedido
    inner join  tb_produto     on tb_pedido_item.id_produto = tb_produto.id_produto
    where tb_usuario.id_usuario = ? and ds_status= 'entrega confirmada';
  
    `    
    const [registros] = await con.query(comando, [id]);
    return registros;

}

export async function listarpedidox(){
    const comando=
    `
select tb_pedido.id_pedido    as    id,
   nm_produto                 as    produto,
   nm_usuario                 as    Cliente,
   id_usuario_endereco        as    id_endereo,
   ds_status                  as    statuxs,
   dt_pedido                  as    dataPedido,
   tp_pagamento               as    tipoPagamento,
   tb_pedido_item.qtd_itens   as qtd,
   tb_pedido_item. vl_produto as valor              
   from tb_pedido
   inner join  tb_usuario     on tb_pedido.id_usuario= tb_usuario.id_usuario
   inner join  tb_pedido_item on tb_pedido.id_pedido= tb_pedido_item.id_pedido
   inner join  tb_produto     on tb_pedido_item.id_produto = tb_produto.id_produto
   

    `
    const [registros] = await con.query(comando);
    return registros;
}

export async function listarpedidoxs(){
    const comando=
    `
    select tb_pedido.id_pedido    as    id,
    nm_produto                 as    produto,
    nm_usuario                 as    Cliente,
    id_usuario_endereco        as    id_endereo,
    ds_status                  as    statuxs,
    dt_pedido                  as    dataPedido,
    tp_pagamento               as    tipoPagamento,
    tb_pedido_item.qtd_itens   as qtd,
    tb_pedido_item. vl_produto as valor              
    from tb_pedido
    inner join  tb_usuario     on tb_pedido.id_usuario= tb_usuario.id_usuario
    inner join  tb_pedido_item on tb_pedido.id_pedido= tb_pedido_item.id_pedido
    inner join  tb_produto     on tb_pedido_item.id_produto = tb_produto.id_produto
    where ds_status= 'entrega confirmada';
   

    `
    const [registros] = await con.query(comando);
    return registros;
}







export async function mostrarStaus() {
    const comando = `
    select 
    ds_status   status
    from tb_pedido;
    `
    const [linhas] = await con.query(comando);
    return linhas;
}



export async function HistoricoComprasx() {
    const comando = `
    select tb_pedido.id_pedido    as    id,
    nm_produto                 as    produto,
    nm_usuario                 as    Cliente,
    id_usuario_endereco        as    id_endereo,
    ds_status                  as    statuxs,
    dt_pedido                  as    dataPedido,
    tp_pagamento               as    tipoPagamento,
    tb_pedido_item.qtd_itens   as qtd,
    tb_pedido_item. vl_produto as valor              
    from tb_pedido
    inner join  tb_usuario     on tb_pedido.id_usuario= tb_usuario.id_usuario
    inner join  tb_pedido_item on tb_pedido.id_pedido= tb_pedido_item.id_pedido
    inner join  tb_produto     on tb_pedido_item.id_produto = tb_produto.id_produto
    where ds_status= 'entrega confirmada'; 
    `
    const [linhas] = await con.query(comando);
    return linhas;
}
