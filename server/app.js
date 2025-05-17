import express, { json } from "express";
import cors from "cors";
const app = express();

app.use(json());
app.use(
  cors({
    origin: ["http://localhost:5173"],
    credentials: true, // if you're using cookies/auth
  })
);

export default app;
