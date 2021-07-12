-- parent folder (/sql) needs to be on the same directory level as /src and /dist in order to be accessible --

DROP TABLE IF EXISTS examples;
DROP TABLE IF EXISTS documents;

CREATE TABLE examples (
	id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
	example_name VARCHAR(512) NOT NULL,
	example_body VARCHAR(512) NOT NULL
);

CREATE TABLE documents (
	id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
	title TEXT NOT NULL,
	body JSON NOT NULL
);
