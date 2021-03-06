import React from "react";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faCompass,
  faPhone,
  faClock,
  faEnvelope
} from "@fortawesome/fontawesome-free-solid";

import "./bottom-footer.styles.scss";

library.add(faCompass, faPhone, faClock, faEnvelope);

const BottomFooter = () => {
  return (
    <footer className="bck_b_dark">
      <div className="container">
        <div className="logo">Waves</div>
        <hr />
        <div className="wrapper">
          <div className="left">
            <h2>Contact Information</h2>
            <div className="business_nfo">
              <div className="tag">
                <FontAwesomeIcon icon={faCompass} className="icon" />
                <div className="nfo">
                  <div>Address</div>
                  <div>Kramer</div>
                </div>
              </div>
              <div className="tag">
                <FontAwesomeIcon icon={faPhone} className="icon" />
                <div className="nfo">
                  <div>Phone</div>
                  <div>555.555.555</div>
                </div>
              </div>
              <div className="tag">
                <FontAwesomeIcon icon={faClock} className="icon" />
                <div className="nfo">
                  <div>Working Hours</div>
                  <div>Mon-Sun 9am-9pm</div>
                </div>
              </div>
              <div className="tag">
                <FontAwesomeIcon icon={faEnvelope} className="icon" />
                <div className="nfo">
                  <div>Email</div>
                  <div>nfo@wavey.com</div>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <h2>Be the first to know</h2>
            <div>
              <div>
                Get all the latest information on events, sales and offers. You
                can't miss out!
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default BottomFooter;
