import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'

export default function App() {
  return (
    <div className="min-h-screen bg-[#080808]">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <footer className="border-t border-[#1c1c1c] py-8">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-mono text-xs text-[#444]">
            © {new Date().getFullYear()} Tej Capildeo
          </p>
          <p className="font-mono text-xs text-[#333]">
            Built with React + TypeScript
          </p>
        </div>
      </footer>
    </div>
  )
}
