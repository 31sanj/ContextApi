import React, {useEffect,useState} from 'react';


function Details ({match}) {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetchItem(); 
        console.log(match);
     });

    const fetchItem = async () => {
        const fetchItem = await fetch(`https://jsonplaceholder.typicode.com/posts/${match.params.id}`);
        const data = await fetchItem.json();
        setData(data);
        console.log(data);
    }
        return(
            <div>
               <div className="card-body">
                        <h5 className="card-title">{data.userId}</h5>
                        <h6 className="card-subtitle mb-2 text-muted">{data.title}</h6>
                        <p className="card-text">{data.body}</p>
               </div>
            </div>
        )
    }

export default Details;