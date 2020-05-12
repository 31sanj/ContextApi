import React, { useContext } from 'react';
import {Link} from 'react-router-dom';
import {PostContext} from './PostContext'

function Posts  ()  {

    const {item} = useContext(PostContext);

        return(
            <div>
                {item.map((items,key) => (
                    <h1 key={items.id}>
                       <Link to={`/posts/${items.id}`}>{items.id} </Link>
                    </h1>
                ))}
            </div>
        )
    }

export default Posts;