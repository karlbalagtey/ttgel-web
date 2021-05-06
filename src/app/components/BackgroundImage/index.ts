import bgImage from '../assets/map-image.png';
import styled from 'styled-components/macro';
import { StyleConstants } from 'styles/StyleConstants';

export const BackgroundImage = styled.div`
  height: calc(100vh - ${StyleConstants.NAV_BAR_HEIGHT});
  max-width: 100%;
  width: 100%;
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
