import React from "react";
import "./App.css";
import { MainMenu } from "./templates/mainMenu";
import { LoginMenu } from "./templates/loginMenu";
import { NotFound } from "./notFound";
/* route */
import { Route, Switch } from "react-router-dom";
import { Redirect } from "react-router";
import { BrowserRouter } from "react-router-dom";
/* route */

import { Provider } from "react-redux"; //provider react-redux

import { configureStore } from './store/index'
const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path="/" render={() => <Redirect to="/home" />} />
            <Route path="/home" component={MainMenu} />
            <Route path="/login" component={LoginMenu} />
            <Route exact path="/notfound" component={NotFound} />
            <Redirect from="/" to="/notfound" />
          </Switch>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
