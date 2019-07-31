import React from 'react';
import { Link } from 'react-router-dom';

class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            email: '',
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.signup(this.state).then(() => this.props.history.push('/channels/@me'));
    }

    render() {
        const usernameError = this.props.errors.find((el) => el.includes('Username'));
        const emailError = this.props.errors.find((el) => el.includes('Email'));
        const passwordError = this.props.errors.find((el) => el.includes('Password'));

        return (
            <div className="session-container">
                <div className="session-background">
                    <form onSubmit={this.handleSubmit} className="session-form">

                        <div className="session-form__content-container">
                            <h1 className="session-form__header margin-bottom--l">Create an account</h1>

                            <div className="session-form__input-container">
                                <span className={`session-form__label ${emailError ? 'session-form__label--error' : ''}`}>Email</span>
                                <span className="session-form__error-description">{emailError ? ` - ${emailError}` : ''}</span>
                                <input className={`${emailError ? 'session-form__input--error' : 'session-form__input'}`}
                                    type="text"
                                    value={this.state.email}
                                    onChange={this.update('email')}
                                />
                            </div>

                            <div className="session-form__input-container">
                                <span className={`session-form__label ${usernameError ? 'session-form__label--error' : ''}`}>Username</span>
                                <span className="session-form__error-description">{usernameError ? ` - ${usernameError}` : ''}</span>
                                <input className={`${usernameError ? 'session-form__input--error' : 'session-form__input'}`}
                                    type="text"
                                    value={this.state.username}
                                    onChange={this.update('username')}
                                />
                            </div>

                            <div className="session-form__input-container">
                                <span className={`session-form__label ${passwordError ? 'session-form__label--error' : ''}`}>Password</span>
                                <span className="session-form__error-description">{passwordError ? ` - ${passwordError}` : ''}</span>
                                <input className={`${passwordError ? 'session-form__input--error' : 'session-form__input'}`}
                                    type="password"
                                    value={this.state.password}
                                    onChange={this.update('password')}
                                />
                            </div>

                            <button className="session-form__submit">Continue</button>

                            <Link to="/login" onClick={() => this.props.removeErrors()} className="session-form__login-link">Already have an account?</Link>
                        </div>
                    </form>
                </div >
            </div>
        )
    }
}

export default SignupForm;