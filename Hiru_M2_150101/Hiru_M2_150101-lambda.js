let AWS = require('aws-sdk');
const sns = new AWS.SNS();
exports.handler = function (event, context, callback) {

	console.log('Started the lambda');

	sns.publish({
		Message: 'This is a test message',
		Subject: 'this is a test',
		MessageAttributes: {
			'key01': {
				DataType: 'String',
				StringValue: 'val01'
			},
			'key02': {
				DataType: 'Number',
				StringValue: '001'
			},
			'key03': {
				DataType: 'Binary',
				StringValue: 'false'
			},
		},
		MessageStructure: 'String',
		TopicArn: 'arn:aws:sns:us-east-1:480964559519:hiru_topic'
	}).promise()
		.then(data => {
			// your code goes here
			console.log('Data', data);
		})
		.catch(err => {
			// error handling goes here
			console.log('An error occured');
		});

		console.log('End the process');
		callback(null, 'Successfully executed');


}