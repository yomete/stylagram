import React, { Component } from 'react';
import styled from 'styled-components'
import Header from './components/Header.js';
import Profile from './components/Profile.js';
import GlobalStyle from './theme/globalStyle'
import './App.css';

const AppWrapper = styled.div`
  background-color: #fafafa;
`

class App extends Component {
  render() {
    return (
      <>
        <GlobalStyle />
        <AppWrapper>
          
          <Header></Header>

          <Profile></Profile>
          
        </AppWrapper>
      </>
    );
  }
}

export default App;
