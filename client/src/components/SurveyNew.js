// SurveyNew shows SurveyForm and SurveyFormReview
import React, { Component } from 'react';
import SurveyForm from './SurveyForm';
import SurveyReview from './SurveyReview';

class SurveyNew extends Component {
  constructor(props) {
    super(props);
    this.state = { showReview: false };
  }

  renderContent() {
    if (this.state.showReview) {
      return <SurveyReview onCancel={() => this.setState({ showReview: false })} />;
    }
    return <SurveyForm onSurveySubmit={() => this.setState({ showReview: true })} />
  }

  render() {
    return (
      <div>
        {this.renderContent()}
      </div>
    );
  }
}

export default SurveyNew;
