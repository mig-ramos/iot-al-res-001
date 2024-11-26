import { BrowserRouter, Routes, Route } from 'react-router'
import Home from './pages/Home'
import Measures from './pages/Measures'
import Admin from './pages/Admin'
import About from './pages/About'

function App() {


  return (
    <div className="w-full min-h-screen">
      <h1>Projeto criado</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/measures" element={<Measures />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
