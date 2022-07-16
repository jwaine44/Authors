import logo from './logo.svg';
import './App.css';
import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Main from './views/Main';
import AuthorForm from './components/AuthorForm';
import Update from './views/Update';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path = '/' element = {<Main />} />
        <Route path = '/new' element = {<AuthorForm />} />
        <Route path = '/edit/:id' element = {<Update />} />
      </Routes>
    </div>
  );
}

export default App;
