const https = require('https');

function sessionsPerPoint (pointid, from, to) {
    const url = '/evcharge/api/' + pointid + '/' + from + '/' + to;
    const path = './softeng20bAPI.token'

    const options = {
        hostname: 'localhost',
        port: 8765,
        path: url,
        method: 'POST',
        rejectUnauthorized: false
    }

    const req = https.request(options, res => {
        //console.log(`statusCode: ${res.statusCode}`)
    
        res.on('data', d=> {
            if(d.status == 'OK') {
                console.log('Successfully reset event sessions and admin account');
            }
            else if (d.status = 'failed') {
                console.log('Resetting failed. Please try again');
            }
            else {
                console.log('Something went wrong: ' + d);
            }
        })
    })
    req.on('error', error => {
        console.log(error);
        console.log("Something went wrong!");
    })

    req.end();
}

exports.sessionsPerPoint = sessionsPerPoint;