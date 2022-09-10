import React, { useEffect, useState } from 'react';
import PostService from './API/PostService';
import PostFilter from './components/PostFilter';
import PostForm from './components/PostForm';
import PostList from './components/PostList';
import MyButton from './components/UI/button/MyButtons';
import Loader from './components/UI/Loading/Loader';
import MyModal from './components/UI/MyModal/MyModal';
import { usePosts } from './hooks/usePosts';
import './styles/App.css';

function App() {

  const [post, setPost] = useState([]);
  const [filter, setFilter] = useState({ sort: '', query: '' })
  const [modal, setModal] = useState(false);
  const sortedAndSearchedPost = usePosts(post, filter.sort, filter.query);
  const [isPostsLoading, setIsPostsLoading] = useState(false);

  useEffect(() => {
    fetchPosts()
  }, [])

  async function fetchPosts() {
    setIsPostsLoading(true)
    setTimeout(async () => {
      const posts = await PostService.getAll()
      setPost(posts)
      setIsPostsLoading(false)
    }, 1000);
  }

  const createPost = (newPost) => {
    setPost([...post, newPost])
    setModal(false)
  }


  const postRemove = (postrm) => {
    setPost(post.filter(post => post.id !== postrm.id))
  }

  return (
    <div className='App'>
      <button onClick={fetchPosts}>GET POSTS</button>
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
      {isPostsLoading
        ? <div style={{ display: 'flex', justifyContent: 'center', marginTop: 50 }}> <Loader /></div>
        : <PostList remove={postRemove} posts={sortedAndSearchedPost} title="Посты про js" />
      }

    </div >
  );
}

export default App;
