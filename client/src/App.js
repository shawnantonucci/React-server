import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "./actions";
import styled, { ThemeProvider } from "styled-components";
// import theme from './theme';               //// theme
import theme from "styled-theming";

import Header from "./components/Header.js";
import Landing from "./components/Landing";
import Dashboard from './components/Dashboard';
const SurveyNew = () => <h2>SurveyNew</h2>;

// const Container = styled.div`
//   height: 100vh;
//   width: 100%;                             //// theme
//   background-color: pink;
// `;

const boxBackgroundColor = theme("mode", {
  light: "#fff",
  dark: "#000"
});

const Box = styled.div`
  background-color: ${boxBackgroundColor};
`;

const Container = styled.div`
  background-color: ${boxBackgroundColor};
  color: ${boxBackgroundColor};
`;

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      // <ThemeProvider theme={{ mode: "light" }}>
        <Container className="container">
          <BrowserRouter>
            <div>
              <Header />

              <Route exact path="/" component={Landing} />
              <Route exact path="/surveys" component={Dashboard} />
              <Route path="/surveys/new" component={SurveyNew} />
            </div>
          </BrowserRouter>
        </Container>
      // </ThemeProvider>
    );
  }
}

export default connect(
  null,
  actions
)(App);
