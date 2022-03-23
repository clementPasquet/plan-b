import "./App.css";
import { Route, Switch } from "react-router-dom";
import Dashboard from "./components/views/Dashboard";
import Nodes from "./components/views/Staking"
import Presale from "./components/views/Lending"
import Sidebar from "./components/Sidebar";
import Wallet from "./components/Wallet";
import styled from "styled-components"
import Account from "./components/views/Account/Account";


function App() {
  return (
    <>
    <Sidebar />
    <Wallet />
    <DashboardPage>
    <Switch>
      <Route exact path="/">
        <Dashboard />
      </Route>
      <Route path="/staking">
        <Nodes />
      </Route>
      <Route path="/account">
        <Account />
      </Route>
      <Route path="/lending">
        <Presale />
      </Route>
    </Switch>
    </DashboardPage>
    </>
  );
}

export default App;

const DashboardPage = styled.div`
    position: absolute;
    left: 300px;
    margin-top: 150px;
    width: 80%;
    opacity: 0.6;
    border-radius: 16px;
    padding: 30px;
    backdrop-filter: blur(20px);
`
