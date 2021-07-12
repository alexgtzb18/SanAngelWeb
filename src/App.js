import React, { Fragment } from "react";
import './index.css'
import 'rsuite/dist/styles/rsuite-default.css';

import { Footer } from "rsuite";
import {Banner, BodyPage, FooterPage, Navigator} from "./Components";


function App() {
  return (
    <Fragment>
      <Navigator/>
      <Banner/>
      <BodyPage/>
      <FooterPage/>
    </Fragment>
  );
}

export default App;
