import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import SurveyField from './SurveyField';
import validateEmails from '../utils/validateEmails';

const FIELDS = [
  { label: 'Survey Title', name: 'title', errorMsg: 'You must provide a title.' },
  { label: 'Subject Line', name: 'subject', errorMsg: 'You must provide a subject line.' },
  { label: 'Email Body', name: 'body', errorMsg: 'You must provide an email body.' },
  { label: 'Recipient List', name: 'emails', errorMsg: 'You must provide a list of email addresses.' }
];

class SurveyForm extends Component {
  renderFields() {
    return (
      FIELDS.map(({ label, name }, i) => {
        return <Field key={name} label={label} name={name} component={SurveyField} type="text" />
      })
    );
  }

  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit(values => console.log(values))}>
          {this.renderFields()}
          <Link to="/surveys" className="red btn-flat white-text">Cancel</Link>
          <button type="submit" className="teal btn-flat right white-text">
            Save
            <i className="material-icons right">done</i>
          </button>
        </form>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};

  errors.emails = validateEmails(values.emails || '');

  FIELDS.forEach(({ name, errorMsg }) => {
    if (!values[name]) {
      errors[name] = errorMsg;
    }
  });

  return errors;
}

export default reduxForm({
  validate,
  form: 'surveyForm'
})(SurveyForm);
