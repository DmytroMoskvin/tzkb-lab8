import type { Api } from 'behavior/api';
import type { User } from 'behavior/mockServer';
import type { Dispatch, SetStateAction, FunctionComponent } from 'react';
import { useState } from 'react';
import './styles/LoginForm.css';

type Props = {
  api: Api;
  isLoading: boolean;
  setUser: Dispatch<SetStateAction<User | null | undefined>>;
  setLoading: Dispatch<SetStateAction<boolean>>;
}

const LoginForm: FunctionComponent<Props> = ({ api, isLoading, setUser, setLoading }) => {
  const [login, setLogin] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [isLoginFaled, setLoginFaled] = useState(false);

  const handleLogin = () => {
    if (!login || !password)
      return;

    setLoading(true);
    api.userProvider.loginUser(login, password)
      .then(user => {
        setUser(user);
        setLoginFaled(!user);
        if (user)
          api.tokenStorage.set(user.login);
        else
          api.tokenStorage.reset();
      })
      .then(_ => setLoading(false));
  };

  return (
    <div className="login-form__wrapper">
      <h1 className="login-form__header">Sing in</h1>
      {isLoginFaled && <h2>Login faled!</h2>}
      <input type={"text"} className="login-form__input" onChange={e => setLogin(e.target.value)} disabled={isLoading} placeholder="Login" />
      <input type={"password"} className="login-form__input" onChange={e => setPassword(e.target.value)} disabled={isLoading} placeholder="Password" />
      <button className="login-form__button-submit" onClick={handleLogin} disabled={isLoading}>Log In</button>
    </div>
  );
};

export default LoginForm;