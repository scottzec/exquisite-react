import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './PlayerSubmissionForm.css';

const PlayerSubmissionForm = (props) => {

  const [formFields, setFormFields] = useState({
    adj1: '',
    noun1: '',
    adverb: '',
    verb: '',
    adj1: '',
    noun2: '',
  });

  // event handlers
  const onInputChange = (event) => {
    // console.log(`Changing field ${ event.target.name } to ${ event.target.value }`);
    const newFormFields = {
      ...formFields,
    }
    newFormFields[event.target.name] = event.target.value;
    setFormFields(newFormFields);
  }

  // const onFormSubmit = (event) => {
  //   event.preventDefault();
  
  //   // props.addSubmissionCallback(formFields);
  //   props.addSubmitForm(formFields);
  //   // How do I link this between Game & Form

  //   setFormFields({
  //     adjective: '',
  //     noun: '',
  //     adverb: '',
  //     verb: '',
  //     adjective: '',
  //     noun: '',
  //   });
  // };

  // // validation example
  // const emailValid = () => {
  //   return formFields.email.match(/\S+@\S+/) || formFields.email === '';
  // }

  return (
    <div className="PlayerSubmissionForm">
      <h3>Player Submission Form for Player #{props.index}</h3>

      <form className="PlayerSubmissionForm__form" onSubmit={onInputChange}>
        {/* <p> The </p> */}
        <div className="PlayerSubmissionForm__poem-inputs">
          <input
            name="adj1"
            value={formFields.adj1}
            placeholder="adjective"
            type="text"
            onChange={onInputChange} />
        </div>

        <div className="PlayerSubmissionForm__poem-inputs">
          <input
            name="noun1"
            value={formFields.noun1}
            placeholder="noun"
            type="text"
            onChange={onInputChange} />
        </div>

        <div className="PlayerSubmissionForm__poem-inputs">
          <input
            name="adverb"
            value={formFields.adverb}
            placeholder="adverb"
            type="text"
            onChange={onInputChange} />
        </div>

        <div className="PlayerSubmissionForm__poem-inputs">
          <input
            name="verb"
            value={formFields.verb}
            placeholder="verb"
            type="text"
            onChange={onInputChange} />
        </div>
        {/* <p> the </p> */}
        <div className="PlayerSubmissionForm__poem-inputs">
          <input
            name="adj2"
            value={formFields.adj2}
            placeholder="adjective"
            type="text"
            onChange={onInputChange} />
        </div>

        <div className="PlayerSubmissionForm__poem-inputs">
          <input
            name="noun2"
            value={formFields.noun2}
            placeholder="noun"
            type="text"
            onChange={onInputChange} />
        </div>

        <div className="PlayerSubmissionForm__submit">
          <input type="submit" value="Submit Line" className="PlayerSubmissionForm__submit-btn" />
        </div>
      </form>
    </div>
  );
}

PlayerSubmissionForm.propTypes = {
  index: PropTypes.number.isRequired,
  sendSubmission: PropTypes.func.isRequired,
  fields: PropTypes.arrayOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      placeholder: PropTypes.string.isRequired,
    }),
  ])).isRequired,
}

export default PlayerSubmissionForm;
