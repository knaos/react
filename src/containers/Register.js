import React from 'react';

export default class Register extends React.Component {

    constructor(props) {
        super(props);

    }

    onFormSubmit(event) {
        event.preventDefault();
    }

    render() {
        return (
            <form>
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" className="form-control" />
                </div>

                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" className="form-control" />
                </div>
            </form>
        );
    }
}