import Footer from './components/Footer'
import Navbar from './components/Navbar'
import { ThemeProvider } from './hooks/useTheme'
import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Projects from './pages/Projects'

function App() {
  return (
    <ThemeProvider>
      <div className="flex min-h-screen flex-col bg-white text-gray-800 dark:bg-gray-950 dark:text-gray-100">
        <Navbar />
        <main className="flex-1">
          <Home />
          <About />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App
