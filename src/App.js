import React from 'react'
import './App.css';
import Overview from './pages/Overview'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <>
    <BrowserRouter>
      <Sidebar/>
      <Switch>
        <Route path="/overview" exact component = {Overview} />
      </Switch>
    </BrowserRouter>
    </>
  );
}

export default App;
