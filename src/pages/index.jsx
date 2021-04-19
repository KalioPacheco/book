import React, { useEffect, useState } from "react";
import styled from "styled-components";
import PropTypes from 'prop-types';
import { Facebook, Linkedin } from "styled-icons/entypo-social";
import { Github } from "styled-icons/evaicons-solid";
import AboutMe from '../components/aboutMe'

function Main(props) {
  const { className } = props;

  const [selected, setSelected] = useState("Devoloper");
  const [about, setAbout] = useState({
      empty: false,
      top: false
  })
  const [width, setWidth] = useState(255);

  const words = ["Devoloper", "Designer", "Freelancer"];

  const changedWord = () => {
    let index = 0;
    const changed = async () => {
      const size = [254, 231, 260];
      setWidth(85);
      await new Promise((resolve) => {
        setTimeout(() => {
          index++;
          if (index === words.length) index = 0;
          setSelected(words[index]);
          resolve(true);
        }, 1000);
      });
      setWidth(size[index]);
    };
    setInterval(() => {
      changed();
    }, 3000);
  };

  const scrollByAbout = async () => {
    setAbout(state => ({
        ...state,
        top: true
    }))
    await new Promise((resolve) => {
      setTimeout(() => {
        resolve(true)
      }, 500)
    })
    setAbout(state => ({
      ...state,
      empty: true
    }))
  }

  const scrollByAboutClosed = async () => {
    setAbout(state => ({
      ...state,
      empty: false
    }))
    await new Promise((resolve) => {
      setTimeout(() => {
        resolve(true)
      }, 500)
    })
    setAbout(state => ({
      ...state,
      top: false
    }))
  }

  useEffect(() => {
    changedWord();
  }, []);

  return (
    <div className={className}>
      <header>
        <button type="button" onClick={scrollByAbout}>About</button>
        <button type="button">Resume</button>
        <button type="button">Portfolio</button>
        <button type="button">Contact</button>
      </header>
      <div className="box">
        <h1>José Miguel</h1>
        <p style={{ width }}>{'I\'m'} a {selected}</p>
        <div className="socials">
          <a
            href="https://www.facebook.com/PachecoDev/"
            target="_blank"
            rel="noreferrer"
          >
            <Facebook size={25} color="#FFF" />
          </a>
          <a
            href="https://www.linkedin.com/in/jos%C3%A9-miguel-carrera-pacheco-b17621194/"
            target="_blank"
            rel="noreferrer"
          >
            <Linkedin size={25} color="#FFF" />
          </a>
          <a
            href="https://github.com/KalioPacheco"
            target="_blank"
            rel="noreferrer"
          >
            <Github size={25} color="#FFF" />
          </a>
        </div>
        <div className="idiomas">
          <button type="button">
            <p>ESP</p>
          </button>
          <button type="button">
            <p>ENG</p>
          </button>
        </div>
      </div>
      <div style={{top: !about.top ? '100vh':'0vh'}} className="resumen-box">
        <div style={{ height: !about.empty ? '100vh': '0vh' }} className="resumen-black" />
        <AboutMe scrollByAboutClosed={scrollByAboutClosed} />
      </div>
    </div>
  );
}

Main.propTypes = {
  className: PropTypes.string
}

Main.defaultProps = {
  className: ''
}

export default styled(Main)`
  width: 100%;
  height: 100%;
  overflow-y: hidden;
  background-color: #000;
  .box {
    display: flex;
    width: 100%;
    height: 100vh;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
  }
  h1 {
    font-weight: 700;
    font-size: 70px;
    color: #fff;
  }
  p {
    font-weight: 400;
    font-size: 32px;
    letter-spacing: 0.3px;
    text-overflow: none;
    color: #fff;
    line-height: 1.2;
    transition: 1s;
    overflow: hidden;
    white-space: pre;
    border-right: solid 1px #fff;
  }
  .socials {
    position: absolute;
    display: flex;
    flex-direction: column;
    bottom: 40px;
    right: 40px;
    a {
      margin-bottom: 10px;
    }
  }
  .idiomas {
    display: flex;
    flex-direction: column;
    position: absolute;
    bottom : 20px;
    left: 40px;
    button {
      background-color: transparent;
      border: none;
      cursor: pointer;
      &:nth-child(1) {
        margin-bottom: 20px;
      }
    }
    button > p {
      writing-mode: vertical-lr;
      text-orientation: unset;
      font-size: 14px;
      border-right: none;
      background-color: transparent;
    }
  }
  header {
    height: 100px;
    display: flex;
    z-index: 1;
    justify-content: flex-end;
    align-items: center;
    position: absolute;
    width: auto;
    right: 50px;
    button {
      background-color: transparent;
      color: #FFF;
      border: none;
      padding: 0px 20px;
      cursor: pointer;
      font-size: 16px;
      font-weight: 500;
    }
  }
  button {
    &:focus, &:active {
      outline: none;
    }
  }
  .resumen-black {
    transition: .6s;
    background-color: #181818;
  }
  .resumen-box {
    z-index: 2;
    transition: .6s;
    position: absolute;
    width: 100%;
    &::-webkit-scrollbar {
      width: 0.5em;
      height: 0.75em;
    }
    &::-webkit-scrollbar-track {
      background-color: #f2f2f2;
    }
    &::-webkit-scrollbar-thumb {
      background-color: #ccc;
      border-radius: 0.5rem;
    }
  }
`;
