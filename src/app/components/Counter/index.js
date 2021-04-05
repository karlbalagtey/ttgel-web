import React from 'react';
import styled from 'styled-components/macro';

export function Counter() {
  const refreshTime = localStorage.getItem('expInMil') / 1000;
  const [counter, setCounter] = React.useState(refreshTime);

  React.useEffect(() => {
    counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
  }, [counter]);

  return (
    <Wrapper>
      <strong>Refresh Counter: {counter}</strong>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: absolute;
  background: ${p => p.theme.background};
  z-index: 888;
  bottom: 0;
  left: 0;
  padding: 1rem;
`;
