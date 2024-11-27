import Content from './components/content';
import { BrowserRouter, Routes, Route } from 'react-router'
import { Header } from './components/Header.';
import Home from './pages/Home'
import Measures from './pages/Measures'
import Admin from './pages/Admin'
import About from './pages/About'
import NotFound from './pages/NotFound';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {

  return (
    <div className='bg-zinc-100 min-h-screen'>
      <Content>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/measures" element={<Measures />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </Content>
    </div>
  )
}

export default App
