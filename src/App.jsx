import React from 'react'
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css'
import Header from './components/layout/Header'
import PlayerDetail from './views/Players/PlayerDetail'
import PlayerList from './views/Players/PlayerList'
import TeamDetail from './views/Teams/TeamDetail'
import TeamList from './views/Teams/TeamList'
import Home from './views/Home/Home'

function App() {
  return (
    <main className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/teams/:id" component={TeamDetail} />
          <Route path="/teams/" component={TeamList} />
          <Route path="/players/:id" component={PlayerDetail} />
          <Route path="/players/" component={PlayerList} />
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    </main>
  )
}

export default App
