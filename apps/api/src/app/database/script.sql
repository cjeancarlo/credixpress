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