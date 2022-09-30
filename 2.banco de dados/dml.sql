USE tccDB;

insert into tb_admin_login(DS_LOGIN, DS_SENHA)
  values ('admin@gmail.com', 'admin123');


   select ID_ADMIN_LOGIN	  id,
    DS_LOGIN	    login,
    DS_SENHA        senha
    from tb_admin_login
     where DS_LOGIN ='admin@gmail.com'
      and DS_SENHA ='admin123';
  
  select * from tb_admin_login; 

   insert into tb_usuario(NM_USUARIO,DT_NASCIMENTO , DS_RG, DS_CPF, ds_email, ds_senha )		
    value('marco', '2012-02-11', '52.693.127-30', '464.136.198-30','teste@gmail.com','vasco123');
    

     select ID_USUARIO	 id,
            ds_email    email,
            ds_senha    senha
	from tb_usuario 
    where ds_email  =  'jonatasprado445@gmail.com'
      and  ds_senha =  'vasco';
      
      insert into tb_cor(DS_COR)
      values ('preto');
      
        insert into tb_tamanho(DS_TAMANHO)
      values ('GX');
      
        insert into tb_categoria(NM_CATEGORIA)
      values ('');
      
              insert into tb_marca(NM_MARCA)
      values ('ADIDAS')