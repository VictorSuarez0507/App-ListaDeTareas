import React from "react";
import { useState } from "react";
import useRegister from "../hooks/useRegister"
import { Box, Button, Center, Flex, FormControl, FormLabel, Input, Text, VStack } from "@chakra-ui/react";


function RegisterUser() {
  const { handleChange, handleRegistro, newUser } = useRegister();

  const [error, setError] = useState ({
    password: undefined,
  });

  const handlePassword = (e) => {
    const value = e.target.value
    newUser.password = value;
    if (value.length < 6) {
        setError({
            ...error,
            password: "La contraseña debe tener 6 o más caracteres"   
        });  
    } else {
        setError({
          ...error,
          password: "",
        });
    }
}
  const formValid = Object.keys(error).every(
      (key) => error[key] === "")

  return (
    <Center>
      <Box w="90%">
        <Flex mt="50"  justifyContent="center">
          <Text as='b' fontSize='30px' color="purple.900">Registrarse</Text>  
        </Flex>
        <form onSubmit={handleRegistro}>
          <VStack>
            <Box w='50%' justifyContent="center" alignContent="center">
              <FormControl isRequired>
                <FormLabel htmlFor="nombres">
                  Nombre completo             
                </FormLabel>       
                <Input
                  type="text"
                  name="name"
                  value={newUser.name}
                  onChange={handleChange}
                />
              </FormControl>
            </Box>
            <Box w='50%'>
              <FormControl isRequired>
                <FormLabel htmlFor="email" >
                  Correo electrónico
                </FormLabel>
                <Input
                  type="email"
                  name="email"
                  textTransform="lowercase"
                  value={newUser.email}
                  onChange={handleChange}
                />
              </FormControl>
            </Box>
            <Box w='50%' >
              <FormControl isRequired>
                <FormLabel htmlFor="password" >
                  Contraseña
                </FormLabel>
                <Input
                  type="password"
                  name="password"
                  value={newUser.password}
                  onChange={handlePassword}
                />
              </FormControl>
              <Text role="alert">{error.password}</Text>
            </Box>
          </VStack>
          <Flex justifyContent="center" mt="10">
            <Button 
              type="submit" 
              colorScheme="purple"
              isDisabled={!formValid}
            >
              Registrarse
            </Button>
          </Flex>
        </form>
        </Box>
    </Center>
  );
}

export default RegisterUser;
            
