import { injectable } from 'inversify';
import { IEntityModel, IGroupDomain, IGroupDTO } from '../typing/interfaces';
import { GroupMapper } from '../mapper';
import GroupModel from '../postgres/GroupModel';

@injectable()
class Group implements IEntityModel {
    create = async (groupDTO: IGroupDTO): Promise<IGroupDTO> => {
        const groupDomain: IGroupDomain = GroupMapper.mapGroupDTOToGroupDomain(groupDTO);
        const groupPG = await GroupModel.create(groupDomain, { plain: true });
        const groupCreated: IGroupDTO = GroupMapper.mapGroupPGToGroupDTO(groupPG);
        return groupCreated;
    }

    getAll = async (): Promise<IGroupDTO[]> => {
        const groupsPG = await GroupModel.findAll();
        const groupsDTO: IGroupDTO[] = groupsPG.map((u): IGroupDTO => {
            const groupPG = u.get({ plain: true });
            const groupDTO = GroupMapper.mapGroupPGToGroupDTO(groupPG);
            return groupDTO;
        });

        return groupsDTO;
    }

    getById = async (id: string): Promise<IGroupDTO> => {
        const groupPG = await GroupModel.findByPk(id);
        const groupDTO = GroupMapper.mapGroupPGToGroupDTO(groupPG.get({ plain: true }));
        return groupDTO;
    }

    update = async (groupDTO: IGroupDTO): Promise<IGroupDTO> => {
        const groupPG = await GroupModel.update(
            groupDTO,
            {
                where: { id: groupDTO.id },
                returning: true,
                plain: true
            });
        const groupUpdated: IGroupDTO = GroupMapper.mapGroupPGToGroupDTO(groupPG[1].dataValues);
        return groupUpdated;
    }

    delete = async (id: string): Promise<void> => {
        await GroupModel.destroy({
            where: { id }
        });
    }
}

export default Group;
