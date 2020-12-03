import "semantic-ui-css/semantic.min.css";
import "react-multi-carousel/lib/styles.css";
import "../styles/App.css";

import UAParser from "ua-parser-js";
import React from "react";
import ProductCarousel from "../components/ProductCarousel";
import IVSVideo from "../components/IVSVideo";
import Chat from "../components/Chat";

const App = ({ deviceType }) => {
  return (
    <>
      <h2 style={{textAlign: 'center', marginTop: '1rem' }}>Top 10 Gifts for the Holidays</h2> 
      <section>
      <div className="main full-width full-height chat-container">
        <div className="content-wrapper">
          <IVSVideo />
          <div className="chat-wrapper">
            <Chat />
          </div>
        </div>
      </div>
      </section>
      <section>
        <ProductCarousel />
      </section>
    </>
  );
};

App.getInitialProps = ({ req }) => {
  let userAgent;
  if (req) {
    userAgent = req.headers["user-agent"];
  } else {
    userAgent = navigator.userAgent;
  }
  const parser = new UAParser();
  parser.setUA(userAgent);
  const result = parser.getResult();
  const deviceType = (result.device && result.device.type) || "desktop";
  return { deviceType };
};

export default App;
