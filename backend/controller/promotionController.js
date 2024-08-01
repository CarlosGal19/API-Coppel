import Promotion from "../model/promotion.model.js";

export default function Test() {
    console.log("Promotion controller is working");
}

Promotion.create({
    productId: 1,
    discount: 10,
    finalPrice: 900,
    expiration: new Date().setDate(new Date().getDate() + 30)
}).then(() => {
    console.log("Promotion created");
}).catch(() => {
    console.log("Promotion not created");
});
