
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Homepage from './Pages/Homepage'
import PluginsPage from './Pages/PluginsPage'
import ToolPage from './Pages/ToolPage'
import BusinessLoan from './Pages/BusinessLoan'
import BarCode from './Pages/BarCode'

function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={<Homepage />}></Route>
        <Route path='/plugins' element={<PluginsPage />}></Route>
        <Route path='/tools' element={<ToolPage />}></Route>
        <Route path='/tools/buinessloan' element={<BusinessLoan />}></Route>
        <Route path='/tools/barcode' element={<BarCode />}></Route>

      </Routes>
    </div>

  )
}

export default App
