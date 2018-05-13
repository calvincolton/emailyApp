// SurveyNew shows SurveyForm and SurveyFormReview
import React, { Component } from 'react';
// import { connect } from 'react-redux';
import SurveyForm from './SurveyForm';

class SurveyNew extends Component {
  render() {
    return (
      <div>
        Form Wizard container
        <SurveyForm />
      </div>
    );
  }
}

export default SurveyNew;
