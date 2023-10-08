import { Center, Box, Flex, Text, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function Tasks() {
    return (
        <Center className='container'>
            <Box w="90%" >
                <Flex mt="50"  justifyContent="center">
                    <Text as='b' fontSize='30px'>Todo List App</Text>  
                </Flex>
                <Flex mt="5" justifyContent="center">
                    <Text fontSize='22px'>
                        Para el correcto uso de esta aplicación debe registrarse e inicar sesión 
                    </Text>
                </Flex>
                <Flex mt="5" justifyContent="center" >
                    <Button mx="20" mb="5">
                        <Link to="/login">Iniciar Sesion</Link>
                    </Button>
                    <Button mx="20" mb="5">
                        <Link to="/register">Registrarse</Link>
                    </Button>
                </Flex>  
                <Flex justifyContent="center">
                    <img src="public/images/ToDoList.png"></img>
                </Flex>
            </Box>     
        </Center>
      );
  }