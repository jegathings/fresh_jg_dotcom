import logo from './logo.svg';
import './App.css';
import React from 'react';
import About from './components/about';
import Portfolio from './components/portfolio';
import Bio from './components/bio';

const App = (props) => {
    const [about, setAbout] = React.useState(false);
    const [gitHub, setGitHub] = React.useState(false);
    const [linkedIn, setLinkedIn] = React.useState(false);
    const [portfolio, setPortfolio] = React.useState(false);
    const [bio, setBio] = React.useState(false);
    const [resume, setResume] = React.useState(false);
    const ABOUT = "about";
    const GITHUB = "github";
    const LINKEDIN = "linkedin";
    const PORTFOLIO = "portfolio";
    const BIO = "bio";
    const RESUME = "resume";

    const display = (showMe) => {
        setAbout(false);
        setGitHub(false);
        setLinkedIn(false);
        setPortfolio(false);
        setBio(false);
        setResume(false);

        if (showMe === ABOUT) {
            setAbout(!about);
            setGitHub(false);
            setLinkedIn(false);
            setPortfolio(false);
            setBio(false);
            setResume(false);
        } else if (showMe === GITHUB) {
            setGitHub(!gitHub);
            setAbout(false);
            setLinkedIn(false);
            setPortfolio(false);
            setBio(false);
            setResume(false);
        } else if (showMe === LINKEDIN) {
            setAbout(false);
            setGitHub(false);
            setLinkedIn(!linkedIn);
            setPortfolio(false);
            setBio(false);
            setResume(false);
        } else if (showMe === PORTFOLIO) {
            setAbout(false);
            setGitHub(false);
            setLinkedIn(false);
            setPortfolio(!portfolio);
            setBio(false);
            setResume(false);
        } else if (showMe === BIO) {
            setBio(!bio);
            setAbout(false);
            setGitHub(false);
            setLinkedIn(false);
            setPortfolio(false);
            setResume(false);
        }
    }

    return (
        <>
            <div className="header">
                <h1>James Gathings</h1>
                <img src="Me.jpg" className="img-circle"/>
                <h2>Full Stack Developer</h2>
                <h3>Javascript | React | Express | Java | Python | MongoDB | RDBMS | AWS Solutions Architect Associate Certified</h3>
                <nav className="dispatch">
                    <button class="button" onClick={() => { display(ABOUT) }}  >About</button>
                    <button class="button" onClick={() => { display(BIO) }}>Bio</button>
                    <button class="button" onClick={() => { display(PORTFOLIO) }}>Portfolio</button>
                    <button class="button" ><a href="https://github.com/jegathings?tab=repositories" target="_blank">GitHub</a></button>
                    <button class="button" ><a href="https://www.linkedin.com/in/jegathings" target="_blank">LinkedIn</a></button>
                    <button class="button"><a href="https://jgs-super-cool-2020-resume.s3.amazonaws.com/James+Gathings+Resume.docx">Resume</a></button>
                </nav>
            </div>
            <div className="holy-grail-body">
                <section class="holy-grail-content">
                    {
                        about &&
                        <About />
                    }
                    {
                        portfolio &&
                        <Portfolio />
                    }
                    {
                        bio &&
                        <Bio />
                    }
                </section>
                <div class="holy-grail-sidebar-1 hg-sidebar">
                </div>

                <div class="holy-grail-sidebar-2 hg-sidebar">
                </div>
            </div>
            <footer />
        </>);
}

export default App;
