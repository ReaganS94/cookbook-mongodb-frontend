import "./Footer.css";
import { FiFacebook } from "react-icons/fi";
import { FiInstagram } from "react-icons/fi";
import { FiTwitter } from "react-icons/fi";
import { RiPinterestLine } from "react-icons/ri";

function Footer() {
  return (
    <div className="footer">
      <h4 className="webName">Food Loose</h4>
      <div className="subscribe">
        <h5> SUBSCRIBE FOR MORE RECIPES</h5>
        <input type="text" placeholder="email" className="input" />
      </div>
      <div className="logos">
        <FiFacebook className="smLogo" />
        <FiInstagram className="smLogo" />
        <FiTwitter className="smLogo" />
        <RiPinterestLine className="smLogo" />
      </div>
    </div>
  );
}

export default Footer;
