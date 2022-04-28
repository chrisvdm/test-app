import { checkout } from 'redwoodjs-stripe'

import Feature from '../Feature/Feature'

const Sandbox = () => {
  const handleTestCheckoutButtonClick = () => {
    checkout()
  }

  return (
    <div className="sandbox">
      <Feature
        title="checkout"
        description="Redirects to stripe checkout page. Makes use of products on
        stripe-example-store"
      >
        <button onClick={handleTestCheckoutButtonClick}>test checkout</button>
      </Feature>
    </div>
  )
}

export default Sandbox
