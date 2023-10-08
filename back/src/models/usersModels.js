const { Schema, model } = require("mongoose");

const usersSchema = new Schema ( {
    name: { type: String, required: true, trim:true},
    email: {type: String, required: true, trim: true, unique: true},
    password: {type: String, required: true}
},{
    versionKey: false // Para quitar las versiones en el documento
});

const usersModel = model("users", usersSchema);

module.exports = usersModel;