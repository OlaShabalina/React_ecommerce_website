import './Header.scss';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import { auth } from '../../firebase/firebase';

export default function Header({ currentUser }) {
  return (
    <div className="Header">
      <Link className="logoContainer" to="/">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">Shop</Link>
        <Link className="option" to="/contact">Contact</Link>
        {
          (currentUser) ?
          <div className="option" onClick={() => auth.signOut()}>Sign out</div>
          :
          <Link className="option" to="/signin">Sign in</Link>
        }
      </div>
    </div>
  )
}
