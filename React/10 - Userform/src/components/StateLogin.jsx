import Input from "./Input";
import { useInput } from "../hooks/userInput.js";

import {
  hasMinLength,
  isEmail,
  isEqualsToOtherValue,
  isNotEmpty,
} from "../util/validation.js";

export default function Login() {
  const {
    value: emailValue,
    handleInputChange: handleEmailChange,
    handleInputblur: handleEmailBlur,
    hasError: emailHasError
  } = useInput("", (value) => isEmail(value) && isNotEmpty(value));

  const {
    value: passwordValue,
    handleInputChange: handlePasswordChange,
    handleInputblur: handlePasswordBlur,
    hasError: passwordHasError
  } = useInput("", (value) => hasMinLength(value , 6))
 

  function handleSubmit(e) {
    e.preventDefault();

    if(emailHasError || passwordHasError)
    return;

    console.log(emailValue , passwordValue)
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className='control-row'>
        <Input
          label='Email'
          id='Email'
          type='Email'
          name='Email'
          onBlur={handleEmailBlur}
          onChange={handleEmailChange}
          value={emailValue}
          error={emailHasError && "please enter a valid email"}
        />
        <Input
          label='password'
          id='password'
          type='password'
          name='password'
          onBlur={handlePasswordBlur}
          onChange={handlePasswordChange}
          value={passwordValue}
          error={passwordHasError && "please enter a valid password"}
        />
      </div>

      <p className='form-actions'>
        <button className='button button-flat'>Reset</button>
        <button className='button'>Login</button>
      </p>
    </form>
  );
}
