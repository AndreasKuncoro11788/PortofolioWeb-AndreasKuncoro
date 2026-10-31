import Footer from './components/Footer'
import Navbar from './components/Navbar'
import About from './pages/About'
import Contact from './pages/Contact'
import Education from './pages/Education'
import Home from './pages/Home'
import Organization from './pages/Organization'
import Projects from './pages/Projects'

function App() {
  return (
    <div className="relative min-h-screen bg-[#F9F8F6] text-[#1A1A1A]">
      <div className="noise-overlay" />

      <div className="gridline" style={{ left: '8.333%' }} />
      <div className="gridline" style={{ left: '33.333%' }} />
      <div className="gridline" style={{ left: '66.666%' }} />
      <div className="gridline" style={{ left: '91.666%' }} />

      <Navbar />
      <main className="relative z-10">
        <Home />
        <About />
        <Education />
        <Projects />
        <Organization />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
