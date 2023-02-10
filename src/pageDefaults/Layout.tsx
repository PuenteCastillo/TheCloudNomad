// import modules for sections
import Hero from "../modules/Hero";
import What from "../modules/What";
import Banners from "../modules/Banners";
import ReactFullpage from "@fullpage/react-fullpage";

const anchors = ["firstPage", "secondPage", "thirdPage"];

export default function Layout() {
  return (
    <ReactFullpage
      //fullpage options
      scrollOverflow={true}
      offsetSections={true}
      responsiveWidth={768}
      // autoScrolling={false}
      /* Options here */
      render={({ state, fullpageApi }) => {
        return (
          <ReactFullpage.Wrapper>
            <div id="thirdPage" className="section ">
              <Banners />
            </div>
            <div id="firstPage" className="section " data-percentage="50">
              <Hero />
            </div>
            <div id="secondPage" className="section ">
              <What />
            </div>
          </ReactFullpage.Wrapper>
        );
      }}
    />
  );
}
