import React from 'react';
import { Link } from 'react-router-dom';
import SurveyList from './surveys/SurveyList';

const Dashboard = () => {
  return (
    <div>
      <SurveyList />
      <div className="fixed-action-btn">
        <Link to="/surveys/new" className="waves-effect waves-light btn">Create New Survey</Link>
      </div>
    </div>
  );
};

export default Dashboard;
