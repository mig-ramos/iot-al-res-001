import { BrowserRouter, Routes, Route } from 'react-router'
import { Navbar } from "./components/Navbar";
import Home from './pages/Home'
import Measures from './pages/Measures'
import Admin from './pages/Admin'
import About from './pages/About'
import NotFound from './pages/NotFound';

function App() {

  return (
    <div className="w-full min-h-screen bg-zinc-100 px-4">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/measures" element={<Measures />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/about" element={<About />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
