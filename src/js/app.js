// Pull in css code.
//require('../style/main.less');

// Implementation.
let login = (username, password) => {
    if (username !== 'admin' || password !== 'radical') {
        console.log('Incorrect Login');
    }
}
login('admin', 'password');
console.log('App loaded!');