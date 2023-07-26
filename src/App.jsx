
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Homepage from './Pages/Homepage'
import PluginsPage from './Pages/PluginsPage'

function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={<Homepage />}></Route>
        <Route path='/plugins' element={<PluginsPage />}></Route>

      </Routes>
    </div>

  )
}

export default App
