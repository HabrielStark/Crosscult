import { Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar'
import { Footer } from './components/footer'
import Home from './app/page'
import About from './app/about/page'
import Services from './app/services/page'
import Cases from './app/cases/page'
import Blog from './app/blog/page'
import Career from './app/career/page'
import Contact from './app/contact/page'

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/cases" element={<Cases />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/career" element={<Career />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App