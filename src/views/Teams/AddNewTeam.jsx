import React from 'react'
import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import TeamForm from '../../components/Teams/TeamForm'
import { createTeam } from '../../services/teams'
import './AddNewTeam.css'

export default function AddNewTeam() {
  const [name, setName] = useState('')
  const [city, setCity] = useState('')
  const [state, setState] = useState('')
  const history = useHistory()

  const handleSubmit = async (e) => {
    e.preventDefault()

    const res = await createTeam({ name, city, state })
    
    history.push(`/teams/${res[0].id}`)
  }

  return (
    <section className="new-team-container">
      <fieldset>
        <legend>Add A Team</legend>
        <TeamForm
          name={name}
          setName={setName}
          city={city}
          setCity={setCity}
          state={state}
          setState={setState}
          handleSubmit={handleSubmit}
        />
      </fieldset>
    </section>
  )
}
