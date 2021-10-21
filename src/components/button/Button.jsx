import './Button.scss'

export default function Button( { children, isGoogleSignIn, ...otherProps }) {
  return (
    <button 
    className={`${isGoogleSignIn ? 'googleSignIn' : ''} Button`} {...otherProps}
    >
      {children}
    </button>
  )
}
