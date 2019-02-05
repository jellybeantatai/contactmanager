import React, { Component } from 'react';

class Test extends Component {

    state = {
        title:'',
        body:''
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => response.json())
            .then(jsonData => this.setState({
                title : jsonData.title,
                body : jsonData.body
            }))
    }

    render() {
        return (
            <div>
                <h1>Test Component</h1>
                <h3>{this.state.title}</h3>
                <p>{this.state.body}</p>
            </div>
        )
    }
}

export default Test;