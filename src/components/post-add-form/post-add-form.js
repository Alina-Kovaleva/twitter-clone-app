import React from 'react';

const PostAddForm = () => {
    return (
        <form className="bottom-panel d-flex">
            <input
                type="text"
                placeholder='What are you thinking about now?'
                className="form-control new-post-label"
            />
            <button
                type="submit"
                className="btn btn-outline-secondary">
                Add note
            </button>
        </form>
    )
}

export default PostAddForm;