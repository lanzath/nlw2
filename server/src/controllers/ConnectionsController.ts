import { Request, Response } from 'express';
import db from '../database/connection';

export default class ConnectionsController {
  /**
   * Show the amount of total connections
   * @param request
   * @param response
   * @returns Json Response with total connections
   */
  async index(request: Request, response: Response) {
    const totalConnections = await db('connections').count('* as total');

    const { total } = totalConnections[0];
    return response.json({ total });
  }

  /**
   * Stores a newly connection resource in database
   * @param request
   * @param response
   * @returns 201 http status
   */
  async create(request: Request, response: Response) {
    const { user_id } = request.body;

    await db('connections').insert({
      user_id,
    });

    return response.status(201).send()
  }
}
