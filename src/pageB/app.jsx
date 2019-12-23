import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background: #333;
`;

const Inner = styled.p`
  font-size: 20px;
  font-weight: 900;
  color: #fff;
`;

export class App extends Component {
  state = {};

  render () {
    return (
      <Container>
        <Inner> {'Page B'}</Inner>
      </Container>
    )
  }
}

export default App;
