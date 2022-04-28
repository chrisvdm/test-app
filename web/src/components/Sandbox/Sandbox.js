import { test } from 'redwoodjs-stripe'

const Sandbox = () => {
  const handleTestLinkButtonClick = () => {
    test()
  }
  return (
    <div className="sandbox">
      <button onClick={handleTestLinkButtonClick}>test link</button>
    </div>
  )
}

export default Sandbox
