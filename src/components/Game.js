import React, { useState } from 'react';
import './Game.css';
import PlayerSubmissionForm from './PlayerSubmissionForm';
import FinalPoem from './FinalPoem';
import RecentSubmission from './RecentSubmission';

const Game = () => {
  const exampleFormat = FIELDS.map((field) => {
    if (field.key) {
      return field.placeholder;
    } else {
      return field;
    }
  }).join(' ');

  const [submitCheck, setSubmitCheck] = useState(false);

  const [submittedLines, setSubmittedLines] = useState([]);

  const addSubmittedLine = (submittedLine) => {
    const newLineList = [...submittedLines, submittedLine];
    
    setSubmittedLines(newLineList);
  }

  const revealPoemFunction = () => {
    setSubmitCheck(true);
  }

  return (
    <div className="Game">
      <h2>Game</h2>

      <p>Each player should take turns filling out and submitting the form below. Each turn should be done individually and <em>in secret!</em> Take inspiration from the revealed recent submission. When all players are finished, click the final button on the bottom to reveal the entire poem.</p>

      <p>Please follow the following format for your poetry submission:</p>

      <p className="Game__format-example">
        { exampleFormat }
      </p>

      { submitCheck || !submittedLines.length || <RecentSubmission submission={submittedLines[submittedLines.length-1]}/> }
      {/* Why undefined for typeof object doesn't work */}
      
      {/* sendSubmittedLine is name of prop as is fields */}
      { submitCheck || <PlayerSubmissionForm fields={FIELDS} sendSubmission={addSubmittedLine} index={submittedLines.length + 1}/> }

      <FinalPoem isSubmitted={submitCheck} submissions={submittedLines} revealPoem={revealPoemFunction}/>

    </div>
  );
}

const FIELDS = [
  'The',
  {
    key: 'adj1',
    placeholder: 'adjective',
  },
  {
    key: 'noun1',
    placeholder: 'noun',
  },
  {
    key: 'adv',
    placeholder: 'adverb',
  },
  {
    key: 'verb',
    placeholder: 'verb',
  },
  'the',
  {
    key: 'adj2',
    placeholder: 'adjective',
  },
  {
    key: 'noun2',
    placeholder: 'noun',
  },
  '.',
];

export default Game;
