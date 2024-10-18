
import { useRef, useState } from 'react'
import './App.css'
import { Button, Divider, flexbox, Input, Menu, MenuButton, MenuItem, MenuList, NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper, Select, Stack, Table, TableCaption, TableContainer, Tbody, Td, Text, Textarea, Th, Thead, Tr } from '@chakra-ui/react'
import { px } from 'framer-motion'

import TypeofselectorComponent from './Components/TypeofselectorComponent'
import TableHeadComponent from './Components/TableHeadComponent'
import SubmitBtnComponent from './Components/SubmitBtnComponent'
import TableBodyComponent from './Components/TableBodyComponent'


function countBytes(arr) {
  let totalBytes = 0;
  for (let i = 0; i < arr.length; i++) {
    totalBytes += new Blob([arr[i]]).size;
  }
  return totalBytes;
}



function App() { 
  
  const [numofcols,setCols] = useState(1); 
  const [selectorstype,setSelectorsType] = useState('XPath');
  const [selectors,setSelectors] = useState([])
  const [url, setUrl] = useState('');

  const textareaRefs = useRef([]);
  const infoRef = useRef(null);
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

  const handletextareainput = (selector)=>{
    setSelectors([...selectors, selector]);
  }

  const changeInfo = ()=>{
    let numofbytes = countBytes(parsoutput)
    let len = parsoutput.length
    let str = `Number of lines:${len} Number of bytes:${numofbytes}`
    infoRef.current.value = str
    console.log(`Number of lines:${parsoutput.length}\nNumber of bytes:${numofbytes}`)
  }


  return (
    <section className='main-section'>
      <header className='header' align='center'>
      
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
          
          
          <div align='center' className='sidebtns'>

            <SubmitBtnComponent onChangeInfo={changeInfo} siteUrl={url} handlUrlInput={handlUrlInput} handleClick={handleClick} onStringsUpdate={setOutput} selectorsType={selectorstype}  />
            {/* <Button colorScheme='blue' size={'md'}  >Submit</Button> */}
            <Menu>
  <MenuButton as={Button} colorScheme='blue' >
    Actions
  </MenuButton>
  <MenuList>
    <MenuItem>Download as CSV</MenuItem>
    <MenuItem>We're working on it</MenuItem>
    <MenuItem>We're working on it</MenuItem>
    
    
  </MenuList>
</Menu>
          </div>
      </header>

      <div className='middlecontent' >
      <Divider orientation='horizontal' pt={3} colorScheme='blue' mb={20} ></Divider>
      <Text className='InfoText' ref={infoRef} >Info:</Text>
      </div>

      

      <TableContainer className='table' overflowY={'auto'} >
  <Table variant='simple' colorScheme='#ffff'>
    
    <TableHeadComponent cols={numofcols} textareaRefs={textareaRefs}  />
    
      <TableBodyComponent strings={parsoutput} />
    
  </Table>
</TableContainer>

      
    </section>
  )
}

export default App;


