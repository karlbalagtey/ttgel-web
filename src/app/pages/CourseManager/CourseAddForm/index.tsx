import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components/macro';

import { Input } from 'app/components/Input';
import { Textarea } from 'app/components/Textarea';
import { Title } from './components/Title';

import { useCourseSlice } from './slice';
import { Form } from './components/Form';
import { SubmitButton } from './components/Buttons';
import { PreviewWrap } from './Preview';

export function CourseAddForm() {
  const dispatch = useDispatch();
  const { actions } = useCourseSlice();
  const [course, setCourse] = useState({
    title: '',
    description: '',
    image: '',
    audio: '',
  });

  const [image, setImage] = useState({ preview: '', raw: '' });
  const [notes, setNotes] = useState({ raw: '' });

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(actions.addCourse(course));
  };

  const handleImage = e => {
    if (e.target.files.length) {
      setImage({
        preview: URL.createObjectURL(e.target.files[0]),
        raw: e.target.files[0],
      });
    }
  };

  const handleNotes = e => {
    if (e.target.files.length) {
      setNotes({ raw: e.target.files[0] });
    }
  };

  const handleChange = e => {
    const { value, name } = e.target;
    setCourse({ ...course, [name]: value });
    console.log(course);
  };

  const { title, description } = course;
  return (
    <Wrapper>
      <CourseAddFormWrap>
        <Form onSubmit={handleSubmit}>
          <Title>Course Details</Title>
          <Input
            type="text"
            name="title"
            value={title}
            onChange={handleChange}
            placeholder="Enter course title"
            required
          />
          <Textarea
            type="textarea"
            name="description"
            rows="5"
            onChange={handleChange}
            placeholder="Enter course description"
            value={description}
            required
          />
          <ImageUploadWrap>
            <Input
              type="file"
              label="Image"
              name="image"
              labelFor="image"
              onChange={handleImage}
            />
          </ImageUploadWrap>
          <Input
            type="file"
            label="Notes"
            name="notes"
            labelFor="notes"
            onChange={handleNotes}
          />

          <SubmitButton type="submit" className="primary">
            Submit
          </SubmitButton>
        </Form>
      </CourseAddFormWrap>
      <PreviewWrap title={title} description={description} image={image} />
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: flex;
`;

const CourseAddFormWrap = styled.section`
  display: flex;
  padding: 1.5rem;
  flex-direction: column;
  width: 50%;
  height: 100%;
  background-color: ${p => p.theme.backgroundVariant};
`;

const ImageUploadWrap = styled.div`
  background-color: ${p => p.theme.backgroundVariant};
`;
