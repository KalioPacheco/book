import React from 'react';
import {Close} from "styled-icons/evaicons-solid";
import styled from "styled-components";
import PropTypes from "prop-types";

function AboutMe(props) {

  const {
    scrollByAboutClosed,
    className
  } = props;

  return (
    <div className={className}>
      <button type="button" className="resumen-closed" onClick={scrollByAboutClosed}><Close width={50} height={50} style={{color: '#FFF'}} /> </button>
      <div className="about-me">
        <p htmlFor="">Get to know me</p>
        <h1>About Me</h1>
        <div className="animated-bar" />
        <div className="introduction">
          <img src="https://scontent.fpbc2-3.fna.fbcdn.net/v/t1.6435-9/131619958_2815670822079712_1755778260969342576_n.jpg?_nc_cat=108&ccb=1-3&_nc_sid=09cbfe&_nc_eui2=AeEMhE4NgIzvntuM0v06IqNEPaglCUQxgn49qCUJRDGCfs4OwF8KPDVoEmeh_5xh6Rzm_Nuy-0Bqj9udu8ewYm9p&_nc_ohc=Xbp0qrJutVkAX_fQCFN&_nc_ht=scontent.fpbc2-3.fna&oh=ce0e8a317d266461893c2c16a7591854&oe=60A259CA" alt="Pacheco"/>
          <div>
            <h2>Who am I?</h2>
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            <h6>I'm José Miguel, a Web Develoloper and Movil Developer</h6>
            <p>I am a freelancer based in the United Kingdom and i have been building noteworthy UX/UI designs and websites for years, which comply with the latest design trends. I help convert a vision and an idea into meaningful and useful products. Having a sharp eye for product evolution helps me prioritize tasks, iterate fast and deliver faster.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

AboutMe.propTypes = {
  className: PropTypes.string,
  scrollByAboutClosed: PropTypes.func
}

AboutMe.defaultProps = {
  className: '',
  scrollByAboutClosed: () => {}
}

export default styled(AboutMe)`
  width: 100%;
  height: 100vh;
  position: relative;
  background-color: #000;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 0.5em;
    height: 0.75em;
  }
  &::-webkit-scrollbar-track {
    background-color: #000;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #343a40;
    border-radius: 0.5rem;
  }
  .resumen-closed {
    background-color: transparent;
    position: absolute;
    top: 50px;
    right: 50px;
    border: none;
  }
  .about-me {
    padding-top: 60px;
    width: 65%;
    margin-left: 17.5%;
    p, h1 {
      color: #FFF;
      text-align: center;
    }
    p {
      font-size: 15px;
      border-right: none;
    }
    h1 {
      font-size: 46px;
      margin-bottom: 37px;
    }
  }
  .introduction {
    display: grid;
    grid-template-columns: 40% 60%;
    img {
      width: 90%;
      object-fit: cover;
      object-position: center;
    }
    h2 {
      font-size: 24px;
      color: #009c66;
    }
    h6 {
      font-size: 31px;
      font-weight: 700;
      color: #f0f0f0;
      margin-bottom: 16px;
    }
    p {
      border-bottom: 2px solid rgba(255,255,255,.08) !important;
      margin-bottom: 0px;
      padding-bottom: 29px;
      border-right: none;
      white-space: normal;
      text-align: left;
      font-size: 15px;
      line-height: 1.95;
    }
  }
  @-webkit-keyframes barAnimation{
    from{
      -webkit-transform:translateX(0);
      transform:translateX(0)
    }
    to{
      -webkit-transform:translateX(75px);
      transform:translateX(75px)
    }
  }
  @keyframes barAnimation{
    from{
      -webkit-transform:translateX(0);
      transform:translateX(0)
    }
    to{
      -webkit-transform:translateX(75px);
      transform:translateX(75px)
    }
  }
  .animated-bar {
    color: #9f9f9f;
    font-family: Poppins, sans-serif;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.95;
    direction: inherit;
    visibility: visible;
    text-align: center;
    box-sizing: border-box;
    content: '';
    display: block;
    height: 4px;
    left: 0;
    margin: 0 auto 0 auto;
    position: relative;
    right: 0;
    width: 75px;
    background-color: #009e66;
    margin-bottom: 83px;
    &:before {
      -webkit-animation-duration: 3s;
      -webkit-animation-iteration-count: infinite;
      -webkit-animation-name: barAnimation;
      -webkit-animation-timing-function: linear;
      animation-duration: 3s;
      animation-iteration-count: infinite;
      animation-name: barAnimation;
      animation-timing-function: linear;
      background-color: #101010;
      content: '';
      height: 100%;
      position: absolute;
      top: 0;
      width: 4px;
      left: 8px;
    }
    &:after {
      -webkit-animation-duration: 3s;
      -webkit-animation-iteration-count: infinite;
      -webkit-animation-name: barAnimation;
      -webkit-animation-timing-function: linear;
      animation-duration: 3s;
      animation-iteration-count: infinite;
      animation-name: barAnimation;
      animation-timing-function: linear;
      background-color: #101010;
      content: '';
      height: 100%;
      position: absolute;
      top: 0;
      width: 4px;
      left: 0;
    }
  }
`;
