import { APIGatewayProxyEventV2 } from 'aws-lambda';
import { HelloController } from './application/controllers/hello.controller';
import { lambdaBodyParser } from './main/utils/lambda.body-parser';

const controller = new HelloController();

export async function handler(event: APIGatewayProxyEventV2) {
  const body = lambdaBodyParser(event.body);
  const params = event.pathParameters ?? {};
  const queryParams = event.queryStringParameters ?? {};

  return controller.handle({
    body,
    params,
    queryParams,
  });
}
