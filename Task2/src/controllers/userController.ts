import { Request, Response } from 'express';
import { ApiResponse, mapBodyToUser } from '../entities';
import { UserService } from '../services';
import { RESPONSE } from '../common/constants';

class UserController {
    getAll = async (req, res) => {
        try {
            const { status, message } = RESPONSE.SUCCESS;
            const users = await UserService.getAll();
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
            const newUser = await UserService.create(user);
            const response = new ApiResponse(status, message, newUser);

            return res.status(status).json(response);
        } catch (e) {
            const { status, message } = RESPONSE.INTERNAL_SERVER_ERROR;
            const response = new ApiResponse(status, message);

            return res.status(status).json(response);
        }
    }
    
    getById = async (req, res) => {
        try {
            const { id } = req.params;
            const user = await UserService.getById(id);
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

    update = async (req, res) => {
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

    delete = async (req, res) => {
        try {
            const { status, message } = RESPONSE.SUCCESS;
            const { id } = req.params;
            const response = new ApiResponse(status, message);

            await UserService.delete(id);

            return res.status(status).json(response);
        } catch (e) {
            const { status, message } = RESPONSE.INTERNAL_SERVER_ERROR;
            const response = new ApiResponse(status, message);

            return res.status(status).json(response);
        }
    }
}

export default new UserController();
