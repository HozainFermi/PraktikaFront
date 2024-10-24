import { Button, ButtonGroup, Image} from '@chakra-ui/react'




const SideMenu = ()=>{



    return(
        
        <ButtonGroup gap='5em' flexDirection={'column'}>
            <Button _hover={{ bg: "teal.600", color: "white" }} _active={{ bg: "teal.700" }}  variant={"ghost"} color='#CFD3DA' leftIcon={<Image colorScheme='blue' src='/images/Tasks.png' boxSize="40px" marginRight={'0.5em'} />} >Taks</Button>
            <Button _hover={{ bg: "blue.600", color: "white" }} _active={{ bg: "blue.700" }} variant={"ghost"} color='#CFD3DA' leftIcon={<Image src='/images/CreateTask.png' boxSize="40px" marginRight={'0.5em'}/>}>Create Task</Button>
            <Button _hover={{ bg: "yellow.600", color: "white" }} _active={{ bg: "yellow.700" }} variant={"ghost"} color='#CFD3DA' leftIcon={<Image src='/images/Data.png' boxSize="40px" marginRight={'0.5em'}/>}>Data</Button>
            <Button _hover={{ bg: "green.600", color: "white" }} _active={{ bg: "green.700" }} variant={"ghost"} color='#CFD3DA' leftIcon={<Image src='/images/Export.png' boxSize="40px" marginRight={'0.5em'}/>}>Export</Button>
            <Button _hover={{ bg: "orange.600", color: "white" }} _active={{ bg: "orange.700" }} variant={"ghost"} color='#CFD3DA' leftIcon={<Image src='/images/Pricing.png' boxSize="40px" marginRight={'0.5em'}/>}>Pricing</Button>

        </ButtonGroup>

    )



}
export default SideMenu