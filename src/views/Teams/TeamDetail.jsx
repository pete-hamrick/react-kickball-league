import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
// import Team from '../../components/Team/Team'
import { getTeamById } from '../../services/teams'

export default function TeamDetail() {
  const { id } = useParams()
  const [team, setTeams] = useState(null)

  useEffect(() => {
    async function getTeam() {
      const teamData = await getTeamById(id)
      setTeams(teamData)
    }

    getTeam()
  }, [id])

  if (!team) return <h1>Loading Team...</h1>

  return (
    <section>
      <p>
        <Link to="/teams">Back to Teams</Link>
      </p>
      <h2>{team.name}</h2>
      <p>
        From {team.city}, {team.state}
      </p>
      <ul>
        {team.players.map((player) => {
          return (
            <li key={player.id}>
              {player.position} - {'  '}
              <Link to={`/players/${team.players.id}`}>{player.name}</Link>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
