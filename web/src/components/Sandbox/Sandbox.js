import { useCheckoutHandler } from 'redwoodjs-stripe/web'

import Feature from '../Feature/Feature'
import Button from '../Button/Button'

const Sandbox = () => {
  const checkout = useCheckoutHandler()

  const handleTestCheckoutButtonClick = async () => {
    await checkout()

    // Another option pass Stripe PK to checkout to use stripe redirect API web-side
    // await checkout(process.env.STRIPE_PK)
    // Alternative is add setup step which shares env vars with web side packages
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
