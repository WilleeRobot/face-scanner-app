import React, { Component } from "react";
import Navigation from "./components/Navigation/Navigation";
import Logo from "./components/Logo/Logo";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import Rank from "./components/Rank/Rank";
import Background from "./components/Background/Background";
import "./App.css";
import Clarifai from "clarifai";

const app = new Clarifai.App({
  apiKey: "2482d8bba84f44ea8f9c1805cf48db78",
});

console.log(Clarifai);
class App extends Component {
  // state to track user-entered url
  constructor() {
    super();
    this.state = {
      input: "",
    };
  }

  onInputChange = (event) => {
    console.log(event.target.value);
  };

  onButtonSubmit = () => {
    console.log("click");
    app.models
      .predict(
        {
          id: "face-detection",
          name: "face",
          version: "6dc7e46bc9124c5c8824be4822abe105",
          type: "visual-detector",
        },
        "https://samples.clarifai.com/3o6gb3kkXfLvdKEZs4.gif"
      )
      .then(console.log)
      .catch(console.log);
  };

  render() {
    return (
      <div className="App">
        <Background />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm
          onInputChange={this.onInputChange}
          onButtonSubmit={this.onButtonSubmit}
        />
        {/* <FaceRecognition /> */}
      </div>
    );
  }
}

export default App;
