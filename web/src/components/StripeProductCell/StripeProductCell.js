import { useContext } from 'react'

import { StripeProductCard, StripeButton } from 'redwoodjs-stripe/web'

import {
  StripeCartProvider,
  StripeCartContext,
} from 'src/components/StripeCartProvider'

/*
  Fetches a product by associated price id.
*/

export const QUERY = gql`
  query ProductByPrice($id: ID!) {
    ProductByPrice: productByPrice(id: $id) {
      id
      name
      description
      image
      price
      type
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({
  ProductByPrice: { name, description, price, id },
}) => {
  const { cart, addToCart } = useContext(StripeCartContext)

  const handleAddToCartButtonClick = () => {
    console.log(`Going to add price id ${id} to cart (soon)`)
    //cart.push(id)
    //console.log(cart)
    addToCart(id)
  }

  console.log(cart)

  return (
    <>
      <StripeProductCard name={name}>
        <p>{description}</p>
        <p>{price}</p>
        <StripeCartProvider>
          <StripeButton onClick={handleAddToCartButtonClick}>
            Add To Cart
          </StripeButton>
        </StripeCartProvider>
      </StripeProductCard>
    </>
  )
}
