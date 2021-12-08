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

  const teamName = await screen.findByText('Lakeville Thunderfeet', { exact: false })
  const cityName = await screen.findByText('Lake Oswego', { exact: false })

  expect(teamName).toBeInTheDocument()
  expect(cityName).toBeInTheDocument()
})
