import uuidv4 from 'uuid/v4';
import { IGroupDTO, IGroupDomain } from '../typing/interfaces';

class GroupMapper {
    static mapReqBodyToGroupDTO(body: any): IGroupDTO {
        const group: IGroupDTO = {
            name: body.name,
            permissions: body.permissions
        };

        if (body.id) {
            group.id = body.id;
        }

        return group;
    }

    static mapGroupDTOToGroupDomain(groupDTO: IGroupDTO): IGroupDomain {
        const groupDomain: IGroupDomain = {
            id: groupDTO.id ? groupDTO.id : uuidv4(),
            name: groupDTO.name,
            permissions: groupDTO.permissions.join(',')
        };

        return groupDomain;
    }

    static mapGroupPGToGroupDTO(groupPG: any): IGroupDTO {
        const groupDTO: IGroupDTO = {
            id: groupPG.id,
            name: groupPG.name,
            permissions: groupPG.permissions.split(',')
        };

        return groupDTO;
    }
}

export default GroupMapper;
