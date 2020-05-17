'use strict';

module.exports.hello = async event => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Go Serverless v1.0! Your function executed successfully!',
        input: event,
      },
      null,
      2
    ),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};

module.exports.transform = async (event) => {
  console.log(JSON.stringify(event));
  let records = [];
  for(let i = 0; i<event.records.length; i++) {
      let payload = new Buffer(event.records[i].data, 'base64').toString('ascii');
      console.log(`PAYLOAD: ${ JSON.stringify({payload}) }`)
      payload = JSON.parse(payload);
      payload.decoded = true;
      records.push({
        recordId: event.records[i].recordId,
        result: 'Ok',
        data: Buffer.from(JSON.stringify(payload)).toString('base64')});
  }
  console.log(`Return: ${ JSON.stringify({records}) }`)
  return Promise.resolve({records});
};
