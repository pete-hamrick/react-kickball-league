import { render, screen } from '@testing-library/react'
import App from './App'

test('renders learn react link', () => {
  render(<App />)
  const kickballElement = screen.getByText('kickball', { exact: false })
  expect(kickballElement).toBeInTheDocument()
})
