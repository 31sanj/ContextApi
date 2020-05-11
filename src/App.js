import React from 'react';
import Posts from './components/Post';
import {Provider} from './PostContext'

class App extends React.Component{
        
    render(){
        return(
            <Provider>
                <div>
                    <Posts />                    
                </div>
            </Provider>
             )
         }
    }

export default App;

