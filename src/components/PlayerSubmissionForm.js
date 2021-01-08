import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './PlayerSubmissionForm.css';

const PlayerSubmissionForm = (props) => {

  const [formFields, setFormFields] = useState({
    adj1: '',
    noun1: '',
    adv: '',
    verb: '',
    adj2: '',
    noun2: '',
  });

  // event handler
  const onInputChange = (event) => {
    // console.log(`Changing field ${ event.target.name } to ${ event.target.value }`);
    const newFormFields = {
      ...formFields,
    }
    newFormFields[event.target.name] = event.target.value;
    setFormFields(newFormFields);
  }

  const generateFormSubmission = () => props.fields.map(field => {
    if (typeof field === 'object') {
      return formFields[field.key]
    }
    return field
  }).join(' ');

  const onFormSubmit = (event) => {
    event.preventDefault(); //prevents browser from submitting form
  
    props.sendSubmission(generateFormSubmission()); // variable for the addSubmittedLine func in Game.js

    setFormFields({
      adj1: '',
      noun1: '',
      adv: '',
      verb: '',
      adj2: '',
      noun2: '',
    });
  };

  // // validation example
  // const emailValid = () => {
  //   return formFields.email.match(/\S+@\S+/) || formFields.email === '';
  // }

  return (
    <div className="PlayerSubmissionForm">
      <h3>Player Submission Form for Player #{props.index}</h3>

      <form className="PlayerSubmissionForm__form" onSubmit={onFormSubmit}>

        <div className="PlayerSubmissionForm__poem-inputs">
          {props.fields.map((field, index) => {
            if (typeof field === 'object') {
              return(
                <input
                  key={index}
                  name={field.key}
                  value={formFields[field.key]}
                  placeholder={field.placeholder}
                  type="text"
                  onChange={onInputChange} />
                  // check validity?
                )
            } else {
              return(
                <div key={index}> {field} </div>
              )
            }
          }
        ) 
      }
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
