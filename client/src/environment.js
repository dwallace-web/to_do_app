let apiurl = 'http://localhost:5000';

switch (window.location.hostname) {
    case 'localhost':
        // apiurl = 5000;
        break;
    case '127.0.0.1':
        apiurl = 'localhost';
        break;
    case '.herokuapp.com':
        apiurl = 'localhost';
        break;
}

console.log('current api url is', apiurl);

export default apiurl;