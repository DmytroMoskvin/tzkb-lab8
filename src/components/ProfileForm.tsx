import type { Dispatch, SetStateAction, FunctionComponent } from 'react';
import type { Api } from 'behavior/api';
import type { User } from 'behavior/mockServer';
import './styles/ProfileForm.css';

type Props = {
  api: Api;
  isLoading: boolean;
  user: User;
  setUser: Dispatch<SetStateAction<User | null | undefined>>;
  setLoading: Dispatch<SetStateAction<boolean>>;
}

const ProfileForm: FunctionComponent<Props> = ({ api, isLoading, user, setUser, setLoading }) => {
  const handleLogout = () => {
    setLoading(true);
    api.userProvider.logoutUser(user.login)
      .then(response => {
        if (response) {
          setUser(null);
          api.tokenStorage.reset();
        }
      })
      .then(_ => setLoading(false));
  };

  return (
    <div className="profile-form__wrapper">
      <h2 className="profile-form__header">Profile</h2>
      <p>Name: {user.login}</p>
      <p>Role: {user.role}</p>
      <p>Access levels:</p>
      {Object.entries(user.accessLevels).map(value => (
        <div key={value[0]}>
          <p>{value[0]}</p>
          <p>[ {value[1].join(', ')} ]</p>
        </div>
      ))}
      <button onClick={handleLogout} disabled={isLoading}>Log Out</button>
    </div>
  );
};

export default ProfileForm;