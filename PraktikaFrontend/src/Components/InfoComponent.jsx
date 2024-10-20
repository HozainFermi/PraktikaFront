import { Text } from "@chakra-ui/react";

function InfoComponent({parsoutput}){

    function countBytes(arr) {
        let totalBytes = 0;
        for (let i = 0; i < arr.length; i++) {
          totalBytes += new Blob([arr[i]]).size;
        }
        return totalBytes;
      }

        if (parsoutput.length > 0) {
           return <Text className='InfoText' >Info:<p>Number of lines:{parsoutput.length};</p> <p>Number of bytes:{countBytes(parsoutput)}</p></Text>
          }
        
         return <Text className='InfoText' >Info:</Text>
    


}
export default InfoComponent