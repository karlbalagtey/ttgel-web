import * as React from 'react';
import styled from 'styled-components/macro';
import bgImage from './assets/map-image.png';
import { StyleConstants } from 'styles/StyleConstants';

export function Masthead(props) {
  return (
    <BackgroundImage>
      <Wrapper>
        <Title>User Login</Title>
        <Description>Login to view course materials</Description>
        {props.children}
      </Wrapper>
    </BackgroundImage>
  );
}

const Wrapper = styled.section`
  max-width: ${StyleConstants.WIDTH};
`;

const Description = styled.p`
  color: ${p => p.theme.text};
`;

const Title = styled.h1`
  font-weight: 700;
  text-transform: uppercase;
  text-align: center;
  color: ${p => p.theme.text};
`;

const BackgroundImage = styled.main`
  height: calc(100vh - ${StyleConstants.NAV_BAR_HEIGHT});
  max-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url(${bgImage});
  background-color: ${p => p.theme.backgroundDarker};
  background-attachment: scroll;
  background-position: center center;
  background-size: cover;
`;
