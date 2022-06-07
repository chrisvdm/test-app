import {
  createContext,
  useEffect,
  useContext,
  useState,
  useMemo,
  useCallback,
} from 'react'

/*
stripe cart shape

cart: [
  {
  id: price id
  quantity
  type
  }
]
 */
const stripeCart = []

/*
If user is logged in then the cart default needs to be retrieved from stripe customer metadata
*/

export const StripeCartContext = createContext(stripeCart)

export const StripeCartProvider = ({ children }) => {
  const [cart, setCart] = useState([])

  // onMount fetch cart items from local storage
  useEffect(() => {
    const serializedCart = window.localStorage.getItem('stripeCart')

    if (serializedCart) {
      setCart(JSON.parse(serializedCart))
    }
  }, [])

  // syncs state's cart with localStorage's cart
  useEffect(() => {
    setTimeout(() => {
      window.localStorage.setItem('stripeCart', JSON.stringify(cart))
    })
  }, [cart])

  // Only create new api obj when cart changes
  const api = useMemo(
    () => ({
      cart,
      addToCart(item) {
        setCart([...cart, item])
      },
    }),
    [cart]
  )

  return (
    <StripeCartContext.Provider value={api}>
      {children}
    </StripeCartContext.Provider>
  )
}
