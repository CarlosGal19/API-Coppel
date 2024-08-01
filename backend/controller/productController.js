import Product from "../model/product.model.js";

export default function Test() {
    console.log("Product controller is working");
}

Product.create({
    name: "Laptop",
    description: "Acer Aspire 5",
    price: 1000
}).then(() => {
    console.log("Product created");
}).catch(() => {
    console.log("Product not created");
})
