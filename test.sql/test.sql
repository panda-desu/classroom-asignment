insert into employees
values (
        1,
        '1999-11-12',
        'Indra',
        'U',
        'F',
        '2023-01-01'
    ), (
        2,
        '2003-01-30',
        'Dalai',
        'B',
        'M',
        '2023-02-02'
    ), (
        3,
        '2005-08-10',
        'Sed-Erdene',
        'O',
        'M',
        '2023-02-02'
    );

select * from employees where emp_no<100;

create table
    user(
        id INT auto_increment,
        phone int unique,
        email varchar (255),
        primary key (id)
    )
create table
    category (
        id int UNSIGNED,
        name VARCHAR(255),
        slug VARCHAR(255) UNIQUE,
        description TEXT,
        productCount int UNSIGNED DEFAULT 0,
        createdAt DATETIME,
        PRIMARY KEY (id)
    )
insert INTO
    category (name, slug, createdAt) value("Shoes", "shoes", now());

ALTER Table
    category DROP column description
ALTER TABLE category
ADD
    COLUMN imageUrl varchar(500);

ALTER Table category DROP COLUMN imageUrl;

ALTER TABLE category ADD COLUMN imageUrl varchar(500) AFTER slug;

ALTER Table category modify COLUMN imageUrl varchar(200);

ALTER Table
    category CHANGE COLUMN imageAddress imageUrl varchar(200);