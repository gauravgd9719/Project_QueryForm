// empty of invalid body validation
const isValidRequestBody = function (requestBody) {
  if(undefined || null) return "enter value" // rought
  if (Object.keys(requestBody).length > 0) return true;
  return false;
};

// name validaton Using Regex
const validName = function (name) {
  if (/^[a-zA-Z\s\.]*$/.test(name)) return true;
  return false;
};

// mobile nuber vlidaation regex
const isValidPhone = function(phone){
    if(/^[\s]*[6-9]\d{9}[\s]*$/gi.test(phone))return true
    return false
}

// email Regex
const isValidEmail = function (mail) {
  if (/^[a-z0-9_]{1,}@[a-z]{3,}[.]{1}[a-z]{3,6}$/.test(mail)) {
    return true;
  }
};

// exports functions here
module.exports = {
  isValidRequestBody,
  validName,
  isValidPhone,
  isValidEmail,
};
