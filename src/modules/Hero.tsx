import { useEffect } from "react";
import Image from "next/image";
import Me from "./images/hero_img.png";
import Dev from "./images/computer.png";
import ComputerShadow from "./images/computerShadow.png";
import Controller from "./images/controller.png";
import ControllerShadow from "./images/controllerShadow.png";
import Point from "./images/point.png";
import PointTwo from "./images/pointTwo.png";
import Logo from "./images/logo.png";
import HeroNav from "./parts/HeroNav";

export default function Hero() {
  // use regular js
  useEffect(() => {
    var t1 = new TimelineMax();
    t1.add("start", 0)
      .add("phase1", 2)
      .add("phase2", 5)
      .add("phase3", 8.5)
      .add("phase4", 12.5)
      .from(".hero-child", 0, { opacity: 0, delay: 1 }, "start")
      .staggerFrom(".intro span", 0.2, { opacity: 0, stagger: 0.2 }, "phase1")
      .from(".me", 0.5, { opacity: 0, y: 50 }, "phase1")
      .to(
        ".me",
        0.08,
        { rotate: -5, yoyo: true, repeat: 5, delay: 0.8 },
        "phase1"
      )
      .to(".slideOne", 0.5, { opacity: 0, delay: 1 })
      .from(".slideTwo", 0.5, { opacity: 0 }, "phase2")
      .from(".dev", 0.5, { opacity: 0, y: -50 }, "phase2")
      .staggerFrom(
        ".slideTwo span",
        0.2,
        { opacity: 0, stagger: 0.2 },
        "phase2"
      )
      .to(
        ".mainDev",
        0.5,
        { y: -5, yoyo: true, repeat: 7, delay: 0.5 },
        "phase2"
      )
      .to(".slideTwo", 0.5, { opacity: 0, delay: 3 }, "phase2")
      .from(".slideThree", 0.5, { opacity: 0 }, "phase3")
      .from(".control", 0.5, { opacity: 0, y: -50 }, "phase3")
      .staggerFrom(".slideThree span", 0.2, { opacity: 0, stagger: 0.2 })
      .to(
        ".mainController",
        0.5,
        { y: -5, yoyo: true, repeat: 7, delay: 0.5 },
        "phase3"
      )
      .to(".slideThree", 0.5, { opacity: 0, delay: 3 }, "phase3")
      .from(".slideFour", 0.5, { opacity: 0 }, "phase4")
      .from(".point", 0.5, { opacity: 0, y: -50 }, "phase4")
      .staggerFrom(".slideFour span", 0.2, {
        opacity: 0,
        stagger: 0.2,
      })
      // .to(".point", 0.5, { y: -5, yoyo: true, repeat: 7, delay: 0.5 }, "phase4")
      .to(".slideFour", 0.5, { opacity: 0, delay: 3 }, "phase4");

    // increase timeline speed
    t1.timeScale(1.2);
    // repeat animation
    t1.repeat(-1);
  }, []);

  return (
    <div className="hero">
      <div className="slid-bg"></div>
      <HeroNav />

      <div className="hero-child">
        {/* Hola! I'm J.P 
          Developer by Day, 
          Gamer By Night. 
          Lets work together! 
          Hire Me!  */}
        <div className="slideOne myslide">
          <div className="slide-child">
            <h1 className="intro">
              <span>Hello!</span> <span>It's</span> <span>Dough</span>
            </h1>
            <Image className="me" src={Me} alt="Picture of the author" />
          </div>
        </div>
        <div className="slideTwo myslide">
          <div className="slide-child">
            <h1>
              <span>Developer</span> <span>by</span> <span>Day,</span>
            </h1>
            <Image
              className="dev mainDev"
              src={Dev}
              alt="Picture of the author"
            />
            <Image
              className="dev devShadow"
              src={ComputerShadow}
              alt="Picture of the author"
            />
          </div>
        </div>
        <div className="slideThree myslide">
          <div className="slide-child">
            <h1>
              <span>Gamer</span> <span>By</span>
              <span> Night.</span>
            </h1>
            <Image
              className="control mainController"
              src={Controller}
              alt="Picture of the author"
            />
            <Image
              className="control controlShadow"
              src={ControllerShadow}
              alt="Picture of the author"
            />
          </div>
        </div>
        <div className="slideFour myslide">
          <div className="slide-child">
            <h1>
              <span>Lets</span>
              <span> Work! </span>
            </h1>
            <Image className="point" src={Point} alt="Picture of the author" />
            <Image
              className="point pointTop"
              src={PointTwo}
              alt="Picture of the author"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
