import React from "react";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";
function Footer() {
  return (
    <div className="footer">
      <div className="folloeMeLogos">
        <div className="githubLogo">
          <a href="https://github.com/munsif12">
            <GitHubIcon />
          </a>
        </div>
        <div className="linkedInLogo">
          <a href="https://www.linkedin.com/in/munsif-ali-misri-8191261a8/">
            <LinkedInIcon />
          </a>
        </div>
        <div className="twitterLogo">
          <a href="https://twitter.com/munsif_misri">
            <TwitterIcon />
          </a>
        </div>
      </div>
      <div className="copyRight">
        <p>&copy; Munsif Ali Misri {new Date().getFullYear()}</p>
      </div>
    </div>
  );
}

export default Footer;
