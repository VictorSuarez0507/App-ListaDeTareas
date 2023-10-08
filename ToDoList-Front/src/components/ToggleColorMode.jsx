import { Button, Center, Text, useColorMode } from "@chakra-ui/react";

const ToggleColorMode = () => {
    const {colorMode, toggleColorMode} = useColorMode();
    return (
        <Center>
        <Button 
            onClick={() => toggleColorMode()}
            position="relative"
            top=" 1px"
            variant='solid'
            marginTop="10px"
            alignContent="center"
            mx="20" mb="5" fontSize="2xl"
        >        
            {colorMode === "dark" ? <i className="fa-regular fa-sun"></i> :
             <i className="fa-solid fa-moon"></i>}       
        </Button>
        </Center>
    );
};

export default ToggleColorMode;