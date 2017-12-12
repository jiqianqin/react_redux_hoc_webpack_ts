import React from "react";
import { render } from "react-dom";
import {App1} from "./app";
import {MainRouter} from "./router/router";

class App extends React.Component<any, any> {
    public render() {
      return (
        <div> <App1 /> </div>
      );
    }
  }
render(<App />, document.getElementById("app"));
