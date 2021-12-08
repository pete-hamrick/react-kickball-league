import { render } from '@testing-library/react'
import Home from './Home'

it('should render a humble homepage', () => {
  const { container } = render(<Home />)
  expect(container).toMatchSnapshot()
})
