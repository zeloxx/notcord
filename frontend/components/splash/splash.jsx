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
              It's time to ditch Skype and TeamSpeak.
            </h1>
            <p className="splash-main-hero__text">
              All-in-one voice and text chat for gamers that's free, secure, and
              works on both your desktop and phone. Stop paying for TeamSpeak
              servers and hassling with Skype. Simplify your life.
            </p>
            <div className="splash-main-hero__cta-container">
              <a
                onClick={this.demoLogin}
                className="btn btn--green margin-right--xxxl"
              >
                Try the demo
              </a>
              <Link to="/signup" className="btn">
                {this.props.currentUserId ? "Open Discord" : "Signup"}
              </Link>
            </div>
          </section>

          <section className="splash-collage">
            <img
              className="triangle-1"
              src="https://discordapp.com/assets/0a2fd7b3bab977b4619f466b81b426d4.svg"
              alt="triangle"
            />
            <img
              className="triangle-2"
              src="https://discordapp.com/assets/0a2fd7b3bab977b4619f466b81b426d4.svg"
              alt="triangle"
            />
            <img
              className="triangle-3"
              src="https://discordapp.com/assets/0a2fd7b3bab977b4619f466b81b426d4.svg"
              alt="triangle"
            />
            <img
              className="dot-1"
              src="https://discordapp.com/assets/f877364ca453abc089cf7fe8d22c9c3f.svg"
              alt="dot"
            />
            <img
              className="dot-2"
              src="https://discordapp.com/assets/f877364ca453abc089cf7fe8d22c9c3f.svg"
              alt="dot"
            />
            <img
              className="dot-3"
              src="https://discordapp.com/assets/f877364ca453abc089cf7fe8d22c9c3f.svg"
              alt="dot"
            />
            <img
              className="dot-4"
              src="https://discordapp.com/assets/f877364ca453abc089cf7fe8d22c9c3f.svg"
              alt="dot"
            />
            <img
              className="dot-5"
              src="https://discordapp.com/assets/f877364ca453abc089cf7fe8d22c9c3f.svg"
              alt="dot"
            />
            <img
              className="circle-1"
              src="https://discordapp.com/assets/afdfaaeb6d6639e24086ced7aa07975d.svg"
              alt="circle"
            />
            <img
              className="circle-2"
              src="https://discordapp.com/assets/afdfaaeb6d6639e24086ced7aa07975d.svg"
              alt="circle"
            />
            <img
              className="circle-3"
              src="https://discordapp.com/assets/afdfaaeb6d6639e24086ced7aa07975d.svg"
              alt="circle"
            />
            <img
              className="square-1"
              src="https://discordapp.com/assets/173ee5a6d2f1b6a19190465c41371a3b.svg"
              alt="square"
            />
            <img
              className="square-2"
              src="https://discordapp.com/assets/173ee5a6d2f1b6a19190465c41371a3b.svg"
              alt="square"
            />
            <img
              className="square-3"
              src="https://discordapp.com/assets/173ee5a6d2f1b6a19190465c41371a3b.svg"
              alt="square"
            />
            <img
              className="diagonal-1"
              src="https://discordapp.com/assets/a14c5b02487874dca7fae0481ef90dbb.svg"
              alt="diagonal"
            />
            <img
              className="diagonal-2"
              src="https://discordapp.com/assets/a14c5b02487874dca7fae0481ef90dbb.svg"
              alt="diagonal"
            />
            <img
              className="diagonal-3"
              src="https://discordapp.com/assets/a14c5b02487874dca7fae0481ef90dbb.svg"
              alt="diagonal"
            />
            <img
              className="potion"
              src="https://discordapp.com/assets/0b5a0339571e72656eea93eb55d73eae.svg"
              alt="potion"
            />
            <img
              className="bomb"
              src="https://discordapp.com/assets/eb301f28da3199edbd3ef19690d61674.svg"
              alt="bomb"
            />
            <img
              className="coin-1"
              src="https://discordapp.com/assets/9e05338bd66e0985fceb83317cb94b9c.svg"
              alt="coin"
            />
            <img
              className="coin-2"
              src="https://discordapp.com/assets/9e05338bd66e0985fceb83317cb94b9c.svg"
              alt="coin"
            />
            <img
              className="cartridge"
              src="https://discordapp.com/assets/215346366a9a7d50924fc245ddb048d2.svg"
              alt="cartridge"
            />
            <img
              className="shield"
              src="https://discordapp.com/assets/15149ecb9d5cd8faa24e1bbf45d70e5b.svg"
              alt="shield"
            />
            <img
              className="question-mark-box"
              src="https://discordapp.com/assets/81d74b2ebb053fbccee41865a47d48c3.svg"
              alt="question mark"
            />
            <img
              className="desktop-monitor"
              src="https://discordapp.com/assets/0d82411c439e3558f8b2f6fb12eccbc1.svg"
              alt="desktop monitor"
            />
            <img
              className="android"
              src="https://discordapp.com/assets/5a31f41848bf3ba1817a092ac28c623d.svg"
              alt="android phone"
            />
            <img
              className="iphone"
              src="https://discordapp.com/assets/82fa4f388cfc9cf47a6972ae39ae90de.svg"
              alt="iphone"
            />
            <img
              className="game-controller"
              src="https://discordapp.com/assets/c4bae281354a2b4e2db85415955e0994.svg"
              alt="game controller"
            />
            <img
              className="laptop"
              src="https://discordapp.com/assets/7edaed9d86e1b5dd9d4c98484372222b.svg"
              alt="laptop"
            />
            <img
              className="headphones"
              src="https://discordapp.com/assets/69db64955960eb333f5ff831cc1c0294.svg"
              alt="headphones"
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
              {this.props.currentUserId ? "Open Discord" : "Sign Up Now"}
            </Link>
          </footer>
        </main>
      </div>
    );
  }
}
