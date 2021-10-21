import './Signin.scss';
import FormInput from '../formInput/FormInput';
import Button from '../button/Button';
import { signInWithGoogle } from '../../firebase/firebase';
import { Component } from 'react';

class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };
  }

  handleSubmit = event => {
    event.preventDefault();

    this.setState({ email: '', password: '' });
  };

  handleInput = event => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="Signin">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput 
            name="email" 
            type="email" 
            value={this.state.email}
            handleChange={this.handleInput}
            label="email"
            required
          />
          <FormInput 
            name="password" 
            type="password" 
            value={this.state.password}
            handleChange={this.handleInput}
            label="password"
            required 
          />
          <div className="buttons">
            <Button type="submit" value="Submit Form">Sign in</Button>
            <Button onClick={signInWithGoogle} isGoogleSignIn>Sign in with Google</Button>
          </div>
        </form>
      </div>
    )
  }
}

export default SignIn;