import React from 'react';
import Postitem from './Postitem';

const PostList = ({ posts, title, remove }) => {
    return ( 
        <div>
            <h1 style={{ textAlign: 'center' }}>
            {title}
            </h1>

            {posts.map( (post, index)  =>
            <Postitem remove={remove} number={index + 1} post={post} />)} 
        </div>
     );
}
 
export default PostList;