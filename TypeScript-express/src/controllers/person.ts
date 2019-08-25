import { Request, Response } from 'express'

const person = {
  Get(req: Request, res: Response) {
    const headers = req.headers
    const body = req.body
    const query = req.query

    res.json({
      headers,
      body,
      query
    })
  },

  Post(req: Request, res: Response) {
    const headers = req.headers
    const body = req.body
    const query = req.query

    res.json({
      headers,
      body,
      query
    })
  },

  Put(req: Request, res: Response) {
    const headers = req.headers
    const body = req.body
    const query = req.query

    res.json({
      headers,
      body,
      query
    })
  },

  Delete(req: Request, res: Response) {
    const headers = req.headers
    const body = req.body
    const query = req.query

    res.json({
      headers,
      body,
      query
    })
  }
}

export = person