import './signinAndSignupPage.scss'
import Signin from '../../components/signin/Signin'
import SignUp from '../../components/signup/SignUp'

export default function signinAndSignupPage() {
  return (
    <div className="signinAndSignupPage">
      <Signin />
      <SignUp />
    </div>
  )
}
