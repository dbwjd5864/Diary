import React from 'react';

import ToDoToday from './components/todo/ToDoToday';
import Diary from './components/diary/Diary';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NotFound from './page/NotFound';
import Home from './page/Home';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todo" element={<ToDoToday />} />
        <Route path="/diary" element={<Diary />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
