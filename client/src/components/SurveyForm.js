import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import SurveyField from './SurveyField';
import validateEmails from '../utils/validateEmails';
import surveyFormFields from './surveyFormFields';

class SurveyForm extends Component {
  renderFields() {
    return (
      surveyFormFields.map(({ label, name }, i) => {
        return <Field key={name} label={label} name={name} component={SurveyField} type="text" />
      })
    );
  }

  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
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

  errors.recipients = validateEmails(values.recipients || '');

  surveyFormFields.forEach(({ name, errorMsg }) => {
    if (!values[name]) {
      errors[name] = errorMsg;
    }
  });

  return errors;
}

export default reduxForm({
  validate,
  form: 'surveyForm',
  destroyOnUnmount: false
})(SurveyForm);
