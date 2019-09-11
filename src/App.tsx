import React from 'react';
import styled from 'styled-components/native';

const Wrapper = styled.View`
  background: white;
`;

const Welcome = styled.Text`
  color: red;
`;

export const App = () => {
  return (
    <Wrapper>
      <Welcome>Hello TV</Welcome>
    </Wrapper>
  );
};
