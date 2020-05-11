import React from 'react';
import Posts from './components/Post';
import {Provider} from './PostContext';
import Nav from './Nav';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

class App extends React.Component{
        
    render(){
        return(
            <Provider>
                <Router>
                    <div>
                        <Nav />
                        <Switch>
                        <Route path='/posts' exact  component={Posts} />
                        </Switch>                   
                    </div>
                </Router>
            </Provider>
             )
         }
    }

export default App;

