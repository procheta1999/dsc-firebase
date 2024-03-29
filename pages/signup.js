import React, { Component } from "react";
import Link from "next/link";
import Router from "next/router";

import { AppWithAuthentication } from "../src/components/App";
import { auth, db } from "../src/firebase";
import * as routes from "../src/constants/routes";
import Head from "next/head"
import {IndexLink} from "./index";
const SignUpPage = () => (
  <AppWithAuthentication>
    <SignUpForm />
  </AppWithAuthentication>
);

const updateByPropertyName = (propertyName, value) => () => ({
  [propertyName]: value
});

const INITIAL_STATE = {
  username: "",
  email: "",
  passwordOne: "",
  passwordTwo: "",
  error: null
};

class SignUpForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    const { username, email, passwordOne } = this.state;

    auth
      .doCreateUserWithEmailAndPassword(email, passwordOne)
      .then(authUser => {
        // Create a user in your own accessible Firebase Database too
        db.doCreateUser(authUser.user.uid, username, email)
          .then(() => {
            this.setState(() => ({ ...INITIAL_STATE }));
            Router.push(routes.HOME);
          })
          .catch(error => {
            this.setState(updateByPropertyName("error", error));
          });
      })
      .catch(error => {
        this.setState(updateByPropertyName("error", error));
      });

    event.preventDefault();
  };

  render() {
    const { username, email, passwordOne, passwordTwo, error } = this.state;

    const isInvalid =
      passwordOne !== passwordTwo || passwordOne === "" || username === "";

    return (<>
      <Head>
      <meta charset="UTF-8"></meta>
   <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
       <title>Sign Up</title>
       <link rel="icon" href="https://raw.githubusercontent.com/procheta1999/DSC-NSEC-Blogs/master/public/favicon.ico" ></link>
     </Head>
     <main>
     <h1 className="title">
        <img src="https://github.com/procheta1999/DSC-NSEC-Blogs/blob/master/public/dsc.png?raw=true" alt="dsc Logo" className="logo"></img>
          <b>DSC NSEC BLOGS-<i id="s">Write Your Own Story!</i></b>
        </h1>
        <center><h1>
        Sign Up To Start Your Journey Today!
        </h1></center>
        <center><img src="https://media.giphy.com/media/MTjM7okzpQu88/giphy.gif"></img></center>
        <center>
      <form onSubmit={this.onSubmit}>
      <div className="grid">
      <div className="card">
        Full Name:<input
          value={username}
          onChange={event =>
            this.setState(updateByPropertyName("username", event.target.value))
          }
          type="text"
          placeholder="Full Name"
        />
        <br></br>
        <br></br>
        Email:<input
          value={email}
          onChange={event =>
            this.setState(updateByPropertyName("email", event.target.value))
          }
          type="text"
          placeholder="Email Address"
        /><br></br>
        <br></br>
        Password:<input
          value={passwordOne}
          onChange={event =>
            this.setState(
              updateByPropertyName("passwordOne", event.target.value)
            )
          }
          type="password"
          placeholder="Password"
        /><br></br>
        <br></br>
        Confirm Password:<input
          value={passwordTwo}
          onChange={event =>
            this.setState(
              updateByPropertyName("passwordTwo", event.target.value)
            )
          }
          type="password"
          placeholder="Confirm Password"
        /><br></br>
        <br></br>
        <center><button disabled={isInvalid} type="submit">
          Sign Up
        </button></center>
        <center>Ater creating account, go back to Login Page.</center>
    <br></br>
    <center><button
            variant="contained"
            color="primary"
            type="submit"
            style={{ marginTop: "20px", width: "200px" }}
          >
            <IndexLink/>
          </button></center>

        {error && <p>{error.message}</p>}
        </div>
        </div>
      </form>
      </center>
      </main>
      <footer>
        <a
          href="https://dscnsec.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="https://github.com/procheta1999/DSC-NSEC-Blogs/blob/master/public/dsc.png?raw=true" alt="DSC Logo" className="logo" />
        </a>
      </footer>
      <style jsx>{`
      footer {
        width: 100%;
        height: 100px;
        border-top: 1px solid #eaeaea;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      footer img {
        margin-left: 0.5rem;
      }

      footer a {
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .grid {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;

        max-width: 1000px;
        margin-top: 4rem;
      }

      .card {
        margin: 2rem;
        flex-basis: 45%;
        padding: 3rem;
        text-align: left;
        color: inherit;
        text-decoration: none;
        border: 1px solid black;
        border-radius: 20px;
         -moz-box-shadow:    inset 0 0 10px #000000;
   -webkit-box-shadow: inset 0 0 10px #000000;
   box-shadow:         inset 0 0 10px #000000;
        transition: color 0.15s ease, border-color 0.15s ease;
      }

      .card:hover,
      .card:focus,
      .card:active {
        color: #0070f3;
        border-color: #0070f3;
      }

      .card h3 {
        margin: 0 0 1rem 0;
        font-size: 1.5rem;
      }

      .card p {
        margin: 0;
        font-size: 1.25rem;
        line-height: 1.5;
      }
      #l{
          text-align:center;
      }
      .logo {
        height: 1em;
        float:left;
      }
      .title {
        margin: 0;
        line-height: 1.15;
        font-size: 4rem;
        padding: 5rem 0;
      }
      #s{
        animation: pulse 5s infinite;
      }
      @keyframes pulse {
        20% {
          color: red;
        }
        30%{
            color:blue; 
        }
        40%{
            color:green;
        }
        100% {
          color: yellow;
        }
      }
      #pro{
        color:blue;
      }
      form{
        font-size:30px;
    padding:0.00010rem 5em 5em 5em;         
    margin: 100px 100px 100px 100px;
      }
      Button{
        align-items:center;
      }
      #new{
        text-align:center;
      }
      `}</style>
      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
      </>
    );
  }
}

const SignUpLink = () => (
  <p>
    Don't have an account?{" "}
    <Link href={routes.SIGN_UP}>
      <a>Sign Up</a>
    </Link>
  </p>
);
export default SignUpPage;
export { SignUpForm, SignUpLink };
