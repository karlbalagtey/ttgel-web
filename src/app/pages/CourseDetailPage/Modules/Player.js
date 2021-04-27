import styled from 'styled-components/macro';
import { useSelector } from 'react-redux';
import { selectId } from '../slice/selectors';
import { Image } from 'app/components/Image';

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
        <Image
          src={player.image}
          alt={player.title}
          width={200}
          height={200}
          style={{ width: '200px' }}
        />
        <Description>
          <h3>{player.title}</h3>
          <p>{player.description}</p>
        </Description>
        <audio controls>
          <source src={player.audio} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      </ModulePlayer>
    </>
  );
}

const ModulePlayer = styled.section`
  display: flex;
  padding: 1.5rem;
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
