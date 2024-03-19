import React, { useState } from 'react';

type UserAuthProps = {
  onLogin: (user: UserSchema) => void;
};

const UserAuth: React.FC<UserAuthProps> = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const user = await authenticateUser(username, password);
    onLogin(user);
  };

  return (
    <form id="userAuthForm" onSubmit={handleSubmit}>
      <label htmlFor="username">Username:</label>
      <input type="text" id="username" value={username} onChange={handleUsernameChange} required />

      <label htmlFor="password">Password:</label>
      <input type="password" id="password" value={password} onChange={handlePasswordChange} required />

      <button type="submit">Log in</button>
    </form>
  );
};

export default UserAuth;