let apiurl = '';

switch (window.location.hostname) {
    case 'localhost':
    case '127.0.0.1':
        API_URL = 'localhost';
        break;
    case '.herokuapp.com':
        API_URL = 'localhost';
        break;
}

export default apiurl;