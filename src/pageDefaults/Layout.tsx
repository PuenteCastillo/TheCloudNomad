// import modules for sections
import Hero from "../modules/Hero";
import ReactFullpage from "@fullpage/react-fullpage";

const anchors = ["firstPage", "secondPage", "thirdPage"];

export default function Layout() {
  return (
    <ReactFullpage
      //fullpage options
      scrollOverflow={true}
      offsetSections={true}
      // autoScrolling={false}
      /* Options here */
      render={({ state, fullpageApi }) => {
        return (
          <ReactFullpage.Wrapper>
            <div id="firstPage" className="section " data-percentage="50">
              <Hero />
            </div>
            <div id="secondPage" className="section ">
              <p>Section 2</p>
            </div>
            <div id="thirdPage" className="section ">
              <p>Section 2</p>
            </div>
          </ReactFullpage.Wrapper>
        );
      }}
    />
  );
}
