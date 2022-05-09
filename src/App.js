import React, { useRef, useState } from 'react';
import PostList from './components/PostList';
import './styles/App.css';
import MyButton from './components/UI/button/MyButtons';
import MyInput from './components/UI/input/MyInput';


function App() {

  const [post, setPost] = useState([
    { id: 1, title: 'JavaScript', body: 'JavaScript - язык программирования' },
    { id: 2, title: 'JavaScript', body: 'JavaScript - язык программирования' },
    { id: 3, title: 'JavaScript', body: 'JavaScript - язык программирования' },
    { id: 4, title: 'JavaScript', body: 'JavaScript - язык программирования' }
  ])

  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')


  const addNewPost = (event) => {
    event.preventDefault()
    console.log(title)
    console.log(body)
  }

  return (

    <div className='App'>
      <form>
        {/* Управляемый компонет */}
        <MyInput
          value={title}
          onChange={e => setTitle(e.target.value)}
          type="text"
          placeholder='название поста' />

        <MyInput
          value={body}
          onChange={e => setBody(e.target.value)}
          type="text"
          placeholder='описание поста' />

        <MyButton onClick={addNewPost}>Создать пост</MyButton>
      </form>
      <PostList posts={post} title="Посты про js" />
    </div>

  );
}

export default App;
