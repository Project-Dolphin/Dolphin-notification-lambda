import { Handler, APIGatewayEvent } from 'aws-lambda';

const dolphin: Handler = async (event: APIGatewayEvent) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Go Serverless v1.0! Your function executed successfully!',
        input: event,
      },
      null,
      2,
    ),
  };
};

export { dolphin };
