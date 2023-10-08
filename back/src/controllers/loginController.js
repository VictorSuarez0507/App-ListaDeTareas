const bcrypt = require("bcrypt");
const usersModels = require("../models/usersModels");
const generateToken = require("../helpers/generateToken");

const loginUser = async (req, res) => {
    
  try {
    const { email, password } = req.body; 
    if (!email) {
      return res.status(400).json({Error: "El campo 'email' es obligatorio.",
      });
    }
    const user = await usersModels.findOne({ email });
    if (!user) {
      return res.status(400).json({Error: 'Usuario ingresado no esta registrado'});
    }

    bcrypt.compare(password, user.password, function(err, result) {   
        if (err){
            return res.status(400).json({Error: 'No es posible validar la contraseña'});
        }    
        if (result) {
            const token = generateToken();
            const {id, name} = user;
            res.status(200).json({Message: 'Inicio de sesión exitoso', 
              token,
              email,
              id,
              name
            });  
        } else {
            return res.status(400).json({Error: 'Contraseña incorrecta'});
        }  
    }); 

  } catch (error) {
    console.log(error);
    res.status(500).json({Error: 'Error en el servidor'});
  }
};

module.exports = loginUser;