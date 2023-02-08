import Image from "next/image";
import Logo from "../images/logo.png";

export default function HeroNav() {
  return (
    <div className="hero-nav">
      <div className="container-fluid ">
        <div className="row justify-content-between">
          <div className="col-md-4">
            <div className="logo">
              {" "}
              <Image className="logo" src={Logo} alt="The Cloud Nomad Logo" />
            </div>
          </div>
          <div className="col-md-3">
            <div className="socialIcons">
              <a href="#">
                <i class="fa-brands fa-linkedin"></i>
              </a>
              <a href="#">
                <i class="fa-brands fa-github"></i>
              </a>
              <a href="#">
                <i class="fa-solid fa-envelope"></i>
              </a>
              <a href="#">
                <i class="fa-brands fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
