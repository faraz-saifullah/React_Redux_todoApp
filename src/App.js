import React from 'react';
import './App.css';
import NavBar from './Components/navBar';
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <NavBar/>
        {this.props.children}
      </div>
    );
  }
}

export default App;
