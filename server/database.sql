-- CREATE DATABASE perntasks;

-- CREATE TABLE tasks(
--     task_id SERIAL PRIMARY KEY,
--     description VARCHAR(255)
-- );

-- CREATE TABLE users(
--     user_id SERIAL PRIMARY KEY,
-- 	user_email VARCHAR ( 255 ) UNIQUE NOT NULL,
-- 	user_pw VARCHAR ( 255 ) NOT NULL
-- );

--add column and define a foreign key

-- ALTER TABLE tasks
-- ADD COLUMN task_owner INTEGER,
-- ADD FOREIGN KEY (task_owner) REFERENCES users (user_id);
-- 