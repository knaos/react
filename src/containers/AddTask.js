import React from 'react';
import TasksForm from '../components/TasksForm';
import { connect } from 'react-redux';
import TasksAPI from '../services/TasksAPI';



class AddTask extends React.Component {

    constructor(props) {
        super(props);

        this.createTask = this.createTask.bind(this);
    }

    createTask(task) {
        let { dispatch } = this.props;
        try {
            task.createdBy = Number(this.props.currentUser.id);
            TasksAPI.add(task);
            this.props.history.push('/tasks');
        }
        catch (e) {
            throw e;
        }
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h2>Add task</h2>
                    </div>
                    <div className="col-md-6">
                        <TasksForm onSubmit={this.createTask} />
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    currentUser: state.users.currentUser
})

const AddTaskContainer = connect(mapStateToProps)(AddTask);

export default AddTaskContainer;