import { injectable, inject } from 'inversify';
import { Request, Response } from 'express';
import { ApiResponse, mapBodyToUser } from '../entities';
import { UserService } from '../services';
import { RESPONSE } from '../common/constants';
import { IEntityController, IEntityService } from '../typing/interfaces';
import TYPES from '../typing/types';

@injectable()
class UserController implements IEntityController {
    @inject(TYPES.IEntityService) private _userService: IEntityService;

    public getAll = async (req: Request, res: Response): Promise<any> => {
        try {
            const { status, message } = RESPONSE.SUCCESS;
            const users = await this._userService.getAll();
            const response = new ApiResponse(status, message, users);
            return res.status(status).json(response);
        } catch (e) {
            const { status, message } = RESPONSE.INTERNAL_SERVER_ERROR;
            const response = new ApiResponse(status, message);

            return res.status(status).json(response);
        }
    }

    public create = async (req: Request, res: Response): Promise<any> => {
        try {
            const { status, message } = RESPONSE.SUCCESS;
            const user = mapBodyToUser(req.body);
            const newUser = await this._userService.create(user);
            const response = new ApiResponse(status, message, newUser);

            return res.status(status).json(response);
        } catch (e) {
            const { status, message } = RESPONSE.INTERNAL_SERVER_ERROR;
            const response = new ApiResponse(status, message);

            return res.status(status).json(response);
        }
    }

    public getById = async (req: Request, res: Response): Promise<any> => {
        try {
            const { id } = req.params;
            const user = await this._userService.getById(id);
            if (user) {
                const { status, message } = RESPONSE.SUCCESS;
                const response = new ApiResponse(status, message, user);
                return res.status(status).json(response);
            }

            const { status, message } = RESPONSE.NOT_FOUND;
            const response = new ApiResponse(status, message);
            return res.status(status).json(response);
        } catch (e) {
            const { status, message } = RESPONSE.INTERNAL_SERVER_ERROR;
            const response = new ApiResponse(status, message);

            return res.status(status).json(response);
        }
    }

    public update = async (req: Request, res: Response): Promise<any> => {
        try {
            const { status, message } = RESPONSE.SUCCESS;
            const user = mapBodyToUser(req.body);
            const updatedUser = await UserService.update(user);
            const response = new ApiResponse(status, message, updatedUser);

            return res.status(status).json(response);
        } catch (e) {
            const { status, message } = RESPONSE.INTERNAL_SERVER_ERROR;
            const response = new ApiResponse(status, message);

            return res.status(status).json(response);
        }
    }

    public delete = async (req: Request, res: Response): Promise<any> => {
        try {
            const { status, message } = RESPONSE.SUCCESS;
            const { id } = req.params;
            const response = new ApiResponse(status, message);

            await this._userService.delete(id);

            return res.status(status).json(response);
        } catch (e) {
            const { status, message } = RESPONSE.INTERNAL_SERVER_ERROR;
            const response = new ApiResponse(status, message);

            return res.status(status).json(response);
        }
    }
}

export default UserController;
