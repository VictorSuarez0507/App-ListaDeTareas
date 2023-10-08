const bcrypt = require("bcrypt");
const usersModels = require("../models/usersModels");



const createUser = async (req, res) => {
    const {  name,email, password }= req.body;      
    const result = new usersModels({name,email,password});
    const emailExist = await usersModels.findOne({"email": email});
    if (emailExist) {
        return res.status(400).json({ Error: "Este correo ya está registrado"});
    }
    if (password.length < 6) {
        return res.status(400).json({ Error: "La contraseña debe tener al menos 6 caracteres"});
    } 
    bcrypt.hash(password,8 , function(err, hash) {
        if (err) {
            console.log("Error al encriptar la contraseña");
        }
        return result.password = hash;
    });
    
    try {
        const userSave = await result.save(); 
        res.status(200).json({mensaje:"Usuario registrado con éxito", userSave});
        return  await userSave.save();    
    } catch {
        res.status(500).send("Ocurrio un error al crear el usuario");
    }
};  

 module.exports = {
    createUser
 }