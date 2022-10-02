import { Section } from './styles';
import React, { useEffect, useState } from 'react';
import ToDoList from '../../components/todo/ToDoList';
import { handleErrors } from '../../utils/handleErrors';
import axios from 'axios';

const ToDo = () => {
  const [toDo, setToDo] = useState<any[]>([]);

  useEffect(() => {
    getToDoList();
  }, []);

  const getToDoList = handleErrors(async () => {
    const result = await axios.get('/api/v1/toDoLists');
    console.log(result.data);
  });

  return (
    <Section>
      <ToDoList lists={toDo} />
    </Section>
  );
};

export default ToDo;
