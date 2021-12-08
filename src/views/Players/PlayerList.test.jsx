import { render, screen } from '@testing-library/react'
import { MemoryRouter, Route } from 'react-router-dom'
import PlayerList from './PlayerList'

it('should render a list of the players', async () => {
  const { container } = render(
    <MemoryRouter initialEntries={['/players']}>
      <Route path="/players">
        <PlayerList />
      </Route>
    </MemoryRouter>
  )

  screen.getByText('Loading Players...')

  const budPlayerName = await screen.findByText('Bud E. Guy', { exact: false })

  expect(container).toMatchSnapshot()
  expect(budPlayerName).toBeInTheDocument()
})
