//importar todo de la librería de express
import express from "express";
import products from "./routes/products.js";
import clients from "./routes/clients.js";
import employees from "./routes/employees.js";
import offices from "./routes/offices.js";
import reviews from "./routes/reviews.js"
import evaluations from "./routes/evaluations.js";
//crear constante que es igual a la libreria que importé y se ejecuta
const app = express();

//usar un archivo json
app.use (express.json());

//rutas para crud
app.use("/api/products", products)
app.use("/api/clients", clients)
app.use("/api/employees", employees)
app.use("/api/offices", offices)
app.use("/api/reviews", reviews)
app.use("/api/evaluations", evaluations)
//importo esta constante para usar express en todos lados
export default app;