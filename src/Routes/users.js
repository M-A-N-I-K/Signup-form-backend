import express from "express"
import { usermodel } from "../Models/users.js";

const router = express.Router();

router.post("/signup", async (req, res) => {
    try {

        const { firstName, middleName, lastName, organizationName, gstNumber, address, mobileNumber, emailId } = req.body;
        const user = await usermodel.findOne({ emailId });

        if (user) {
            return res.json({ message: "User already exists!" })
        }

        const newUser = new usermodel({ firstName, middleName, lastName, organizationName, gstNumber, address, mobileNumber, emailId });
        await newUser.save();
        res.json({ message: "User registered successfully" });
    }
    catch (err) {
        res.status(400).send(err);
    }
})

export { router as userRouter };