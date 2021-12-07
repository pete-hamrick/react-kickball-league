import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import './App.css'
import Header from './components/layout/Header'
import PlayerDetail from './components/PlayerDetail/PlayerDetail'
import PlayerList from './components/PlayerList/PlayerList'
import TeamDetail from './components/TeamDetail/TeamDetail'
import TeamList from './components/TeamList/TeamList'
import Home from './views/Home/Home'

function App() {
  return (
    <main className="App">
      <Router>
        <Header />
        {/* switch so it's 1 page */}
        {/* home component for route '/' */}
        <Home />
        {/* TeamList component for route '/teams' */}
        <TeamList />
        {/* TeamDetail component for route '/teams/:teamId' */}
        <TeamDetail />
        {/* PlayerList component for route '/players' */}
        <PlayerList />
        {/* PlayerDetail component for route '/players/:playerId' */}
        <PlayerDetail />
      </Router>
    </main>
  )
}

export default App
