import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components/macro';
import { Step1 } from './Step1';
import { Step2 } from './Step2';
import { useCourseSlice } from './slice';
import { Form } from './components/Form';
import { Button, GroupButton, SubmitButton } from './components/Buttons';
import { PreviewWrap } from './Preview';

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
            notes={notes}
          />
          {step <= 2 && (
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
          )}
          {step > 2 && (
            <GroupButton>
              <Button className="primary" onClick={prevStep}>
                Previous
              </Button>
              <SubmitButton type="submit" className="primary">
                Submit
              </SubmitButton>
            </GroupButton>
          )}
        </Form>
      </AddFormWrap>
      <PreviewWrap
        title={title}
        description={description}
        image={image}
        step={step}
      />
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
