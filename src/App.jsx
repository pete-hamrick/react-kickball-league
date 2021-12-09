import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css'
import Header from './components/layout/Header'
import PlayerDetail from './views/Players/PlayerDetail'
import PlayerList from './views/Players/PlayerList'
import TeamDetail from './views/Teams/TeamDetail'
import TeamList from './views/Teams/TeamList'
import Home from './views/Home/Home'
import AddNewTeam from './views/Teams/AddNewTeam'
import UpdateTeam from './views/Teams/UpdateTeam'

function App() {
  return (
    <main className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/teams/update/:id" component={UpdateTeam} />
          <Route path="/teams/new" component={AddNewTeam} />
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
