import { IHttpRequest } from '../contracts/http.request';

export class HelloController {
  async handle(request: IHttpRequest) {
    return {
      statusCode: 200,
      body: JSON.stringify({ request }),
    };
  }
}
