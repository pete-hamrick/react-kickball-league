import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getPlayerById } from '../../services/players'

export default function PlayerDetail() {
  const { id } = useParams()
  const [player, setPlayer] = useState(null)

  useEffect(() => {
    async function getPlayer() {
      const playerData = await getPlayerById(id)
      setPlayer(playerData)
    }

    getPlayer()
  }, [id])

  if (!player) return <h1>Loading Player...</h1>

  return (
    <section>
      <p>
        <Link to="/players">Back to Players</Link>
      </p>
      <h2>{player.name}</h2>
      <p>Position: {player.position}</p>
      <p>
        Team:{'  '}
        <Link to={`/teams/${player.team_id}`}>{player.teams.name}</Link>
      </p>
    </section>
  )
}
