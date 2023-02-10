import Image from "next/image";
import Placeholder from "./images/placeholder.png";

export default function What() {
  return (
    <div className="AboutSection">
      <div className="about_child">
        <div className="container">
          <div className="title">
            <h2>ABOUT</h2>
          </div>
          <div className="row ">
            <div className="col-md-6  col-lg-3">
              <Image src={Placeholder} alt="placeholder" className="aboutImg" />
              <h3>Code</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className="col-md-6  col-lg-3">
              <Image src={Placeholder} alt="placeholder" className="aboutImg" />
              <h3>Code</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className=" col-md-6  col-lg-3">
              <Image src={Placeholder} alt="placeholder" className="aboutImg" />
              <h3>Code</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className="col-md-6  col-lg-3">
              <Image src={Placeholder} alt="placeholder" className="aboutImg" />
              <h3>Code</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
