-- CREATE DATABASE perntasks;

-- CREATE TABLE tasks(
--     task_id SERIAL PRIMARY KEY,
--     description VARCHAR(255)
-- );

CREATE TABLE users(
    user_id SERIAL PRIMARY KEY,
	email VARCHAR ( 255 ) UNIQUE NOT NULL,
	password VARCHAR ( 50 ) NOT NULL,
    created_date TIMESTAMP NOT NULL
)