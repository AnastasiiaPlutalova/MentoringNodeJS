import { IDTO } from '.';

interface IGroupDTO extends IDTO {
    name: string;
    permissions: Permission[];
}

export default IGroupDTO;
