import { useState } from "react";
import { useNavigate } from "react-router-dom";
import swal from 'sweetalert';

function useRegister() {
  const [newUser, setNewUser] = useState({   
    email: "",
    name: "",
    password: ""
  });
  const redireccion = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewUser((data) => ({
      ...data,
      [name]: value,
    }));
  };

  const handleRegistro = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/users/', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(newUser)
      });
      if (response.ok) {
        console.log("Usuario registrado existosamente");
        swal("Usuario registrado existosamente", {
          icon: "success",
          timer: "2000"
        });
        setTimeout(() => {
          setNewUser({
            name: "",
            email: "",
            password: "",
          });
          redireccion("/login");
        }, 2000); 
      } else {
        swal("El correo ya se encuentra registrado", {
          icon: "error",
          timer: "2000"
        });
        console.error("Error al Registrarse:");
      }    
    } catch (error) {
      console.error("Error de conexión", error);
    }
  };

  return {
    handleChange,
    handleRegistro,
    newUser,
  };
}

export default useRegister;