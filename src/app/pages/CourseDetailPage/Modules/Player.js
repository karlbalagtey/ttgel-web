import styled from 'styled-components/macro';
import { useSelector } from 'react-redux';
import { selectId } from '../slice/selectors';

export function Player({ player }) {
  const courseId = useSelector(selectId);

  return (
    <>
      {courseId !== player.course && (
        <Reminder>
          <p>Last played...</p>
        </Reminder>
      )}
      <ModulePlayer>
        <Image src={player.image} alt={player.title} />
        <Description>
          <h3>{player.title}</h3>
          <p>{player.description}</p>
        </Description>
      </ModulePlayer>
    </>
  );
}

const ModulePlayer = styled.section`
  display: flex;
  padding: 1.5rem;
`;

const Image = styled.img`
  max-width: 100%;
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  color: ${p => p.theme.text};

  h3 {
    margin: 0;
  }
`;

const Reminder = styled.div`
  color: ${p => p.theme.text};
  padding: 0 1.5rem;
  padding-top: 1.5rem;
  border-top: 2px dashed ${p => p.theme.text};

  p {
    font-weight: 500;
    margin: 0;
  }
`;
