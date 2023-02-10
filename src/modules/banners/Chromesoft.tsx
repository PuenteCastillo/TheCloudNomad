import { useEffect } from "react";
import Image from "next/image";

// import all images from chromesoft Images folder
import BG from "./chromesoft_Images/bg.jpg";
import TagLine from "./chromesoft_Images/tag_line.png";
import Box1 from "./chromesoft_Images/box1.png";
import ChromLogo from "./chromesoft_Images/chrom_logo.png";
import Cta from "./chromesoft_Images/cta.png";

export default function Chromesoft() {
  useEffect(() => {
    var chromesoft_Tl = new TimelineLite();
    // rect(top, right, bottom, left)

    chromesoft_Tl

      .add("start", 0)
      .add("part2", 0)
      .from(".crm_chrom_logo", 1, { opacity: 0 }, "start")
      .from(".crm_box1", 1, { y: 50, opacity: 0 }, "start")
      .from(".crm_tag", 1, { opacity: 0, delay: 1.5 }, "part2")
      .from(".crm_cta", 1, { opacity: 0, delay: 2 }, "part2");

    chromesoft_Tl.seek(10);
    // start animtaion on hover jquery code
    // on mouse in

    $(".chromsoftBanner").mouseenter(function () {
      // restart animation
      chromesoft_Tl.timeScale(1);
      chromesoft_Tl.restart();

      chromesoft_Tl.play();
    });
    // on hover out set timeline speed to x5
    $(".chromsoftBanner").mouseleave(function () {
      chromesoft_Tl.timeScale(5);
    });
  }, []);
  return (
    <>
      <div className="box chromsoftBanner" id="ad">
        <div className="hide" id="content">
          <Image className="crm_bg" src={BG} alt="" />
          <Image className="crm_tag" src={TagLine} />
          <Image className="crm_box1" src={Box1} alt="" />
          <Image className="crm_chrom_logo" src={ChromLogo} />
          <Image className="crm_cta" src={Cta} />
        </div>
      </div>
    </>
  );
}
