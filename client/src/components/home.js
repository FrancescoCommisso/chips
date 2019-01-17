import React, { Component } from "react";
import "./home.css";

class Home extends Component {
  state = {};
  render() {
    return (
      <div class="bg-dark Absolute-Center">
        <div>
          <button>Create Table</button>
        </div>

        <div>
          <button>Join Table</button>
        </div>
      </div>
    );
  }
}

export default Home;
