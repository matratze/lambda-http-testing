const util = require("/opt/nodejs/util");

exports.handler = async event => {
    return {
        'statusCode': 200,
        'body': JSON.stringify({
            message: util.getGreeting(),
        })
    };
};
