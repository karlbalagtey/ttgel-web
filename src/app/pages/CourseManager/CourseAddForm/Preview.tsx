import React from 'react';
import styled from 'styled-components/macro';

export function PreviewWrap({ title, description, image, notes }) {
  return (
    <Preview>
      <h3>{title}</h3>
      <p>{description}</p>
      {image.preview && (
        <img
          src={image.preview}
          alt="Preview"
          width="250"
          height="250"
          style={{ marginBottom: '1.5rem' }}
        />
      )}
      <p>{notes.preview}</p>
    </Preview>
  );
}

const Preview = styled.section`
  display: flex;
  padding: 1.5rem;
  flex-direction: column;
  width: 50%;
  height: 100%;

  h3 {
    margin-bottom: 0;
  }

  p,
  h3 {
    color: ${p => p.theme.text};
  }
`;
