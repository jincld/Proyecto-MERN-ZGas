//este archivo tiene los métodos del CRUD (SELECT CREATE UPDATE DELETE)

//crear array de funciones
const officesControllers = {};
import modelOffices from "../models/offices.js";

//SELECT
officesControllers.getOffices = async (req, res) => {
    const offices = await modelOffices.find()
    res.json(offices);
};

//INSERT
officesControllers.insertOffices = async (req, res) => {
    const{name, address, telephone, schedule} = req.body;
    const newOffice = new modelOffices({name, address, telephone, schedule})
    await newOffice.save()
    res.json({message: "Office saved"});
};

//DELETE
officesControllers.deleteOffices = async (req, res) => {
    await modelOffices.findByIdAndDelete(req.params.id)
    res.json({message: "Office deleted"});
};

//UPDATE
officesControllers.updateOffices = async (req, res) => {
    const {name, address, telephone, schedule} = req.body;
    const updateOffice = await modelOffices.findByIdAndUpdate(req.params.id, {name, address, telephone, schedule})
    res.json({message: "Office updated successfully"});
};

export default officesControllers;