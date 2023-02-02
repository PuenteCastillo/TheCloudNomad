import { useEffect } from "react";
import Image from "next/image";
import Me from "./images/hero_img.png";
import Dev from "./images/computer.png";
import Controller from "./images/controller.png";
import Point from "./images/point.png";

export default function Hero() {
  // use regular js
  useEffect(() => {
    var t1 = new TimelineMax();
    t1.add("start", 0)
      .add("phase1", 2)
      .add("phase2", 5)
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
      .to(".dev", 0.5, { y: -5, yoyo: true, repeat: 7, delay: 0.5 }, "phase2")
      .to(".slideTwo", 0.5, { opacity: 0, delay: 3 }, "phase2");
  }, []);

  return (
    <div className="hero">
      <div className="slid-bg"></div>
      <div className="hero-child">
        {/* Hola! I'm J.P 
          Developer by Day, 
          Gamer By Night. 
          Lets work together! 
          Hire Me!  */}
        <div className="slideOne myslide">
          <div className="slide-child">
            <h1 className="intro">
              <span>Hola!</span> <span>I'm</span> <span>J.P</span>
            </h1>
            <Image className="me" src={Me} alt="Picture of the author" />
          </div>
        </div>
        <div className="slideTwo myslide">
          <div className="slide-child">
            <h1>
              <span>Developer</span> <span>by</span> <span>Day,</span>
            </h1>
            <Image className="dev" src={Dev} alt="Picture of the author" />
          </div>
        </div>
        {/* <div className="slideTwo myslide">
          <div className="slide-child">
            <h1> Gamer By Night. </h1>
            <Image
              className="control"
              src={Controller}
              alt="Picture of the author"
            />
          </div>
        </div> */}
        {/* <div className="slideFour myslide">
          <div className="slide-child">
            <h1> Lets Work! </h1>
            <Image className="point" src={Point} alt="Picture of the author" />
          </div>
        </div> */}
      </div>
    </div>
  );
}
