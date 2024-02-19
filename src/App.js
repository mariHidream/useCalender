
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './pages/Home'
import Diary from './pages/Diary'
import Edit from './pages/Edit'
import New from './pages/New'
import React, { useReducer, useRef } from 'react';

const reducer = (state, action) => {
  let newState = [];
  switch(action.type){
    case 'INIT' : {
      return action.data;
    }
    case 'CREATE' : {
      newState = [action.data, ...state];
      break;
    }
    case 'REMOVE' : {
      newState = state.filter((it)=> it.id !== action.targetId);
      break;
    }
    case 'EDIT' : {
      newState = state.map((it) => it.id === action.data.id ? { ...action.data } : it );
      break;
    }
    default : return state;
  }
  return newState;
}

export const DiaryStateContext = React.createContext();

export const DiaryDispatchContext = React.createContext();


function App() {

  const [data, dispatch] = useReducer(reducer, []);

  const dataId = useRef(0);

// CREATE
  const onCreate = (data, content, emotion) => {
    dispatch({type : "CREATE", data : {
      id : dataId.current,
      data : new Date(data).getTime(),
      content,
      emotion,
    }});
    dataId.current += 1;
  }
// REMOVE
  const onRemove = (targetId) => {
    dispatch({type : "REMOVE", targetId})
  }
// EDIT
  const onEdit = (targetId, date,content, emotion) => {
    dispatch({
      type : "EDIT",
      data : {
        id : targetId,
        date : new Date(date).getTime(),
        content,
        emotion
      }
    });
  }

  return (
    <DiaryStateContext.Provider value={data}>
      <DiaryDispatchContext.Provider value={{onCreate, onEdit, onRemove}} >
        <BrowserRouter>
          <div className='App'>
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/new" element={<New />}></Route>
              <Route path="/edit" element={<Edit />}></Route>
              <Route path="/diary/:id" element={<Diary />}></Route>
            </Routes>
          </div>
        </BrowserRouter>
      </DiaryDispatchContext.Provider>
    </DiaryStateContext.Provider>
  );
}

export default App;

