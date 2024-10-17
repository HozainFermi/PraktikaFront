
import { useRef, useState } from 'react'
import './App.css'
import { Button, flexbox, Input, NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper, Select, Stack, Table, TableCaption, TableContainer, Tbody, Td, Textarea, Th, Thead, Tr } from '@chakra-ui/react'
import { px } from 'framer-motion'

import TypeofselectorComponent from './Components/TypeofselectorComponent'
import TableHeadComponent from './Components/TableHeadComponent'
import SubmitBtnComponent from './Components/SubmitBtnComponent'




function App() { 
  
  const [numofcols,setCols] = useState(1); 
  const [selectorstype,setSelectorsType] = useState('XPath');
  const [selectors,setSelectors] = useState([])
  const [url, setUrl] = useState('');

  const textareaRefs = useRef([]);
  const urlinputRef =useRef(null);

  const [parsoutput,setOutput] = useState([])

  const handleClick = () => {
    const textareaContents = textareaRefs.current.map((ref) => ref.value);
    setSelectors(textareaContents)
    //console.log(JSON.stringify(textareaContents, null, 2));
    return selectors
  };

  const handlUrlInput = ()=>{
    var uri = urlinputRef.current.value
    setUrl(uri)
    //return url
  }


  return (
    <section className='main-section'>
      <header className='header' align='center' >
      
      <TypeofselectorComponent onSetType={setSelectorsType}/>

    <Stack>
      <p>Введите количество стобцов</p>
      <NumberInput defaultValue={1} min={0} max={10}>
        <NumberInputField />
        <NumberInputStepper>
        <NumberIncrementStepper onClick={()=>setCols(numofcols+1)} />
        <NumberDecrementStepper onClick={()=>setCols(numofcols-1)}/>
        </NumberInputStepper>
      </NumberInput>
      </Stack>

          <Input id='urlinput' placeholder='Введите Url' size='sm' maxW={'2xl'} mt={6} ref={urlinputRef} />
          

          <Stack direction='row' spacing={1} align='center' className='sidebtns' mt={6}>

            <SubmitBtnComponent siteUrl={url} handlUrlInput={handlUrlInput} handleClick={handleClick} onStringsUpdate={setOutput} selectorsType={selectorstype}  />
            {/* <Button colorScheme='blue' size={'md'}  >Submit</Button> */}
            <Button colorScheme='blue' size={'md'}>Extract</Button>
          </Stack>
      </header>


      <TableContainer className='table'>
  <Table variant='simple' colorScheme='#ffff'>
    
    <TableHeadComponent cols={numofcols} textareaRefs={textareaRefs} />
    <Tbody>
      {}
    </Tbody>
  </Table>
</TableContainer>

      
    </section>
  )
}

export default App;
