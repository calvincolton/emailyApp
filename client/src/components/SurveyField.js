import React from 'react';

// destructure props.input, passed from ReduxForm Field object
// this will be passed into the input for handlers such as onBlur or onChange
export default ({ input, label, meta: { error, touched } }) => {
  // console.log(input, meta);

  return (
    <div>
      <label>{label}</label>
      <input {...input} style={{ marginBottom: '5px' }} />
      <div className="red-text" style={{ marginBottom: '20px' }}>
        {touched && error}
      </div>
    </div>
  );
}
