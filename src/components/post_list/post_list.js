import React from 'react';
import PostlistItem from "../post_list_item";
import './post-list.css';

const PostList = () => {
    return (
        <ul className="app-list list-group" >
<PostlistItem/>
<PostlistItem/>
<PostlistItem/>
        </ul>
    )
}

export default PostList