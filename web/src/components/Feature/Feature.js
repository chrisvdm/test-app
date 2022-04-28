const Feature = ({ description, title, children }) => {
  return (
    <div className="feature">
      <h4 className="feature__title">{title}</h4>
      <p className="feature__description">{description}</p>
      <div className="feature__field">{children}</div>
    </div>
  )
}

export default Feature
