import React, { useEffect, useState } from "react";
import { Container, Flex, Button, Input, Textarea, FormLabel, FormControl } from "@chakra-ui/react";

function EditTask ({ taskId, onCancelEdit }) {

  const [taskData, setTaskData] = useState({
    title: "",
    description: ""
  });
 
  useEffect(() => {   
 
      fetch(`http://localhost:3000/tasks/${taskId}`, {
        method: 'GET',
        headers: {
        'Content-Type': 'application/json'
        }
      }).then((response) => response.json())
        .catch((error) => console.error("Error al obtener los datos de la tarea:", error))
        .then((response) => {
          setTaskData(response) 
        });

  }, [taskId]);
  
  const handleUpdateTask = async (e) => {
    e.preventDefault();
    try {
      fetch (`http://localhost:3000/tasks/${taskId}`, {
        method: 'PUT',
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(taskData)
      }).then((response) => response.json())
        .catch((error) => console.error("Error al actualizar la tarea:", error))
        .then(() => {
          console.log("Tarea actualizada correctamente")
          onCancelEdit();
        });
    } catch (error) {
      console.error("Error al actualizar la tarea:", error);
    }
  };
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setTaskData((data) => ({
      ...data,
      [name]: value,
    }));
  };

  return (
    <Container 
      ml="3" w="97%" mb="5"
      alignContent="center" 
      border="1px solid black"  
      bg="purple.200"
      borderRadius="15px"
    >
      <form onSubmit={handleUpdateTask}>
        <Flex>
          <FormControl>
            <FormLabel htmlFor="title">
              Título
            </FormLabel>
            <Input
              type="text"
              name="title"
              value={taskData.title}
              onChange={handleChange}
            />
          </FormControl>
        </Flex>
        <Flex>
          <FormControl>
            <FormLabel htmlFor="des">
              Descripción de la tarea
            </FormLabel>
            <Textarea
              className="form-control"
              name="description"
              rows="3"
              value={taskData.description}
              onChange={handleChange}
            />
          </FormControl>
        </Flex>
        <Flex className="d-flex justify-content-center gap-3">
          <Button
            type="submit"
            color="#088A08" 
            variant='outline' 
            border="none"                   
          >
            <i className="fa-solid fa-check"></i>
          </Button>
          <Button
            type="button"
            color="#FF0000" 
            variant='outline' 
            border="none"
            onClick={onCancelEdit}
          >
            <i className="fa-solid fa-xmark"></i>
          </Button>
        </Flex>
      </form>
    </Container>
  );
}

export default EditTask;