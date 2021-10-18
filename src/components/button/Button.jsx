import './Button.scss'

export default function Button( { children, ...otherProps }) {
  return (
    <div className="Button" {...otherProps}>
      {children}
    </div>
  )
}
