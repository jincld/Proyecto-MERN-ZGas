//importar todo de la librería de express
import express from "express";
import router from "./routes/products.js";
//crear constante que es igual a la libreria que importé y se ejecuta
const app = express();

//usar un archivo json
app.use (express.json());

//rutas para crud
app.use("/api/products", router)
//importo esta constante para usar express en todos lados
export default app;