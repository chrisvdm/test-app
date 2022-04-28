import { MetaTags } from '@redwoodjs/web'
import Sandbox from 'src/components/Sandbox/Sandbox'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />
      <div className="site-wrapper">
        <header>
          <h1>redwoodjs-stripe</h1>
          <p className="header__description">sandbox</p>
        </header>
        <main>
          <p>
            This app is intended to be used for testing separate components of
            the integration before updating the stripe-example-store
          </p>

          <Sandbox />
        </main>
      </div>
    </>
  )
}

export default HomePage
