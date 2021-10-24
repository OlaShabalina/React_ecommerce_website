import './Signin.scss';
import FormInput from '../formInput/FormInput';
import Button from '../button/Button';
import { auth, signInWithGoogle } from '../../firebase/firebase';
import { useState } from 'react';

export default function Signin() {
  const [ values, setValues ] = useState({
    email: '',
    password: ''
  });

  const handleInput = (e) => {
    const { value, name } = e.target;
    setValues({ 
      ...values,
      [name]: value 
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { email, password } = values;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      setValues({ email: '', password: ''});
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className="Signin">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput 
          name="email" 
          type="email" 
          value={values.email} 
          handleChange={handleInput}
          label="email"
          required
        />
        <FormInput 
          name="password" 
          type="password" 
          value={values.password} 
          handleChange={handleInput}
          label="password"
          required 
        />
        <div className="buttons">
          <Button type="submit" value="Submit Form">Sign in</Button>
          <Button type="button" onClick={signInWithGoogle} isGoogleSignIn>Sign in with Google</Button>
        </div>
      </form>
    </div>
  )
}