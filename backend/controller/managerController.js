import Manager from "../model/manager.model.js";

export default function Test() {
    console.log("Manager controller is working");
}

Manager.create({
    name: "John",
    last_name: "Doe",
    phone: "123456789",
    payroll: 2000
}).then(() => {
    console.log("Manager created");
}).catch(() => {
    console.log("Manager not created");
})
