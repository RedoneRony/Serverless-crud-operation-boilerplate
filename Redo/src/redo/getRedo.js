"use strict";

const AWS = require("aws-sdk");
const dynamoDb = new AWS.DynamoDB.DocumentClient();

module.exports.getRedo = (event, context, callback) => {
  const { id } = event.pathParameters;
  const params = {
    TableName: "Redo",
    IndexName: "Properties_redo",
    KeyConditionExpression: "task = :task",
    ExpressionAttributeValues: {
      ":task": id,
    },
    // ProjectionExpression: "ALL",
    ScanIndexForward: true,
  };

  dynamoDb.query(params, (error, data) => {
    if (error) {
      console.error(error);
      callback(new Error(error));
      return;
    }

    const response = data.Items
      ? {
          statusCode: 200,
          body: JSON.stringify(data.Items),
        }
      : {
          statusCode: 404,
          body: JSON.stringify(id),
        };

    callback(null, response);
  });
};
