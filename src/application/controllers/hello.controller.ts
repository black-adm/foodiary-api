import { IController, IHttpController } from '../interfaces/http.controller';

export class HelloController implements IHttpController<unknown> {
  async handle(request: IController.Request): Promise<IController.Response<unknown>> {
    return {
      statusCode: 200,
      body: { request },
    };
  }
}
