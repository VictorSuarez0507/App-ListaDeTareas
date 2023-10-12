const { Schema, model } = require("mongoose");
const mongoose = require("mongoose")

const tasksSchema = new Schema ( {
    title: { type: String, required: true},
    description: {type: String, required: false},
    completed: {type: Boolean, default: false},
    user:{ type: mongoose.Schema.Types.ObjectId, ref: "usersModel"}
},{
    versionKey: false // Para quitar las versiones en el documento
});

const tasksModel = model("tasks", tasksSchema);

module.exports = tasksModel;