/*fields:
  name
  lastName
  birthday (esto es de tipo Date o lo puden poner como String)
  email
  address
  hireDate (esto es de tipo Date o lo puden poner como String)
  password
  telephone
  dui
  isssNumber
  isVerified (esto es booleano)*/

  import { Schema, model } from "mongoose";

  const employeesSchema = new Schema({
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
      address: {
        type: String
      },
      hireDate: {
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
      isssNumber: {
        type: String
      },
      isVerified: {
          type: Boolean
      }
  }, {
      timestamps: true,
      strict: false
  })
  
  export default model("Employees", employeesSchema);