import React from 'react';
import TasksForm from '../components/TasksForm';
import { connect } from 'react-redux';
import TasksAPI from '../services/TasksAPI';

class EditTask extends React.Component {
    constructor(props) {
        super(props);
        this.updateTask = this.updateTask.bind(this);

        let id = parseInt(props.match.params.id);

        this.state = { task: TasksAPI.getById(id) }
    }

    updateTask(task) {
        TasksAPI.update(task);
        this.props.history.push('/tasks');
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h2>Edit task</h2>
                    </div>
                    <div className="col-md-6">
                        <TasksForm onSubmit={this.updateTask} task={this.state.task} />
                    </div>
                </div>
            </div>
        );
    }
}

export default EditTask;