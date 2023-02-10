import Image from "next/image";
import Placeholder from "./images/placeholder.png";
import Chromesoft from "./banners/chromesoft";
import Chromesoft_Two from "./banners/Chromesoft_Two";

export default function Banner() {
  return (
    <div className="BannerSection">
      <Chromesoft />
      <Chromesoft_Two />
    </div>
  );
}
