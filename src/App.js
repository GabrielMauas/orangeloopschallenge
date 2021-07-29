import React from 'react';
import { VStack, Heading, IconButton, Text, Flex, HStack, Input, Button, useColorMode } from '@chakra-ui/react';
import { FaSun, FaMoon } from 'react-icons/fa';
// import useColorMode from '@chakra-ui/react';


function App() {

  const { colorMode, toggleColorMode } = useColorMode();


  return (
    <VStack w="100%" p="10" h="100vh">
        <Flex mb="4" direction="row" justify="space-between" w="100%">
          <Heading>Dark Mode Challenge</Heading>
          <IconButton bg="white" icon={ colorMode === 'light' ? <FaSun /> : <FaMoon /> } color="black" onClick={toggleColorMode} />
        </Flex>
        <Flex direction={["row", "column"]}>
            <Text mb="4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sodales turpis pulvinar sapien ultricies, sed suscipit lectus luctus. Donec commodo mollis orci, ut ultrices nunc commodo nec. Mauris feugiat auctor tellus, lobortis fringilla purus fermentum ut. Nulla aliquam blandit dolor et lobortis. Ut vehicula, risus sed eleifend ullamcorper, dolor leo dapibus turpis, sed luctus mauris sapien a tortor. Duis pulvinar, justo quis dictum accumsan, sem leo maximus metus, vel aliquet nibh nibh at nulla. Cras et libero pharetra, pretium mi nec, rhoncus nisi. Nulla ut leo ac elit pharetra interdum in quis elit. Morbi ultricies, justo at posuere viverra, nibh mauris porttitor diam, ac sollicitudin mi nisl sed ante. Sed vestibulum vehicula purus vitae sagittis. Nulla interdum pellentesque elit, ut blandit urna maximus in.</Text>
            
            <Text>Nam est dolor, vehicula in risus vel, fringilla vehicula lacus. Curabitur feugiat tempor consectetur. Aliquam ut euismod sem. Aenean laoreet maximus ex sed ullamcorper. Vestibulum nec aliquet orci. Praesent consequat rutrum mi non viverra. Ut in porttitor libero. Vivamus fringilla est et leo porttitor gravida. Fusce lacinia ut dui eget condimentum. Nulla vitae posuere eros, sed porttitor libero. Etiam purus est, mattis non libero finibus, facilisis luctus elit. Aliquam erat volutpat.</Text>
        </Flex>
        <Flex direction="column" w="80%">
          <Input type="text" variant="filled" my="4" bg="gray.200"/>
          <Input type="email" variant="filled" bg="gray.200"/>
          <HStack mt="4" justify="flex-end" spacing="10">
            <Button variant="link" colorScheme="red">Exit</Button>
            <Button variant="solid" colorScheme="green">Save</Button>
          </HStack>
        </Flex>
    </VStack>
  );
}

export default App;
