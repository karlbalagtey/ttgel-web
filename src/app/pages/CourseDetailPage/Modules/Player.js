import styled from 'styled-components/macro';
export function Player({ player }) {
  return (
    <ModulePlayer>
      <Image src={player.image} alt={player.title} />
      <Description>
        <h3>{player.title}</h3>
        <p>{player.description}</p>
      </Description>
    </ModulePlayer>
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
