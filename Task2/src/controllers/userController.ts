import { injectable, inject } from 'inversify';
import { Request, Response } from 'express';
import { ApiResponse } from '../entities';
import { RESPONSE } from '../common/constants';
import { IEntityController, IUserDTO } from '../typing/interfaces';
import { UserMapper } from '../mapper';
import CONTRACTS from '../typing/contracts';
import IEntityService from '../typing/interfaces/IEntityService';

@injectable()
class UserController implements IEntityController {
    @inject(CONTRACTS.IEntityService) private _userService: IEntityService;

    public create = async (req: Request, res: Response): Promise<any> => {
        try {
            const { status, message } = RESPONSE.SUCCESS;

            const userDTO: IUserDTO = UserMapper.mapReqBodyToUserDTO(req.body);
            const userNew: IUserDTO = await this._userService.create(userDTO);
            const response = new ApiResponse(status, message, userNew);

            return res.status(status).json(response);
        } catch (e) {
            const { status, message } = RESPONSE.INTERNAL_SERVER_ERROR;
            const response = new ApiResponse(status, e.message);

            return res.status(status).json(response);
        }
    }

    public getAll = async (req: Request, res: Response): Promise<any> => {
        try {
            const { status, message } = RESPONSE.SUCCESS;
            const userDTOs: IUserDTO[] = await this._userService.getAll();
            // users = mapToDtos(userDOmains)
            const response = new ApiResponse(status, message, userDTOs);
            return res.status(status).json(response);
        } catch (e) {
            const { status, message } = RESPONSE.INTERNAL_SERVER_ERROR;
            const response = new ApiResponse(status, e.message);

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
            const user = UserMapper.mapReqBodyToUserDTO(req.body);
            const updatedUser = await this._userService.update(user);
            const response = new ApiResponse(status, message, updatedUser);

            return res.status(status).json(response);
        } catch (e) {
            const { status, message } = RESPONSE.INTERNAL_SERVER_ERROR;
            const response = new ApiResponse(status, e.message);

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
            const response = new ApiResponse(status, e.message);

            return res.status(status).json(response);
        }
    }
}

export default UserController;
