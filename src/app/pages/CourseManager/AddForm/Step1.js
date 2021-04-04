import React from 'react';
import { Input } from 'app/components/Input';
import { Textarea } from 'app/components/Textarea';
import { Title } from './components/Title';

export function Step1({ step, onHandle, title, description }) {
  return (
    step === 1 && (
      <>
        <Title>Course Details</Title>
        <Input
          type="text"
          name="title"
          value={title}
          onChange={onHandle}
          placeholder="Enter course title"
          required
        />
        <Textarea
          type="textarea"
          name="description"
          rows="10"
          onChange={onHandle}
          placeholder="Enter course description"
          value={description}
          required
        />
      </>
    )
  );
}
