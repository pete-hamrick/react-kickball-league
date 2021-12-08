import { render, screen } from '@testing-library/react'
import { MemoryRouter, Route } from 'react-router-dom'
import PlayerDetail from './PlayerDetail'

it('should render the detail of Ben E Jetts', async () => {
  render(
    <MemoryRouter initialEntries={['/players/1']}>
      <Route path="/players/:id">
        <PlayerDetail />
      </Route>
    </MemoryRouter>
  )

  const playerName = await screen.findByText('Ben E. Jetts', { exact: false })
  const playerPosition = await screen.findByText('Pitcher', { exact: false })
  const playersTeam = await screen.findByText('Bridge City Sneakers', { exact: false })

  expect(playerName).toBeInTheDocument()
  expect(playerPosition).toBeInTheDocument()
  expect(playersTeam).toBeInTheDocument()
})
