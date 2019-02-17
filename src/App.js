import React, { Component } from "react";
import Wrapper from "./components/Wrapper";
import Nav from "./components/Nav";
import Cat from "./components/Cat";
import Kittens from "./kittens.json";

let topScore = 0;
let currentScore = 0;
let message = "Click on an image to begin!";

class App extends Component {
  // Setting this.state.kittens equal to json
  state = {
    Kittens,
    topScore,
    currentScore,
    message
  };

  componentDidMount() {
    this.loadKittens();
  }

  loadKittens() {
    this.setState({Kittens: this.shuffleArray(Kittens)});
  }

  // Function for shuffling our kittens array
  shuffleArray = array => {
  let i = array.length - 1;
  for (; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

  setClicked = id => {
    
  };

  render() {
    return (
      <div>
      <Nav 
        message={this.state.message}
        topScore={this.state.topScore}
        currentScore={this.state.currentScore}
      />
      <Wrapper>
          {this.state.Kittens.map(kitten => (
            <Cat
              setClicked={this.setClicked}
              id={kitten.id}
              src={kitten.src}
              clicked={kitten.clicked}
            />
          ))}
      </Wrapper>
      </div>
      
    );
  }
}

export default App;
