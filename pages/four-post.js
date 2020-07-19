import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Button from "@material-ui/core/Button"
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Icon from '@material-ui/core/Icon';
import Head from 'next/head'
import Link from 'next/link'
import * as routes from "../src/constants/routes";
import {IndexLink} from "./index";
export default function Home() {
  return (
    
    <div className="container">
      <Head>
      <meta charset="UTF-8"></meta>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <title>Contributors' Section</title>
        <link rel="icon" href="https://raw.githubusercontent.com/procheta1999/DSC-NSEC-Blogs/master/public/favicon.ico" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      </Head>

      <main>
      <Typography variant="h2" gutterBottom style={{ textAlign: "center" }}>
        The People Behind
        </Typography>
        <h1 className="title">
        <i>
         '' DSC NSEC BLOGS-Write Your Own Story!''</i>
        </h1>
        <br></br>
        <img src="https://media.giphy.com/media/2ikwIgNrmPZICNmRyX/giphy.gif"></img>
        <br></br>
        <p className="description">
        <Typography variant="h3" gutterBottom style={{ textAlign: "center" }}>
        A Big Shoutout 📢 to the People without whom this page would not have been built:</Typography>
        </p>
        
        <div className="grid">
          <a href="" className="card">
            <h3></h3>
            <p></p>
          </a>

          <Link href=""><a className="card">
            <h3></h3>
            <p></p>
          </a></Link>
          <a href="" className="card">
            <h3></h3>
            <p></p>
          </a>
          </div>
          <br></br>
          <br></br>
    <center><button
            variant="contained"
            color="primary"
            type="submit"
            style={{ marginTop: "20px", width: "200px" }}
          >
            <IndexLink/>
          </button></center>
      </main>

      <footer>
      
        <a
          href="https://dscnsec.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="https://github.com/procheta1999/DSC-NSEC-Blogs/blob/master/public/dsc.png?raw=true" alt="dsc Logo" className="logo"  height="300px" width="100px"/>
        </a>
      </footer>

      <style jsx>{`
      #new{
        text-align:center;
        font-size:30px;
      }
      #pr{
        padding:1em 1em 1em 1em;
    }
      #pr a {
        margin-right: 30px;
     } 
      #create{
        display: block;
    margin-left: auto;
    margin-right: auto ;
    height:300px;
    width:600px;
      }
      #book{
        display: block;
    margin-left: auto;
    margin-right: auto ;
    height:300px;
    width:300px;
      }
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

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

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid black;
          border-radius: 30px;
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

        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
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
    </div>
  )
}
