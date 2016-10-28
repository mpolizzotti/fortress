/*eslint no-console: ["error", { allow: ["warn", "error"] }] */

// Pull in inline css & less code.
require('../style/inline/inline.css');
require('../style/inline/inline.less');

// Pull in external css & less code.
require('../style/external/main.less');

// Implementation.
let login = (username, password) => {
    if (username !== 'admin' || password !== 'radical') {
        console.warn('Incorrect Login');
    }
};
login('admin', 'password');