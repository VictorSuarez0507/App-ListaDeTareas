import React from "react";
import { useState } from "react";
import { VStack, Flex, Input, Button, Textarea, Text } from "@chakra-ui/react";
import useCustom from "../hooks/useCutom";

const Task = () => {
    const { newTask, handleChange, handleCreateTask } = useCustom();
    const [error, setError] = useState ({
        title: undefined,
      });
   
    const handleTask = (e) => {
        const value = e.target.value
        newTask.title = value;
        if (value.length <= 3) {
            setError({
                ...error,
                title: "La tarea debe tener mas de 3 caracteres"   
            });  
        } else {
            setError({
              ...error,
              title: "",
            });
        }
    }
    const formValid = Object.keys(error).every(
        (key) => error[key] === "")

    return (
        <VStack>
            <form onSubmit={handleCreateTask}>
                <Flex>
                    <Input
                        type="text"
                        id="tasks"
                        name="title"
                        value={newTask.title}
                        placeholder="Añade una tarea" 
                        bg="purple.400"
                        border="1px solid wheat"
                        size="lg"
                        onChange={handleTask}
                        required
                    />
                    <Button 
                        type="submit" 
                        bg="purple.700" 
                        colorScheme="purple" 
                        size="lg" 
                        variant='solid'
                        isDisabled={!formValid}
                        >
                        Agregar
                    </Button>     
                </Flex>
                <Text role="alert">{error.title}</Text>
                <Flex>
                    <Textarea rows="4" cols="10"
                        type="text"
                        id="description"
                        name="description"
                        value={newTask.description}
                        placeholder= "Descripcion de la tarea"
                        bg="purple.200"
                        border="1px solid wheat"
                        size="lg" 
                        mb="50px"
                        onChange={handleChange}
                    />
                </Flex>
            </form>
        </VStack>
    );
};

export default Task;



