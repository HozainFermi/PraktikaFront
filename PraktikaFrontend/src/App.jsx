

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import InnerTask from './Pages/InnerTask';
import Tasks from './Pages/Tasks';







function App() { 

  return (

  <BrowserRouter>
      <Routes>
        {/* подстановочный путь */}
        <Route path="InnerTask" element={<InnerTask />} />
        <Route path="Tasks" element={<Tasks />} />
      </Routes>
    </BrowserRouter>
  
  )
}

export default App;


