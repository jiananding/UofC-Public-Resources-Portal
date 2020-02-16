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
      parkings: null,
      exerciseEvents: null,
      livingEvents: null,
      studyEvents: null,
      parkingEvent: null
    };
  }

  componentDidMount = async () =>{
    let url = "http://localhost:8080/exercise/all";
    let res = await axios.get(url);
    this.setState({ exercises: res });

    window.exercises = this.state.exercises;

    // url = "http://localhost:8080/living/all";
    // res = await axios.get(url);
    // this.setState({ livings: res });

    // url = "http://localhost:8080/study/all";
    // res = await axios.get(url);
    // this.setState({ studies: res });

    // url = "http://localhost:8080/parking/all";
    // res = await axios.get(url);
    // this.setState({ parkings: res });

    // url = "http://localhost:8080/exerciseEvent/all";
    // res = await axios.get(url);
    // this.setState({ exercises: res });

    // url = "http://localhost:8080/exercise/all";
    // res = await axios.get(url);
    // this.setState({ exercises: res });

    // url = "http://localhost:8080/exercise/all";
    // res = await axios.get(url);
    // this.setState({ exercises: res });

    // url = "http://localhost:8080/exercise/all";
    // res = await axios.get(url);
    // this.setState({ exercises: res });
    
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
