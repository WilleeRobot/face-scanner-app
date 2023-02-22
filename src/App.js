import React, { Component } from "react";
import Navigation from "./components/Navigation/Navigation";
import Logo from "./components/Logo/Logo";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import Rank from "./components/Rank/Rank";
import Background from "./components/Background/Background";
import FaceRecognition from "./components/FaceRecognition/FaceRecognition";
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
      imageUrl: "",
    };
  }

  onInputChange = (event) => {
    this.setState({ input: event.target.value });
  };

  onButtonSubmit = () => {
    this.setState({ imageUrl: this.state.input });
    app.models
      .predict(
        {
          id: "face-detection",
          name: "face-detection",
          version: "6dc7e46bc9124c5c8824be4822abe105",
          type: "visual-detector",
        },
        this.state.input
      )
      .then((response) =>
        console.log(
          response.outputs[0].data.regions[0].region_info.bounding_box
        )
      )
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
        <FaceRecognition imageUrl={this.state.imageUrl} />
      </div>
    );
  }
}

export default App;
