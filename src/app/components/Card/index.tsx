import styled from 'styled-components/macro';
import { Image } from './Image';

interface CardProps {
  image: string;
  title: string;
  description: string;
}

export const Card: React.FC<CardProps> = ({ image, title, description }) => {
  return (
    <Wrapper>
      <Image src={image} alt={title} />
      <Title>{title}</Title>
      <Content>{description}</Content>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  border: 1px solid ${p => p.theme.border};

  &:hover {
    cursor: pointer;

    h3 {
      color: ${p => p.theme.textHighlight};
    }

    p {
      color: ${p => p.theme.primary};
    }
  }
`;

const Title = styled.h3`
  font-size: 1.5rem;
  font-weight: 500;
  padding: 1rem;
  margin: 0;
  color: ${p => p.theme.text};
  transition: color 0.4s;
`;

const Content = styled.p`
  position: absolute;
  top: 0;
  left: 0;
  background-color: ${p => p.theme.background};
  font-size: 1rem;
  padding: 1rem;
  color: ${p => p.theme.textSecondary};
  transition: color 0.4s;
`;
