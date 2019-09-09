import { Request, Response } from 'express';

interface IGroupController {
    create(req: Request, res: Response): Promise<any>;
    getAll(req: Request, res: Response): Promise<any>;
    getById(req: Request, res: Response): Promise<any>;
    update(req: Request, res: Response): Promise<any>;
    delete(req: Request, res: Response): Promise<any>;
}

export default IGroupController;
