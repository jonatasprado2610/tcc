USE tccDB;

insert into tb_produto (NM_PRODUTO, VL_PRECO_DE,  VL_PRECO_POR, VL_MAX_PARCELAS ,QTD_ITENS ,BL_CATEGORIA_DIARIA , DS_DESCRICAO)
                        values ('Tenis Campus', 220, 200, 10, 1200, true, 'Uma mistura dos vários estilos celebrados nas quadras. Este tênis inspirado nos anos 70 tem cabedal macio semelhante a couro. Ele exibe as Três Listras perfuradas em um dos lados e costuradas em contraste do outro. O amortecimento ultramacio garante leveza no caminhar.' );

 insert into tb_categoria(NM_CATEGORIA)
      values ('Basquete');
      
insert into tb_produto_imagem (id_produto, DS_IMAGEM)
				values (1, 'Caminho da imagem e tals');
                
insert into tb_cor(DS_COR)
      values ('preto');
      
insert into tb_tamanho(DS_TAMANHO)
      values ('M');
      
 insert into tb_marca(NM_MARCA)
      values ('Nike');
                
insert into tb_pedido (ID_USUARIO, ID_USUARIO_ENDERECO,
DT_PEDIDO,
COD_NOTAL_FISCAL,
TP_FRETE	,
VL_FRETE	,
NR_NUMERO_PEDIDO,
DS_STATUS	,
TP_PAGAMENTO)
values (1, 1, '2022-08-22', '8582915', 'Rapido', 15, '88fx815h', 'a caminho', 'cartao');

insert into tb_pedido_item (id_pedido, id_produto, vl_produto)
					values(1, 4, 225.00);
                    
insert into tb_produto_avaliacao (ID_USUARIO, ID_PRODUTO, VL_AVALIACAO, DS_AVALIACAO_PRODUTO)
					values(1, 4, 4, 'Ótimo tênis. Amei!');
                    
insert into tb_usuario_favorito (ID_USUARIO, ID_PRODUTO)
					values(1, 4);
                    
insert into tb_usuario_endereco (
        DS_LOGRADOURO,
        DS_CEP,
        DS_RUA,
        DS_BLOCO,
        NR_NUMERO
    )
    values('apartamento', '04835653', 'R. João Bosco', '3', '2872');
                    
insert into tb_pagamento_pix (ID_PEDIDO, DS_CHAVE_PIX)
					values (1, '16846278924862');
                    
insert into tb_pagamento_cartao (ID_PEDIDO, NM_CARTAO,NR_CARTAO,DT_VENCIMENTO,COD_SEGURANCA,NR_PARCELAS,DS_FORMA_PAGAMENTO)
						values(1, 'Nubank Black', 179898, '2025-04-17', 16511898, 5, 'débito');
                        
insert into tb_boleto(id_pedido, img_boleto, ds_codigo)
				values(1, 'hhtps:caminhoimagemexemplo', 4887871);
                
insert into tb_admin_login(DS_LOGIN, DS_SENHA)
  values ('admin@gmail.com', 'admin123');
  
insert into tb_usuario(NM_USUARIO,DT_NASCIMENTO , DS_RG, DS_CPF, ds_email, ds_senha )		
    value('marco', '2012-02-11', '52.693.127-30', '464.136.198-30','teste@gmail.com','vasco123');
                

insert into tb_carrossel_principal(ds_img)
							values('https:exemplocaminhoimagem');



select *
 from tb_pedido_item;


SELECT *
 from tb_produto;


select ID_ADMIN_LOGIN	  id,
    DS_LOGIN	    login,
    DS_SENHA        senha
    from tb_admin_login
     where DS_LOGIN ='admin@gmail.com'
      and DS_SENHA ='admin123';
  
  
select *
  from tb_admin_login; 
  
  
select ID_USUARIO	 id,
            ds_email    email,
            ds_senha    senha
	from tb_usuario 
    where ds_email  =  'teste@gmail.com'
      and  ds_senha =  'vasco123';


select *
	from tb_cor;
      
      
select * 
	from tb_categoria;
    
    
select *
	from tb_usuario_endereco;


select *
	from  tb_produto_imagem;