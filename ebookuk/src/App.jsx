import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Header/Navbar/Navbar'
import TopNavbar from './components/Header/TopNavbar/TopNavbar'
import BottomNav from './components/Header/BottomNav/BottomNav'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import EbookWriting from './pages/EbookWriting'
import EbookEditing from './pages/EbookEditing'
import EbookPublishing from './pages/EbookPublishing'
import EbookCoverDesign from './pages/EbookCoverDesign'
import EbookMarketing from './pages/EbookMarketing'
import Genre from './pages/Genre'

const App = () => {
  return (
    <>
      <TopNavbar />
      <Navbar />
      <BottomNav/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/ebook-writing' element={<EbookWriting />}/>
        <Route path='/ebook-Editing' element={<EbookEditing />}/>
        <Route path='/ebook-publishing' element={<EbookPublishing />}/>
        <Route path='/ebook-cover-design' element={<EbookCoverDesign />}/>
        <Route path='/ebook-marketing' element={<EbookMarketing />}/>
        <Route path='/genre' element={<Genre />}/>
      </Routes>
    </>
  )
}

export default App
