import React, { useState } from 'react';

import { auth } from '../../config/firebase-config';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { async } from '@firebase/util';

function Auth() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const login = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      console.log('User created successfully');
    } catch (err) {
      console.log(`Error while creating user ${err}`);
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <h2>Sign Up</h2>
      <input
        value={email}
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        value={password}
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button disabled={!email || !password} onClick={() => login()}>
        Sign Up
      </button>
    </div>
  );
}

export default Auth;
