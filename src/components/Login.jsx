import React, { useState } from 'react';
import { auth } from '../../config/firebase-config';
import { signInWithEmailAndPassword } from 'firebase/auth';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const login = async () => {
    setMessage('');
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setMessage('Successfully Logged In');
      setEmail('');
      setPassword('');
    } catch (err) {
      console.log(`Error while logging in ${err}`);
      setMessage(err.message);
    }
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
