import React from 'react'

export default function TeamForm() {
  return (
    <form>
      <h1>Form is here!</h1>

      <label htmlFor="name">Name:</label>
      <input id="name" name="name" type="text" />

      <label htmlFor="city">City:</label>
      <input id="city" name="city" type="text" />

      <label htmlFor="state">State:</label>
      <input id="state" name="state" type="text" />

      <input type="submit" aria-label="Add A Team" />
    </form>
  )
}
