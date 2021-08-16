import './App.css';
import React from 'react';
import Chart from './components/charts';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'


function Links() {

  return (
      <div className='navigation'>
          <NavLink className='link' to='/charts' activeClassName={"selected"}>Charts</NavLink>
          
      </div>
  )
}


function App() {
  return (
    <Router>
      <React.Fragment>
        <Links />
            
            <Route path='/charts' component={Chart}/>
         
      </React.Fragment>
    </Router>
  );
}

export default App;