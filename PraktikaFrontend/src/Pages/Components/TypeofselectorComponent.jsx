import { Select, Stack } from "@chakra-ui/react";
import { useState } from "react";

export default function TypeofselectorComponent({onSetType}){

 
    return (
      <Stack rowGap={1} direction={'column'} >
        <p size='sm' id='text-selctortype'>Тип селекторов</p>
          <Select size='sm'>
            <option value='XPath' onClick={()=>onSetTypesetType('XPath')} >XPath</option>
            <option value='CSSselector' onClick={()=>onSetTypesetType('CSSselector')} >CSSselectors</option>
          </Select>
          </Stack>
    );
  };