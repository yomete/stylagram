import React, { Component } from 'react';
import styled from 'styled-components'
import Header from './components/Header.js';
import Profile from './components/Profile.js';
import logo from './logo.svg';
import './App.css';

const AppWrapper = styled.div`
  background-color: #fafafa;
`

class App extends Component {
  render() {
    return (
      <AppWrapper>
        
        <Header></Header>

        <Profile></Profile>
        
      </AppWrapper>
    );
  }
}

export default App;
