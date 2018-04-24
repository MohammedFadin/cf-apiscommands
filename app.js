//	Example executing CF APIs on CF platforms for customers

const request = require('request');

const instance_order = 0;

const cf_platform = 'https://api.ng.bluemix.net';

/*
	- Fetch your oauth token using #cf oauth-token
	- Fetch your app guid using #cf app APP_NAME -guid
*/
const options = {
    url: cf_platform + '/v2/apps/<your-app-guid>/instances/' + instance_order,
    method: 'DELETE',
    headers: {
    	'Authorization': '<your-oauth-token>'
    }
};

function callback(error, response, body) {
    if (!error && response.statusCode == 200) {
        console.log('instance has been deleted');
    }else console.log(response.body);
}

request(options, callback);
