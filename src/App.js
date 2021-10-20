import { Route, Switch } from 'react-router';
import './App.css';
import Homepage from './pages/homepage/Homepage'
import ShopPage from './pages/shopPage/ShopPage';
import Header from './components/header/Header';
import signinAndSignupPage from './pages/signinAndSignupPage/signinAndSignupPage';
import { auth } from './firebase/firebase';
import React, { useState, useEffect } from 'react';

function App() {

  // // Integrating user authentification 
  const [ user, setUser ] = useState({ currentUser: null });

  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      setUser(user);
    })

    return () => {
      unsubscribeFromAuth();
    }
  }, [])

  console.log(user ? (user._delegate) : 'logged out')

  return (
    <div>
    <Header currentUser={user} />
    <Switch>
      <Route exact path='/' component={Homepage} />
      <Route path='/shop' component={ShopPage} />
      <Route path='/signin' component={signinAndSignupPage} />
    </Switch>
    </div>
  );
  
}

export default App;
