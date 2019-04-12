CREATE TABLE IF NOT EXISTS `empleados` (
  `id` int(11) NOT NULL,
  `id_naci` int(11) NOT NULL,
  `id_docu` int(11) NOT NULL,
  `documento` int(20) NOT NULL,
  `nombre`   varchar(40) NOT NULL,
  `apellido` varchar(40) NOT NULL,
  `email`   varchar(60) NOT NULL,
  `status`  tinyint(1) NOT NULL DEFAULT '1',
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
);

ALTER TABLE `empleados` ADD PRIMARY KEY (`id`);
ALTER TABLE `empleados` MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

CREATE TABLE IF NOT EXISTS `list_options` (
  `id` int(5) NOT NULL,
  `parentId`  int(5),
  `description` varchar(100),
  `status`  tinyint(1) NOT NULL DEFAULT '1',
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
);

ALTER TABLE `list_options` ADD PRIMARY KEY (`id`);
ALTER TABLE `list_options` MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

insert into list_options (parentId, description) values (null,'document');
insert into list_options (parentId, description) values (null,'nationality');
insert into list_options (parentId, description) values (null,'countries');
insert into list_options (parentId, description) values (null,'states');
insert into list_options (parentId, description) values (null,'cities');

insert into list_options (parentId, description) values (1,'Claro');
insert into list_options (parentId, description) values (1,'Tuenti');
insert into list_options (parentId, description) values (1,'Perosnal');

insert into list_options (parentId, description) values (2,'Cedula');
insert into list_options (parentId, description) values (2,'Pasaporte');
insert into list_options (parentId, description) values (2,'D.N.I.');


insert into list_options (parentId, description) values (3,'Venezolano');
insert into list_options (parentId, description) values (3,'Argentino');
insert into list_options (parentId, description) values (3,'Norte Americano');
insert into list_options (parentId, description) values (3,'Canadiense');

insert into list_options (parentId, description) values (4,'Venezuela');
insert into list_options (parentId, description) values (4,'Argentina');


insert into list_options (parentId, description) values (17,'Miranda');
insert into list_options (parentId, description) values (17,'Distrito Capital');
insert into list_options (parentId, description) values (17,'Carabobo');
insert into list_options (parentId, description) values (17,'Zulia');
insert into list_options (parentId, description) values (17,'Aragua');


insert into list_options (parentId, description) values (18,'CABA');
insert into list_options (parentId, description) values (18,'STA FE');



insert into list_options (parentId, description, category) values (17,'Miranda');
insert into list_options (parentId, description) values (17,'Distrito Capital');
insert into list_options (parentId, description) values (17,'Carabobo');
insert into list_options (parentId, description) values (17,'Zulia');
insert into list_options (parentId, description) values (17,'Aragua');

  
ALTER TABLE `list_options` ADD `categoryId` int(11)  AFTER parentId
ALTER TABLE `list_options`  CHANGE category categoryId int(11);


insert into list_options (parentId, description, categoryId) values (20,'Caracas',6);
insert into list_options (parentId, description, categoryId) values (23,'Maracay',6);
insert into list_options (parentId, description, categoryId) values (23,'La Victoria',6);
insert into list_options (parentId, description, categoryId) values (23,'La Cagua',6);
insert into list_options (parentId, description, categoryId) values (21,'Valencia',6);
insert into list_options (parentId, description, categoryId) values (22,'Maracaibo',6);
insert into list_options (parentId, description, categoryId) values (19,'Los Teques',6);
insert into list_options (parentId, description, categoryId) values (19,'San Antonio de los Altos',6);

CREATE TABLE IF NOT EXISTS `empleados` (
  `id` int(5) NOT NULL,
  `codigo`  int(5) NOT NULL,
  `nacimientoId` int(5) NOT NULL,
  `tipodocumentoId` int(5) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `documento` int(12) NOT NULL,
  `apellido` varchar(100) NOT NULL,
  `email` varchar(50) NOT NULL,  
  `status`  tinyint(1) NOT NULL DEFAULT '1',
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE `empleados` ADD PRIMARY KEY (`id`);
ALTER TABLE `empleados` MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

 
    insert into empleados (codigo,nacimientoId,tipodocumentoId,documento,nombre,apellido,email) values (40,13,  10 , 13380196,  'Jeancarlos',  'Cartaya',     'jeancarlo.cartaya@gmail.com');