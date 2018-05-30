import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { receiveTasks } from '../actions';


class TasksList extends React.Component {

    componentWillMount() {
        this.props.dispatch(receiveTasks());
    }

    render() {

        let taskRows = this.props.tasks.map(t => (<tr key={t.id}>
            <td>{t.name}</td>
            <td>{t.description}</td>
            <td>{t.time}</td>
            <td><input type="checkbox" readOnly checked={t.completed} /></td>
            <td>
                {
                    this.props.currentUser.id == t.createdBy || this.props.currentUser.isAdmin ? (<div>
                        <Link to={`/tasks/edit/${t.id}`}><button className="btn btn-success">Edit</button></Link>
                        <Link to={`/tasks/delete/${t.id}`}><button className="btn btn-danger">Delete</button></Link>
                    </div>) : 'You can not edit this ;)'
                }
            </td>
        </tr>));

        return (
            <div className="row">
                <div className="col-md-12">
                    <h1>Tasks list</h1>
                    <hr />
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Task</th>
                                <th>Description</th>
                                <th>Time</th>
                                <th>Completed</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {taskRows.length > 0 ? taskRows : undefined}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}


const mapStateToProps = state => ({
    tasks: state.tasks,
    currentUser: state.users.currentUser
})

let TasksListContainer = connect(mapStateToProps)(TasksList);

export default TasksListContainer;

