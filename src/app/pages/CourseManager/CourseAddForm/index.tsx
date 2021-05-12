import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { Wrapper, CourseAddFormWrap, ImageUploadWrap } from './styles';
import { Input } from 'app/components/Input';
import { Textarea } from 'app/components/Textarea';
import { Title } from './components/Title';

import { useCourseSlice } from './slice';
import { Form } from './components/Form';
import { SubmitButton } from './components/Buttons';

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
  const [notes, setNotes] = useState({ preview: '', raw: '' });

  const handleSubmit = e => {
    e.preventDefault();
    console.log(course);
    dispatch(actions.addCourse(course));
  };

  const handleUpload = () => {
    console.log(image.raw);
    dispatch(actions.uploadFiles(image.raw));
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
      setNotes({
        preview: URL.createObjectURL(e.target.files[0]),
        raw: e.target.files[0],
      });
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
          <SubmitButton type="submit" className="primary">
            Submit
          </SubmitButton>
        </Form>
      </CourseAddFormWrap>
      <CourseAddFormWrap>
        <Form onSubmit={handleUpload}>
          <ImageUploadWrap>
            {image.preview && (
              <img
                src={image.preview}
                alt="Preview"
                width="250"
                height="250"
                style={{ marginBottom: '1.5rem' }}
              />
            )}
            <Input
              type="file"
              label="Image"
              name="image"
              labelFor="image"
              onChange={handleImage}
              required
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
            Upload
          </SubmitButton>
        </Form>
      </CourseAddFormWrap>
    </Wrapper>
  );
}
