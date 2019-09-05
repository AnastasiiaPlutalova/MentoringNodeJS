CREATE TABLE Users (
  id VARCHAR(100) PRIMARY KEY,
  login VARCHAR(100) not null,
  password VARCHAR(100) not null,
  age integer not null,
  deleted_at DATE,
  created_at DATE,
  updated_at DATE
);


INSERT INTO Users (id, login, password, age)
VALUES ('5126aaed-5aa2-42e8-b49c-d12c1a64ffb9', 'login1', 'password1', 10);

INSERT INTO Users (id, login, password, age)
VALUES ('aa9fab4f-9a28-4747-b731-b06ad768ff9a', 'login2', 'password2', 20);

INSERT INTO Users (id, login, password, age)
VALUES ('076e3942-8c5c-43b2-87d2-0554a55dbbe8', 'login3', 'password3', 30);

INSERT INTO Users (id, login, password, age)
VALUES ('076e3942-8c5c-43b2-87d2-0554a55dbbe7', 'login4', 'password4', 40);


CREATE TABLE Groups (
  id VARCHAR(100) PRIMARY KEY,
  name VARCHAR(100) not null,
  permissions VARCHAR(100) not null
);

INSERT INTO Groups (id, name, permissions)
VALUES ('92c670ba-fc69-4484-84cf-85846490100c', 'group1', 'READ,WRITE');

CREATE TABLE UserGroup (
  user_id VARCHAR(100) not null,
  group_id VARCHAR(100) not null
);

INSERT INTO UserGroup (user_id, group_id)
VALUES ('5126aaed-5aa2-42e8-b49c-d12c1a64ffb9', '92c670ba-fc69-4484-84cf-85846490100c');
