import { Account } from "./components";
import Header from "./components/Header/Header";
import Home from "./components/views/Static/Home/Home";
import { Route, Switch } from "react-router-dom";
import Dashboard from "./components/views/App/Dashboard";
import Nodes from "./components/views/App/Nodes";
import Presale from "./components/views/App/Presale";

function App() {
  return (
    <>
      <div className="App">
        <Header />
        <Home />
      </div>
      <Switch>
        <Route exact path="/">
          <Dashboard />
        </Route>
        <Route path="/nodes">
          <Nodes />
        </Route>
        <Route path="/account">
          <Nodes />
        </Route>
        <Route path="/presale">
          <Presale />
        </Route>
      </Switch>
    </>
  );
}

export default App;
