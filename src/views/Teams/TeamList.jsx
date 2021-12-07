import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getTeams } from '../../services/teams'

export default function TeamList() {
  const [teams, setTeams] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getTeams()
      .then(({ data }) => setTeams(data))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false))
  }, [])

  if (loading) return <h1>Loading teams...</h1>

  return (
    <section>
      <p>
        <Link to="/">Back to Homepage</Link>
      </p>
      <ul className="team-list" aria-label="Team List"></ul>
      {console.log(teams)}
    </section>
  )
}
