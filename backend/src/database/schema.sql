CREATE DATABASE myaccounts;

\c myaccounts

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE IF NOT EXISTS accounts (
  id UUID NOT NULL UNIQUE DEFAULT uuid_generate_v4(),
  name VARCHAR NOT NULL,
  zipcode VARCHAR NOT NULL,
  email VARCHAR NOT NULL,
  username VARCHAR NOT NULL UNIQUE,
  password VARCHAR NOT NULL
);

