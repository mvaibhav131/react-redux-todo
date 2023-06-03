import { Box, FormControl, FormLabel, Input,Button, Center, Heading } from '@chakra-ui/react';
import React, { useState } from 'react'

const Home = () => {
  const [value1,setValue1]=useState('');
  const [value2,setValue2]=useState('');
  const [sum,setSum]=useState('');

  const value1Change=(e)=>{
    setValue1(e.target.value);
  }

  const value2Change=(e)=>{
    setValue2(e.target.value);
  }
  const formsSubmit=(e)=>{
    e.preventDefault();
    const Number1=parseFloat(value1);
    const Number2=parseFloat(value2);
    setSum(Number1+Number2);
  }
  
  return (
    <>
  <Heading as='h1' size='2xl' color={'green'} textAlign={'center'} ml={-7} noOfLines={1}>
    Sum Calculator
  </Heading>
  <Center>
  <Box w="35%" h="500px" fontSize={25} fontWeight="extrabold" color='blue' p={9} border={'2px solid black'}  >
  <FormControl isRequired m={3}>
  <FormLabel>First Value</FormLabel>
  <Input type="number" value={value1} onChange={value1Change} placeholder='Enter First Value' />
  <FormLabel>Second Value</FormLabel>
  <Input type="number" value={value2} onChange={value2Change} placeholder='Enter Second Value' />
  <Box m={6}>
  <Button w={300} m={3} p={7} colorScheme='blue' onClick={formsSubmit} >Calculate Sum</Button>
  </Box>
  <Box>Sum Is : {sum}</Box>
  </FormControl>


      {/* <form action="" onSubmit={formSubmit}>
        <label htmlFor="value1">Value1 : 
        <input type="number" value={value1} onChange={value1Change} placeholder='Enter Value1'/>
        </label>
        <br />
        <label htmlFor="value2">Value2 : 
        <input type="number" value={value2} onChange={value2Change} placeholder='Enter Value2' />
        </label>
        <br />
        <button type='submit'>Calculate Sum</button>
        <br />
        <div><span>Sum Is : {sum}</span></div>
      </form> */}
    </Box>
    </Center>
    </>
  )
}

export default Home
