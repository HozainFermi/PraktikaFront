import { Input, Textarea, Th, Thead, Tr } from '@chakra-ui/react';
import React, { useRef, useState } from 'react';
import './TableHeader.css'
var newstrings;

const TableHeadComponent = ({cols,textareaRefs}) => {
  
  
  const generateHead = () => {
    const head = [];
    const row=[]
    
    for (let i = 0; i < cols; i++) {
      
      row.push(
      <Th>
        <div className='head-of-clolumn'>
        <Input className='input-title' placeholder='Название столбца' ></Input>
        <Textarea className='textarea-for-selector' placeholder='Введите селектор' ref={(ref) => (textareaRefs.current[i] = ref)}  ></Textarea>
        </div>
        </Th>
        )
    }
    head.push(<Thead><Tr>{row}</Tr></Thead>)
    return head;
  };
  
  return (
      generateHead()
  );
};

export default TableHeadComponent;



