import React,{createContext, useState, useEffect} from 'react';

export const PostContext = createContext();

export const Provider = (props) => {
    
    const [item, setItem] = useState([]);

    useEffect(() => {
        fetchItems()
    },[]);

    const fetchItems = async () => {
        const data = await fetch(`http://jsonplaceholder.typicode.com/posts`);
        const item = await data.json();
        setItem(item);
        console.log(item);
    };

    return(
        <PostContext.Provider value={{item}}>
            {props.children}
        </PostContext.Provider>
    )
}

