import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import Sidebar from './components/Sidebar/Sidebar'
import Presentation from './components/Content/Presentation'
import Jobs from './components/Content/Jobs'
import Habilities from './components/Content/Habilities'
import Experience from './components/Content/Experience'
import Contact from './components/Content/Contact'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import './App.css'

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const { t } = useTranslation()

  return (
    <div className="flex w-full min-h-screen bg-bg-site">
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <button
        className="fixed top-4 left-4 z-50 lg:hidden bg-secondary text-text-muted p-2.5 rounded-lg hover:bg-secondary/80 transition-colors"
        onClick={() => setSidebarOpen(!sidebarOpen)}
        aria-label="Toggle menu"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {sidebarOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <main className="flex-1 lg:ml-64">
          <Header />
        <div className="main-container content">
          <Presentation />
          <Jobs />
          <Habilities />
          <Experience />
          <Contact />
        </div>
        <Footer />
      </main>
    </div>
  )
}

export default App
