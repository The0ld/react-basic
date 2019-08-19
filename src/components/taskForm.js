import React, { Component } from 'react';

export default class TaskForm extends Component {
    
    state = {
        title: '',
        description: ''
    }

    reqSubmit = e => {
        this.props.addTask(this.state.title, this.state.description);
        e.preventDefault();
    }

    reqChange = e => {
        this.setState({
            [e.target.name]: e.target.value,
            [e.target.name]: e.target.value
        });
    }
    
    render(){
        return(
            <form onSubmit={this.reqSubmit}>
                <input 
                type="text" 
                name="title"
                placeholder="Escribe una task" 
                onChange={this.reqChange} 
                value={this.state.title}
                />
                <br/><br/>
                <textarea 
                name="description"
                placeholder="Escribe una descripcion" 
                onChange={this.reqChange} 
                value={this.state.description}></textarea>
                <br/><br/>
                <input type="submit"/>
            </form>
        );
    }
}