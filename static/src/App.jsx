
import Header from "./components/Header/Header";
import Home from "./components/views/Static/Home/Home";
import { Route, Switch } from "react-router-dom";


function App() {
  return (
    <>
      <div className="App">
        <Header />
        <Home />
      </div>
      <Switch>
        <Route exact path="/">
        </Route>
        <Route path="/nodes">

        </Route>
        <Route path="/account">

        </Route>
        <Route path="/presale">
        
        </Route>
      </Switch>
    </>
  );
}

export default App;
