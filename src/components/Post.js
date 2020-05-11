import React from 'react';
import {Consumer} from '../PostContext';

class Posts extends React.Component{

     render(){

        return(

            <Consumer>
               {value =>{
                    const {post} = value;
                    return(
                    <div>
                        <center>Posts from jsonpalceholder</center>
                        {post.map((posts,key) =>(
                            <div className="card" key={posts.id}>
                                <div className="card-body">
                                    <h5 className="card-title">{posts.userId}</h5>
                                    <h6 className="card-subtitle mb-2 text-muted">{posts.title}</h6>
                                    <p className="card-text">{posts.body}</p>
                                </div>
                            </div>
                        ))}
                    </div> )
                }}  
            </Consumer>
        )
    }
}

export default Posts;