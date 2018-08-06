import React from 'react';
import uuid from 'uuid';
import style from '../../css/App.css';
import title from '../components/Title';

class App extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
    }
    
    addTodo(value) {
        const todo = {
            text: value,
            id: uuid.v4(),
        };
        const data = [...this.state.data, todo];
        this.setState({data});
    }
    
    removeTodo(id) {
        const remainder = this.state.data.filter(todo => todo.id !== id);
        this.setState({data: remainder});
    }
    
    render() {
        return (
            <div className = {style.TodoApp}>
                <title title='Application title' length={this.state.data.length}/>
            </div>
        );
    }
}

export default App;
