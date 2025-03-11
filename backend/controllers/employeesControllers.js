//este archivo tiene los métodos del CRUD (SELECT CREATE UPDATE DELETE)

//crear array de funciones
const employeesControllers = {};
import modelEmployees from "../models/employees.js";

//SELECT
employeesControllers.getEmployees = async (req, res) => {
    const employees = await modelEmployees.find()
    res.json(employees);
};

//INSERT
employeesControllers.insertEmployees = async (req, res) => {
    const{name, lastName, birthday, email, address, hireDate, password, telephone, dui, isssNumber, isVerified} = req.body;
    const newEmployee = new modelEmployees({name, lastName, birthday, email, address, hireDate, password, telephone, dui, isssNumber, isVerified})
    await newEmployee.save()
    res.json({message: "Employee saved"});
};

//DELETE
employeesControllers.deleteEmployees = async (req, res) => {
    await modelEmployees.findByIdAndDelete(req.params.id)
    res.json({message: "Employee deleted"});
};

//UPDATE
employeesControllers.updateEmployees = async (req, res) => {
    const {name, lastName, birthday, email, address, hireDate, password, telephone, dui, isssNumber, isVerified} = req.body;
    const updateEmployees = await modelEmployees.findByIdAndUpdate(req.params.id, {name, lastName, birthday, email, address, hireDate, password, telephone, dui, isssNumber, isVerified})
    res.json({message: "Employee updated successfully"});
};

export default employeesControllers;