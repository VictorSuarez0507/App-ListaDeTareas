import { useNavigate } from "react-router-dom";
import { useState } from "react";
import swal from 'sweetalert';

function useLogin() {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const redireccion = useNavigate();

  const handleChangeUser = (e) => {
    const { name, value } = e.target;
    setUserData((data) => ({
      ...data,
      [name]: value,
    }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/users/login', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
      });
      if (response.ok) {
        console.log("Autenticacion exitosa");
        const data = await response.json();
        localStorage.setItem("userId", data.id);
        localStorage.setItem("token", data.token);
        swal({
          title: "Bienvenido!",
          text: "Autenticacion exitosa",
          icon: "success",
          timer: "2000"
        });
        setTimeout(() => {
          redireccion("/user/apptodo");
        }, 2000); 
      } else {
        swal({
          title: "Error de autenticacion",
          text: "Usuario o contraseña incorrecto",
          icon: "error",
          timer: "2000"
        });
        console.error('Error de autenticación');
      }    
    } catch (error) {
      console.error("Error de conexión", error);
    }
  };

  const handleCloseSession = () => {
    localStorage.clear();
    swal({
      title: "Sesion cerrada",
      icon: "success",
      timer: "2000"
    });
    setTimeout(() => {
      redireccion("/login");
    }, 2000);
  };

  return {
    userData,
    handleChangeUser,
    handleLogin,
    handleCloseSession
  };
}

export default useLogin;