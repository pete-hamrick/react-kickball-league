import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getPlayers } from '../../services/players'

export default function PlayerList() {
  const [players, setPlayers] = useState([])
  const [loading, setLoading] = useState([])

  useEffect(() => {
    async function getAllPlayers() {
      const data = await getPlayers()
      setPlayers(data)
      setLoading(false)
    }

    getAllPlayers()
  }, [])

  //TODO write handleDelete
  const handleDelete = async () => {}

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
