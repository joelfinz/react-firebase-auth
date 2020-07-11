import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import SignUp from "./SignUp";
import { AuthProvider } from "./Auth";
import PrivateRoute from "./PrivateRoute.js";
import { Grid } from "semantic-ui-react";

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Grid container={true} centered={true}>
          <div className="container">
            <PrivateRoute exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={SignUp} />
          </div>
        </Grid>
      </Router>
    </AuthProvider>
  );
};

export default App;