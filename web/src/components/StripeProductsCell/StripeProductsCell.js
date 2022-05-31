/*
  Fetches an array of products and their prices filtered via params.
  Available params can be found in Stripe API documentation (https://stripe.com/docs/api/products/list)

  Example for fetching active products with one-time prices
  params: {
    productParams: {
      active: true
    },
    priceParams: {
      type: 'one_time'
    }
  }
*/

export const QUERY = gql`
  query Products($params: StripeProductsParamsInput) {
    products(params: $params) {
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

export const Success = ({ products }) => {
  const ProductCard = ({ name, description, price }) => (
    <li style={productCardStyle}>
      <h3>{name}</h3>
      <p>{description}</p>
      <p>{price}</p>
    </li>
  )
  return (
    <ul style={productCardListStyle}>
      {products.map((item) => {
        return <ProductCard key={item.id} {...item} />
      })}
    </ul>
  )
}
const productCardListStyle = {
  listStyle: 'none',
  padding: '0',
  display: 'flex',
  gap: '20px',
}

const productCardStyle = {
  padding: '10px 20px',
  borderRadius: '5px',
  width: '1fr',
  backgroundColor: '#fff',
  color: '#3a444a',
  boxShadow: '2px 2px #dcdbdb',
  fontStyle: 'normal',
}
