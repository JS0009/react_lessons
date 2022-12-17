import React, { useEffect, useState } from 'react';
import PostService from './API/PostService';
import { useFetching } from './API/useFetching';
import PostFilter from './components/PostFilter';
import PostForm from './components/PostForm';
import PostList from './components/PostList';
import MyButton from './components/UI/button/MyButtons';
import Loader from './components/UI/Loading/Loader';
import MyModal from './components/UI/MyModal/MyModal';
import { usePosts, usePagesArray } from './hooks/usePosts';
import './styles/App.css';
import { getPageCount } from './utils/pages';

function App() {
  const [post, setPost] = useState([]);
  const [filter, setFilter] = useState({ sort: '', query: '' });
  const [modal, setModal] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const sortedAndSearchedPost = usePosts(post, filter.sort, filter.query);

  let pagesArray = usePagesArray(totalPages);

  const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
    const response = await PostService.getAll(limit, page)
    setPost(response.data)
    const totalCount = response.headers['x-total-count']
    console.log(response.headers['x-total-count'])
    setTotalPages(getPageCount(totalCount, limit))
  })

  console.log(totalPages);

  useEffect(() => {
    fetchPosts()
  }, [page])

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
      {postError &&
        <h1>Произошла ошибка ${postError}</h1>
      }
      {isPostsLoading
        ? <div style={{ display: 'flex', justifyContent: 'center', marginTop: 50 }}>
          <Loader />
        </div>
        : <PostList remove={postRemove} posts={sortedAndSearchedPost} title="Посты про js" />
      }
      <div className='page__wrapper'>
        {pagesArray.map(p =>
          <button
            onClick={() => setPage(p)}
            key={p}
            className={page === p ? 'page page_current' : 'page'}>
            {p}
          </button>)}
      </div>
    </div>
  );
}

export default App;
