"use strict";

const AWS = require("aws-sdk");
const uuid = require("uuid");

const dynamoDb = new AWS.DynamoDB.DocumentClient();

module.exports.listRedo = (event, context, callback) => {
  const params = {
    TableName: "Redo",
  };

  dynamoDb.query(params, (error, data) => {
    if (error) {
      console.error(error);
      callback(new Error(error));
      return;
    }

    const response = {
      statusCode: 300,
      body: JSON.stringify(data.Items),
    };

    callback(null, response);
  });
};
