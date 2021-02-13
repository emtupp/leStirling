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

const db = [

  {id: 1,
  text: lorem.generateSentences(5)},

  {id: 2,
  text: lorem.generateSentences(5)},

  {id: 3,
  text: lorem.generateSentences(5)},

  {id: 4,
  text: lorem.generateSentences(5)},

  {id: 5,
  text: lorem.generateSentences(5)},

  {id: 6,
  text: lorem.generateSentences(5)}

];

export default function TextBox(props) {

  const textBoxList = db.map((paragraph) => { return (
    <div>
      <Fade right>
        <TextBoxItem
        key={paragraph.id}
        text={paragraph.text}
        />
      </Fade>
    </div>
    );
  });

  return (
    <section className='textbox'>
      <ul>{textBoxList}</ul>
    </section>
  );
 
};