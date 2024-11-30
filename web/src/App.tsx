import Content from './components/content';
import { BrowserRouter, Routes, Route } from 'react-router'
import { Header } from './components/Header.';
import Home from './pages/Home'
import Admin from './pages/Admin'
import About from './pages/About'
import NotFound from './pages/NotFound';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import { Footer } from './components/footer';
import CheckList from './pages/CheckList';

function App() {

  return (
    <div className='bg-zinc-100 min-h-screen'>
      <Content>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/checklist" element={<CheckList />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </Content>
    </div>
  )
}

export default App
