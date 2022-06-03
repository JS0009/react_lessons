import React, { useState } from 'react';
import PostForm from './components/PostForm';
import PostList from './components/PostList';
import Myselect from './components/UI/select/Myselect';
import './styles/App.css';



function App() {

  const [post, setPost] = useState([
    { id: 1, title: 'JavaScript', body: 'JavaScript - язык программирования' },
    { id: 2, title: 'JavaScript', body: 'JavaScript - язык программирования' },
    { id: 3, title: 'JavaScript', body: 'JavaScript - язык программирования' },
    { id: 4, title: 'JavaScript', body: 'JavaScript - язык программирования' }
  ])

  const createPost = (newPost) => {
    setPost([...post, newPost])
  }

  const postRemove = (postrm) => {
    setPost(post.filter(p => p.id !== postrm.id))
  }


  return (

    <div className='App'>
      <PostForm create={createPost} />
      <Myselect defaultValue='Сортировка' options={[
        { value: 'title', name: 'по названию' },
        { value: 'body', name: 'по описанию' }
      ]} />
      {post.length !== 0
        ?
        <PostList remove={postRemove} posts={post} title="Посты про js" />
        :
        <h1 style={{ textAling: 'centr' }}>
          Нет постов
        </h1>
      }

    </div>

  );
}

export default App;
