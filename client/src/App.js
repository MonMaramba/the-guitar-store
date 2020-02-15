import React from "react";
import axios from "axios";

class App extends React.Component {
  componentDidMount() {
    axios.get("/api/product/brands").then(response => {
      console.log(response);
    });
  }
  render() {
    return <div className="App"></div>;
  }
}

export default App;
