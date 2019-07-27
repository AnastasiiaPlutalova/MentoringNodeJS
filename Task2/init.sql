CREATE TABLE Users (
  id VARCHAR(100) PRIMARY KEY,
  name VARCHAR(100) not null
);

INSERT INTO Users (id, name)
VALUES ('1', 'User 1');

INSERT INTO Users (id, name)
VALUES ('2', 'User 2');

INSERT INTO Users (id, name)
VALUES ('3', 'User 3');
