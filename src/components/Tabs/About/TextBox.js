import React from 'react';
import Fade from 'react-reveal/Fade';
import TextBoxItem from './TextBoxItem';

import { LoremIpsum } from "lorem-ipsum";

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4
  },
  wordsPerSentence: {
    max: 16,
    min: 4
  }
});

export default function TextBox(props) {
  return (
    <section className='textbox'>
        <Fade right>
          <TextBoxItem />
        </Fade>
    </section>
  );
};