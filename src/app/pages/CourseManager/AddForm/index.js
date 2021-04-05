import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components/macro';
import { Step1 } from './Step1';
import { Step2 } from './Step2';
import { Button } from 'app/components/Button';
import { useCourseSlice } from './slice';

export function AddForm() {
  const dispatch = useDispatch();
  const { actions } = useCourseSlice();
  const [course, setCourse] = useState({
    title: '',
    description: '',
    image: '',
    audio: '',
  });

  const [step, setStep] = useState(1);
  const [image, setImage] = useState({ preview: '', raw: '' });
  const [notes, setNotes] = useState({ raw: '' });

  const handleSubmit = () => {
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

  const nextStep = e => {
    e.preventDefault();
    setStep(step + 1);
  };

  const prevStep = e => {
    e.preventDefault();
    setStep(step - 1);
  };

  const { title, description } = course;
  return (
    <Wrapper>
      <AddFormWrap>
        <Form onSubmit={handleSubmit}>
          <Step1
            step={step}
            onHandle={handleChange}
            title={title}
            description={description}
          />
          <Step2
            step={step}
            onImage={handleImage}
            onHandleNotes={handleNotes}
            image={image}
          />
          <GroupButton>
            {step !== 1 && (
              <Button className="primary" onClick={prevStep}>
                Previous
              </Button>
            )}

            <Button
              className="primary"
              style={{ marginLeft: 'auto' }}
              onClick={nextStep}
            >
              Next
            </Button>
          </GroupButton>
        </Form>
      </AddFormWrap>
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
      </Preview>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: flex;
`;

const AddFormWrap = styled.section`
  display: flex;
  padding: 1.5rem;
  flex-direction: column;
  width: 50%;
  height: 100%;
  background-color: ${p => p.theme.backgroundVariant};
`;

const Preview = styled.section`
  display: flex;
  padding: 1.5rem;
  flex-direction: column;
  width: 50%;
  height: 100%;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const GroupButton = styled.div`
  margin-top: 1.5rem;
  display: flex;
  justify-content: space-between;
  margin-top: auto;
`;
