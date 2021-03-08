import React from 'react';

import ToDoToday from './components/todo/ToDoToday';
import Diary from './components/diary/Diary';

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
          <ToDoToday />
          <Diary />
        </div>
      </>
    );
  }
}
export default App;
