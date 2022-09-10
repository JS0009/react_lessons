import React, { useState } from 'react';
import MyInput from './UI/input/MyInput';
import MyButton from './UI/button/MyButtons';

function PostForm({create}) {

    const [posts, setPosts] = useState({title: '', body:''})

    const addNewPost = (event) => {
    event.preventDefault()
    
        const newPost = {
          ...posts, id: Date.now()
    }
    create(newPost)
  }

    return ( 
        <div>
            <form>
                <MyInput
                  value={posts.title}
                  onChange={e => setPosts({...posts, title: e.target.value})}
                  type="text"
                  placeholder='название поста' />
                <MyInput
                  value={posts.body}
                  onChange={e => setPosts({...posts, body: e.target.value})}
                  type="text"
                  placeholder='описание поста' />
                <MyButton onClick={addNewPost}>Создать пост</MyButton>
            </form>
        </div>
     );
}

export default PostForm;