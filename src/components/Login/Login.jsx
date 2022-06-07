/* eslint-disable no-unused-vars */
import React from 'react'
import './Login.css'
import { auth } from '../fireBase';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signIn = e => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then(auth => {
          navigate.push('/')
      })
      .catch(err => alert(err.message))
  }

  const register = e => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
          if (auth) navigate.push('/')
      })
      .catch(err => alert(err.message));
  }

  return (
    <div className="login">
      <Link to='/'>
        <img
          className="login__logo"
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png'
          alt=''
        />
      </Link>

      <div className='login__container'>
        <h1>Sign In</h1>

        <form>
          <h5>Email</h5>
          <input
            type="text"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <input
            type="text"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <button className="login__signInButton" type="submit" onClick={signIn}>Sign In</button>
        </form>
        <p>
          By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please
          see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
        </p>

        <button className="login-registerButton" onClick={register}>Create Your Account</button>
      </div>
    </div>
  )
}

export default Login

