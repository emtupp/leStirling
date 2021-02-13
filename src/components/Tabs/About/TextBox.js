import React from 'react';
import Fade from 'react-reveal/Fade';
import TextBoxItem from './TextBoxItem';

export default function TextBox(props) {
  return (
    <section className='textbox'>
        <Fade right>
          <TextBoxItem />
        </Fade>
    </section>
  );
};