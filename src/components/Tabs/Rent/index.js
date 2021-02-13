import React from 'react';
import './Rent.css';
import { Card } from 'react-bootstrap';

export default function Rent(props) {
  return <section className='rent' >
    <div className='rent-room'>Rent this!</div>
    <div className='rent-house'>Rent that!</div>
    <div className='rent-tiny'>
      <Card>
        <Card.Body>
          <h3>This wing of the house is under construction!</h3>
          <div>Please come back later to book a stay at the Mini Stirling. In the meantime, you can view the progress over in the Mini Stirling tab!</div>
        </Card.Body>
      </Card>
    </div>
  </section>
};