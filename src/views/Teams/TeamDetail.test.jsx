import { render, screen } from '@testing-library/react'
import { MemoryRouter, Route } from 'react-router-dom'
import TeamDetail from './TeamDetail'

it('should render the detailed view of a team', async () => {
  render(
    <MemoryRouter initialEntries={['/teams/3']}>
      <Route path="/teams/:id">
        <TeamDetail />
      </Route>
    </MemoryRouter>
  )

  screen.getByText('Loading Team...')

  const teamName = await screen.findByText('Eureka, I Found My Keys', { exact: false })
  const stateName = await screen.findByText('CA', { exact: false })

  expect(teamName).toBeInTheDocument()
  expect(stateName).toBeInTheDocument()
})
