import { Sequelize } from "sequelize-typescript";
import { config } from "./config/config";

export const sequelize = new Sequelize({
  username: config.username,
  password: config.password,
  database: config.database,
  host: config.host,
  port: config.port,

  dialect: "postgres",
  storage: ":memory:",
});

/*

pass: master password : postgres
user: master username : postgres
name: instance : postgres
port: default : 5432
host: endpoint : 


export const sequelize = new Sequelize(
  "postgres://postgres:postgres@database-1.c6eyc2xkmulu.us-east-1.rds.amazonaws.com:5432/database-1"
);

*/