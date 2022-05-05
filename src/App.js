import React, { useState } from 'react';
import PostList from './components/PostList';
import './styles/App.css';
import MyButton from './components/UI/button/MyButtons';
import MyInput from './components/UI/input/MyInput';


function App() {
  
  const [post, setPost] = useState([
    {id: 1, title: 'JavaScript',body: 'JavaScript - язык программирования'},
    {id: 2, title: 'JavaScript',body: 'JavaScript - язык программирования'},
    {id: 3, title: 'JavaScript',body: 'JavaScript - язык программирования'},
    {id: 4, title: 'JavaScript',body: 'JavaScript - язык программирования'}
  ])

 

  return (
    
    <div className='App'>
      <form>
        <MyInput type="text" placeholder='название поста'/>
        <MyInput type="text" placeholder='описание поста'/>
        <MyButton disabled>Создать пост</MyButton>
      </form>
      <PostList posts={post} title="Посты про js"/>
    </div>

  );
}

export default App;
