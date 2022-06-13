import { useCheckoutHandler, useStripeCart } from 'redwoodjs-stripe/web'

import StripeProductsCell from 'src/components/StripeProductsCell/StripeProductsCell'
// import StripeProductCell from 'src/components/StripeProductCell'

import Feature from '../Feature/Feature'
import Button from '../Button/Button'

const Sandbox = () => {
  const checkout = useCheckoutHandler()
  const { cart } = useStripeCart()

  const handleTestCheckoutButtonClick = async () => {
    console.log('checkout:', cart)
    await checkout(cart)

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
        <StripeProductsCell
          params={{
            productParams: { active: true },
            priceParams: { type: 'one_time' },
          }}
        />
      </Feature>

      <Feature title="cart machine" description="Adds items to cart">
        {/* <StripeProductCell id="price_1Kb1YmHMAJHtnk9iEdLwAqlB" /> */}
      </Feature>
    </div>
  )
}

export default Sandbox
