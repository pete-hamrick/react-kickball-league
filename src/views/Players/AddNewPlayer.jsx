import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import PlayerForm from '../../components/Players/PlayerForm'
import { createPlayer } from '../../services/players'
import { getTeams } from '../../services/teams'

export default function AddNewPlayer() {
  const [name, setName] = useState('')
  const [position, setPosition] = useState('')
  const [teamId, setTeamId] = useState(null)
  const [teams, setTeams] = useState([])
  const history = useHistory()

  useEffect(() => {
    getTeams().then((res) => setTeams(res))
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()

    const res = await createPlayer({ name, position, teamId })

    history.push(`/players/${res[0].id}`)
  }

  return (
    <section>
      <fieldset>
        <legend>Add a Player</legend>
        <PlayerForm
          name={name}
          setName={setName}
          position={position}
          setPosition={setPosition}
          teams={teams}
          setTeam={setTeamId}
          handleSubmit={handleSubmit}
        />
      </fieldset>
    </section>
  )
}
