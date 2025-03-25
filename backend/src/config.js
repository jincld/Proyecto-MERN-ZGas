//export const config = {
    //PORT: 4000,
   // MONGO_URI: "mongodb://localhost:27017/ZGASDB" //se creará la base si no existe; si usaramos mongoAtlas aquí iría la url de conexión en la nube
//}

import dotenv from "dotenv";
dotenv.config();

export const config = {
    db: {
        URI: process.env.MONGO_URI
    },
    server: {
        port: process.env.PORT
    },
    JWT: {    
        secret: process.env.JWK_SECRET,
        expiresIn: process.env.JWK_EXPIRES
    },
    emailAdmin: {
        email: process.env.ADMIN_EMAIL,
        password: process.env.ADMIN_PASSWORD
    }
}