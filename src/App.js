import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import './App.css'
import Header from './components/layout/Header'

function App() {
  return (
    <main className="App">
      <Router>
        <Header />
        <h1>App</h1>
        {/* switch so it's 1 page */}
        {/* home component for route '/' */}
        {/* TeamList component for route '/teams' */}
        {/* TeamDetail component for route '/teams/:teamId' */}
        {/* PlayerList component for route '/players' */}
        {/* PlayerDetail component for route '/players/:playerId' */}
      </Router>
    </main>
  )
}

export default App
