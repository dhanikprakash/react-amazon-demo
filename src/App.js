import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/header/Header";
import HomePage from "./components/home/Homepage";
import Checkout from "./components/checkout/Checkout";

function App() {
  return (
    <>
      <Router>
        <div className="App">
          <Switch>
            <Route path="/Checkout" component={Checkout}>
              <Header />
              <Checkout />
            </Route>
            <Route path="/login">
              <h1>Login page</h1>
            </Route>
            <Route path="/">
              <Header />
              <HomePage />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
