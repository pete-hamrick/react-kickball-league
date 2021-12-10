import React, { useState, useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import PlayerForm from '../../components/Players/PlayerForm'
import { getPlayerById, updatePlayerById } from '../../services/players'

export default function UpdatePlayer() {
  const { id } = useParams()
  const [name, setName] = useState('')
  const [position, setPosition] = useState('')
  const [loading, setLoading] = useState(true)
  const history = useHistory()

  useEffect(() => {
    async function getPlayerData() {
      const { name, position } = await getPlayerById(id)
      setName(name)
      setPosition(position)
      setLoading(false)
    }

    getPlayerData()
  }, [id])

  const handleSubmit = async (e) => {
    e.preventDefault()

    const res = await updatePlayerById(id, { name, position })

    history.push(`/players/${res[0].id}`)
  }

  if (loading) return <h1>Loading Player...</h1>

  return (
    <section>
      <fieldset>
        <legend>Update Player</legend>
        <PlayerForm
          name={name}
          setName={setName}
          position={position}
          setPosition={setPosition}
          handleSubmit={handleSubmit}
        />
      </fieldset>
    </section>
  )
}
