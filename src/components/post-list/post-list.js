import React from 'react';
import { ListGroup} from 'reactstrap';
import './post-list.css';

import PostListItem from '../post-list-item'

const PostList = ({posts}) => {

    const elements = posts.map((item) => {
        const {id, ...itemProps} = item;
        return (
            <li key={id} className="list-group-item">
                {/* <PostListItem 
                label={item.label} 
                important={item.important} /> */}
                <PostListItem 
                    {...itemProps} 
                    onDelete = {() => console.log('Delete')}
                />
            </li>
        )
    });

    return (
        <ListGroup className="app-list">
            {/* <PostListItem label={posts[0].label} important={posts[0].important} /> */}
            {/* <PostListItem label="Going to learn React" important />
            <PostListItem label="That's so good" />
            <PostListItem label="I need a break..." /> */}

            {elements}

        </ListGroup>
    )
}

export default PostList;