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

export default class PageSample extends Component {
  state = {};

  render() {
    const { title = '' } = this.props;

return (
      <Container>
        <Inner>
{' '}
{title}
        </Inner>
      </Container>
    );
  }
}
