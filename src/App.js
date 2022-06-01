import React, { useState } from 'react';
import "./App.css";
import Form from "./Component/Form";
import Creditcard from "./Component/Creditcard";
import {  Flex, Heading, VStack } from "@chakra-ui/react";

function App() {
  const [data, setdata] = useState({name:'enter name',cvv:'...',month:'m',year:'y',c1:'xxxx',c2:'xxxx',c3:'xxxx',c4:'xxxx'})
  return (
    <>
        <Flex h="100" py="20">
          <VStack w="full" >
            <Heading mt={'100px'} >
              <Form data={data} />
            </Heading>
          </VStack>
          <VStack w="full">
            <Creditcard  setdata={setdata} />
          </VStack>
        </Flex>
    </>
  );
}

export default App;
