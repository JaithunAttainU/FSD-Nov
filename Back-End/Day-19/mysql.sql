show databases;

create database BookMyShow;
use BookMyShow;

show tables;

/*DDL - CREATE, DRO, ALTER(ADD,DROP, MODIFY)*/
create table USER(
   userId int,
   name varchar(255) NOT NULL,
   emailId varchar(255),
   dateOfBirth date,
   password varchar(255) NOT NULL,
   mobile varchar(255),
   UNIQUE(emailId),
   PRIMARY KEY(userId)
);

alter table USER ADD country varchar(100) not null;
alter table USER DROP country;
alter table USER MODIFY mobile int;

drop table USER;


/*DML - INSERT, SELECT, UPDATE, DELETE*/
select * from USER;

select name, emailId from USER;

select * from USER where password="123" AND name="Akash";
select * from USER where not userId>3;
select * from USER where not password="123";
select * from USER where password="123" ORDER BY name desc LIMIT 2;

insert into USER (userId, name, emailId, password) values (1, "Siddiqui", "sid@gmail.com", "123");
insert into USER (userId, name, emailId, password) values (2, "Subhankar", "subhankar@gmail.com", "subh123");
insert into USER (userId, name, emailId, password) values (3, "Akash", "akash@gmail.com", "123");
insert into USER (userId, name, emailId, password) values (4, "Zeeshan", "Zeed@gmail.com", "123");
insert into USER (userId, name, emailId, password) values (5, "Aman", "aman@gmail.com", "123");

insert into USER values (6, "Rajnish", "raj@gmail.com", "54678743");

update USER set mobile ="1234" where userId=4;

delete from USER where userId=1;




use sakila;

select * from actor;
desc actor;

select LOWER(first_name) as 'First Name', last_name AS 'Last Name' from actor;

select CONCAT(first_name," ", last_name) as 'Actor Name' from actor;

select COUNT(*) as 'Actor Count' from actor;


select * from actor where last_name like "%AS%";
select * from film ORDER BY length desc;

select count(*) from film where rental_duration=5;

select avg(length) from film;

select last_name, count(last_name) as 'Count' from actor GROUP BY last_name HAVING Count>2 order by Count;

/*
SELECT column_names
FROM table_name
WHERE/GROUP BY HAVING
ORDER BY
LIMIT
*/

select * from film where not release_year=2006;
select * from film where rental_duration in (6, 7);

delete from film where rental_duration>7;

show databases;

use sakila;

delete from film where rental_duration>6;

create database BookMyShow;
use BookMyShow;

show tables;

/*DDL - CREATE, DRO, ALTER(ADD,DROP, MODIFY)*/
create table USER(
   userId int,
   name varchar(255) NOT NULL,
   emailId varchar(255),
   dateOfBirth date,
   password varchar(255) NOT NULL,
   mobile varchar(255),
   UNIQUE(emailId),
   PRIMARY KEY(userId)
);

create table MOVIES(
   movieId int,
   name varchar(255) NOT NULL,
   language varchar(100),
   duration int,
   PRIMARY KEY(movieId)
);

create table TICKETS(
   ticketId int auto_increment,
   seatNo int NOT NULL,
   price float,
   userId int,
   movieId int,
   PRIMARY KEY(ticketId),
   foreign key(userId) references USER(userId),
   foreign key(movieId) references MOVIES(movieId)
);

ALTER table TICKETS MODIFY ticketId int auto_increment;

insert into movies(movieId, name, language) values (1, "PS2", "Hindi");

insert into tickets(seatNo, price, userId, movieId) values (23, 300, 2, 1);
delete from USER where userId>2;

select * from TICKETS;

use sakila;

select * from film where rental_duration>=3 and rental_duration<6;

select * from film where rental_duration BETWEEN 3 and 6;

delete from movies where movieId=1;

