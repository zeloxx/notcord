import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Splash extends Component {
  constructor(props) {
    super(props);
    this.demoLogin = this.demoLogin.bind(this);
  }

  demoLogin() {
    this.props
      .login({ username: "jimothy", password: "password" })
      .then(() => this.props.history.push("/channels/@me"));
  }

  render() {
    return (
      <div className="splash">
        <header className="splash-header">
          <nav className="splash-nav">
            <div className="splash-nav__logo-container">
              <div className="splash-nav__logo-img"></div>
              <div className="splash-nav__logo">Notcord</div>
            </div>
            <div className="splash-nav__right">
              <a href="https://github.com/zeloxx/notcord">
                <i className="fa fa-github splash-nav__github"></i>
              </a>
              <Link to="/login" className="splash-nav__login">
                {this.props.currentUserId ? "Open" : "Login"}
              </Link>
            </div>
          </nav>
        </header>

        <main className="splash-main">
          <section className="splash-main-hero">
            <h1 className="splash-main-hero__header">
              Notcord is a full-stack application inspired by Discord
            </h1>
            <p className="splash-main-hero__text">
              Users can create their own servers and channels then invite their
              friends to send messages to each other in real-time. It was built
              with React, Redux, Ruby on Rails, and uses a PostgreSQL database.
            </p>
            <div className="splash-main-hero__cta-container">
              <a
                onClick={this.demoLogin}
                className="btn btn--green margin-right--xxxl margin-bottom--l opacity-transition"
              >
                Try the demo
              </a>
              <Link to="/signup" className="btn opacity-transition">
                {this.props.currentUserId ? "Open Notcord" : "Signup"}
              </Link>
            </div>
          </section>

          <section className="splash-collage">
            <img
              className="desktop-monitor"
              src="https://discordapp.com/assets/0d82411c439e3558f8b2f6fb12eccbc1.svg"
              alt="desktop monitor"
            />
          </section>

          <footer className="splash-footer">
            <div className="splash-footer-text-container">
              <div className="splash-footer__header">
                Ready to try Notcord? It's free!
              </div>
              <div className="splash-footer__text">
                Join over 250 million players today
              </div>
            </div>
            <Link to="/signup" className="splash-footer__signup">
              {this.props.currentUserId ? "Open Notcord" : "Sign Up Now"}
            </Link>
          </footer>
        </main>
      </div>
    );
  }
}
