
import './App.css'
import { Button, Input, NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper, Select, Stack, Table, TableCaption, TableContainer, Tbody, Td, Textarea, Th, Thead, Tr } from '@chakra-ui/react'





function App() {  

 
  return (
    <section className='main-section'>
      <header className='header' align='center'>
      
      <Stack rowGap={1} direction={'column'} >
      <p size='sm' id='text-selctortype'>Тип селекторов</p>
        <Select size='sm'>
          <option value='XPath' >XPath</option>
          <option value='CSSselector' >CSSselectors</option>
        </Select>
        </Stack>

        <Stack className='cols-input' rowGap={1} direction={'column'} >

        <p>Количество столбцов</p>
        <NumberInput id='num-cols-input'         
        
        size='sm'
        >
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
              <NumberDecrementStepper />
              </NumberInputStepper>
          </NumberInput>

          </Stack>

          <Input placeholder='Введите Url' size='sm' maxW={'2xl'} />

          <Stack direction='row' spacing={1} align='center' className='sidebtns' >
            <Button colorScheme='blue' size={'md'} >Submit</Button>
            <Button colorScheme='blue' size={'md'}>Extract</Button>
          </Stack>

      </header>

     
      <TableContainer>
  <Table variant='simple'>
    
    <Thead>
      <Tr>
        <Th><Textarea maxHeight={'0.5'} maxW={'2.5'}></Textarea></Th>
        <Th><Textarea maxHeight={'0.5'} maxW={'2.5'}></Textarea></Th>
        <Th><Textarea maxHeight={'0.5'} maxW={'2.5'}></Textarea></Th>
      </Tr>
    </Thead>
    <Tbody>
      <Tr>
        <Td>inches</Td>
        <Td>millimetres (mm)</Td>
        <Td isNumeric>25.4</Td>
      </Tr>
      <Tr>
        <Td>feet</Td>
        <Td>centimetres (cm)</Td>
        <Td isNumeric>30.48</Td>
      </Tr>
      <Tr>
        <Td>yards</Td>
        <Td>metres (m)</Td>
        <Td isNumeric>0.91444</Td>
      </Tr>
    </Tbody>
  </Table>
</TableContainer>

      
    </section>
  )
}

export default App
