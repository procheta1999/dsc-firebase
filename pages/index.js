import React from 'react';
import Head from 'next/head'
import Link from 'next/link'

import * as routes from "../src/constants/routes"
import { AppWithAuthentication } from "../src/components/App";
import Icon from '@material-ui/core/Icon';
import Typography from '@material-ui/core/Typography';
export default function LandingPage(){
  return (
  <AppWithAuthentication>
    <div className="container">
      <Head>
      <meta charset="UTF-8"></meta>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <title>DSC NSEC blogs!</title>
        <link rel="icon" href="https://raw.githubusercontent.com/procheta1999/DSC-NSEC-Blogs/master/public/favicon.ico" />
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"></link>
  
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      </Head>

      <main>
        
      <h1 className="title">
        <img src="https://github.com/procheta1999/DSC-NSEC-Blogs/blob/master/public/dsc.png?raw=true" alt="dsc Logo" className="logo"/>
          <b>DSC NSEC BLOGS-<i id="s">Write Your Own Story!</i></b>
        </h1>
        <br></br>
        <img src="https://media.giphy.com/media/pOZhmE42D1WrCWATLK/giphy.gif"></img>
        <br></br>
        <p className="description">
          We, at DSC NSEC, believe that everyone has a unique story to tell to the world- a story about them,how they reached success, how they never gave up, what challenges did they face, what was the final outcome. So we came up with our blog platform <i id="pro">DSC NSEC blogs!</i> to help reach your stories to the world, to encourage more people in their journey. So, let's start writing !
        </p>
        
        
        <br></br>
  <div id="myCarousel" className="carousel slide" data-ride="carousel">
    <ol className="carousel-indicators">
      <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
      <li data-target="#myCarousel" data-slide-to="1"></li>
      <li data-target="#myCarousel" data-slide-to="2"></li>
    </ol>
    <div className="carousel-inner">

      <div className="item active">
      <div id="pr24">
       <div id="pr2"> <i>Start writing, no matter what. The water does not flow until the faucet is turned on.</i></div>
        -Louis L’Amour
        </div>
      </div>

      <div className="item">
      <div id="pr1">
       <div id="pr2"> <i>Write what should not be forgotten</i></div>
        -Isabel Allende
        </div>
      </div>
    
      <div className="item">
      <div id="pr34">
       <div id="pr2"> <i>The first draft is just you telling yourself the story.</i></div>
        -Terry Pratchett
        </div>
      </div>
  
    </div>

    <a className="left carousel-control" href="#myCarousel" data-slide="prev">
      <span className="glyphicon glyphicon-chevron-left"></span>
      <span className="sr-only">Previous</span>
    </a>
    <a className="right carousel-control" href="#myCarousel" data-slide="next">
      <span className="glyphicon glyphicon-chevron-right"></span>
      <span className="sr-only">Next</span>
    </a>
  </div>
        <br></br>
        <div className="grid">
        <img src="https://github.com/procheta1999/DSC-NSEC-Blogs/blob/master/public/dsc.png?raw=true" alt="blog" id="book1" />
          <a href="https://dscnsec.com/" className="card">
            <h3>About us &rarr;</h3>
            <p>We are Developer Student Club of Netaji Subhash Engineering College, New Garia, Kolkata.</p>
          </a>
        
          <Link href="/signin"><a className="card">
            <h3>Log In &rarr;</h3>
            <p>Start your Blog Journey today!</p>
          </a></Link>
          <img src="https://github.com/procheta1999/DSC-NSEC-Blogs/blob/master/public/book.jpg?raw=true" alt="blog" id="book" />
          <br></br>
          <img src="https://github.com/procheta1999/DSC-NSEC-Blogs/blob/master/public/create.jpg?raw=true" alt="blog" id="book" />
          <a href="/four-post" className="card">
            <h3>Contributors' Section &rarr;</h3>
            <p>The people without whom this page would have been impossible</p>
          </a>
          </div>
          <br></br>
          <div id="pr">
        <Typography variant="h3" gutterBottom style={{ textAlign: "center" }}>
        Follow us:
        </Typography>
        <a href="https://www.facebook.com/dscnsec" target="_blank"><Icon className="fa fa-facebook-f" /></a>
        <a href="https://twitter.com/dscnsec" target="_blank"><Icon className="fa fa-twitter" /></a>
        <a href="https://ig.me/dscnsec" target="_blank"><Icon className="fa fa-instagram" /></a>
        <a  href="https://github.com/dscnsec"target="_blank"><Icon className="fa fa-github" /></a>
        </div>
        <br></br>
        <br></br>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
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
       #book1{
        float:left;
    height:50%;
    width:50%;
      }
      #pr34{
        padding:2em 2em 2em 2em;
        font-size:20px;
        font-family: Optimus Princeps;
        background-image:url("https://github.com/procheta1999/DSC-NSEC-Blogs/blob/master/public/light.jpg?raw=true");
        background-width:25%;
        background-height:25%;
        color:white;
    }
      #pr24{
        padding:2em 2em 2em 2em;
        font-size:20px;
        font-family: Optimus Princeps;
        background-image:url("https://github.com/procheta1999/DSC-NSEC-Blogs/blob/master/public/bulb.jpg?raw=true");
        background-width:25%;
        background-height:25%;
        color:black;
    }
      #pr2{
        padding:1em 1em 1em 1em;
        font-size:40px;
        
    }
      #pr1{
        padding:2em 2em 2em 2em;
        font-size:20px;
        font-family: Optimus Princeps;
        background-image:url("https://github.com/procheta1999/DSC-NSEC-Blogs/blob/master/public/book.jpg?raw=true");
        background-width:50%;
        background-height:50%;
        color:white;
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
        float:right;
    height:50%;
    width:50%;
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
        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 3rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
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
          border: 1px solid #eaeaea;
          border-radius: 10px;
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
          font-size: 2rem;
        }

        .card p {
          margin: 0;
          font-size: 2rem;
          line-height: 1.5;
        }

        .logo {
          height: 1.5em;
          float:left;
          margin-right:1em
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
  </AppWithAuthentication>
);
  }
  const IndexLink = () => (
    <p>
      <Link href={routes.INDEX}>
        <a>HomePage 🏠</a>
      </Link>
    </p>
  );
  export{ IndexLink}
