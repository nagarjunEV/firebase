import React, { useState } from 'react';

import { auth } from '../../config/firebase-config';
import { createUserWithEmailAndPassword } from 'firebase/auth';

function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const signUp = async () => {
    setMessage('');
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setMessage('User created successfully');
      setEmail('');
      setPassword('');
    } catch (err) {
      console.log(`Error while creating user ${err}`);
      setMessage(err.message);
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <h2>Sign Up</h2>
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
      <button disabled={!email || !password} onClick={() => signUp()}>
        Sign Up
      </button>
      <h3>{message}</h3>
    </div>
  );
}

export default SignUp;
