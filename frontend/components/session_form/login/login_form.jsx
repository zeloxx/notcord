import React from 'react';
import { Link } from 'react-router-dom';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
        };
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {

    }

    render() {
        return (
            <div>
                {/* <form>
                    <input
                        type="text"
                        placeholder="Username"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                    />
                </form> */}
            </div>
        )
    }
}

export default LoginForm;