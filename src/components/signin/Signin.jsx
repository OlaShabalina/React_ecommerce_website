import './Signin.scss';
import { useState } from 'react';
import FormInput from '../formInput/FormInput';

export default function Signin() {
  const [ values, setValues ] = useState({
    email: '',
    password: ''
  })

  const handleInput = (e) => {
    const { value, name } = e.target;
    setValues({ [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setValues({ email:'', password: ''});
  }

  return (
    <div className="Signin">
      <h2>I already have an account</h2>
      <span>Sing in with your email and password</span>

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
        <input type="submit" value="Submit Form" />
      </form>
    </div>
  )
}
