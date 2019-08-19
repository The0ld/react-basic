import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import task from './samples/task.json';

//Componentes
import Tasks from './components/tasks';
import TaskForm from './components/taskForm';
import Posts from './components/posts';

class App extends Component {
	state = {
		task: task
	}

	addTask = (title, description) => {
		const newTask = {
			title: title,
			description: description,
			id: this.state.task.length
		}

		this.setState({
			task: [...this.state.task, newTask]
		});
	}

	deleteTask = (id) => {
		const newTask = this.state.task.filter(task => task.id !== id);
		this.setState({task: newTask});
		console.log(newTask);
	}

	checkDone = (id) => {
		const newTasks = this.state.task.map(task => {
			if(task.id === id){
				task.done = !task.done;
			}
			return task;
		});
		this.setState({task: newTasks});
	}

	render(){
		return (
			<div key="principal">
				<Router>
					<Link to="/">Home</Link>
					<br/>
					<Link to="/posts">Posts</Link>
					<Route exact path="/" render={() => {
						return <div>
							<TaskForm addTask={this.addTask}/>
							<Tasks tasks={this.state.task} deleteTask={this.deleteTask} checkDone={this.checkDone}/>
						</div>
					}}/>
					<Route path="/posts" component={Posts}/>
				</Router>
			</div>
		);
	}
}

export default App;