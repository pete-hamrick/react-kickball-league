import React from 'react'

export default function PlayerForm({
  name,
  setName,
  position,
  setPosition,
  handleSubmit,
  team,
  setTeam,
  teams,
}) {
  return (
    <form>
      <label htmlFor="name">Name:</label>
      <input
        id="name"
        name="name"
        type="text"
        value={name}
        onChange={({ target }) => setName(target.value)}
      />

      <label htmlFor="position">Position:</label>
      <input
        id="position"
        name="position"
        type="text"
        value={position}
        onChange={({ target }) => setPosition(target.value)}
      />

      <label htmlFor="team-select">Select a Team:</label>
      <select id="team-select">
        <option key={0} value={0}>
          -- Please Choose a Team --
        </option>
        {teams.map((team) => (
          <option key={team.id} value={team.id}>
            {team.name}
          </option>
        ))}
      </select>
    </form>
  )
}
