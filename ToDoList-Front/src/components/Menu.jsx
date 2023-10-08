import { Box, Center, Button, Flex } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import ToggleColorMode from "./ToggleColorMode";

function Menu() {
  
  return (
    <Center >
      <Box 
        bg="purple.300"
        borderRadius="15px"
        marginTop="40px"
        w="90%"   
      >
        <ToggleColorMode />
        <Flex direction="row"  ml="10" mt="5" justifyContent="center"> 
          <Button mx="20" mb="5" variant="ghost" fontSize="2xl">
            <Link to="/home">Home</Link>
          </Button>
          <Button mx="20" variant="ghost" fontSize="2xl">
            <Link to="/tasks">APP</Link>
          </Button>
          <Button mx="20" variant="ghost" fontSize="2xl">
            <Link to="/about">About US</Link>
          </Button>          
        </Flex>
      </Box>
    </Center>
  );
  
}

export default Menu;