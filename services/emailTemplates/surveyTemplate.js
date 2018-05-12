const keys = require('../../config/keys');

module.exports = (survey) => {
  const { body } = survey;
  return (`
    <html>
      <body>
        <div style="text-align: center;">
          <h3>We want your feedback</h3>
          <p>${survey.body}</p>
          <div>
            <a href="${keys.redirectDomain}/api/surveys/thanks">Yes</a>
          </div>
          <div>
            <a href="${keys.redirectDomain}/api/surveys/thanks">No</a>
          </div>
        </div>
      </body>
    </html>
  `);
};
