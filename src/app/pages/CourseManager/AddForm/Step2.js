import React from 'react';
import { Input } from 'app/components/Input';
import { Title } from './components/Title';

import styled from 'styled-components/macro';

export function Step2({ step, onImage, onHandleNotes }) {
  return (
    step === 2 && (
      <>
        <Title>Upload Files</Title>
        <ImageUploadWrap>
          <Input
            type="file"
            label="Image"
            name="image"
            labelFor="image"
            onChange={onImage}
          />
        </ImageUploadWrap>
        <Input
          type="file"
          label="Notes"
          name="notes"
          labelFor="notes"
          onChange={onHandleNotes}
        />
      </>
    )
  );
}

const ImageUploadWrap = styled.div`
  background-color: ${p => p.theme.backgroundVariant};
`;
