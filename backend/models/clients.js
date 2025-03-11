/*fields:
name
  lastName
  birthday
  email
  password
  telephone
  dui
  isVerified*/

import { Schema, model } from "mongoose";

const clientsSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    lastName: {
        type: String,
        require: true
    },
    birthday: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
    },
    telephone: {
        type: String
    },
    dui: {
        type: String
    },
    isVerified: {
        type: Boolean
    }
}, {
    timestamps: true,
    strict: false
})

export default model("Clients", clientsSchema);