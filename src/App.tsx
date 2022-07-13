import type { User } from './behavior/mockServer';
import type { Api } from 'behavior/api';
import { type FunctionComponent, useEffect, useState } from 'react';
import { LoginForm, ProfileForm } from 'components';
import './App.css';

const App: FunctionComponent<{ api: Api }> = ({ api }) => {

  const [user, setUser] = useState<User | null>();
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const storedUser = api.tokenStorage.get();

    if (storedUser) {
      api.userProvider.getUser(storedUser)
        .then(u => u && setUser(u))
        .then(_ => setLoading(false));
    }
    else
      setLoading(false);
  }, []);

  if (user)
    return <ProfileForm api={api} isLoading={isLoading} user={user} setUser={setUser} setLoading={setLoading} />

  return <LoginForm api={api} isLoading={isLoading} setUser={setUser} setLoading={setLoading} />
}

export default App;
