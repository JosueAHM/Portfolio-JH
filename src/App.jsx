import { useState, useEffect } from 'react'
import Sidebar from './components/Sidebar/Sidebar'
import Presentation from './components/Content/Presentation'
import Jobs from './components/Content/Jobs'
import SkillsSection from './components/Content/SkillsSection'
import Experience from './components/Content/Experience'
import Contact from './components/Content/Contact'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import './App.css'

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('theme')
    return saved ? saved === 'dark' : true
  })

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light')
    localStorage.setItem('theme', isDark ? 'dark' : 'light')
  }, [isDark])

  return (
    <div className="flex w-full min-h-screen bg-bg-site">
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <main className="flex-1 lg:ml-64">
          <Header sidebarOpen={sidebarOpen} onToggle={() => setSidebarOpen(!sidebarOpen)} isDark={isDark} onToggleTheme={() => setIsDark(!isDark)} />
        <div className="main-container content">
          <Presentation />
          <Jobs />
          <Experience />
          <SkillsSection />
          <Contact />
        </div>
        <Footer />
      </main>
    </div>
  )
}

export default App
