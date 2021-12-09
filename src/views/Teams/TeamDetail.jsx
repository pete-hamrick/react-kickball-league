import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getTeamById } from '../../services/teams'
import './TeamDetail.css'

export default function TeamDetail() {
  const { id } = useParams()
  const [team, setTeam] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function getTeam() {
      const teamData = await getTeamById(id)
      setTeam(teamData)
      setLoading(false)
    }

    getTeam()
  }, [id])

  if (loading) return <h1>Loading Team...</h1>

  return (
    <section>
      <p className="link-back">
        <Link to="/teams">Back to Teams</Link>
      </p>
      <h2>{team.name}</h2>
      <p>
        From {team.city}, {team.state}
      </p>
      <ul className="player-list">
        {team.players.map((player) => {
          return (
            <li key={player.id}>
              {player.position} - {'  '}
              <Link to={`/players/${player.id}`}>{player.name}</Link>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
