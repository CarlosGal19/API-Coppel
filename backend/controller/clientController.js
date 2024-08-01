import Client from "../model/client.model.js";

export default function Test() {
    console.log("Client controller is working");
}

Client.create({
    name: "John",
    last_name: "Doe",
    phone: "123456789",
    email: "johndoe@gmail.com"
}).then(() => {
    console.log("Client created");
}).catch(() => {
    console.log("Client not created");
});
