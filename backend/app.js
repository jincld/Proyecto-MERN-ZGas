//importar todo de la librería de express
import express from "express";
import products from "./routes/products.js";
import clients from "./routes/clients.js";
import employees from "./routes/employees.js";
import offices from "./routes/offices.js";
import reviews from "./routes/reviews.js"
import evaluations from "./routes/evaluations.js";
import registerEmployeesRoutes from "./routes/registerEmployees.js";
import loginRoute from "./routes/login.js";
import logoutRoute from "./routes/logout.js";
import registerClients from "./routes/registerClients.js";
import cookieParser from "cookie-parser";
//crear constante que es igual a la libreria que importé y se ejecuta
const app = express();

//que acepte archivos json
app.use (express.json());
//que acepte cookies
app.use(cookieParser());

//rutas para crud
app.use("/api/products", products)
app.use("/api/clients", clients)
app.use("/api/employees", employees)
app.use("/api/offices", offices)
app.use("/api/reviews", reviews)
app.use("/api/evaluations", evaluations)
//Registro de empleados
app.use("/api/registerEmployees", registerEmployeesRoutes)
//creación de login
app.use("/api/login", loginRoute)
//cerrar sesión
app.use("/api/logout", logoutRoute)
//registrar clientes
app.use("/api/registerClients", registerClients)

//importo esta constante para usar express en todos lados
export default app;