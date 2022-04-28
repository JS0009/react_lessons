import React, { useState } from 'react';
import Postitem from './components/Postitem';
import PostList from './components/PostList';
import './styles/App.css';


function App() {
  
  const [post, setPost] = useState([
    {id: 1, title: 'JavaScript',body: 'JavaScript - язык программирования'},
    {id: 2, title: 'JavaScript',body: 'JavaScript - язык программирования'},
    {id: 3, title: 'JavaScript',body: 'JavaScript - язык программирования'},
    {id: 4, title: 'JavaScript',body: 'JavaScript - язык программирования'}
  ])

  const [post2, setPost2] = useState([
    { id: 1, title: 'Pyhton',body: 'JavaScript - язык программирования'},
    { id: 2, title: 'Pyhton',body: 'JavaScript - язык программирования'},
    { id: 3, title: 'Pyhton',body: 'JavaScript - язык программирования'},
    { id: 4, title: 'Pyhton',body: 'JavaScript - язык программирования'}
  ])

  return (
    
    <div className='App'>
      <PostList posts={post} title='Список постов 1' />
      <PostList posts={post2} title='Список постов 2' />
    </div>

  );
}

export default App;
