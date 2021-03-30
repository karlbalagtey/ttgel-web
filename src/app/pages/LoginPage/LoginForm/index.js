import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import styled from 'styled-components/macro';
import { Input } from 'app/components/Input';
import { Button } from 'app/components/Button';
import { useLoginSlice } from './slice';
import { selectAuth } from './slice/selectors';

export function LoginForm() {
  const [user, setUser] = React.useState({
    email: '',
    password: '',
  });

  const dispatch = useDispatch();
  const { actions } = useLoginSlice();
  const history = useHistory();
  const auth = useSelector(selectAuth);
  const { error } = useSelector(state => state.login);

  const handleSubmit = e => {
    e.preventDefault();
    console.log(user);
    dispatch(actions.login(user));
  };

  const handleChange = e => {
    const { value, name } = e.target;
    setUser({ ...user, [name]: value });
  };

  React.useEffect(() => {
    if (auth) {
      history.push('/dashboard');
    }
  }, [history, auth]);

  const { email, password } = user;
  return (
    <FormGroup onSubmit={handleSubmit}>
      {error && <Message>{error}</Message>}
      <Input
        type="text"
        name="email"
        onChange={handleChange}
        label="Email Address"
        value={email}
        placeholder="Enter email address here"
        required
      />
      <Input
        type="password"
        name="password"
        onChange={handleChange}
        label="Password"
        value={password}
        placeholder="Enter password here "
        required
      />
      <Button className="primary w-100" type="submit">
        Login
      </Button>
    </FormGroup>
  );
}

const FormGroup = styled.form`
  width: 400px;

  div {
    display: flex;
  }

  label {
    display: flex;
    min-width: 100px;
    text-align: left;
    margin-right: 20px;
    white-space: nowrap;
    align-items: center;
  }
`;

const Message = styled.p`
  color: red;
`;
