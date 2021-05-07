import styled from 'styled-components/macro';
import { MenuWrap, MenuItem } from '../components/Menu';
import { StyleConstants } from 'styles/StyleConstants';

export { MenuItem };
export const Popup = styled(MenuWrap)`
  position: absolute;
  background: ${p => p.theme.background};
  border: 1px solid ${p => p.theme.border};
  border-top: 0;
  top: ${StyleConstants.NAV_BAR_HEIGHT};
  right: 0;
  display: flex;
  flex-direction: column;
  width: 100%;
  min-width: 165px;
  box-shadow: 6px 7px 7px -6px;

  a {
    text-decoration: none;
    display: flex;
    width: 100%;
  }

  button {
    border: 0;
    background: transparent;
    cursor: pointer;
    text-align: left;
    display: flex;
    width: 100%;
  }

  p {
    margin-left: 1rem;
    margin-top: 0;
    margin-bottom: 0;
  }

  svg,
  p {
    transition: all 0.4s;
  }

  a,
  button {
    color: ${p => p.theme.text};
    padding: 1rem;

    &:hover {
      p {
        color: ${p => p.theme.textHighlight};
      }
      svg {
        fill: ${p => p.theme.textHighlight};
      }
    }
  }
`;
