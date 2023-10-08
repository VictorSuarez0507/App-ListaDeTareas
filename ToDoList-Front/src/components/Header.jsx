import { Flex, Text } from "@chakra-ui/react";

export default function Header() {
    return(
        <Flex mt="30" w="90%" justifyContent="center">
            <Text as='b' fontSize='45px'>ToDo List</Text>
        </Flex>
    );
}