import { Alert, AlertDescription, AlertIcon, AlertTitle, Button } from "@chakra-ui/react";
import { useRef, useState } from "react";
import './SubmitBtn.css'





const SubmitBtnComponent = ({siteUrl,selectors,selectorsType,onStringsUpdate })=> {
    
    const [showAlert,setShowAlert] = useState(false)

    const handleShowAlert =()=>{

      setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 6000); // Скрывать Alert через 3 секунды
      
    }



  const doOnBtnClicl = ()=>{

   
    //var selectorsarray  = selectors;

    
    

    console.log(selectors);
    console.log(siteUrl);
    console.log(selectorsType);

    const handleSubmit = async (event) => {
        //event.preventDefault();
        
        try {
          const response = await fetch('http://localhost:5161/ParsTask', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'accept': '*/*'
            },
            body: JSON.stringify({
                siteUrl: siteUrl,
                selectors: selectors,
                selectorsType: selectorsType
              })
          });
    
          if (response.ok) {
            const data = await response.json();
            //console.log(data);
            onStringsUpdate(data)
            //onChangeInfo();
            handleShowAlert()
            
            return data
           
    
          } else {
            console.error('Ошибка запроса:', response.status);
            //setShowAlert(false);
            
          }
        } catch (error) {
          console.error('Ошибка при выполнении запроса:', error);
          //setShowAlert(false)
          
        }
        
      };
      handleSubmit();

  }
  
  
    return(         
      <div className="submitbtnWrapper">
        <button id="submitBtn" onClick={doOnBtnClicl} >Parse</button>
        {showAlert && (
          <Alert className="Alert" status="success" position="fixed" transition={'normal'} zIndex={10} >
            <AlertIcon />
            <AlertTitle>Success!</AlertTitle>
            <AlertDescription>Ваше действие выполнено успешно.</AlertDescription>
          </Alert>
        )}
        </div>
    );
}
export default SubmitBtnComponent;


