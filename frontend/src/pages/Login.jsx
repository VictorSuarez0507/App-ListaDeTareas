import React from "react";
import { Center, Box, Flex, Text, Button, Input, UnorderedList, InputGroup, InputRightElement} from "@chakra-ui/react";
import useLogin from "../hooks/useLogin";
import { Link } from "react-router-dom";


export default function Login() {
    const { userData, handleChangeUser, handleLogin } = useLogin();

    const [show, setShow] = React.useState(false)
    const handleClick = () => setShow(!show)

    return (       
        <Center>
            <Box w="90%" >
                <form onSubmit={handleLogin}
                >
                    <Flex mt="50"  justifyContent="center">
                        <Text as='b' fontSize='30px'>Todo List App</Text>  
                    </Flex>
                    <Flex mt="5" justifyContent="center">
                        <UnorderedList>
                            <Input type="email"
                                id="email"
                                placeholder="name@example.com"
                                textTransform="lowercase"
                                name="email"
                                value={userData.email}
                                onChange={handleChangeUser} 
                            />
                            <InputGroup>
                                <Input type={show ? 'text' : 'password'}
                                    id="password"
                                    placeholder="Password"
                                    name="password"
                                    value={userData.password}
                                    onChange={handleChangeUser}
                                />
                                 <InputRightElement width='4.5rem'>
                                    <Button h='1.75rem' size='sm' onClick={handleClick}>
                                        {show ? <i className="fa-sharp fa-solid fa-eye-slash"></i> : 
                                            <i className="fa-sharp fa-solid fa-eye"></i>}
                                    </Button>
                                </InputRightElement>
                            </InputGroup>
                        </UnorderedList>
                    </Flex>
                    <Flex mt="5" justifyContent="center" >
                        <Button 
                            type="submit" 
                            colorScheme='purple' 
                            isDisabled={userData.email.length === 0 || userData.password.length < 6}>
                            Iniciar sesión</Button>
                    </Flex>  
                    <Flex mt="5" justifyContent="center">
                        ¿No tienes una cuenta? {'   '}
                        <Link to="/register" mt="5"> 
                            <Text color={"blueviolet"}> Regístrate </Text> 
                        </Link>    
                    </Flex>
                 </form>
            </Box>     
        </Center>
      );
  }