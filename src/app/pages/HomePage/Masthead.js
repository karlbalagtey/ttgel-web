import * as React from 'react';
import styled from 'styled-components/macro';
import bgImage from './assets/header-bg.jpg';
import { StyleConstants } from 'styles/StyleConstants';

export function Masthead() {
  return (
    <BackgroundImage>
      <Wrapper>
        <Title>Preparing God's people to work with him</Title>
      </Wrapper>
    </BackgroundImage>
  );
}

const Wrapper = styled.section`
  max-width: ${StyleConstants.WIDTH};
`;

const Title = styled.h1`
  font-size: 75px;
  font-weight: 700;
  text-transform: uppercase;
  margin-bottom: 50px;
  text-shadow: -2px -3px ${p => p.theme.background};
  text-align: center;
  color: ${p => p.theme.textSecondary};
`;

const BackgroundImage = styled.main`
  height: 100vh;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url(${bgImage});
  background-attachment: scroll;
  background-position: center center;
  background-size: cover;
`;
