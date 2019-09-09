import { injectable, inject } from 'inversify';
import { IGroupDTO, IGroupModel } from '../typing/interfaces';
import { IGroupService } from '../typing/interfaces';
import CONTRACTS from '../typing/contracts';

@injectable()
class GroupService implements IGroupService {
    @inject(CONTRACTS.GroupModel) private _groupModel: IGroupModel;

    create = async (groupDTO: IGroupDTO): Promise<IGroupDTO> => {
        const groupNew: IGroupDTO = await this._groupModel.create(groupDTO) as IGroupDTO;
        return groupNew;
    }

    getAll = async (): Promise<IGroupDTO[]> => {
        const groupDTOs: IGroupDTO[] = await this._groupModel.getAll() as IGroupDTO[];
        return groupDTOs;
    }

    getById = async (id: string): Promise<IGroupDTO> => {
        const groupDTO = await this._groupModel.getById(id) as IGroupDTO;
        return groupDTO;
    }

    update = async (groupDTO: IGroupDTO): Promise<any> => {
        const groupUpdated = await this._groupModel.update(groupDTO);
        return groupUpdated;
    }

    delete = async (id: any): Promise<any> => {
        await this._groupModel.delete(id);
    }
}

export default GroupService;
