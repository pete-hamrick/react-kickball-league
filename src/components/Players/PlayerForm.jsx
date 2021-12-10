import React from 'react'

export default function PlayerForm({
  name,
  setName,
  position,
  setPosition,
  handleSubmit,
  setTeam,
  teams,
}) {
  return (
    <form onSubmit={handleSubmit}>
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

      {teams ? (
        <>
          <label htmlFor="team-select">Select a Team:</label>
          <select
            id="team-select"
            onChange={({ target }) => setTeam(target.value)}
          >
            <option key={0} value={0}>
              -- Please Choose a Team --
            </option>
            {teams.map((team) => (
              <option key={team.id} value={team.id}>
                {team.name}
              </option>
            ))}
          </select>
        </>
      ) : (
        ''
      )}

      <input type="submit" aria-label="Submit" />
    </form>
  )
}
