let AWS = require('aws-sdk');
const sns = new AWS.SNS();
exports.handler = function (event, context, callback) {

	console.log('Started the lambda');

	sns.publish({
		Message: 'This is a test message three',
		Subject: 'this is a test three',
		MessageAttributes: {
			'key01': {
				DataType: 'String',
				StringValue: 'val01'
			},
			'key02': {
				DataType: 'Number',
				StringValue: '001'
			}
		},
		MessageStructure: 'String',
		TopicArn: 'arn:aws:sns:us-east-1:480964559519:Test'
	},
		function (err, data) {
			if (err) {
				console.log(err, err.stack);
				console.log(context);
			} // an error occurred
			else console.log(data);
			console.log(context);          // successful response
		});




	console.log('End the process');
	callback(null, 'Successfully executed');
}