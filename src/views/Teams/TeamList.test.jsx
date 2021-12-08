import { render, screen } from '@testing-library/react'
import { MemoryRouter, Route } from 'react-router-dom'
import TeamList from './TeamList'

// this doesn't test much without mocking? just snapshots the loading screen

it('should render a list of the teams', async () => {
  const { container } = render(
    <MemoryRouter initialEntries={['/teams']}>
      <Route path="/teams">
        <TeamList />
      </Route>
    </MemoryRouter>
  )

  screen.getByText('Loading teams...')

  const acmeTeamName = await screen.findByText('Acme USA', { exact: false })

  expect(container).toMatchSnapshot()
  expect(acmeTeamName).toBeInTheDocument()
})
