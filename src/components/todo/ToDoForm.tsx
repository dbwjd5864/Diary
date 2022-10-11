import React, { FormEvent, useState } from 'react';

import {
  Form,
  FormContainer,
  Label,
  Input,
  ToDoButton,
  SubmitResult,
  Success,
  Failure,
  FailureContainer,
} from './styles';
import { FaPencilAlt } from 'react-icons/fa';

const ToDoForm = () => {
  const [currentDate, setCurrentDate] = useState('');
  const [newToDo, setNewToDo] = useState('');

  const [todoValid, setTodoValid] = useState(false);
  const [dateValid, setDateValid] = useState(false);
  const [errorMessage, setErrorMessage] = useState({
    todo: '',
    date: '',
  });

  const handleDateUpdate = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentDate(e.target.value);
  };

  const handleToDoUpdate = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewToDo(e.target.value);
  };

  const handleToDoSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <FormContainer>
      <Form onSubmit={handleToDoSubmit}>
        <Label>
          Choose a date:
          <Input
            onChange={handleDateUpdate}
            type="date"
            id="datePicker"
            value={currentDate}
            placeholder="YYYY-MM-DD"
          />
          <Input
            onChange={handleToDoUpdate}
            type="text"
            value={newToDo}
            placeholder="Make a To-Do List"
          />
        </Label>
        <ToDoButton>
          <FaPencilAlt aria-hidden="true" />
        </ToDoButton>
      </Form>
      <SubmitResult>
        {todoValid && dateValid && <Success>Successfully submitted</Success>}
        {!todoValid && !dateValid ? (
          <FailureContainer>
            <Failure>{errorMessage.todo}</Failure>
            <Failure>{errorMessage.date}</Failure>
          </FailureContainer>
        ) : !todoValid ? (
          <Failure>{errorMessage.todo}</Failure>
        ) : (
          <Failure>{errorMessage.date}</Failure>
        )}
      </SubmitResult>
    </FormContainer>
  );
};

export default ToDoForm;
