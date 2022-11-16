create database tccDB;
USe tccDB;

create table tb_produto (
ID_PRODUTO						int primary key auto_increment,
NM_PRODUTO						varchar(200),
VL_PRECO_DE						decimal(15,2),
VL_PRECO_POR					decimal(15,2),
VL_MAX_PARCELAS					int,
QTD_ITENS						int,
BL_CATEGORIA_DIARIA				bool,
DS_DESCRICAO					varchar(1000)
);
create table tb_categoria(
ID_CATEGORIA					int primary key auto_increment,
NM_CATEGORIA					varchar(100)
);
create table tb_produto_categoria(
ID_PRODUTO_CATEGORIA			int primary key auto_increment,
ID_CATEGORIA					int,
ID_PRODUTO						int,
   
foreign key (ID_CATEGORIA) references  tb_categoria (ID_CATEGORIA),
foreign key (ID_PRODUTO) references tb_produto(ID_PRODUTO)
);


create table tb_produto_imagem(
ID_PRODUTO_IMAGEM				int primary key auto_increment,
ID_PRODUTO 						INT,
DS_IMAGEM						varchar(800),
foreign key (ID_PRODUTO) references tb_produto(ID_PRODUTO)
);


create table tb_marca(
ID_MARCA				int primary key auto_increment,
NM_MARCA						varchar(100)
);

create table tb_produto_marca(
ID_PRODUTO_MARCA			int primary key auto_increment,
ID_MARCA					int,
ID_PRODUTO						int,
   
foreign key (ID_MARCA) references  tb_marca (ID_MARCA),
foreign key (ID_PRODUTO) references tb_produto(ID_PRODUTO)
);


create table tb_cor(
ID_COR							int primary key auto_increment,
DS_COR							varchar(100)
);
create table tb_produto_cor(
ID_PRODUTO_COR			int primary key auto_increment,
ID_COR					int,
ID_PRODUTO						int,
   
foreign key (ID_COR) references  tb_cor (ID_COR),
foreign key (ID_PRODUTO) references tb_produto(ID_PRODUTO)
);


create table tb_tamanho(
ID_TAMANHO				int primary key auto_increment,
DS_TAMANHO						varchar(5)
);

create table tb_produto_tamanho(
ID_PRODUTO_TAMANHO				int primary key auto_increment,
ID_TAMANHO						int,
ID_PRODUTO						int,
   
foreign key (ID_TAMANHO) references  tb_tamanho (ID_TAMANHO),
foreign key (ID_PRODUTO) references tb_produto(ID_PRODUTO)
);


create table tb_usuario(
ID_USUARIO						int primary key auto_increment,
NM_USUARIO						varchar(150),
DT_NASCIMENTO					date,
DS_RG							varchar(100),
DS_CPF							varchar(100),
ds_email                        varchar(100),
ds_senha                        varchar(100),
bt_trocar           boolean,
cod_reset           varchar(50),
dt_expiracao_cod  datetime
);


create table tb_usuario_endereco (
	id_usuario_endereco			int primary key auto_increment,
	id_usuario					int,
    ds_referencia               varchar(200),
    ds_cep						varchar(50),
    ds_logradouro				varchar(400),
    ds_bairro					varchar(100),
    ds_cidade					varchar(100),
    ds_estado					varchar(100),
    ds_numero					varchar(100),
    ds_complemento				varchar(200),
    foreign key (id_usuario) references tb_usuario (id_usuario)
);

create table tb_cupom (
	id_cupom			int primary key auto_increment,
    cod_cupom			varchar(200),
    vl_cupom			decimal(15,2),
    qtd_restante		int
);

create table tb_pedido (
	id_pedido			int primary key auto_increment,
    id_usuario			int,
    id_usuario_endereco	int,
    id_cupom			int,
    dt_pedido			datetime,
    cod_nota_fiscal		varchar(200),
    tp_frete			varchar(200),
    vl_frete			decimal(15,2),
    ds_status			varchar(200),
    tp_pagamento		varchar(200),
    foreign key (id_usuario) references tb_usuario (id_usuario),
    foreign key (id_usuario_endereco) references tb_usuario_endereco (id_usuario_endereco),
    foreign key (id_cupom) references tb_cupom (id_cupom)
);

create table tb_pedido_item (
	id_pedido_item		int primary key auto_increment,
    id_pedido			int,
    id_produto			int,
    qtd_itens			int,
    vl_produto			decimal(15,2),
    foreign key (id_pedido) references tb_pedido (id_pedido),
    foreign key (id_produto) references tb_produto (id_produto)
);

create table tb_produto_avaliacao(
ID_PRODUTO_AVALIACAO			int primary key auto_increment,
ID_USUARIO						int,
ID_PRODUTO						int,
VL_AVALIACAO					int,
DS_AVALIACAO_PRODUTO			varchar(200),
foreign key (ID_USUARIO) references tb_usuario (ID_USUARIO),
foreign key (ID_PRODUTO) references tb_produto (ID_PRODUTO)
);

create table tb_usuario_favorito(
ID_USUARIO_FAVORITO				int primary key auto_increment,
ID_USUARIO						int,
ID_PRODUTO						int,
foreign key (ID_USUARIO) references tb_usuario (ID_USUARIO),
foreign key (ID_PRODUTO) references tb_produto (ID_PRODUTO)
);

create table tb_login(
ID_LOGIN						int primary key auto_increment,
ID_USUARIO						int,
DS_EMAIL						varchar(100),
DS_SENHA						varchar(100),
foreign key (ID_USUARIO) references tb_usuario (ID_USUARIO)

);

create table tb_pagamento_pix(
ID_PAGAMENTO_PIX				int primary key auto_increment,
ID_PEDIDO						int,
DS_CHAVE_PIX					varchar(200),
foreign key (ID_PEDIDO) references tb_pedido (ID_PEDIDO)
);

create table tb_pagamento_cartao(
ID_PAGAMENTO_CARTAO				int primary key auto_increment,
ID_PEDIDO						int,
NM_CARTAO						varchar(150),
NR_CARTAO						int,
DT_VENCIMENTO					date,
COD_SEGURANCA					varchar(15),
NR_PARCELAS						int,
DS_FORMA_PAGAMENTO				varchar(30),
foreign key (ID_PEDIDO) references tb_pedido (ID_PEDIDO)
);

create table tb_boleto(
ID_BOLETO						int primary key auto_increment,
ID_PEDIDO						int,
IMG_BOLETO						varchar(800),
DS_CODIGO						varchar(100),
foreign key (ID_PEDIDO) references tb_pedido (ID_PEDIDO)
);

create table tb_admin(
ID_FUNCIONARIO					int primary key auto_increment,
NM_FUNCIONARIO					varchar(200),
DS_IMAGEM						varchar(200),
NM_AREA_ATUANTE					varchar(50),
DT_ATUA_DESDE					date,
DT_NASCIMENTO					date
);


create table tb_admin_login(
ID_ADMIN_LOGIN					int primary key auto_increment,
ID_FUNCIONARIO					int,
DS_LOGIN						varchar(50),
DS_SENHA						varchar(50),
foreign key (ID_FUNCIONARIO) REFERENCES tb_admin (ID_FUNCIONARIO)
);

create table tb_carrossel_principal(
ID_CARROSSEL_PRINCIPAL					int primary key auto_increment,
DS_IMG									varchar(800)
);

show tables;