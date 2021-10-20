import './Button.scss'

export default function Button( { children, isGoogleSignIn, ...otherProps }) {
  return (
    <div 
    className={`${isGoogleSignIn ? 'googleSignIn' : ''} Button`} {...otherProps}
    >
      {children}
    </div>
  )
}
