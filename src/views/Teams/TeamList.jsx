import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { deleteTeamById, getTeams } from '../../services/teams'
import './TeamList.css'

export default function TeamList() {
  const [teams, setTeams] = useState([])
  const [loading, setLoading] = useState(true)

  const loadTeams = async () => {
    const data = await getTeams()
    setTeams(data)
    setLoading(false)
  }

  useEffect(() => {
    loadTeams()
  }, [])

  const handleDelete = async ({ id, name }) => {
    const deleteConfirmation = confirm(
      `Are you sure you want to delete ${name}`
    )
    if (deleteConfirmation) {
      setLoading(true)
      await deleteTeamById(id)
      await loadTeams()
    }
  }

  if (loading) return <h1>Loading teams...</h1>

  return (
    <section className="team-container">
      <p className="link-back">
        <Link to="/">Back to Homepage</Link>
      </p>
      <p>
        <Link to="/teams/new">Add a Team</Link>
      </p>
      <ul className="team-list" aria-label="Team List">
        {teams.map((team) => (
          <li key={team.id}>
            <span>{team.name + ' '}</span>
            <button>
              <Link to={`/teams/${team.id}`}>View</Link>{' '}
            </button>
            <button>
              <Link to={`/teams/update/${team.id}`}>Update</Link>
            </button>
            <button onClick={() => handleDelete(team)}>Delete</button>
          </li>
        ))}
      </ul>
    </section>
  )
}
