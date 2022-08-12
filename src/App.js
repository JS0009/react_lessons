import React, { useMemo, useState } from 'react';
import PostFilter from './components/PostFilter';
import PostForm from './components/PostForm';
import PostList from './components/PostList';
import MyButton from './components/UI/button/MyButtons';
import MyModal from './components/UI/MyModal/MyModal';
import './styles/App.css';


function App() {

  const [post, setPost] = useState([
    { id: 1, title: 'aa', body: 'dd' },
    { id: 2, title: 'bb', body: 'cc' },
    { id: 3, title: 'cc', body: 'bb' },
    { id: 4, title: 'dd', body: 'aa' }
  ])

  const [filter, setFilter] = useState({ sort: '', query: '' })

  const [modal, setModal] = useState(false)


  const sortedPost = useMemo(() => {
    console.log('Отработала функция сортед пост');
    if (filter.sort) {
      return [...post].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))
    }
    return post;
  }, [filter.sort, post])

  const sortedAndSearchedPost = useMemo(() => {
    return sortedPost.filter(post => post.title.toLowerCase().includes(filter.query))
  }, [filter.query, sortedPost])

  const createPost = (newPost) => {
    setPost([...post, newPost])
    setModal(false)
  }

  const postRemove = (postrm) => {
    setPost(post.filter(post => post.id !== postrm.id))
  }


  return (

    <div className='App'>
      <MyButton style={{ marginTop: 30 }} onClick={() => setModal(true)}>
        Создать пользователя
      </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} />
      </MyModal>
      <hr style={{ margin: '15px 0' }} />
      <PostFilter
        filter={filter}
        setFilter={setFilter} />
      <PostList remove={postRemove} posts={sortedAndSearchedPost} title="Посты про js" />
    </div>

  );
}

export default App;
