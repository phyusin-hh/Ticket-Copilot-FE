import { FormControl, Select, MenuItem } from '@mui/material';
import { TicketType } from '../../model/StoryRequestBody';

interface Props {
  ticketType: TicketType;
  onTicketTypeChange: (...args: any[]) => any;
}
const TicketTypeSelect = ({ onTicketTypeChange, ticketType }: Props) => {
  return (
    <FormControl fullWidth>
      <Select
        labelId="ticket-type"
        id="ticket-type"
        value={ticketType}
        onChange={onTicketTypeChange}
      >
        <MenuItem value={TicketType.UserStory}>User Story</MenuItem>
        <MenuItem value={TicketType.Bug}>Bug</MenuItem>
        <MenuItem value={TicketType.Task}>Task</MenuItem>
      </Select>
    </FormControl>
  );
};

export default TicketTypeSelect;
