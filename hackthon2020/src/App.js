import React, { Component } from "react";
import './App.css';
import Dashboard from './Component/Dashboard';
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import pageLiving from './pageLiving';
import pageExercising from './pageExercising';
import pageStudy from './pageStudy';

import axios from "axios";


class App extends Component{
  constructor(props){
    super(props);

    this.state = {
      exercises: null,
      livings: null,
      studies: null,
      parkings: null
    };
  }

  componentDidMount = async () =>{
    const url = "http://localhost:8080/exercise/all";
    const res = await axios.get(url);
    this.setState({ exercises : res});
    console.log(this.state.exercises)
  }

  render(){
    return (
      <Router>
        <div className="App">
          <Route exact={true} path="/dashboard" component={Dashboard} />
          <Route exact={true} path="/study" component={pageStudy} />
          <Route exact={true} path="/living" component={pageLiving} />
          <Route exact={true} path="/exercising" component={pageExercising} />

          <Route exact path="/" component={Dashboard} />
        </div>
      </Router>
    );
  }
}

export default App;
