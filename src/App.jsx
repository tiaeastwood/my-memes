import React from 'react';
import './App.css';
import PuppyList from './puppylist.jsx';
import CreateGreeting from './hello.jsx';


class App extends React.Component {

  state = {
    showImages: false,
    showGreeting: false,
    user: 'Tia'
  }

  toggleImages = () => {
    this.setState((prevState) => {
      //return the new state you want
      return {
        showImages: !prevState.showImages,
      };
    });
  };

  sayHello = () => {
    this.setState((prevState) => {
      return {
        showGreeting: !prevState.showGreeting,
      };
    });
  };


  render() {
    return (
      <div className="App">
        <header>
          <h1>{this.state.user}'s Puppy List</h1>
          <button className="greetingBtn" onClick={this.sayHello}>Say hello!</button>
          <CreateGreeting showGreeting={this.state.showGreeting} user={this.state.user}/>
        </header>
        <button className="puppyPics" onClick={this.toggleImages}>Click for a surprise!</button>
        <PuppyList showImages={this.state.showImages} />
      </div>
    );
  };
};


export default App;
