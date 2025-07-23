import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import AboutMe from './pages/AboutMe.jsx'
import Maintenance from './components/Maintenance.jsx'

const App = () => {
  // Read the maintenance mode flag from environment variables.
  // The '===' 'true' check is important because env vars are always strings.
  const isMaintenanceMode = import.meta.env.VITE_MAINTENANCE_MODE === 'true'

  // 1. Check for maintenance mode first. This overrides everything.
  if (isMaintenanceMode) {
    return <Maintenance />
  }

  // 2. If not in maintenance, render the full application with all routes.
  //    This now works correctly for BOTH development and production.
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/aboutme" element={<AboutMe />} />
      {/* Add other routes here */}
    </Routes>
  )
}

export default App
