import { useTranslation } from 'react-i18next'
import Sidebar from './components/Sidebar/Sidebar'
import Presentation from './components/Content/Presentation'

function App() {
  const { t } = useTranslation()

  return (
    <div className="flex w-full min-h-screen bg-bg-site">
      <Sidebar />
      <main className="ml-64 flex-1">
        <div className="main-container">
          <Presentation />
        </div>
      </main>
    </div>
  )
}

export default App
