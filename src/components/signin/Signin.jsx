import './Signin.scss';
import { useState } from 'react';

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
        <input 
          name="email" 
          type="email" 
          value={values.email} 
          onChange={handleInput}
          required
        />
        <label>Email</label>
        <input 
          name="password" 
          type="password" 
          value={values.password} 
          onChange={handleInput}
          required 
        />
        <label>Password</label>
        <input type="submit" value="Submit Form" />
      </form>
    </div>
  )
}
