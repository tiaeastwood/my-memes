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
          <h1 className="bigtext">Know Your Memes!</h1>
          <button onClick={this.sayHello}>Pointless button that says hello to you</button>
          <CreateGreeting showGreeting={this.state.showGreeting} user={this.state.user} />
        </header>
        <section>
          <h1 className="orangetext"><span role='img' aria-label='dog emoji'>🐶</span> {this.state.user}'s Top Dogs <span role='img' aria-label='dog emoji'>🐶</span></h1>
          <button onClick={this.toggleImages}>Click to reveal quality content</button>
          <PuppyList showImages={this.state.showImages} />
        </section>
      </div>
    );
  };
};


export default App;
