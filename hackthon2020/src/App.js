import React from 'react';
import './App.css';
import Dashboard from './Component/Dashboard';
import { BrowserRouter as Router, Route } from "react-router-dom";
import pageLiving from './pageLiving';
import pageExercising from './pageExercising';
import pageStudy from './pageStudy';
import pageParking from './pageParking';



function App() {
  return (
    <Router>
      <div className="App">
        <Route exact={true} path="/dashboard" component={Dashboard} />
        <Route exact={true} path="/pageStudy" component={pageStudy} />
        <Route exact={true} path="/pageLiving" component={pageLiving} />
        <Route exact={true} path="/pageExercising" component={pageExercising} />
        <Route exact={true} path="/pageParking" component={pageParking} /> 

        {/* <Dashboard/> */}
        <pageL/>
      </div>
    </Router>
  );
}

export default App;
