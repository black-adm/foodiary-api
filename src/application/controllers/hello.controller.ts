import { IHttpRequest } from '../contracts/http.request';
import { IHttpResponse } from '../contracts/http.response';

export class HelloController {
  async handle(request: IHttpRequest): Promise<IHttpResponse<unknown>> {
    return {
      statusCode: 200,
      body: { request },
    };
  }
}
