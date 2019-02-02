import React, { Component } from "react";
import Wrapper from "./components/Wrapper";
import Nav from "./components/Nav.js";
import Cat from "./components/Cat.js"
import Kittens from "./kittens.json";

let topScore = 0;
let currentScore = 0;
let message = "Click on an image to begin!";

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
    Kittens,
    topScore,
    currentScore,
    message
  };

  setClicked = id => {
    // Filter kittens
    let Kitten = this.state.Kittens.filter(Kitten => Kitten.id !== id);
    
    // Conditionals for determining click
    if (Kitten.clicked === true) {
      currentScore = 0;
      message = "Oops! You Lost! Starting over...";

      for (let i = 0; i < Kittens.length; i++) {
        Kittens[i].clicked = false;
      }

      this.setState({Kittens});
      this.setState({currentScore});
      this.setState({message});

    }
    else {
      Kitten.clicked = true;

      currentScore = currentScore + 1;
      message = "Correct!";

      // Change top score if needed
      if (currentScore > topScore) {
        topScore = currentScore;
        this.setState({topScore});
      }

      // Shuffle kittens
      shuffleArray(Kittens);

      this.setState({Kittens});
      this.setState({currentScore});
      this.setState({message});
    }
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
        <div className="row">
          {this.state.Kittens.map(kitten => (
            <Cat
              setClicked={this.setClicked}
              id={kitten.id}
              src={kitten.src}
              clicked={kitten.clicked}
              className="col-sm-1"
            />
          ))}
        </div>
      </Wrapper>
      </div>
      
    );
  }
}

export default App;
