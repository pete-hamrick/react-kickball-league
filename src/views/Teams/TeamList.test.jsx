import { render, screen } from '@testing-library/react'
import { MemoryRouter, Route } from 'react-router-dom'
import TeamList from './TeamList'

it('should render a list of the teams', async () => {
  const { container } = render(
    <MemoryRouter initialEntries={['/teams']}>
      <Route path="/teams">
        <TeamList />
      </Route>
    </MemoryRouter>
  )

  screen.getByText('Loading teams...')

  const teamName = await screen.findByText('Bridge City Sneakers', { exact: false })

  expect(container).toMatchSnapshot()
  expect(teamName).toBeInTheDocument()
})
