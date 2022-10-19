use db_restaurant;

insert into category (id, name) values (1, 'pizza');
insert into category (id, name) values (2, 'dessert');
insert into category (id, name) values (3, 'pasta');
insert into category (id, name) values (4, 'vine');
insert into category (id, name) values (5, 'coffee');

insert into user (id, first_name, last_name, username, password) values (1, 'Marko', 'Markovic', 'mare', 'mare123');
insert into user (id, first_name, last_name, username, password) values (2, 'Dusan', 'Babic', 'duka', 'duka123');
insert into user (id, first_name, last_name, username, password) values (3, 'Filip', 'Jankovic', 'file', 'file123');
insert into user (id, first_name, last_name, username, password) values (4, 'Dejan', 'Micic', 'deki', 'deki123');

insert into menu_item (id, name, price, category_id) values (1, 'pizza romana', 5.5, 1);
insert into menu_item (id, name, price, category_id) values (2, 'panna cotta', 3.5, 2);
insert into menu_item (id, name, price, category_id) values (3, 'pizza viennese', 6.0, 1);
insert into menu_item (id, name, price, category_id) values (4, 'cannelloni al fomo', 6.0, 3);
insert into menu_item (id, name, price, category_id) values (5, 'tiramisu', 4, 2);
insert into menu_item (id, name, price, category_id) values (6, 'chianti conte lorenzo sormani (0.175)', 3.5, 4);
insert into menu_item (id, name, price, category_id) values (7, 'chianti conte lorenzo sormani (0.75)', 10, 4);
insert into menu_item (id, name, price, category_id) values (8, 'pizza capricciosa', 5.5, 1);
insert into menu_item (id, name, price, category_id) values (9, 'pizza quattro stagioni', 7.0, 1);
insert into menu_item (id, name, price, category_id) values (10, 'cappucino', 1.5, 5);
insert into menu_item (id, name, price, category_id) values (11, 'pizza margherita', 6.0, 1);
insert into menu_item (id, name, price, category_id) values (12, 'frappe', 2, 5);
insert into menu_item (id, name, price, category_id) values (13, 'ice coffee', 2, 5);