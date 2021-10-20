import { Route, Switch } from 'react-router';
import './App.css';
import Homepage from './pages/homepage/Homepage'
import ShopPage from './pages/shopPage/ShopPage';
import Header from './components/header/Header';
import signinAndSignupPage from './pages/signinAndSignupPage/signinAndSignupPage';
import { auth, createUserProfileDocument } from './firebase/firebase';
import { useState, useEffect, useRef } from 'react';


function App() {

  // setting up state for the logged in user
  const [ currentUser, setCurrentUser ] = useState({ currentUser: null });

  let unsubscribeFromAuth = useRef(null);

  useEffect(() => {

    // pass the variable to useEffect 
    let unsubscribe = unsubscribeFromAuth.current;

    // using firebase methods along with createUserProfileDocument passed from firebaseconfig file
    unsubscribe = auth.onAuthStateChanged(async userAuth => {

      // if user is authentificated, we seve the details 
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        // we will be saving the user as id, displayName, email and when the account was created at as per firebase config file
        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });
        });
        
      } else {
        // else we set a state of the user to null
        setCurrentUser({ currentUser: null });
      }
    });

    return () => {
      unsubscribe();
    }
  }, [])

  console.log(currentUser)

  return (
  <div>
    <Header currentUser={currentUser} />
    <Switch>
      <Route exact path='/' component={Homepage} />
      <Route path='/shop' component={ShopPage} />
      <Route path='/signin' component={signinAndSignupPage} />
    </Switch>
  </div>
  );
  
}

export default App;
