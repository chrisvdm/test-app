import { render } from '@redwoodjs/testing/web'

import Feature from './Feature'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Feature', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Feature />)
    }).not.toThrow()
  })
})
