import { Box, Center, Flex, Text } from "@chakra-ui/react";

export default function Home() {
    return (
      <Center>
        <Box w="90%"  >    
            <Flex mt="100"  justifyContent="center">
              <Text as='b' fontSize='50px'>Bienvenido a ToDoList </Text>  
            </Flex>
            <Flex mt="5" justifyContent="center" >
              <Text>
                ToDo List es una aplicación que te permite crear una lista de tareas, 
                donde una vez creada puedes completar, editar y eliminar cada una de estas. 
                Adicionalmente, puedes guardarlas en memoria, es decir, que si actualizas o 
                cierras la aplicación tu información no se pederá, al volver a abrir la app 
                tus tareas seguiran listadas en el estado en que las tenias previamente guardadas.
              </Text>
            </Flex>          
        </Box>
      </Center>
    ); 
  }