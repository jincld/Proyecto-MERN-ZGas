//define los métodos del CRUD que va a tener mi ruta /api/products
import express from "express";
import clientsControllers from "../controllers/clientsControllers.js";

const router = express.Router();

router.route("/")
.get(clientsControllers.getClients)
.post(clientsControllers.insertClients);

router.route("/:id")
.put(clientsControllers.updateClients)
.delete(clientsControllers.deleteClients);

export default router;