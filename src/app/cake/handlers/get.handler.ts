// Get handler
// Single Responsibility File, for handling requests
import { RequestHandler, Request, Response } from 'express';
import { getCakes } from '../cake.service';

type Params = {};
type Query = {};
type Body = {};
type Req = Request<Params, {}, Body, Query>;
type Res = Response;

// request handler functions array that express allows us to pass to it
// middlewares goes here like validation and loggers
export const handler: RequestHandler[] = [
  // auth,
  // logger,
  async (req: Req, res: Res) => {
    const cakes = await getCakes();
    res.json(cakes);
  },
];
