import { Tbody, Td, Tr } from "@chakra-ui/react";

const TableBodyComponent = ({strings})=>{

    const generateBody = () =>{

        var Trs=[];
        var Tds=[];
        var columncells=[];

        for (let indexofrow = 0; indexofrow < strings.length; indexofrow++) {
            Tds=[];
            columncells=strings[indexofrow].trim().split(' , ');

            for (let indexofcolumn = 0; indexofcolumn < columncells.length; indexofcolumn++) {
                Tds.push(<Td>{columncells[indexofcolumn]}</Td>)
                
            }
            Trs.push(<Tr>{Tds}</Tr>)

        }


        return Trs
    }


    return(
    <Tbody>
        {generateBody()}
    </Tbody>
    )
}

export default TableBodyComponent;
