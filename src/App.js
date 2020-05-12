import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Nav from './Nav';
import {Provider} from './PostContext';
import Posts from './Posts';
import Details from './components/Postdetails'

function  App (){
    
    return(
        <Provider>
            <Router>
                <div>
                    <Nav />
                    <Switch>
                    <Route path='/posts' exact component={Posts} />
                    <Route path="/posts/:id" component={Details}/>
                    </Switch>                   
                </div>
            </Router>
        </Provider>
        
            )
        }

export default App;

