import React from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import './sign-up.styles.scss';

class SignUp extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      email: '',
      password: '',
      confirmPassword: ''
    };

  }

  handleSubmit = event => {
    event.preventDefault();

    const { password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert("passwords don't match");
      return;
    }

      this.setState({
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
      });
  };

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    const { username, email, password, confirmPassword } = this.state;
    return (
      <div className='sign-up'>
        <h2 className='title'>I do not have an account</h2>
        <span>Sign up with your email and password</span>
        <form className='sign-up-form' onSubmit={ this.handleSubmit }>
          <FormInput
            type='text'
            name='username'
            value={ username }
            onChange={ this.handleChange }
            label='Display Name'
            required
          />
          <FormInput
            type='email'
            name='email'
            value={ email }
            onChange={ this.handleChange }
            label='Email'
            required
          />
          <FormInput
            type='password'
            name='password'
            value={ password }
            onChange={ this.handleChange }
            label='Password'
            required
          />
          <FormInput
            type='password'
            name='confirmPassword'
            value={ confirmPassword }
            onChange={ this.handleChange }
            label='Confirm Password'
            required
          />
          <CustomButton type='submit'>SIGN UP</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignUp;