create database tccDB;


USE tccDB;

create table tb_produto (
ID_PRODUTO						int primary key auto_increment,
ID_CATEGORIA					int,
ID_PRODUTO_TAMANHO				int,
ID_PRODUTO_MARCA				int,
ID_PRODUTO_IMAGEM				int,
ID_PRODUTO_COR					int,
NM_PRODUTO						varchar(200),
VL_PRECO_DE						int,
VL_PRECO_POR					int,
VL_MAX_PARCELAS					int,
QTD_ITENS						int,
BL_CATEGORIA_DIARIA				bool,
DS_DESCRICAO					varchar(1000)	
);

create table tb_produto_categoria(
ID_PRODUTO_CATEGORIA			int primary key auto_increment,
ID_CATEGORIA					int,
ID_PRODUTO						int,
foreign key (ID_CATEGORIA) references tb_categoria (ID_CATEGORIA)
);

create table tb_categoria(
ID_CATEGORIA					int primary key auto_increment,
NM_CATEGORIA					varchar(100),
IMG_CAPA						varchar(100),
BL_DESTAQUE						boolean
);

create table tb_produto_imagem(
ID_PRODUTO_IMAGEM				int primary key auto_increment,
ID_PRODUTO						int,
IMG_PRODUTO						varchar(100),
foreign key (ID_PRODUTO) references tb_produto (ID_PRODUTO)
);

create table tb_produto_marca(
ID_PRODUTO_MARCA				int primary key auto_increment,
ID_PRODUTO 						int,
NM_MARCA						varchar(100),
foreign key (ID_PRODUTO) references tb_produto (ID_PRODUTO)
);

create table tb_produto_cor(
ID_PRODUTO_COR					int primary key auto_increment,
ID_PRODUTO						int,
DS_COR							varchar(6),
foreign key (ID_PRODUTO) references tb_produto (ID_PRODUTO)
);

create table tb_produto_tamanho(
ID_PRODUTO_TAMANHO				int primary key auto_increment,
ID_PRODUTO						int,
DS_TAMANHO						varchar(5),
foreign key (ID_PRODUTO) references tb_produto (ID_PRODUTO)
);

create table tb_pedido(
ID_PEDIDO						int primary key auto_increment,
ID_USUARIO						int,
ID_USUARIO_ENDERECO				int,
ID_CUPOM						int,
DT_PEDIDO						date,
COD_NOTAL_FISCAL				varchar(200),
TP_FRETE						varchar(200),
VL_FRETE						int,
NR_NUMERO_PEDIDO				varchar(50),
DS_STATUS						varchar(50),
TP_PAGAMENTO					varchar(50),
foreign key (ID_USUARIO) references tb_usuario (ID_USUARIO),
foreign key (ID_USUARIO_ENDERECO) references tb_usuario_endereco (ID_USUARIO_ENDERECO),
foreign key (ID_CUPOM) references tb_cupom (ID_CUPOM)					
);

create table tb_pedido_item(
ID_PEDIDO_ITEM					int primary key auto_increment,
ID_PEDIDO 						int,
ID_PRODUTO						int,
VL_PRODUTO						int,
foreign key (ID_PEDIDO) references tb_pedido (ID_PEDIDO)
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

create table tb_usuario(
ID_USUARIO						int primary key auto_increment,
NM_USUARIO						varchar(150),
DT_NASCIMENTO					date,
DS_RG							int(15),
DS_CPF							int(15)
);

create table tb_usuario_endereco(
ID_USUARIO_ENDERECO				int primary key auto_increment,
ID_USUARIO						int,
DS_LOGRADOURO					varchar(100),
DS_CEP							varchar(15),
DS_RUA							varchar(100),
DS_BLOCO						varchar(10),
NR_NUMERO						varchar(5),
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

create table tb_cupom(
ID_CUPOM						int primary key auto_increment,
COD_CUPOM						varchar(35),
VL_CUPOM						int,
DT_CRIADO						date,
DT_EXPIRACAO					date
);

create table tb_boleto(
ID_BOLETO						int primary key auto_increment,
ID_PEDIDO						int,
IMG_BOLETO						varchar(150),
DS_CODIGO						varchar(100),
foreign key (ID_PEDIDO) references tb_pedido (ID_PEDIDO)
);

create table tb_admin(
ID_FUNCIONARIO					int primary key auto_increment,
NM_FUNCIONARIO					varchar(200),
IMG_IMAGEM						blob,
NM_AREA_ATUANTE					varchar(50),
DT_ATUA_DESDE					date,
DT_NASCIMENTO					date
);

create table tb_admin_login(
ID_ADMIN_LOGIN					int primary key auto_increment,
ID_FUNCIONARIO					int,
DS_LOGIN						varchar(50),
DS_SENHA						varchar(50),
foreign key (ID_FUNCIONARIO) references tb_admin (ID_FUNCIONARIO)
);

create table tb_carrossel_principal(
ID_CARROSSEL_PRINCIPAL			int primary key auto_increment,
ID_FUNCIONARIO					int,
DS_IMG							blob,
foreign key (ID_FUNCIONARIO) references tb_admin (ID_FUNCIONARIO)
);

show tables