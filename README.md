# ReteamNow_crud_serverless

Here is the list of AWS resources that the project template creates:

✔️ AWS Lambda

✔️ Amazon DynamoDB

✔️ Amazon API Gateway

✔️ AWS IAM

✔️ Amazon S3 (that is where your CloudFormation template will be stored)

# How to use the services: 

In cloud, provisioning involves the process of preparing and equipping a network to allow it to provide new services to its users which is managed by cloudformation.

1️⃣ The request which includes all necessary information is sent to Amazon API Gateway restful service.

2️⃣ API Gateway transfers the collected user information to a Lambda function.

3️⃣ AWS Lambda function executes event-based logic calling DynamoDB database.

4️⃣ DynamoDB provides a persistence layer where data can be stored/retrieved by the API's Lambda function.


![High level overview of microservice architecture](https://user-images.githubusercontent.com/106739132/199459978-6e7bd1e4-5696-4dc0-a3d9-8e0d1eb19777.jpg)


Project setup: 

Step 1: git clone https://github.com/MdRedone/ReteamNow_crud_serverless.git

Step 2: aws configure

        -> provide access of iam user

        -> provide secret key of iam user

Step 3: deploy full crud using : sls deploy

Step 4: deploy single function using: sls deploy -f function_name


Clean Up:

To delete the sample application that you created, use the AWS CLI:

aws cloudformation delete-stack --stack-name aws-serverless-microservice-app-stack







Don't forget to chill... 




![meme-joker-dance](https://user-images.githubusercontent.com/106739132/199656642-9a5a9928-54d7-4e02-ad0d-685676bba821.png)


