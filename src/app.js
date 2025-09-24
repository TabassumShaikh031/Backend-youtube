import express, { urlencoded } from "express";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

//to fetch data
app.use(express.json({ limit: "16kb" }));
//to encode url supoose converting space to %20 Ensure the user’s input is preserved exactly
app.use(urlencoded({ extended: true, limit: "16kb" }));
//to store static files in public folder
app.use(express.static("public"));
//to perform crud operation on browser cookies from server to set or acess user browser cookie (secure cookies)
app.use(cookieParser());
export { app };
