import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectStatus, selectInfo } from './slice/selectors';
import styled, { keyframes } from 'styled-components';
import { ReactComponent as CloseIcon } from '../assets/close_black_24dp.svg';
import { useSnackbarSlice } from './slice';
import { setPosition } from './util';

export function SnackBar() {
  const dispatch = useDispatch();
  const { actions } = useSnackbarSlice();
  const show = useSelector(selectStatus);
  const { timeout, message, type, position, autoClose } = useSelector(
    selectInfo,
  );

  let snackbarPosition;
  let time = (timeout - 500) / 1000 + 's';
  let timer;
  const handleTimeout = React.useCallback(() => {
    timer = setTimeout(() => {
      dispatch(actions.close());
    }, timeout);
  });

  const handleClose = () => {
    clearTimeout(timer);
    dispatch(actions.close());
  };

  React.useEffect(() => {
    if (autoClose) {
      handleTimeout();
    }
    return () => {
      clearTimeout(timer);
    };
  }, [autoClose, timer, show, handleTimeout]);

  snackbarPosition = setPosition(position, snackbarPosition);

  return (
    show && (
      <Wrapper time={time} className={type} position={snackbarPosition}>
        <Message>{message}</Message>
        {!autoClose && (
          <Button onClick={handleClose}>
            <CloseIcon />
          </Button>
        )}
      </Wrapper>
    )
  );
}

const fadein = pos => keyframes`
  from {
    ${pos.top ? 'top: 0' : 'bottom: 0'};
    opacity: 0;
  }
  to {
    ${pos.top ? 'top: 1rem' : 'bottom: 1rem'};
    opacity: 1;
  }
`;

const fadeout = pos => keyframes`
  from {
    ${pos.top ? 'top: 1rem' : 'bottom: 1rem'};
    opacity: 1;
  }
  to {
    ${pos.top ? 'top: 0' : 'bottom: 0'};
    opacity: 0;
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 1000;
  ${props => (props.position.top ? 'top: 1rem' : 'bottom: 1rem')};
  ${props => (props.position.center ? 'left: 50%' : null)};
  ${props => (props.position.left ? 'left: 1rem' : 'right: 1rem')};
  transform: ${props => (props.position.center ? 'translateX(-50%)' : null)};
  width: max-content;
  min-width: min-content;
  height: auto;
  padding: 1rem;
  /* animation: ${props => fadein(props.position)} 0.5s,
    ${props => fadeout(props.position)} 0.5s ${props => props.time}; */

  &.success {
    background-color: ${p => p.theme.textHighlight};
  }

  &.error {
    background-color: red;
  }

  &.info {
    background-color: #58a6ff;
  }
`;

const Message = styled.p`
  color: #fff;
  margin: 0;
`;

const Button = styled.button`
  color: #fff;
  margin-left: auto;
  background: transparent;
  border: 0;
  margin-left: 1rem;
  cursor: pointer;

  svg {
    fill: #fff;
  }
`;
