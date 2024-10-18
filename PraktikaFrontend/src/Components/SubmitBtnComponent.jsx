import { Button } from "@chakra-ui/react";
import { useRef } from "react";
import './SubmitBtn.css'


const SubmitBtnComponent = ({onChangeInfo,siteUrl,handleClick,handlUrlInput,selectorsType,onStringsUpdate })=> {
    
    

  const doOnBtnClicl = ()=>{

   
    var selectorsarray  = handleClick();

    handlUrlInput()
    

    console.log(selectorsarray);
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
                selectors: selectorsarray,
                selectorsType: selectorsType
              })
          });
    
          if (response.ok) {
            const data = await response.json();
            console.log(data);
            onStringsUpdate(data)
            onChangeInfo();
            return data
           
    
          } else {
            console.error('Ошибка запроса:', response.status);
          }
        } catch (error) {
          console.error('Ошибка при выполнении запроса:', error);
        }
        
      };
      handleSubmit();

  }
    // const handleClick = () => {
    //     var newstrings= handleSubmit();
    //     onStringsUpdate(newstrings)
    // }

    return(
        <button id="submitBtn" onClick={doOnBtnClicl} >Parse</button>
    );
}
export default SubmitBtnComponent;

// const handleSubmit = async (event) => {
//     event.preventDefault();
    
//     try {
//       const response = await fetch('http://localhost:5161/ParsTask', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           'accept': '*/*'
//         },
//         body: JSON.stringify({
//             "siteUrl": "https://www.scrapingcourse.com/ecommerce/page/2/",
//               "selectors": [
//                "//h2[@class='product-name woocommerce-loop-product__title']",
//                 "//span[@class='price']/span[@class='product-price woocommerce-Price-amount amount']/bdi"
//               ],
//               "selectorsType": "XPath"
//             })
//       });

//       if (response.ok) {
//         const data = await response.json();
//         console.log(data);
//         return data
       

//       } else {
//         console.error('Ошибка запроса:', response.status);
//       }
//     } catch (error) {
//       console.error('Ошибка при выполнении запроса:', error);
//     }

//   };
