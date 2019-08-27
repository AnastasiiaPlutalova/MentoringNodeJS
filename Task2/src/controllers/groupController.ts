import { injectable, inject } from 'inversify';
import { Request, Response } from 'express';
import { ApiResponse } from '../entities';
import { RESPONSE } from '../common/constants';
import { IEntityController, IGroupDTO } from '../typing/interfaces';
import { GroupMapper } from '../mapper';
import CONTRACTS from '../typing/contracts';
import IEntityService from '../typing/interfaces/IEntityService';

@injectable()
class GroupController implements IEntityController {
    @inject(CONTRACTS.GroupService) private _groupService: IEntityService;

    public create = async (req: Request, res: Response): Promise<any> => {
        try {
            const { status, message } = RESPONSE.SUCCESS;

            const groupDTO: IGroupDTO = GroupMapper.mapReqBodyToGroupDTO(req.body);
            const groupNew: IGroupDTO = await this._groupService.create(groupDTO) as IGroupDTO;
            const response = new ApiResponse(status, message, groupNew);

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
            const groupDTOs: IGroupDTO[] = await this._groupService.getAll() as IGroupDTO[];
            // groups = mapToDtos(groupDOmains)
            const response = new ApiResponse(status, message, groupDTOs);
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
            const group = await this._groupService.getById(id);
            if (group) {
                const { status, message } = RESPONSE.SUCCESS;
                const response = new ApiResponse(status, message, group);
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
            const group = GroupMapper.mapReqBodyToGroupDTO(req.body);
            const updatedGroup = await this._groupService.update(group);
            const response = new ApiResponse(status, message, updatedGroup);

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

            await this._groupService.delete(id);

            return res.status(status).json(response);
        } catch (e) {
            const { status, message } = RESPONSE.INTERNAL_SERVER_ERROR;
            const response = new ApiResponse(status, e.message);

            return res.status(status).json(response);
        }
    }
}

export default GroupController;
