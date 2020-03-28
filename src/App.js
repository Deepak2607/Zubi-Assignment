import React, { Component } from 'react';
import Homepage from './Containers/Homepage';
import {Route} from 'react-router-dom';

class App extends Component {
  render() { 
    return (
        <div className="container-fluid">
          <Route path='/' exact component={Homepage}/>
        </div>    
    );
  }
}

export default App;





