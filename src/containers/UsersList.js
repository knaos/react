import React from 'react';
import { connect } from 'react-redux';
import { receiveUsers, fetchUsers } from '../actions';
import UsersAPI from '../services/UsersAPI';

class UsersList extends React.Component {
    constructor(props) {
        super(props);
        this.toggleAdmin = this.toggleAdmin.bind(this);
        this.deleteUser = this.deleteUser.bind(this);
    }

    componentDidMount() {
        const { dispatch } = this.props;
        dispatch(fetchUsers());
        let users = UsersAPI.getAllUsers();
        dispatch(receiveUsers(users));
    }

    toggleAdmin(e) {
        let id = Number(e.target.dataset.id);
        let user = UsersAPI.getUser(id);
        user.isAdmin = !user.isAdmin;
        UsersAPI.updateUser(user);
        let users = UsersAPI.getAllUsers();
        this.props.dispatch(receiveUsers(users));
    }

    deleteUser(e) {
        let id = Number(e.target.dataset.id);
        UsersAPI.deleteUser(id);
        this.props.dispatch(receiveUsers(UsersAPI.getAllUsers()));
    }

    render() {
        const users = this.props.users.filter(u => u.username != 'admin');

        return (
            <table>
                <thead>
                    <tr>
                        <th>Username</th>
                        <th>IsAdmin</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user =>
                        (<tr key={user.username}>
                            <td>{user.username}</td>
                            <td><input type="checkbox" readOnly name="isAdmin" checked={user.isAdmin} /></td>
                            <td>
                                <button className="btn btn-primary" data-id={user.id} onClick={this.toggleAdmin}>Toggle admin</button>
                            </td>
                            <td>
                                <button className="btn btn-danger" data-id={user.id} onClick={this.deleteUser}>Delete user</button>
                            </td>
                        </tr>)
                    )}
                </tbody>
            </table>
        )
    }
}

const mapStateToProps = state => ({
    users: state.users.items
})

let UsersListExport = connect(mapStateToProps)(UsersList);

export default UsersListExport;
