import React from 'react'

export default function Team(team) {
  return (
    <>
      <h3>{team.name}</h3>
      <p>
        From {team.city}, {team.state}
      </p>
    </>
  )
}
