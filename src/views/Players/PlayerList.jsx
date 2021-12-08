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

  if (loading) return <h1>Loading Players...</h1>

  return (
    <section>
      <p>
        <Link to="/">Back to Homepage</Link>
      </p>
      <ul className="players-list" aria-label="Player List">
        {players.map((player) => (
          <li key={player.id}>
            <Link to={`/players/${player.id}`}>{player.name}</Link>
          </li>
        ))}
      </ul>
    </section>
  )
}
