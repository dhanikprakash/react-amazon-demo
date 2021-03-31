import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  HashRouter,
} from "react-router-dom";
import Header from "./components/header/Header";
import HomePage from "./components/home/Homepage";
import Checkout from "./components/checkout/Checkout";
import Homepage from './components/home/Homepage';

function App() {
  return (
    <>
      <HashRouter basename={process.env.PUBLIC_URL}>
        <Header />
        <Route
          render={({ location }) => (
            <Switch location={location}>
              <Route path="/Checkout" component={Checkout}></Route>
              <Route path="/login">
                <h1>Login page</h1>
              </Route>
              <Route path="/" component={Homepage}></Route>
            </Switch>
          )}
        />
      </HashRouter>
    </>
  );
}

export default App;
