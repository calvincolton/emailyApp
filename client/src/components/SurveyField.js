import React from 'react';

// destructure props.input, passed from ReduxForm Field object
// this will be passed into the input for handlers such as onBlur or onChange
export default ({ input, label }) => {
  // console.log(input);

  return (
    <div>
      <label>{label}</label>
      <input {...input} />
    </div>
  );
}
