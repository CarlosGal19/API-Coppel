import { Schema, model } from "mongoose";

const promotionSchema = new Schema({
    productId: {
        type: String,
        required: true
    },
    discount: {
        type: Number,
        required: true
    },
    finalPrice: {
        type: Number,
        required: true
    },
    expiration: {
        type: Date,
        required: true
    }
})

export default model("Promotion", promotionSchema);
