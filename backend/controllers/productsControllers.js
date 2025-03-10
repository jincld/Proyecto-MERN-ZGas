//este archivo tiene los métodos del CRUD (SELECT CREATE UPDATE DELETE)

//crear array de funciones
const productsControllers = {};
import productsModel from "../models/products.js";

//SELECT
productsControllers.getProducts = async (req, res) => {
    const products = await productsModel.find()
    res.json(products);
};

//INSERT
productsControllers.insertProducts = async (req, res) => {
    const{name, description, price, stock} = req.body;
    const newProduct = new productsModel({name, description, price, stock})
    await newProduct.save()
    res.json({message: "Product saved"});
};

//DELETE
productsControllers.deleteProducts = async (req, res) => {
    await productsModel.findByIdAndDelete(req.params.id)
    res.json({message: "Product deleted"});
};

//UPDATE
productsControllers.updateProducts = async (req, res) => {
    const {name, description, price, stock} = req.body;
    const updateProducts = await productsModel.findByIdAndUpdate(req.params.id, {name, description, price, stock}, {new: true})
    res.json({message: "Product updated successfully"});
};

export default productsControllers;