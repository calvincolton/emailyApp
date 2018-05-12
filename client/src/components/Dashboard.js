import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div>
      Dashboard component
      <div className="fixed-action-btn">
        <Link to="/surveys/new" className="waves-effect waves-light btn">Create New Survey</Link>
      </div>
    </div>
  );
};

export default Dashboard;
