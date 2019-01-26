import React, { Component } from "react";
import Wrapper from "./components/Wrapper";
import Nav from "./components/Nav.js";
import Cat from "./components/Cat.js"
import kittens from "./kittens.json";

// Function for shuffling our kittens array
function shuffleArray(array) {
    let i = array.length - 1;
    for (; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
}

class App extends Component {
  // Setting this.state.kittens equal to json
  state = {
    kittens
  };

  picClick = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const kittens= this.state.kittens.filter(kitten => kitten.id !== id);
    // Set this.state.friends equal to the new friends array
    this.setState({ kittens });
  };

  render() {
    // Shuffle kittens
    let shuffledKittens = shuffleArray(this.state.kittens);
    return (
      <div>
      <Nav />
      <Wrapper>
        {shuffledKittens.map(kitten => (
          <Cat
            picClick={this.picClick}
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
