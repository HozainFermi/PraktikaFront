import { Card, CardBody, Editable, EditableInput, EditablePreview, Image, Text } from "@chakra-ui/react"



const TaskCard = ({taskname,  })=>{


    return (
        <Card width={'100%'} className="card" position={'relative'}>
            <CardBody>
                <Image src="/images/Star.png" boxSize='30px' position={"absolute"} top={0} left={0} />
                <Editable defaultValue='Task Name'>
                    <EditablePreview />
                    <EditableInput />
                </Editable>

            </CardBody>
        </Card>
    )



}
export default TaskCard
