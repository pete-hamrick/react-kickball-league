import { render, screen } from '@testing-library/react'
import { setupServer } from 'msw/node'
import { rest } from 'msw'
import { Route, Router } from 'react-router-dom'
import userEvent from '@testing-library/user-event'
import { createMemoryHistory } from 'history'
import UpdateTeam from './UpdateTeam'
import TeamDetail from './TeamDetail'

const mockedTeam = {
  id: 7,
  created_at: '2021-12-08T19:17:11.000Z',
  name: 'updated team',
  city: 'updated city',
  state: 'updated state',
  players: [],
}

const server = setupServer(
  rest.get(
    'https://dlvgiudbzqwqzjqonrsg.supabase.co/rest/v1/teams',
    (req, res, ctx) => {
      return res(ctx.json(mockedTeam))
    }
  ),
  rest.put(
    'https://dlvgiudbzqwqzjqonrsg.supabase.co/rest/v1/teams',
    (req, res, ctx) => {
      return res(ctx.json([mockedTeam]))
    }
  )
)

beforeAll(() => {
  server.listen()
})

afterAll(() => {
  server.close()
})

it('should update a team then navigate to that teams detail page', async () => {
  const history = createMemoryHistory()
  history.push('/teams/new')

  render(
    <Router history={history}>
      <Route path="/teams/new">
        <UpdateTeam />
      </Route>
      <Route path="/teams/:id" component={TeamDetail} />
    </Router>
  )

  screen.getByText('Update Team', { exact: false })

  const nameField = screen.getByLabelText(/name/i)
  const cityField = screen.getByLabelText(/city/i)
  const stateField = screen.getByLabelText(/state/i)
  const submitButton = screen.getByRole('button', { name: 'Submit' })

  userEvent.type(nameField, 'updated team')
  userEvent.type(cityField, 'updated city')
  userEvent.type(stateField, 'updated state')
  userEvent.click(submitButton)

  await screen.findByText('updated team')
})
