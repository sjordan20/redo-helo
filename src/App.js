import React from 'react';
import { withRouter } from 'react-router-dom'
import routes from './routes'

import Nav from './components/Nav/Nav'




import './App.css';

function App(props) {
  return (
    <div className="App">
      {props.location.pathname === '/' ||
        props.location.pathname === '/nav' ? (
          <>
            {routes}
          </>
        ) : (
          <>
            <Nav />
            {routes}
          </>
        )}

    </div>
  );
}

export default withRouter(App);
