import { Route, Switch } from 'react-router';
import './App.css';
import Homepage from './pages/homepage/Homepage'
import ShopPage from './pages/shoppage/ShopPage';
import Header from './components/header/Header';

function App() {
  return (
    <div>
    <Header />
    <Switch>
      <Route exact path='/' component={Homepage} />
      <Route path='/shop' component={ShopPage} />
    </Switch>
    </div>
  );
}

export default App;
