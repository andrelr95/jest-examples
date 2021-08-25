import React from 'react';
import { Switch, Route, Link, BrowserRouter } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import DashboardPage from './pages/dashboard/dashboard.page';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <p>
                Edit <code>src/App.tsx</code> and save to reload.
              </p>
              <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn React
              </a>
              <Link className="App-link" to="/dashboard">dashboard</Link>
            </header>
          </div>  
        </Route>
        <Route path="/dashboard" exact component={DashboardPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
