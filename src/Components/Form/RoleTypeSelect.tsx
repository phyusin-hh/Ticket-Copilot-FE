import { FormControl, Select, MenuItem } from '@mui/material';
import { RoleType } from '../../model/StoryRequestBody';

interface Props {
  roleType: RoleType;
  onRoleTypeChange: (...args: any[]) => any;
}
const RoleTypeSelect = ({ onRoleTypeChange, roleType }: Props) => {
  return (
    <FormControl fullWidth>
      <Select
        labelId="role-type"
        id="role-type"
        value={roleType}
        onChange={onRoleTypeChange}
      >
        <MenuItem value={RoleType.BA}>BA</MenuItem>
        <MenuItem value={RoleType.QA}>QA</MenuItem>
        <MenuItem value={RoleType.Developer}>Dev</MenuItem>
      </Select>
    </FormControl>
  );
};

export default RoleTypeSelect;
