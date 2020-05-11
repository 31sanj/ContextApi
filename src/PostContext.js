import React,{createContext} from 'react';

const Context = createContext();

export class Provider extends React.Component{
    state={
        post:[]
    }

    componentDidMount(){
        fetch(`http://jsonplaceholder.typicode.com/posts`)
        .then(res => res.json())
        .then((data) => {
            this.setState({post: data})
           // console.log(this.state.post)
        }) 
        .catch(console.log)
    }

    render(){
        return(
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        )
    }
}

export const Consumer = Context.Consumer;
