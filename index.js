import express from "express";
import cors from "cors";
import { config } from "dotenv";

import connectDB from "./backend/config/db.js";

import testClient from "./backend/controller/clientController.js";
import testEmployee from "./backend/controller/employeeController.js";
import testManager from "./backend/controller/managerController.js";
import testProduct from "./backend/controller/productController.js";
import testPromotion from "./backend/controller/promotionController.js";

const app = express();

app.use(cors());
app.use(express.json());
config();

await connectDB();

app.get("/", (req, res) => {
    res.send("Hello World");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

testClient();
testEmployee();
testManager();
testProduct();
testPromotion();
