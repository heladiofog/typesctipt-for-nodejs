// Get handler
// Single Responsibility File, for handling requests
import { RequestHandler, Request, Response } from 'express';
import { CakeService } from '../cake.service';

type Params = {};
type Query = {};
type Body = {};
type Req = Request<Params, {}, Body, Query>;
type Res = Response;

// request handler functions array that express allows us to pass to it
// middlewares goes here like validation and loggers
export const handler: RequestHandler[] = [
  async (req: Req, res: Res) => {
    try {
      const cakeId: string = req.params['cakeId'];
      const cakeService: CakeService = new CakeService();
      const cake = await cakeService.getCake(cakeId);
      res.json(cake);
    } catch (error) {
      console.log('error on getOneCake', error.message);
      res.json({ errorMessage: 'Something went wrong!' });
    }
  },
];
