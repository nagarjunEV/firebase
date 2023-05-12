import { useState } from 'react';
import './App.css';
import Login from './components/Login';
import SignUp from './components/SignUp';

function App() {
  const [toggle, setToggle] = useState(true);

  return (
    <>
      <div>
        <h2>Welcome</h2>
        <h3>
          {toggle
            ? 'Already have an account! Click Login'
            : 'We have missed you! Click Sign Up'}
        </h3>
        <button onClick={() => setToggle(!toggle)}>
          {toggle ? 'Login' : 'Sign Up'}
        </button>
        <p style={{ marginBottom: 50 }}></p>
        {toggle ? <SignUp /> : <Login />}
      </div>
    </>
  );
}

export default App;
