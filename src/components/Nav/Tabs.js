import React, { useState } from 'react';

import { Tabs, Tab } from 'react-bootstrap';

export default function ControlledTabs(props) {
  const [key, setKey] = useState('about');

  return (
    <Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
    >
      <Tab eventKey="about" title="About the house">
        <div> Hello World </div>
      </Tab>
      <Tab eventKey="tiny" title="Mini Stirling">
        {/* <Sonnet /> */}
      </Tab>
      <Tab eventKey="book" title="Book a stay">
        {/* <Sonnet /> */}
      </Tab>
      <Tab eventKey="comments" title="Leave a review">
        {/* <Sonnet /> */}
      </Tab>
      <Tab eventKey="contact" title="Contact us">
        {/* <Sonnet /> */}
      </Tab>
    </Tabs>
  );
};