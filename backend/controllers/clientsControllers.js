//este archivo tiene los métodos del CRUD (SELECT CREATE UPDATE DELETE)

//crear array de funciones
const clientsControllers = {};
import modelClients from "../models/clients.js";

//SELECT
clientsControllers.getClients = async (req, res) => {
    const clients = await modelClients.find()
    res.json(clients);
};

//INSERT
clientsControllers.insertClients = async (req, res) => {
    const{name, lastName, birthday, email, password, telephone, dui, isVerified} = req.body;
    const newClient = new modelClients({name, lastName, birthday, email, password, telephone, dui, isVerified})
    await newClient.save()
    res.json({message: "Client saved"});
};

//DELETE
clientsControllers.deleteClients = async (req, res) => {
    await modelClients.findByIdAndDelete(req.params.id)
    res.json({message: "Client deleted"});
};

//UPDATE
clientsControllers.updateClients = async (req, res) => {
    const {name, lastName, birthday, email, password, telephone, dui, isVerified} = req.body;
    const updateClients = await modelClients.findByIdAndUpdate(req.params.id, {name, lastName, birthday, email, password, telephone, dui, isVerified})
    res.json({message: "Client updated successfully"});
};

export default clientsControllers;