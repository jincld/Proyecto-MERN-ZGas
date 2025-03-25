import EmployeeModel from "../models/employees.js";
import bcryptjs from "bcryptjs";
import jsonwebtoken from "jsonwebtoken";
import {config} from "../src/config.js";

const registerEmployeesController = {};

registerEmployeesController.register = async (req, res) =>{
    const{name, lastName, birthday, email, address, hireDate, password, telephone, dui, isssNumber, isVerified} = req.body;

    try{
        //verificar si el empleado ya existe
        const existEmployee = await EmployeeModel.findOne({email})
        if(existEmployee) {
            return res.json({message: "El empleado ya existe"})
        }

        //Encriptar contraseña
        const passwordHash = await bcryptjs.hash(password, 10)

        //Guardar el nuevo empleado
        const newEmployee = new EmployeeModel ({name, lastName, birthday, email, address, hireDate, password: passwordHash, telephone, dui, isssNumber, isVerified})

        await newEmployee.save();

        //TOKEN!!!!!!!!!

        jsonwebtoken.sign(
            //Qué voy a guardar
            {id: newEmployee._id},
            //Cuál es el secreto
            config.JWT.secret,
            //Cuándo expira
            {expiresIn: config.JWT.expiresIn},
            //Función flecha
            (error, token) => {
                if(error) console.log(error)
                    res.cookie("authToken", token)
                res.json({message: "Empleado registrado"})
            }
        )
    
    } catch (error) {
        console.log(error)
    }
};

export default registerEmployeesController;