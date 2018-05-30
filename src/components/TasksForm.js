import React from 'react';

export default class TasksForm extends React.Component {
    constructor(props) {
        super(props);
        let task = this.props.task || {};

        this.state = {
            name: task.name || '',
            description: task.description || '',
            completed: task.completed || false,
            time: task.time || '',
            createdBy: task.createdBy || '',
            id: task.id || ''
        }

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentWillMount() {
        if (this.props.task) {
            let { task } = this.props
            this.setState({ name: task.name, description: task.description, completed: task.completed, time: task.time });
        }
    }

    onChange(e) {
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({ [target.name]: value });
    }

    onSubmit(e) {
        e.preventDefault();

        this.props.onSubmit({
            name: this.state.name,
            description: this.state.description,
            completed: this.state.completed,
            time: this.state.time,
            createdBy: this.state.createdBy,
            id: this.state.id
        })

    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input required type="text" id="name" value={this.state.name} onChange={this.onChange} name="name" className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <input required type="text" id="description" value={this.state.description} onChange={this.onChange} name="description" className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="time">Time</label>
                    <input required type="text" id="time" value={this.state.time} onChange={this.onChange} name="time" className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="completed">Completed</label>
                    <input type="checkbox" id="completed" checked={this.state.completed} onChange={this.onChange} name="completed" className="form-control" />
                </div>
                <button className="btn btn-primary" type="submit">Create task</button>
            </form>
        );
    }
}