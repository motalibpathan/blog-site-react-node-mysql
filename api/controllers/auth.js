import bcrypt from "bcryptjs";
import { db } from "../db.js";

export const register = (req, res, next) => {
  // CHECK EXISTING USER
  const q = "SELECT * FROM users WHERE email = ? or username = ?";
  db.query(q, [req.body.email, req.body.name], (err, data) => {
    if (err) return res.json(err);
    if (data.length) return res.status(409).json("User already exists");

    // hash the password and create a user
    const salt = bcrypt.genSalt(10);
    const hash = bcrypt.hash(req.body.password, salt);

    const q = "INSERT INTO user (`username`, `email`, `password`) VALUES (?)";
    const values = [req.body.username, req.body.email, hash];

    db.query(q, [values], (err, data) => {
      if (err) return res.json(err);
      return res.status(200).json("User has been created");
    });
  });
};
export const login = (req, res, next) => {};
export const logout = (req, res, next) => {};
