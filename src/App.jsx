import Footer from './components/Footer'
import Navbar from './components/Navbar'
import ScrollIndicator from './components/ScrollIndicator'
import About from './pages/About'
import Contact from './pages/Contact'
import Education from './pages/Education'
import Home from './pages/Home'
import Organization from './pages/Organization'
import Projects from './pages/Projects'

function App() {
  return (
    <div className="relative min-h-screen bg-paper text-ink">
      <div className="noise-overlay" />

      <div className="pointer-events-none fixed inset-y-0 left-1/2 z-0 hidden w-full max-w-[1440px] -translate-x-1/2 lg:block">
        <div className="relative mx-[clamp(1.5rem,6vw,5.5rem)] h-full">
          <div className="absolute inset-y-0 left-0 w-px bg-ink/[0.05]" />
          <div className="absolute inset-y-0 left-1/3 w-px bg-ink/[0.05]" />
          <div className="absolute inset-y-0 left-2/3 w-px bg-ink/[0.05]" />
          <div className="absolute inset-y-0 right-0 w-px bg-ink/[0.05]" />
        </div>
      </div>

      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-6 focus:top-4 focus:z-50 focus:bg-ink focus:px-4 focus:py-2 focus:text-[10px] focus:uppercase focus:tracking-[0.2em] focus:text-paper"
      >
        Lewati ke konten
      </a>

      <Navbar />
      <main id="main" className="relative z-10">
        <Home />
        <About />
        <Education />
        <Projects />
        <Organization />
        <Contact />
      </main>
      <Footer />
      <ScrollIndicator />
    </div>
  )
}

export default App
