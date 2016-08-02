/**
 * @function testPattern
 * Returns true/false whether the value matches the regular expressions passed.
 *
 * @param {n/a} value - the value from the input can be anything.
 * @param {String} pattern - the regular expression.
 */
function testPattern(value, pattern) {
    var regExp = pattern;
    return regExp.test(value);
}

/**
 * @function isRequired
 * Returns true/false if a value was passed or not.
 *
 * @param {n/a} value - the value from the input can be anything.
 */
function isRequired(value) {
    return (value) ? true : false;
}

/**
 * @function isNumber
 * Returns true/false if value is a number or not.
 *
 * @param {n/a} value - the value from the input can be anything.
 */
function isNumber(value) {
    return (isNaN(value)) ? false : true;
}

/**
 * @function isOnly
 * Returns true/false if the only paramater matches the value or not. 
 *
 * @param {n/a} value - the value from the input can be anything.
 * @param {n/a} only - this can be anything, its what matches the value to.
 */
function isOnly(value, only) {
    return (value == only) ? true : false;
}

/**
 * @function validateEmail
 * Returns true/false if value matches the valid email regex.
 *
 * @param {n/a} value - the value from the input can be anything.
 */
function validateEmail(value) {
    if (value) {
        return testPattern(value, /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/);
        return true;
    }
}

/**
 * @function validateURL
 * Returns true/false if value matches the valid url regex.
 *
 * @param {n/a} value - the value from the input can be anything.
 */
function validateURL(value) {
    if (value) {
        return testPattern(value, /^\s*(http\:\/\/)?([a-z\d\-]{1,63}\.)*[a-z\d\-]{1,255}\.[a-z]{2,6}\s*$/);
        return true;
    }
}

/**
 * @function validateZip
 * Returns true/false if value matches the valid zip regex.
 *
 * @param {n/a} value - the value from the input can be anything.
 */
function validateZip(value) {
    if (value) {
        return testPattern(value, /^[0-9]{5}(?:-[0-9]{4})?$/);
        return true;
    }
}

/**
 * @function validatePhone
 * Returns true/false if value matches the valid phone regex.
 *
 * @param {n/a} value - the value from the input can be anything.
 */
function validatePhone(value) {
    var val = value.replace(/\s*/g, '');

    if (val) {
        return testPattern(val, /^\+?\d{10}$/);
        return true;
    }
}

/**
 * @function validateDOB
 * Returns true/false if value matches the valid dob regex.
 * I have the current format set to mm/dd/yyyy
 *
 * @param {n/a} value - the value from the input can be anything.
 */
function validateDOB(value) {
    if (value) {
        return testPattern(value, /^\d{2}\/\d{2}\/\d{4}$/);
        return true;
    }
}
