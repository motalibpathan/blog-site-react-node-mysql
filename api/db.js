import mysql from "mysql";

export const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_HOST,
  password: process.env.DB_HOST,
  database: process.env.DB_HOST,
});
