const Button = ({ children, ...restArgs }) => {
  return (
    <button className="button" {...restArgs}>
      {children}
    </button>
  )
}

export default Button
