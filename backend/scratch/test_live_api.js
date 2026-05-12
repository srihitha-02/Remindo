const http = require('https'); // Use https for Railway

const data = JSON.stringify({
    name: 'Test Mobile',
    email: 'test_new_user_' + Date.now() + '@gmail.com',
    password: 'Password123!'
});

const options = {
    hostname: 'remindo-production.up.railway.app',
    port: 443,
    path: '/api/auth/signup',
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Content-Length': data.length
    },
    timeout: 15000 // 15 seconds timeout
};

const req = http.request(options, (res) => {
    console.log(`Status: ${res.statusCode}`);
    res.on('data', (d) => {
        process.stdout.write(d);
    });
});

req.on('error', (error) => {
    console.error('Error:', error.message);
});

req.on('timeout', () => {
    console.error('Request timed out!');
    req.destroy();
});

req.write(data);
req.end();
