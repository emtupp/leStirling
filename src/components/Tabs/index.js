import React, { useState } from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import './Tabs.css';

import About from './About';
import Rent from './Rent';

export default function ControlledTabs(props) {
  const [key, setKey] = useState('about');

  return (
    <Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
    >
      <Tab eventKey="about" title="About the house">
        <About />
      </Tab>
      <Tab eventKey="tiny" title="Mini Stirling">
        {/* <Sonnet /> */}
      </Tab>
      <Tab eventKey="book" title="Book a stay">
        <Rent />
      </Tab>
      <Tab eventKey="comments" title="Leave a review" disabled>
        {/* <Sonnet /> */}
      </Tab>
      <Tab eventKey="contact" title="Contact us">
        {/* <Sonnet /> */}
      </Tab>
    </Tabs>
  );
};