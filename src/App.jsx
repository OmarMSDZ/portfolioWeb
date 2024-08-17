
//importando react router
import {BrowserRouter, Routes, Route} from 'react-router-dom'

//importando vistas
import Home from './views/Home'
 


function App() {
 

  return (
    <>
      <div>
        <BrowserRouter basename={import.meta.env.BASE_URL}>
          <Routes>
            <Route index element={<Home/>}/>
            <Route path='/home' element={<Home/>}/>
     
            
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
