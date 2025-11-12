create table todo.todolist
(
    id serial primary key not null,
    libelle varchar(100) not null,
    done bool not null, 
    rang varchar(20) not null
);


-- insert new todo
insert into todo.todolist(libelle,done,rang) VALUES 
('Learn javascript courses',false,'1'),
('Sleep for 1 hour',false,'2'),
('30 minutes sport',false,'3'),
('Complete Todo App side project',false,'4')

select max(rang) from todo.todolist

select (max(rang::integer)+1) as max from todo.todolist

-- delete items
delete from todo.todolist
where id = 1; 

-- update checkbox
update todo.todolist 
set done = true
where id = 1; 

-- clear completed
delete from todo.todolist
where done = true; 

-- count item left
select count(*) from todo.todolist 

-- select all items
select id,libelle,done,rang::integer from todo.todolist order by rang asc

-- select active items
SELECT * FROM todo.todolist WHERE done = false

-- select compteted items
select * from todo.todolist where done = true;


CREATE TABLE todo.utilisateur
(
  id_user serial primary key NOT NULL,
  username character varying(100),
  passwords character varying(20)
);

insert into todo.utilisateur(username,passwords)values
('Developpeur','@T9000');


select * from todo.utilisateur 
where  username = 'Developpeur'
and passwords = '@T9000';





