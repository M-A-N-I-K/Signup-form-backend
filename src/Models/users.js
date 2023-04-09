import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    firstName: { type: String },
    middleName: { type: String },
    lastName: { type: String },
    organizationName: { type: String },
    gstNumber: { type: String, unique: true, minLength: 15, maxLength: 15 },
    address: { type: String },
    mobileNumber: { type: Number, unique: true, min: 1000000000, max: 9999999999 },
    emailId: { type: String, unique: true }
})

export const usermodel = mongoose.model("users", userSchema); 