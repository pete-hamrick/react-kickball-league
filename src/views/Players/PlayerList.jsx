import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getPlayers, deletePlayerById } from '../../services/players'

export default function PlayerList() {
  const [players, setPlayers] = useState([])
  const [loading, setLoading] = useState([])

  const loadPlayers = async () => {
    const data = await getPlayers()
    setPlayers(data)
    setLoading(false)
  }
  useEffect(() => {
    loadPlayers()
  }, [])

  const handleDelete = async ({ id, name }) => {
    const deleteConfirmation = confirm(
      `Are you sure you want to delete ${name}?`
    )
    if (deleteConfirmation) {
      setLoading(true)
      await deletePlayerById(id)
      await loadPlayers()
    }
  }

  if (loading) return <h1>Loading Players...</h1>

  return (
    <section>
      <p>
        <Link to="/">Back to Homepage</Link>
        <Link to="/players/new">Add New Player</Link>
      </p>
      <ul className="players-list" aria-label="Player List">
        {players.map((player) => (
          <li key={player.id}>
            {player.name}
            <button>
              <Link to={`/players/${player.id}`}>View</Link>
            </button>
            <button>
              <Link to={`/players/update/${player.id}`}>Update</Link>
            </button>
            <button onClick={() => handleDelete(player)}>Delete</button>
          </li>
        ))}
      </ul>
    </section>
  )
}
