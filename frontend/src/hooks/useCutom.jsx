import { useState, useEffect } from "react";
import swal from 'sweetalert';

function useCustom() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState({
    title: "",
    description: "",
    user: "", 
  });

  useEffect(() => {
    const usuarioid = localStorage.getItem("userId");
    if (usuarioid) {
      setNewTask((data) => ({
        ...data,
        user: usuarioid,
      }));
    }
    getTasks(); 
  }, [tasks]); 

  const getTasks = async () => {
    const userId = localStorage.getItem('userId');
      try {
        const response = await fetch(`http://localhost:3000/tasks/user/${userId}`, {
          method: 'GET',
          headers: {
          'Content-Type': 'application/json'
          },
        });      
        if (response.ok) {         
          const result = await response.json();
          setTasks(result);
        } else {
          console.error("Error al obtener las tareas");
        }
      } catch (error) {
        console.error('Error de conexión:', error);
      }
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewTask((data) => ({
      ...data,
      [name]: value,
    }));
  };

  const handleCreateTask = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3000/tasks', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(newTask)
      });
      if (response.ok) {
        console.log("Tarea agregada con éxito");
        setTimeout(() => {
          setNewTask({
            title: "",
            description: "",
            user: newTask.user
          });
        }, 1000);
      } else {
        console.error("Error al Crear Tarea:");
      } 
    } catch (error) {
      console.error("Error de conexión", error);
    }
  };
    
  const handleDeleteTask = async (taskId) => {
    try {
      swal({
        title: "¿Quieres eliminar la tarea?",
        text: "¡ Una vez eliminado, no podrás recuperar este archivo! ",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {          
          fetch(`http://localhost:3000/tasks/${taskId}`, {
            method: 'DELETE',
            headers: {
            'Content-Type': 'application/json'
            }
          }).then(console.log("Tarea eliminada correctamente"))
          swal("Se elimino la tarea", {
            icon: "success",
            timer: "2000"
          });
        } 
      }).catch((error) => console.error("Error al eliminar la tareas:", error))
    } catch (error) {
      console.error("Error de conexión", error);
    }
  };

  const handleCompleteTask = async (taskId) => {
      try {
        fetch(`http://localhost:3000/tasks/${taskId}`, {
            method: 'PATCH',
            headers: {
            'Content-Type': 'application/json'
            }
        })
          .then(console.log("Cambió el estado de la tarea"))
          .catch((error) => console.error("Error al cambiar estado de la tareas:", error))
      } catch (error) {
        console.error("Error de conexión", error);
      }
  };

  return {
    tasks,
    newTask,
    handleChange,
    handleCreateTask,
    handleDeleteTask,
    handleCompleteTask,
  };
  
}

export default useCustom;
  
  
     
   

   

    

