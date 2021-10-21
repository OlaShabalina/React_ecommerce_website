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
  
  // Once the user is registered - there will be a message shown
  const [ message, setMessage ] = useState({ success: false, error: false });

  // function for accepting input change and adding it to the user state
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewUser({ 
      ...newUser, 
      [name]: value 
    });
  }

  // adding a new user on submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    let { displayName, email, password, confirmPassword } = e.target.elements;


    // Password validation
    if (password.value !== confirmPassword.value) {
      
      setMessage({ success: false, error: true });
      return;
    }

    try {

      displayName = displayName.value;
      email = email.value;
      password = password.value;

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

      // also show a message that user has been created
      setMessage({ success: true, error: false });

    } catch (err) {

      // show error message if there is an error
      setMessage({ success: false, error: true });
    }
  }

  // hide both success or error messages in 3sec
  setTimeout(() => {
    setMessage({ success: false, error: false })
  }, 3000)

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
        { if (message.success) (
          <span>
            New account has been created. 
          </span>
        ) else if (message.error) (
          <span>
            Email address is already in use or credentials are not correct.
          </span>
        ) else (
          <span></span>
        )}
      </form>
      
    </div>
  )
}
