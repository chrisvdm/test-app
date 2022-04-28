import { render } from '@redwoodjs/testing/web'

import Sandbox from './Sandbox'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Sandbox', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Sandbox />)
    }).not.toThrow()
  })
})
