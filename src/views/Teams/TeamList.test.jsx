import { render } from '@testing-library/react'
import TeamList from './TeamList'

// this doesn't test much without mocking? just snapshots the loading screen

it('should render a list of the teams', () => {
  const { container } = render(<TeamList />)
  expect(container).toMatchSnapshot()
})
