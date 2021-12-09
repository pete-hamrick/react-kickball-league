import { render, screen } from '@testing-library/react'
import { setupServer } from 'msw/node'
import { rest } from 'msw'
import { Route, Router } from 'react-router-dom'
import userEvent from '@testing-library/user-event'
import { createMemoryHistory } from 'history'
import AddNewTeam from './AddNewTeam'
import TeamDetail from './TeamDetail'

const mockedTeam = {
  id: 7,
  created_at: '2021-12-08T19:17:11.000Z',
  name: 'test team',
  city: 'test city',
  state: 'test state',
  players: [],
}

const server = setupServer(
  rest.get('https://dlvgiudbzqwqzjqonrsg.supabase.co/rest/v1/teams', (req, res, ctx) => {
    return res(ctx.json(mockedTeam))
  }),
  rest.post('https://dlvgiudbzqwqzjqonrsg.supabase.co/rest/v1/teams', (req, res, ctx) => {
    return res(ctx.json([mockedTeam]))
  })
)

beforeAll(() => {
  server.listen()
})

afterAll(() => {
  server.close()
})

it('should add a new team and then redirect to that team detail page', async () => {
  const history = createMemoryHistory()
  history.push('/teams/new')

  render(
    <Router history={history}>
      <Route path="/teams/new">
        <AddNewTeam />
      </Route>
      <Route path="/teams/:id" component={TeamDetail} />
    </Router>
  )

  screen.getByText('Add a Team', { exact: false })

  const nameField = screen.getByLabelText(/name/i)
  const cityField = screen.getByLabelText(/city/i)
  const stateField = screen.getByLabelText(/state/i)
  const submitButton = screen.getByRole('button', { name: 'Add A Team' })

  userEvent.type(nameField, 'Team')
  userEvent.type(cityField, 'City')
  userEvent.type(stateField, 'State')
  userEvent.click(submitButton)

  await screen.findByText('test team')
  screen.debug()
})
