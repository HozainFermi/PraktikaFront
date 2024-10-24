import { Input, Textarea, Th, Thead, Tr } from '@chakra-ui/react';
import React, { useEffect, useRef, useState } from 'react';
import './TableHeader.css'
var newstrings;

const TableHeadComponent = ({cols, onChangeSelector }) => {
  
 

  const generateHead = () => {
    const head = [];
    const row=[]
    
    for (let i = 0; i < cols; i++) {
      
      row.push(
      <Th>
        <div className='head-of-clolumn'>
        <Input className='input-title' placeholder='Название столбца' ></Input>
        <Textarea key={i} className='textarea-for-selector' placeholder='Введите селектор' onBlur={(event)=>onChangeSelector(i,event.target.value)}  ></Textarea>
        </div>
        </Th>
        )
        // ref={(ref) => (textareaRefs.current[i] = ref)}
    }
    head.push(<Thead><Tr>{row}</Tr></Thead>)
    return head;
  };
  
  return (
      generateHead()
  );
};

export default TableHeadComponent;



