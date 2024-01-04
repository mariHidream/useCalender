import React, { useState, useEffect } from 'react';

import DiaryEditor from './DiaryEditor';
import DiaryList from './DiaryList';
import './App.css';

const dummyList = [
  {
    id : 1,
    author : "마리",
    content : "hi",
    emotion : 3,
    created_date : new Date().getTime()
  },{
    id : 2,
    author : "마리2",
    content : "hi2",
    emotion : 2,
    created_date : new Date().getTime()
  },{
    id : 3,
    author : "마리3",
    content : "hi3",
    emotion : 4,
    created_date : new Date().getTime()
  },{
    id : 4,
    author : "마리4",
    content : "hi4",
    emotion : 1,
    created_date : new Date().getTime()
  }
]

function App() {
  return (
    <div className='App'>
      <DiaryEditor />
      <DiaryList diary={dummyList}/>
    </div>
  );
}

export default App;
