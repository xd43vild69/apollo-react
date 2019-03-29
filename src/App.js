import React, { Component } from 'react';
import './App.css';
import Courses from './Courses';

//render(ApolloApp(App), document.getElementById('root'));

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            <Courses/>
          </p>
        </header>
      </div>
    );
  }
}

export default App;
