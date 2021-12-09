import React, { useEffect, useState } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import TeamForm from '../../components/Teams/TeamForm'
import { getTeamById, updateTeamById } from '../../services/teams'

export default function UpdateTeam() {
  const { id } = useParams()
  const [name, setName] = useState('')
  const [city, setCity] = useState('')
  const [state, setState] = useState('')
  const [loading, setLoading] = useState(true)
  const history = useHistory()

  useEffect(() => {
    async function getTeam() {
      const { name, city, state } = await getTeamById(id)
      setName(name)
      setCity(city)
      setState(state)
      setLoading(false)
    }

    getTeam()
  }, [id])

  const handleSubmit = async (e) => {
    e.preventDefault()

    const res = await updateTeamById(id, { name, city, state })

    history.push(`/teams/${res[0].id}`)
  }

  if (loading) return <h1>Loading Team...</h1>

  return (
    <>
      <fieldset>
        <legend>Update Team</legend>
        <TeamForm
          name={name}
          city={city}
          state={state}
          setName={setName}
          setCity={setCity}
          setState={setState}
          handleSubmit={handleSubmit}
        />
      </fieldset>
    </>
  )
}
