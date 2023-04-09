import express from "express";
import cors from "cors"
import { userRouter } from "./src/Routes/users.js";

const port = 3000;
const app = express();
import connectDb from "./Config/dbconnects.js"

connectDb();

app.use(express.json());
app.use(cors());

app.use("/auth", userRouter);

app.listen(3000, () => {
    console.log(`App listening on port ${port}`);
})
