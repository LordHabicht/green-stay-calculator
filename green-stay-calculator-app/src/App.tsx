import React from 'react';
import logo from './logo.svg';
import './App.css';
import { CalculatorPage } from './pages/CalculatorPage';
import { ResultPage } from './pages/ResultPage';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import styled from 'styled-components';

declare module 'react-router-dom'

const Wrapper = styled.div`
  width: 50%;
  background-color: #fff;
  padding: 10px;
  margin: 0;
  position: absolute;
  top: 50%;
  left: 25%;
  transform: translateY(-50%);
  border-radius: 12px;
  padding: 2em 5em 5em  5em;
  box-shadow: 10px 5px 5px #BBB;
  `

function App() {
  return (
    <Router>
      <Wrapper>
        <Switch>
          <Route path="/result">
            <ResultPage id={1} />
          </Route>
          <Route path="/">
            <CalculatorPage id={2} />
          </Route>
        </Switch>
      </Wrapper>
    </Router>
  );
}

export default App;
