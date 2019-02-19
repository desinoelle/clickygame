import React, { Component } from "react";
import Wrapper from "./components/Wrapper";
import Nav from "./components/Nav";
import Cat from "./components/Cat";
import Kittens from "./kittens.json";

class App extends Component {
  // Setting this.state.kittens equal to json
  state = {
    Kittens: Kittens,
    unclickedCats: Kittens,
    topScore: 0,
    currentScore: 0,
    message: "Click on an image to begin!"
  };

  componentDidMount() {
    this.setKittens();
  }

  setKittens() {
    this.setState({Kittens: this.shuffleArray(this.state.Kittens)});
  }

  setClicked = id => {
   // Shuffle Kittens
   const shuffle = this.shuffleArray(Kittens);
   this.setState({Kittens: shuffle});

   const findCat = this.state.unclickedCats.find(item => item.id === id)

   // Find out if kitten has been clicked
   if (findCat === undefined) {
     this.setState({
       Kittens: Kittens,
       unclickedCats: Kittens,
       currentScore: 0,
       message: "Oops! That's already been clicked! Click on a kitty to start again."
     });
   }
   else {
     const newCats = this.state.unclickedCats.filter(item => item.id !== id);

     this.setState({
       Kittens: Kittens,
       unclickedCats: newCats,
       currentScore: this.state.currentScore + 1,
       message: "Good Job!"
     })
   }

   // Set topScore equal to currentScore if current > top
   if (this.state.currentScore > this.state.topScore) {
     this.setState({topScore: this.state.currentScore});
   }
  };

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
            key={kitten.id}
              setClicked={this.setClicked}
              id={kitten.id}
              src={kitten.src}
            />
          ))}
      </Wrapper>
      </div>
    );
  }
}

export default App;
