//define los métodos del CRUD que va a tener mi ruta /api/products
import express from "express";
import officesControllers from "../controllers/officesControllers.js";

const router = express.Router();

router.route("/")
.get(officesControllers.getOffices)
.post(officesControllers.insertOffices);

router.route("/:id")
.put(officesControllers.updateOffices)
.delete(officesControllers.deleteOffices);

export default router;