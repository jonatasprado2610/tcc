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