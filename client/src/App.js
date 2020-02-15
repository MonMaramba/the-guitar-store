import React from "react";
import axios from "axios";

class App extends React.Component {
  componentDidMount() {
    axios.get("/api/product/brands").then(response => {
      console.log("Knock knock!", response);
    });
  }
  render() {
    return <div className="App">Hello! Hello!</div>;
  }
}

export default App;
