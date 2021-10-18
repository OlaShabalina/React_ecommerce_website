import { Route, Switch } from 'react-router';
import './App.css';
import Homepage from './pages/homepage/Homepage'
import ShopPage from './pages/shopPage/ShopPage';
import Header from './components/header/Header';
import signinAndSignupPage from './pages/signinAndSignupPage/signinAndSignupPage';

function App() {
  return (
    <div>
    <Header />
    <Switch>
      <Route exact path='/' component={Homepage} />
      <Route path='/shop' component={ShopPage} />
      <Route path='/signin' component={signinAndSignupPage} />
    </Switch>
    </div>
  );
}

export default App;
