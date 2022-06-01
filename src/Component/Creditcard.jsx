import {
  Button,
  Center,
  FormControl,
  FormLabel,
  GridItem,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  Grid,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { FaCreditCard } from "react-icons/fa";
import { BsCalendarMonth } from "react-icons/bs";
import {
  AiFillCalendar,
  AiOutlineLock,
  AiOutlineUserAdd,
} from "react-icons/ai";

const Creditcard = (props) => {
  const [form, setform] = useState({
    name: "",
    c1: "",
    c2: "",
    c3: "",
    c4: "",
    cvv: "",
    month: "",
    year: "",
  });

  const handlechange = (e) => {
    let { name, value } = e.target;
    setform({
      ...form,
      [name]: value,
    });
  };
  console.log(form);

  const submitdata = () => {
    props.setdata(form);
    console.log(form,'kopkjoj')
  };

  return (
    <div style={{ padding: "20px" }}>
      <Text fontSize="2xl">Payment details</Text>

      <FormControl>
        <FormLabel fontSize="xs" pt="5">
          CARDHOLDER NAME
        </FormLabel>

        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            children={<Icon as={AiOutlineUserAdd} color="pink.400" />}
          />

          <Input
            variant="flushed"
            focusBorderColor="pink.400"
            type="text"
            name="name"
            placeholder="John Smith"
            onChange={handlechange}
          />
        </InputGroup>

        <FormLabel fontSize="xs" pt="5">
          CARD NUMBER
        </FormLabel>
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            children={<Icon as={FaCreditCard} color="#F6465F" />}
          />
          <Input
            variant="flushed"
            focusBorderColor="pink.400"
            type="text"
            onChange={handlechange}
            placeholder="4444"
            name="c1"
            minlength="4"
            maxlength="4"
          />
          <Input
            variant="flushed"
            focusBorderColor="pink.400"
            type="text"
            onChange={handlechange}
            placeholder="9999"
            name="c2"
            minlength="4"
            maxlength="4"
          />
          <Input
            variant="flushed"
            focusBorderColor="pink.400"
            type="text"
            onChange={handlechange}
            placeholder="9999"
            name="c3"
            minlength="4"
            maxlength="4"
          />
          <Input
            variant="flushed"
            focusBorderColor="pink.400"
            type="text"
            onChange={handlechange}
            placeholder="9999"
            name="c4"
            minlength="4"
            maxlength="4"
          />
        </InputGroup>
      </FormControl>

      <Grid templateColumns="repeat(3, 1fr)" columnGap={8} width="100">
        <GridItem colSpan={1}>
          <FormControl>
            <FormLabel fontSize="xs" pt="5">
              EXPIRY MONTH
            </FormLabel>
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                children={<Icon as={BsCalendarMonth} color="#F6465F" />}
              />
              <Input
                width="100px"
                variant="flushed"
                focusBorderColor="pink.400"
                type="text"
                name="month"
                onChange={handlechange}
                placeholder="08"
                maxLength='2'
                minLength='2'
              />
            </InputGroup>
          </FormControl>
        </GridItem>
        <GridItem colSpan={1}>
          <FormControl>
            <FormLabel fontSize="xs" pt="5">
              EXPIRY YEAR
            </FormLabel>
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                children={<Icon as={AiFillCalendar} color="#F6465F" />}
              />
              <Input
                width="100px"
                variant="flushed"
                focusBorderColor="pink.400"
                onChange={handlechange}
                type="text"
                name="year"
                placeholder="2020"
                maxLength='4'
                minLength='4'
              />
            </InputGroup>
          </FormControl>
        </GridItem>
        <GridItem colSpan={1}>
          <FormControl>
            <FormLabel fontSize="xs" pt="5">
              CVV
            </FormLabel>
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                children={<Icon as={AiOutlineLock} color="#F6465F" />}
              />
              <Input
                width="100px"
                variant="flushed"
                onChange={handlechange}
                focusBorderColor="pink.400"
                type="text"
                placeholder="145"
                name="cvv"
                maxLength='3'
                minLength='3'
              />
            </InputGroup>
          </FormControl>
        </GridItem>
      </Grid>

      <Center mt={"20px"}>
        <Text display={"flex"}>
          Payment amount: &nbsp; <Text color={"#F6465F"}>12 300</Text>
        </Text>
      </Center>

      <Center py={5}>
        <Button
          px={"50px"}
          border="2px"
          borderColor="orange.500"
          backgroundColor={"#F6465F"}
          colorScheme="red"
          onClick={submitdata}
        >
          Pay
        </Button>
      </Center>
    </div>
  );
};

export default Creditcard;
