import { Schema, model } from "mongoose";

const workerSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    payroll: {
        type: Number,
        required: true
    }
})

export default workerSchema;
