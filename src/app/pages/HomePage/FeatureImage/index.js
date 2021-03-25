import styled from 'styled-components/macro';
import featureImage from '../assets/graduates.jpg';

export function FeatureImage() {
  return (
    <ImageContainer>
      <Image src={featureImage} alt="Graduates" />
    </ImageContainer>
  );
}

const ImageContainer = styled.section`
  display: block;
`;

const Image = styled.img`
  max-width: 100%;
`;
