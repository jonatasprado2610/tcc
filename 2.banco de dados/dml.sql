use database tccdb;


insert into tb_produto(
NM_PRODUTO,
VL_PRECO_DE,
VL_PRECO_POR,
VL_MAX_PARCELAS,
QTD_ITENS,
BL_CATEGORIA_DIARIA,
DS_DESCRICAO)

values(
'Skate Longboard Montado Completo Allyb - Shark o Tubarão',
469.90,
350.90,
7,
10000,
false,
'Skate Longboard Completo Allyb tem o tamanho diferenciado ele 
é um pouco menor para facilitar o transporte sem prejudicar o desempenho,
 skate pronto para andar, ideal para parques, pistas, ruas e etc...O skate
 Suporta até 140kg tranquilamente, suas peças são e excelente qualidade 
 para você se preocupar apenas com sua diversão.Peso do skate longboard 
 completo em media pesa 3,500 kgComprimento: 85cmLargura : 20,8cmDescrição
 das peças: Shape feito com 8 lâminas de madeira especialmente selecionadas
 e certificadas.Truck Invertido 180mm feito de liga de alumínio e com os
 amortecedores fundidos para fazer as curvas com maior facilidade e precisão.
 Rodas Importadas de Poliuretano 83ª de Dureza ( Obs: as cores das rodas podem
 variar de acordo com o estoque )Rolamento com tecnologia ABEC de alto desempenho 
 ideal para Skates e Longboads. Parafusos de base auto travantes de 10mm Compre 
 esse produto e faça parte da Família');
 
insert into tb_categoria(
NM_CATEGORIA					
)
values(
'Equipamentos');


insert into tb_produto_categoria(
ID_CATEGORIA,
ID_PRODUTO
)

values(
1,
1);


insert into tb_produto_imagem(
ID_PRODUTO,
DS_IMAGEM
)
values(
1,
'https://static.netshoes.com.br/produtos/skate-longboard-montado-completo-allyb-shark-o-tubarao/60/70I-0027-460/70I-0027-460_zoom1.jpg?ts=1647269952&ims=544x');


insert into tb_marca(
NM_MARCA
)
values(
'Allyb');

insert into tb_produto_marca(
ID_MARCA,
ID_PRODUTO
)
values(
1,
1);

insert into tb_cor(
DS_COR
)
values(
'Estampado');


insert into tb_produto_cor(
ID_COR,
ID_PRODUTO
)
values(
1,
1);

insert into tb_tamanho(
DS_TAMANHO)
values(
'G');


insert into tb_produto_tamanho(
ID_TAMANHO,
ID_PRODUTO
)
values(
1,
1);


insert into tb_usuario(
NM_USUARIO,
DT_NASCIMENTO,
DS_RG,
DS_CPF,
ds_email,
ds_senha,
bt_trocar,
cod_reset,
dt_expiracao_cod  
)
values(
'João Victor Andrade',
10/12/2005,
50189965999,
39146716816,
'jvasantos2005@gmail.com',
'braz2005',
true,
12345678,
31/12/2022);

insert into tb_usuario_endereco(
ID_USUARIO,
DS_LOGRADOURO,
DS_BAIRRO,
DS_REFERENCIA,
DS_CEP,
DS_ESTADO,
DS_CIDADE,
DS_COMPLEMENTO,
DS_NUMERO
)
values(
1,
'Rua José de Vieira',
'Jardim Nova Holanda',
'Próximo a escola Ayrton Senna',
123456789123456,
'São Paulo',
'SP',
'A',
180);

insert into tb_pedido(
ID_USUARIO,
ID_USUARIO_ENDERECO,
DT_PEDIDO,
COD_NOTAL_FISCAL,
TP_FRETE,
VL_FRETE,
NR_NUMERO_PEDIDO,
DS_STATUS,
TP_PAGAMENTO
)
values(
1,
1,
31/02/2022,
12456789,
'aéreo',
150,
1500,
'Enviando',
'Cartão');


insert into tb_pedido_item(
ID_PEDIDO,
ID_PRODUTO,
VL_PRODUTO
)
values(
1,
1,
150);

INSERT INTO tb_produto_avaliacao(
ID_USUARIO,
ID_PRODUTO,
VL_AVALIACAO,
DS_AVALIACAO_PRODUTO
)
values(
1,
1,
5,
'Produto muito bom!');


insert into tb_usuario_favorito(
ID_USUARIO,
ID_PRODUTO
)
values(
1,
1);


insert into tb_login(
ID_USUARIO,
DS_EMAIL,
DS_SENHA)
values(
1,
'jvasantos2005@gmail.com',
'abc@123');


insert into tb_admin(
NM_FUNCIONARIO,
IMG_IMAGEM,
NM_AREA_ATUANTE,
DT_ATUA_DESDE,
DT_NASCIMENTO					
)
values(
'jonatas',
'https://t4.ftcdn.net/jpg/04/99/93/91/360_F_499939117_Rmeaq8xNcvQnq8yuLHNkuhR86kkfpjVW.jpg',
'ADM',
10/12/2005,
12/10/2005);

insert into tb_admin_login(
ID_FUNCIONARIO,
DS_LOGIN,
DS_SENHA
)
values(
1,
'ADMIN@123',
'abc@123');

insert into tb_carrossel_principal(
DS_IMG
)
values(
'https://media.istockphoto.com/photos/carrousel-at-dusk-picture-id136325144');

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