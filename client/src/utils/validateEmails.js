import _ from 'lodash';

// http://emailregex.com/
// javascript email regEx (throws error with create-react-app):
// eslint-disable-next-line
const emailRegEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
// HTML5 email regEx (does not throw errow, but less strict)
// const emailRegEx = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

export default (emails) => {
  let invalidEmails = emails
    .split(',')
    .map(email => email.trim())
    .filter(email => email.length && emailRegEx.test(email) === false);

  invalidEmails = _.compact(invalidEmails);

  if (invalidEmails.length) {
    // if (invalidEmails.includes('')) {
    //   return 'There is a trailing comma.';
    // }
    return `Invalid email addresses: ${invalidEmails}`;
  }

  return;
};
