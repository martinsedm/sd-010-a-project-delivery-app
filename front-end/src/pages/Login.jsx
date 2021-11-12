import React, { useEffect, useState } from 'react';

function Login() {
  const PASSWORD_LENGTH = 6;

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [disabled, setDisabled] = useState(true);

  const handleChange = ({ target }) => {
    const { value, name } = target;
    console.log(value, name);
    if (name === 'email') setEmail(value);
    if (name === 'password') setPassword(value);
  };

  useEffect(() => {
    const validateEmail = /^[\S]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/g.test(email);
    if (validateEmail && password.length >= PASSWORD_LENGTH) {
      setDisabled(false);
    } else { setDisabled(true); }
  }, [email, password]);

  return (
    <div>
      Login
      <input
        value={ email }
        name="email"
        type="email"
        data-testid="common_login__input-email"
        onChange={ (e) => handleChange(e) }
      />
      Senha
      <input
        value={ password }
        name="password"
        type="password"
        data-testid="common_login__input-password"
        onChange={ handleChange }
      />
      <button
        data-testid="common_login__button-login"
        type="button"
        disabled={ disabled }
      >
        LOGIN
      </button>
      <button
        type="button"
        data-testid="common_login__button-register"
      >
        Ainda não tenho conta
      </button>
      <p data-testid="common_login__element-invalid-email">
        Erro
      </p>
    </div>
  );
}

export default Login;
