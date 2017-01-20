module.exports = {
    'mongoUrl' : 'mongodb://127.0.0.1:27017/cheesopedia',
    "connection": {
        // Redirect http traffic to https?
        'secureOnly':'no',
        // Set http port and https port
        'port':'3000',
        'secPort':'3443',
        // Set location of keys
        'key':'/bin/ca.key',
        'cert':'/bin/ca.crt'
    }
}
