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
  margin: auto;
  width: 50%;
  border: 3px solid green;
  padding: 10px;
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
