import './SignUp.scss';
import FormInput from '../formInput/FormInput';
import Button from '../button/Button';
import { auth, createUserProfileDocument } from '../../firebase/firebase';
import { useState } from 'react';

export default function SignUp() {

  // new user will be set up on registration 
  const [ newUser, setNewUser ] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewUser({
      [name]: value 
    });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { displayName, email, password, confirmPassword } = newUser;

    // Password validation
    if (password !== confirmPassword) {
      alert("Passwords don't match!");
      return;
    }

    try {

      // creating user in our firebase db
      const { user } = await auth.createUserWithEmailAndPassword( email, password );
      await createUserProfileDocument(user, { displayName });

      // once user is created we reset the fields 
      setNewUser({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
      });



    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className="SignUp">
      <h2 className='title'>I do not have an account</h2>
      <span>Sign up with your email and password</span>

      <form className="signUpForm" onSubmit={handleSubmit}>
        <FormInput 
          name="displayName" 
          type="text" 
          value={newUser.displayName} 
          handleChange={handleChange}
          label="Display Name"
          required
        />
        <FormInput 
          name="email" 
          type="email" 
          value={newUser.email} 
          handleChange={handleChange}
          label="email"
          required
        />
        <FormInput 
          name="password" 
          type="password" 
          value={newUser.password} 
          handleChange={handleChange}
          label="Password"
          required 
        />
        <FormInput 
          name="confirmPassword" 
          type="password" 
          value={newUser.confirmPassword} 
          handleChange={handleChange}
          label="Confirm password"
          required 
        />
        <Button type="submit"> Sign up </Button>
      </form>
      
    </div>
  )
}
