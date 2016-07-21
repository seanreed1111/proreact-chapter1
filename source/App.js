import React from 'react';
import {render} from 'react-dom'
import KanbanBoard from './KanbanBoard';

let cardsList = [
  {
    id:1,
    title: "Read my Book 1",
    description: "This is my book description 1",
    status: "in-progress",
    tasks: []
  },
  {
    id:2,
    title: "Read my Book 2",
    description: "This is my book description 2",
    status: "todo",
    tasks: [
      {
        id:1,
        name: "Task 1 for id 2 - done",
        done: true
      },
      {
        id:2,
        name: "Task 2 for id 2 - not done",
        done: false
      },
      {
        id:3,
        name: "Task 3 for id 2 - not done",
        done: false
      },

    ]
  }
];

React.render(<KanbanBoard cards={cardsList} />, document.getElementById('root'));
