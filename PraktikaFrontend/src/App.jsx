
import { useCallback, useRef, useState } from 'react'
import './App.css'
import { Button, Divider, flexbox, Input, Menu, MenuButton, MenuItem, MenuList, NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper, Select, Stack, Table, TableCaption, TableContainer, Tbody, Td, Text, Textarea, Th, Thead, Tr } from '@chakra-ui/react'
import { px } from 'framer-motion'


import TypeofselectorComponent from './Components/TypeofselectorComponent'
import TableHeadComponent from './Components/TableHeadComponent'
import SubmitBtnComponent from './Components/SubmitBtnComponent'
import TableBodyComponent from './Components/TableBodyComponent'
import MenuItemCSVComponent from './Components/MenuItemCSVComponent'
import InfoComponent from './Components/InfoComponent'






function App() { 
  
  const [numofcols,setCols] = useState(1); 
  const [selectorstype,setSelectorsType] = useState('XPath');
  const [selectors,setSelectors] = useState([])
  const [url, setUrl] = useState('');

  const textareaRefs = useRef([]);
  //const infoRef = useRef(null);
  const urlinputRef =useRef(null);

  const [parsoutput,setOutput] = useState([])

  const handleClick = () => {
    // const textareaContents = textareaRefs.current.map((ref) => ref.value);
    // setSelectors(textareaContents)
    // console.log(JSON.stringify(textareaContents, null, 2));
    // return selectors
  };

  const handleSelectorUpdate = (index, newValue) => {
    setSelectors(prevselectors => {
      const newSelectors = [...prevselectors];
      newSelectors[index] = newValue;
      return newSelectors;
    });
  };

  
  const handlUrlInput = ()=>{
    var uri = urlinputRef.current.value
    setUrl(uri)
    //return url
  }

  const handletextareainput = (selector)=>{
    setSelectors([...selectors, selector]);
  }

  const handleSelectorDelete = () => {
    setCols(numofcols-1)
    setSelectors(prevSelectors => {
      const newSelectors = [...prevSelectors];
      newSelectors.splice(numofcols-1, 1);
      return newSelectors;
    });
  }

  return (
    
    <section className='main-section'>

     <div className='topper'>
      <svg width="100px" height="100px" viewBox="0 0 1024 1024" className="icon"  version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M325.8 819.6h-55c-38.6 0-70-31.4-70-70V510.1c0-38.6 31.4-70 70-70h55c38.6 0 70 31.4 70 70v239.5c0 38.6-31.4 70-70 70z m-54.9-339.5c-16.5 0-30 13.5-30 30v239.5c0 16.5 13.5 30 30 30h55c16.5 0 30-13.5 30-30V510.1c0-16.5-13.5-30-30-30h-55z" fill="#005BFF" /><path d="M834.8 177.7h-55c-16.5 0-30 13.5-30 30v541.9c0 16.5 13.5 30 30 30h55c16.5 0 30-13.5 30-30V207.7c0-16.5-13.5-30-30-30zM580.3 300.7h-55c-16.5 0-30 13.5-30 30v418.9c0 16.5 13.5 30 30 30h55c16.5 0 30-13.5 30-30V330.7c0-16.5-13.5-30-30-30zM325.8 479.7h-55c-16.5 0-30 13.5-30 30v239.9c0 16.5 13.5 30 30 30h55c16.5 0 30-13.5 30-30V509.7c0-16.5-13.4-30-30-30z" fill="#E6E6E6" /><path d="M834.8 137.7h-55c-38.6 0-70 31.4-70 70v207.9c-18.3-8.6-38.4-14.2-59.5-16v-68.8c0-38.6-31.4-70-70-70h-55c-38.6 0-70 31.4-70 70v418.9c0 38.6 31.4 70 70 70h55c38.2 0 69.3-30.7 70-68.7 21.1-1.8 41.2-7.4 59.5-16v14.7c0 38.6 31.4 70 70 70h55c38.6 0 70-31.4 70-70v-542c0-38.6-31.5-70-70-70z m-85 364c13.6 21.2 21.5 46.4 21.5 73.5 0 27-7.9 52.2-21.5 73.5v-147z m-251.2 73.5c0-66.8 48.2-122.5 111.7-134.1v268.2c-63.5-11.6-111.7-67.3-111.7-134.1z m26.7-274.5h55c16.5 0 30 13.5 30 30v69.9c-46.6 6.6-87.4 31.4-115 67V330.7c0-16.5 13.5-30 30-30z m55 478.9h-55c-16.5 0-30-13.5-30-30v-66.8c27.5 35.6 68.3 60.5 115 67-0.1 16.5-13.5 29.8-30 29.8z m70-68.9v-271c21.8 2.4 42 10 59.5 21.6v227.9c-17.5 11.5-37.7 19.1-59.5 21.5z m99.5 38.9v-16.9l46.6 46.9h-16.6c-16.6 0-30-13.4-30-30z m115 0c0 11.3-6.3 21.2-15.6 26.3l-82.8-83.2c27.9-31.2 44.9-72.4 44.9-117.5 0-53.4-23.9-101.4-61.5-133.7V207.7c0-16.5 13.5-30 30-30h55c16.5 0 30 13.5 30 30v541.9zM892.2 881.3h-10c-5.5 0-10-4.5-10-10s4.5-10 10-10h10c5.5 0 10 4.5 10 10s-4.4 10-10 10z m-50 0h-10c-5.5 0-10-4.5-10-10s4.5-10 10-10h10c5.5 0 10 4.5 10 10s-4.4 10-10 10z m-50 0h-10c-5.5 0-10-4.5-10-10s4.5-10 10-10h10c5.5 0 10 4.5 10 10s-4.4 10-10 10z m-50 0h-10c-5.5 0-10-4.5-10-10s4.5-10 10-10h10c5.5 0 10 4.5 10 10s-4.4 10-10 10z m-50 0h-10c-5.5 0-10-4.5-10-10s4.5-10 10-10h10c5.5 0 10 4.5 10 10s-4.4 10-10 10z m-50 0h-10c-5.5 0-10-4.5-10-10s4.5-10 10-10h10c5.5 0 10 4.5 10 10s-4.4 10-10 10z m-50 0h-10c-5.5 0-10-4.5-10-10s4.5-10 10-10h10c5.5 0 10 4.5 10 10s-4.4 10-10 10z m-50 0h-10c-5.5 0-10-4.5-10-10s4.5-10 10-10h10c5.5 0 10 4.5 10 10s-4.4 10-10 10z m-50 0h-10c-5.5 0-10-4.5-10-10s4.5-10 10-10h10c5.5 0 10 4.5 10 10s-4.4 10-10 10z m-50 0h-10c-5.5 0-10-4.5-10-10s4.5-10 10-10h10c5.5 0 10 4.5 10 10s-4.4 10-10 10z m-50 0h-10c-5.5 0-10-4.5-10-10s4.5-10 10-10h10c5.5 0 10 4.5 10 10s-4.4 10-10 10z m-50 0h-10c-5.5 0-10-4.5-10-10s4.5-10 10-10h10c5.5 0 10 4.5 10 10s-4.4 10-10 10z m-50 0h-10c-5.5 0-10-4.5-10-10s4.5-10 10-10h10c5.5 0 10 4.5 10 10s-4.4 10-10 10z m-50 0h-10c-5.5 0-10-4.5-10-10s4.5-10 10-10h10c5.5 0 10 4.5 10 10s-4.4 10-10 10z m-50 0h-10c-5.5 0-10-4.5-10-10s4.5-10 10-10h10c5.5 0 10 4.5 10 10s-4.4 10-10 10z m-50 0h-10c-5.5 0-10-4.5-10-10s4.5-10 10-10h10c5.5 0 10 4.5 10 10s-4.4 10-10 10z m-14.4-35.6c-5.5 0-10-4.5-10-10v-10c0-5.5 4.5-10 10-10s10 4.5 10 10v10c0 5.5-4.5 10-10 10z m0-50c-5.5 0-10-4.5-10-10v-10c0-5.5 4.5-10 10-10s10 4.5 10 10v10c0 5.5-4.5 10-10 10z m0-50c-5.5 0-10-4.5-10-10v-10c0-5.5 4.5-10 10-10s10 4.5 10 10v10c0 5.5-4.5 10-10 10z m0-50c-5.5 0-10-4.5-10-10v-10c0-5.5 4.5-10 10-10s10 4.5 10 10v10c0 5.5-4.5 10-10 10z m0-50c-5.5 0-10-4.5-10-10v-10c0-5.5 4.5-10 10-10s10 4.5 10 10v10c0 5.5-4.5 10-10 10z m0-50c-5.5 0-10-4.5-10-10v-10c0-5.5 4.5-10 10-10s10 4.5 10 10v10c0 5.5-4.5 10-10 10z m0-50c-5.5 0-10-4.5-10-10v-10c0-5.5 4.5-10 10-10s10 4.5 10 10v10c0 5.5-4.5 10-10 10z m0-50c-5.5 0-10-4.5-10-10v-10c0-5.5 4.5-10 10-10s10 4.5 10 10v10c0 5.5-4.5 10-10 10z m0-50c-5.5 0-10-4.5-10-10v-10c0-5.5 4.5-10 10-10s10 4.5 10 10v10c0 5.5-4.5 10-10 10z m0-50c-5.5 0-10-4.5-10-10v-10c0-5.5 4.5-10 10-10s10 4.5 10 10v10c0 5.5-4.5 10-10 10z m0-50c-5.5 0-10-4.5-10-10v-10c0-5.5 4.5-10 10-10s10 4.5 10 10v10c0 5.5-4.5 10-10 10z m0-50c-5.5 0-10-4.5-10-10v-10c0-5.5 4.5-10 10-10s10 4.5 10 10v10c0 5.5-4.5 10-10 10z m0-50c-5.5 0-10-4.5-10-10v-10c0-5.5 4.5-10 10-10s10 4.5 10 10v10c0 5.5-4.5 10-10 10z" fill="#005BFF" /><path d="M635 438.9c-75.2 0-136.4 61.2-136.4 136.4S559.8 711.6 635 711.6s136.4-61.2 136.4-136.4S710.2 438.9 635 438.9z" fill="#FFFFFF" /><path d="M635 461.7c-14 0-27.8 2.5-40.8 7.5-5.2 2-7.7 7.8-5.7 12.9 2 5.2 7.8 7.7 12.9 5.7 10.7-4.1 22-6.2 33.6-6.2 51.6 0 93.5 42 93.5 93.5 0 19.7-6.1 38.5-17.5 54.5-4.4 6.2-9.6 11.8-15.5 16.8-4.2 3.6-4.7 9.9-1.1 14.1 2 2.3 4.8 3.5 7.6 3.5 2.3 0 4.6-0.8 6.5-2.4 7-6 13.4-12.8 18.8-20.4 13.9-19.4 21.3-42.2 21.3-66.2-0.1-62.4-51-113.3-113.6-113.3z" fill="#06F3FF" /></svg>
      <header className='header' align='center'>
     
      
     
      <TypeofselectorComponent onSetType={setSelectorsType}/>

    <Stack>
      <p>Введите количество стобцов</p>
      <NumberInput defaultValue={1} min={0} max={10}>
        <NumberInputField />
        <NumberInputStepper>
        <NumberIncrementStepper onClick={()=>setCols(numofcols+1)} />
        <NumberDecrementStepper onClick={handleSelectorDelete}/>
        </NumberInputStepper>
      </NumberInput>
      </Stack>

          <Input id='urlinput' placeholder='Введите Url' size='sm' maxW={'2xl'} mt={6} ref={urlinputRef} />
          
          
          <div align='center' className='sidebtns'>

            <SubmitBtnComponent siteUrl={url} handlUrlInput={handlUrlInput} selectors={selectors} onStringsUpdate={setOutput} selectorsType={selectorstype}  />
            {/* <Button colorScheme='blue' size={'md'}  >Submit</Button> */}
            <Menu>
  <MenuButton as={Button} colorScheme='blue'>
    Actions
  </MenuButton>
  <MenuList>
    <MenuItemCSVComponent output={parsoutput}/>
    <MenuItem>We're working on it</MenuItem>
    <MenuItem>We're working on it</MenuItem>
    
    
  </MenuList>
</Menu>
          </div>
         
      </header>
      </div> 
      <div className='middlecontent' >
      <Divider className='divider' orientation='horizontal' pt={3} colorScheme='teal'  mb={20} mt={3} ></Divider>
      <InfoComponent parsoutput={parsoutput}/>
      </div>

      

      <TableContainer className='table' overflowY={'auto'} >
  <Table variant='simple' colorScheme='#ffff'>
    
    <TableHeadComponent cols={numofcols} onChangeSelector={handleSelectorUpdate}  />
    
      <TableBodyComponent strings={parsoutput} />
    
  </Table>
</TableContainer>

      
    </section>
  )
}

export default App;


