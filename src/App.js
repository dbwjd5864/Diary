import React from 'react';

import Today from './components/toDo/ToDoToday.js';
import Diary from './components/diary/Diary.js';

class App extends React.Component {
  render() {
    return (
      <>
        <div className="app">
          <nav className="nav-bar">
            <ul>
              <li className="nav-element">How Is Your Day?</li>
            </ul>
          </nav>
          <Today />
          <Diary />
        </div>
      </>
    );
  }
}
export default App;
