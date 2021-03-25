import styled from 'styled-components/macro';
import { Image } from './Image';

export const Card = ({ props }) => {
  return (
    <Wrapper>
      <Image src={props.src} alt={props.alt} />
      <Content>{props.description}</Content>
      <Title>{props.title}</Title>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  border: 1px solid ${p => p.theme.border};
`;

const Title = styled.h3`
  font-size: 1.5rem;
  font-weight: 500;
  padding: 1rem;
  color: ${p => p.theme.text};
`;

const Content = styled.p`
  font-size: 1rem;
  padding: 1rem;
  color: ${p => p.theme.textSecondary};
`;
