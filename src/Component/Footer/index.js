import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="top1">
          <h2>Abibas</h2>
          <div className="lang">
            <select>
              <option value="India">India</option>
              <option value="Australia">Australia</option>
              <option value="London">London</option>
              <option value="America">America</option>
              <option value="France">France</option>
              <option value="Brazil">Brazil</option>
              <option value="England">England</option>
              <option value="South Africa">South Africa</option>
              <option value="Rusia">Rusia</option>
            </select>
            <select>
              <option value="English">English</option>
              <option value="Hindi">Hindi</option>
              <option value="Polish">Polish</option>
            </select>
          </div>
        </div>
        <div className="bottom1">
          <div className="bottomContent">
            <h4>ABOUT ABIBAS</h4>
            <p>who we are</p>
            <p>blog</p>
            <p>work with us</p>
            <p>Investor Relations</p>
            <p>Report Fraud</p>
            <p>Contact Us</p>
          </div>
          <div className="bottomContent">
            <h4>For Designers</h4>
            <p>Inspirations</p>
            <p>Hire Talent</p>
            <p>Advertising</p>
            <p>Career</p>
            
          </div>
          <div className="bottomContent">
            <h4>Support</h4>
            <p>Patner with Us</p>
            <p>Apps For you</p>
            <h4>For Enterprises</h4>
            <p>Freelancers</p>
            <p>Resources</p>
            
          </div>
          <div className="bottomContent">
            <h4>LEARN MORE</h4>
            <p>Privacy</p>
            <p>Security</p>
            <p>Terms</p>
            <p>Tags</p>
          </div>
        </div>
      </div>
      <hr />
      <div className="bottom">
        <p>
        © 2023 Dribbble Abibas
        </p>
      </div>
    </div>
  );
};

export default Footer;
