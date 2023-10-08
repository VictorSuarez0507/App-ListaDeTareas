import { Center, Box, Flex, Text, UnorderedList, ListItem } from "@chakra-ui/react";

export default function AboutUs() {

    return (
        <Center className='container'>
            <Box w="90%" >
                <Flex mt="50"  justifyContent="center">
                    <Text as='b' fontSize='30px'>Acerca de ToDo List</Text>  
                </Flex>
                <Flex mt="5" justifyContent="center" >
                    <Text>
                        Las principales funcionalidades de la aplicacion son agregar, editar, eliminar 
                        y almacenar en memoria las tareas, permitiendo así al usuario llevar un control
                        y registro de sus tareas pendientes y realizadas.
                    </Text>
                </Flex>  
                <Flex mt="5" justifyContent="center">
                    <Text fontSize='22px'>
                        Para el desarrollo de esta aplicación se utilizaron las siguientes tecnologías
                    </Text>
                </Flex>
                    <UnorderedList >
                        <ListItem listStyleType="none" >React Router Dom</ListItem>
                        <ListItem listStyleType="none" >React</ListItem>
                        <ListItem listStyleType="none">HTML</ListItem>
                        <ListItem listStyleType="none">JavaScript</ListItem>
                    </UnorderedList>
            </Box>     
        </Center>
      );  
  }