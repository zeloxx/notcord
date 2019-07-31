import React from 'react';
import { Link } from 'react-router-dom';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            usernameError: null,
            passwordError: null,
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    setStateErrors() {
        if (this.state.username.length <= 0) {
            this.setState({ usernameError: "Username can't be blank" });
        } else {
            this.setState({ usernameError: null });
        }
        if (this.state.password.length <= 0) {
            this.setState({ passwordError: "Password can't be blank" });
        } else {
            this.setState({ passwordError: null });
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        this.setStateErrors();
        if (this.state.usernameError == null && this.state.passwordError == null) {
            this.props.login(this.state).then(() => this.props.history.push('/channels/@me'));
        }
    }

    render() {
        const controllerError = this.props.errors[0];

        return (
            < div className="session-container" >
                <div className="session-background">
                    <form onSubmit={this.handleSubmit} className="session-form">

                        <div className="session-form__content-container">
                            <h1 className="session-form__header">Welcome back!</h1>
                            <h2 className="session-form__sub-header">We're so excited to see you again!</h2>

                            <div className="session-form__input-container">
                                <span className={`session-form__label ${this.state.usernameError || controllerError ? 'session-form__label--error' : ''}`}>Username</span>
                                <span className="session-form__error-description">{this.state.usernameError || controllerError ? ` - ${this.state.usernameError || controllerError}` : ''}</span>
                                <input className={`${this.state.usernameError || controllerError ? 'session-form__input--error' : 'session-form__input'}`}
                                    type="text"
                                    value={this.state.username}
                                    onChange={this.update('username')}
                                />
                            </div>

                            <div className="session-form__input-container">
                                <span className={`session-form__label ${this.state.passwordError || controllerError ? 'session-form__label--error' : ''}`}>Password</span>
                                <span className="session-form__error-description">{this.state.passwordError || controllerError ? ` - ${this.state.passwordError || controllerError}` : ''}</span>
                                <input className={`${this.state.passwordError || controllerError ? 'session-form__input--error' : 'session-form__input'}`}
                                    type="password"
                                    value={this.state.password}
                                    onChange={this.update('password')}
                                />
                            </div>

                            <button className="session-form__submit">Login</button>

                            <span className="session-form__signup-text">Need an account? </span>
                            <Link to="/signup" onClick={() => this.props.removeErrors()} className="session-form__login-link">Register</Link>
                        </div>
                    </form>
                </div >
            </div >
        )
    }
}

export default LoginForm;