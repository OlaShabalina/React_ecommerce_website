import './SignUp.scss';
import FormInput from '../formInput/FormInput';
import Button from '../button/Button';
import { auth, createUserProfileDocument } from '../../firebase/firebase';
import { Component } from 'react';

class SignUp extends Component {
  constructor() {
    super();

    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: ''
    };
  }

  handleSubmit = async e => {
    e.preventDefault();

    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert("passwords don't match");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await createUserProfileDocument(user, { displayName });

      this.setState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
      });
    } catch (error) {
      console.error(error);
    }
  };

  handleChange = e => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className="SignUp">
        <h2 className='title'>I do not have an account</h2>
        <span>Sign up with your email and password</span>

        <form className="signUpForm" onSubmit={this.handleSubmit}>
          <FormInput 
            name="displayName" 
            type="text" 
            value={displayName} 
            handleChange={this.handleChange}
            label="Display Name"
            required
          />
          <FormInput 
            name="email" 
            type="email" 
            value={email} 
            handleChange={this.handleChange}
            label="email"
            required
          />
          <FormInput 
            name="password" 
            type="password" 
            value={password} 
            handleChange={this.handleChange}
            label="Password"
            required 
          />
          <FormInput 
            name="confirmPassword" 
            type="password" 
            value={confirmPassword} 
            handleChange={this.handleChange}
            label="Confirm password"
            required 
          />
          <Button type="submit"> Sign up </Button>
        </form>
        
      </div>
    )
  }
}

export default SignUp;
