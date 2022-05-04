import { checkout } from 'redwoodjs-stripe'

import Feature from '../Feature/Feature'
import Button from '../Button/Button'

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
        <Button onClick={handleTestCheckoutButtonClick}>
          Redirect to Checkout
        </Button>
      </Feature>

      <Feature
        title="products"
        description="Fetches products from Stripe Account"
      >
        <p>&#47;&#47; A list of StripeProducts goes here</p>
      </Feature>
    </div>
  )
}

export default Sandbox
