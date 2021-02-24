import React from 'react';
 import './post-add-form.css';
const PostAddForm = () => {
    return (
        <form className="bottom-panel d-flex">
            <input type="text"
            placeholder="О чем вы дуамете сейчас?"
            className = "form-control new post label"
            />

        
        <button type="sibmit"
        className="btn btn-outline-secondary"></button>
        </form>
    )
}

export default PostAddForm;