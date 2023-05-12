import React, { useState } from 'react';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const login = async () => {
    try {
      setEmail('');
      setPassword('');
    } catch (err) {}
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <h2>Login</h2>
      <input
        value={email}
        placeholder="Enter Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        value={password}
        type="password"
        placeholder="Enter Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button disabled={!email || !password} onClick={() => login()}>
        Login
      </button>
    </div>
  );
}

export default Login;
