import { MenuItem } from '@chakra-ui/react';
import { saveAs } from 'file-saver';


const MenuItemCSVComponent = ({output})=>{

    
    const handleExport = async (event) => {
        //event.preventDefault();
        
        try {
          const response = await fetch('http://localhost:5161/ExportCsv', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                data: output
              })
          });
          
          if (response.ok) {
            const data = await response.blob();
            saveAs(data, "output.csv")

          } else {
            console.error('Ошибка запроса:', response.status);
          }
        } catch (error) {
          console.error('Ошибка при выполнении запроса:', error);
        }
        
      };

     

    return(
        <MenuItem onClick={ handleExport}>Download as CSV</MenuItem>
    )

}

export default MenuItemCSVComponent;
