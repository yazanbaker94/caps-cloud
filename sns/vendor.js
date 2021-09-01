'use strict';

const AWS = require('aws-sdk');
AWS.config.update({region: 'us-east-1'});
var faker = require('faker');

setInterval(function(){ 
// connect to SNS 
const sns = new AWS.SNS();
// add a message

const topic = 'arn:aws:sns:us-east-1:463125073116:caps-cloud';
const msg = {
    orderId: Math.floor(Math.random() * 5565),
    customer:  faker.name.findName()

};

const params = {
    TopicArn: topic,
    Message: JSON.stringify(msg)
}

    
    sns.publish(params).promise().then(data=> {
        console.log(data)
    }).catch(err=> {
        console.log(err)
    });

}, 5000);


