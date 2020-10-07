import React from 'react';
import Historical from './container/historical';
import LiveChart from './container/liveChart';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Layout from './hoc/layout';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Layout>
      <Switch>
      <Route path="/" exact component={Historical}/>
      <Route path="/liveChart" exact component={LiveChart}/>
      </Switch>
      </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
