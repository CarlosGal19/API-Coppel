import Employee from "../model/employee.model.js";

export default function Test() {
    console.log("Employee controller is working");
}

Employee.create({
    name: "Jane",
    last_name: "Doe",
    phone: "987654321",
    payroll: 1000
}).then(() => {
    console.log("Employee created");
}).catch(() => {
    console.log("Employee not created");
})
